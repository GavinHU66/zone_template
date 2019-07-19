<template>
  <div>
    <ZoneBar />
    <p>这是个人资料</p>

    <div class="pi-container">
        <div class="pi-left">

            <div class="pi-left-title">个人中心</div>  
            <div class="account-setting">
                <div class="subtitle">账号设置</div>
                <ul class="pi-list">
                  <li>个人资料</li>
                  <li>修改头像</li>
                  <li>修改密码</li>
                  <li>账号安全</li>
                  <li>任教信息</li>
                  <li>课程管理</li>
                  <li>访问权限</li>
                  <li>装扮记录</li>
                </ul>
            </div>

            <div class="my-coin">
                <div class="subtitle">积分云币</div>
                <ul class="pi-list">
                  <li>我的积分</li>
                  <li>我的账单</li>
                </ul>
            </div>

            <div class="other-setting">
                <div class="subtitle">其他设置</div>
                <ul class="pi-list">
                  <li>我的应用库</li>
                </ul>
            </div>
        </div>

        <div class="pi-right">

            <div class="pi-right-title">个人资料</div>
            <div class="personal-info">
              <ul class="pi-list">
                <li>账号：{{accountId}}</li>
                <li>姓名：{{username}}</li>
                <li>手机：{{phone}}</li>
                <li>邮箱：{{emailAddress}}</li>
                <li>性别：{{gender}}</li>

                <li>主页网址：{{personalWeb}}</li>
                <li>个性签名：{{feeling}}</li>
                <li>个人简介：{{description}}</li>
              </ul>
            </div>
            <div class="pi-edit-btn">
              <button @click="handleEditPI">编辑</button>
            </div>
        </div>
    </div>

  </div>
</template>
<script>
import ZoneBar from "@/components/navBars/ZoneBar";

export default {
  name: "PersonalInfo",
  
  data () {
    return {
      accountId: "jz_js006",
      username:"姜凯",
      phone: "未绑定手机账号",
      emailAddress: "未绑定邮箱账号" ,
      gender: "男",
      personalWeb: "还没有主页网址",
      feeling: "还没有个性签名",
      description: "还没有个人简介"
    }
  },

  components: {
      ZoneBar,
  },
  
  methods: {
    handleEditPI(){
      console.log("in methods: handleEditPI");
    },
  }
};
</script>

<style lang="scss">

.pi-container {
    position: relative;
    background: #f2f2f2;
    height: 750px;
    width: 750px;
    margin: auto;
}

.pi-left {
    width: 20%;
    float: left;
    margin-left: 50px;
}

.pi-right {
  width: 70%;
  float: left;
}

.pi-left-title, .pi-right-title {
    font-size: 18px;
    color: #505050;
    padding-left: 8px;
    line-height: 68px;
    font-weight: normal;
}

.pi-list li {
    display: block;
    padding: 0 37px;
    line-height: 36px;
    color: #222;
    font-size: 14px;
    cursor: pointer;
}
</style>
