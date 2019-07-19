<template>
  <div>
      <div class="navbar-links-management-container">
          <div class="navbar-links-management">

              <div class="link-content">
                  <p>点击链接名称以编辑此链接，点击添加以添加新的链接</p>
                  <button 
                    v-for="(element, index) in $store.state.navBarLinks.links"
                    :key="element.name"
                    @click="showEditLink(element)">{{element.linkName}}
                  </button>
                  <button @click="showAdd">添加</button>

                  <div class="add-link-field" v-if="shouldShowAddLink">
                      <div class="input-linkName">链接名称: <input type="text" id="linkName"></div>
                      <div class="input-linkUrl">链接地址: <input type="text" id="linkUrl"></div>
                      <div class="input-button">
                          <button @click="saveAdding">保存</button>
                          <button @click="cancelAdding">取消</button>
                      </div>
                  </div>
                
                  <div class="edit-link-field" v-if="shouldShowEditLink">
                      <div class="input-linkName">链接名称: <input type="text" id="linkName" v-model="editNamePlaceholder"></div>
                      <div class="input-linkUrl">链接地址: <input type="text" id="linkUrl" v-model="editUrlPlaceholder"></div>
                      <div class="input-button">
                          <button @click="saveEditing">保存</button>
                          <button @click="cancelEditing">取消</button>
                          <button @click="deleteLink">删除</button>
                      </div>
                  </div>            
              </div> 
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "LinkCenter",

  data () {
      return {
          shouldShowAddLink: false,
          shouldShowEditLink: false,
          editNamePlaceholder: '',
          editUrlPlaceholder: '',
          oldLinkName: '',
      }
  },

  methods: {
    showEditLink(elem){
        this.shouldShowEditLink = true;
        this.shouldShowAddLink = false;
        this.editNamePlaceholder = elem.linkName;
        this.editUrlPlaceholder = elem.linkUrl;
        this.oldLinkName = elem.linkName;
    },
    showAdd(){
        this.shouldShowEditLink = false;
        this.shouldShowAddLink = true;
    },

    saveAdding(){
        let name = document.getElementById("linkName").value;
        let url = document.getElementById("linkUrl").value;
        if (name !== '' && url !== ''){
            var payload = { linkName: name, shouldShow: true,  linkUrl: url};
            this.$store.dispatch('navBarLinks/addLink', payload);
            alert("已添加");
            this.shouldShowAddLink = false;
        } else {
            alert("请将链接名称或链接地址填写完整。");
        }
    },

    cancelAdding(){
        this.shouldShowAddLink = false;
    },

    saveEditing(){
        var payload = { oldLinkName: this.oldLinkName, newLinkName: this.editNamePlaceholder, newLinkUrl: this.editUrlPlaceholder};
        this.$store.dispatch('navBarLinks/editLink', payload);
        alert("已保存");
        this.shouldShowEditLink = false;
    },
    cancelEditing(){
        // console.log("in methods: cancelEditing");
        this.shouldShowEditLink = false;
    },
    deleteLink(){
        var payload = { linkName: this.editNamePlaceholder };
        this.$store.dispatch('navBarLinks/deleteLink', payload);
        alert("已删除");
        this.shouldShowEditLink = false;
    }
  },

};
</script>

<style lang="scss">



.navbar-links-management-container {
    padding-top: 20px;
}

.navbar-links-management {
    padding-bottom: 50px;
}

.link-content {
    margin-left: 20px;
}

.input-linkName {
    width: 20%;
    float: left;
}
.input-linkUrl {
    width: 36%;
    float: left;
}
.input-button {
    float: left;
}

.add-link-field, .edit-link-field {
    padding-top: 20px;
    padding-left: 5px;

    input {
        margin-right: 20px;
    }
    #linkName {
        width: 100px;
    }
    #linkUrl {
        width: 270px;
    }
}

@media only screen and (max-width: 1000px) {
    [class*="input-"] {
        width: 100%;
        float: left;
        padding-bottom:20px;
    }
}

</style>