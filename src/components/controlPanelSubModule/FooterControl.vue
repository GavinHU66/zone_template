<template>
    <div class="footercontrol-container">
        <p>在这里可编辑页脚的相关内容</p>
        页脚正文: <input type="text" id="footer-text" v-model="editFooterTextPlaceholder">
        <button @click="saveAdding">保存</button>
    </div>
</template>

<script>
export default {
    name: "FooterControl",

    methods: {
        saveAdding(){
            var newFooterText = document.getElementById("footer-text").value;
            var payload = {footerText: newFooterText};
            this.$store.commit('footerControl/setFooterText', payload);
            alert("已保存");
        }
    },

    computed: {
        editFooterTextPlaceholder(){
            return this.$store.state.footerControl.footerText;
        }
    }
};

</script>

<style lang="scss">
.footercontrol-container {
    padding: 20px;
}
</style>



