
<template slot="ResizableModule">
     <div id="DRmoduleContainer" @mousedown="move">
        <div id="innertxt">
            {{demotxt}}
        </div>

        <div class="resize" id="resize-topRight" @mousedown="doResize($event,'topRight')"></div>
        <div class="resize" id="resize-topLeft" @mousedown="doResize($event,'topLeft')"></div>
        <div class="resize" id="resize-downRight" @mousedown="doResize($event,'downRight')"></div>
        <div class="resize" id="resize-downLeft" @mousedown="doResize($event,'downLeft')"></div>
        <div class="resize" id="resize-top" @mousedown="doResize($event,'top')"></div>
        <div class="resize" id="resize-down" @mousedown="doResize($event,'down')"></div>
        <div class="resize" id="resize-left" @mousedown="doResize($event,'left')"></div>
        <div class="resize" id="resize-right" @mousedown="doResize($event,'right')"></div>
    </div>
</template>
 
<script>
import { log } from 'util';
 
    export default {
        name: "ResizableModule",

        install:function (Vue){
            Vue.component('ResizableModule',this)
        },

        props: {
            demotxt: String,

            moduleName: String,

            draggable: {
                type: Boolean,
                default: true,
            },
            resizable: {
                type: Boolean,
                default: true,
            }
        },

        data(){
            return {
                positionX:0,
                positionY:0,
            }
        },

        methods: {

            move:function(e){

                console.log("in move method");

                e.preventDefault();

                if (this.draggable){
                    
                    let targetItem = e.target;   
                    //算出鼠标相对元素的位置
                    let disX = e.clientX - targetItem.offsetLeft;
                    let disY = e.clientY - targetItem.offsetTop;
                    document.onmousemove = (e)=>{    //鼠标按下并移动的事件
                    
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        let left = e.clientX - disX;  
                        let top = e.clientY - disY;
                        
                        //绑定元素位置到positionX和positionY上面
                        this.positionX = top;
                        this.positionY = left;
                        
                        //移动当前元素
                        targetItem.style.left = (left<0)? '0px' : left + 'px';
                        targetItem.style.top = (top<0)? '0px' : top + 'px';
                        // targetItem.style.bottom = (bottom<0)? '0px' : bottom + 'px';
                        // targetItem.style.right = (right<0)? '0px' : right + 'px';
                        
                    };
                    document.onmouseup = (e) => {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
                } else {
                    console.log("Draggable disabled");
                }
            }, // end of move function

            doResize:function(e, resizeType){

                e.preventDefault();
                e.stopPropagation();

                if (this.resizable) {
                    console.log("in doResize method");
                    console.log(resizeType);
                    
                    // var targetDiv = document.getElementById('DRmoduleContainer');
                    var targetDiv = e.target.parentElement;
                    var targetDivWidth = targetDiv.offsetWidth;
                    var targetDivHeight = targetDiv.offsetHeight;
                    var startX = e.clientX;
                    var startY = e.clientY;
    
                    document.onmousemove=function(e){
                        e.preventDefault();
                        //得到鼠标拖动的宽高距离：取绝对值
                        var distX=Math.abs(e.clientX-startX);
                        var distY=Math.abs(e.clientY-startY);  
                        
                        switch(resizeType) {
                            case 'topRight': // the position needs to be changed
                                // console.log('in topRight');
                                // move top and right(右上)
                                if(e.clientX > startX && e.clientY < startY){
                                    targetDiv.style.width=targetDivWidth+distX+'px';
                                    targetDiv.style.height=targetDivHeight+distY+'px';
                                }
                                // move down and left(左下)
                                if (e.clientX < startX && e.clientY > startY) {
                                    targetDiv.style.width=(targetDivWidth-distX)+'px';
                                    targetDiv.style.height=(targetDivHeight-distY)+'px';
                                }
                                break;

                            case 'downLeft': // the position needs to be changed
                                // console.log('in downLeft');
                                // move top and right(右上)
                                if(e.clientX > startX && e.clientY < startY){
                                    targetDiv.style.width=(targetDivWidth-distX)+'px';
                                    targetDiv.style.height=(targetDivHeight-distY)+'px';
                                }
                                // move down and left(左下)
                                if (e.clientX < startX && e.clientY > startY) {
                                    targetDiv.style.width=targetDivWidth+distX+'px';
                                    targetDiv.style.height=targetDivHeight+distY+'px';

                                }
                                break;


                            case 'topLeft': // the position needs to be changed
                                // move top and left(左上)
                                if(e.clientX < startX && e.clientY < startY){
                                    targetDiv.style.width=targetDivWidth+distX+'px';
                                    targetDiv.style.height=targetDivHeight+distY+'px';
                                }
                                // move down and right(右下)
                                if (e.clientX > startX && e.clientY > startY) {
                                    targetDiv.style.width=(targetDivHeight-distY)+'px';
                                    targetDiv.style.height=(targetDivHeight-distY)+'px'; 
                                }
                                break;

                            case 'downRight':
                                // move top and left(左上)
                                if(e.clientX < startX && e.clientY < startY){
                                    targetDiv.style.width=(targetDivHeight-distY)+'px';
                                    targetDiv.style.height=(targetDivHeight-distY)+'px';
                                }
                                // move down and right(右下)
                                if (e.clientX > startX && e.clientY > startY) {
                                    targetDiv.style.width=targetDivWidth+distX+'px';
                                    targetDiv.style.height=targetDivHeight+distY+'px';
                                }
                                break;

                            case 'top': // the position needs to be changed
                                console.log('in top');
                                // move top(上)
                                if(e.clientY < startY){
                                    targetDiv.style.height=targetDivHeight+distY+'px';
                                }
                                // move down(下)
                                if (e.clientY > startY) {
                                    targetDiv.style.height=(targetDivHeight-distY)+'px';
                                } 
                                break;

                            case 'down':
                                console.log('in down');
                                // move top(上)
                                if(e.clientY < startY){
                                    targetDiv.style.height=(targetDivHeight-distY)+'px';
                                }
                                // move down(下)
                                if (e.clientY > startY) {
                                    targetDiv.style.height=targetDivHeight+distY+'px';
                                } 
                                break; 

                            case 'left': // the position needs to be changed
                                console.log('in left');
                                // move left(左)
                                if(e.clientX < startX){
                                    // targetDiv.style.left=targetDiv.offsetLeft - distX+'px'; 
                                    // console.log('targetDiv.style.left',targetDiv.style.left); 
                                    // console.log('targetDiv.offsetLeft',targetDiv.offsetLeft); 
                                    targetDiv.style.width=targetDivWidth+distX+'px';  
                                }
                                // move right(右)
                                if (e.clientX > startX) {
                                    targetDiv.style.width=(targetDivHeight-distY)+'px';
                                }
                                break; 
                            case 'right':
                                console.log('in right');
                                // move left(左)
                                if(e.clientX < startX){
                                    targetDiv.style.width=(targetDivHeight-distY)+'px';
                                }
                                // move right(右)
                                if (e.clientX > startX) {
                                    targetDiv.style.width=targetDivWidth+distX+'px';  
                                }
                                break;                          
                        }
    
                    /* // minimum and maximum size 
                        if(parseInt(targetDiv.style.width)>=300){
                            targetDiv.style.width=300+'px';
                        }
                        if(parseInt(targetDiv.style.width)<=150){
                            targetDiv.style.width=150+'px';
                        }
    
                        if(parseInt(targetDiv.style.height)>=300){
                            targetDiv.style.height=300+'px';
                        }
                        if(parseInt(targetDiv.style.height)<=150){
                            targetDiv.style.height=150+'px';
                        } */
                    } // end of document.onmousemove=function(e)
    
                    document.onmouseup=function(){
                        document.onmousemove=null;
                    }
                } else {
                    console.log("Resizeable disabled");
                }
            } // end of doResize function   
        },

    };/* end of export */
</script>

<style lang="scss">

#DRmoduleContainer{
    border-radius: 10px;
    cursor: move;
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    margin: 10px;
    z-index: 0;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    left: 3px;
    right: 3px;
    height: 200px;
}

#innertxt {
    position: absolute;
    top: 50px;
    left: 100px;
    // background-color: brown;
    font-size: x-large;
}

.resize {
    position: absolute; 
    width: 15px; 
    height: 15px; 
    cursor: ne-resize; 
    // background-color: blueviolet;
}
.resize:hover{
    // background-color: #666;
}

#resize-topRight{
    z-index: 2;
    right: 1px; 
    top: 1px; 
    cursor: nesw-resize;
}
#resize-topLeft{
    z-index: 2;
    left: 1px; 
    top: 1px; 
    cursor: nwse-resize;
}
#resize-downRight{
    z-index: 2;
    right: 1px; 
    bottom: 1px; 
    cursor: nwse-resize;
}
#resize-downLeft{
    z-index: 2;
    left: 1px; 
    bottom: 1px; 
    cursor: nesw-resize;
}
#resize-top{
    z-index: 1;
    top: 1px; 
    width: 100%;
    cursor: ns-resize;
}
#resize-down{
    z-index: 1;
    bottom: 1px;
    width: 100%;
    cursor: ns-resize;
}
#resize-right{
    z-index: 1;
    right: 1px; 
    height: 100%;
    cursor: ew-resize;
}
#resize-left{
    z-index: 1;
    left: 1px; 
    height: 100%;
    cursor: ew-resize;
}





</style>
