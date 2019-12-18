<template>
  <div>
    <div class="k1">
      <p v-if="!name">
        CNode：Node.js专业中文社区
        您可以登录或者注册
      </p>
      <p v-else>欢迎{{username}}</p>
    </div>
    <div class="k2">
      <img src="../../assets/1.jpg" alt />
      <img src="../../assets/2.jpg" alt />
      <img src="../../assets/3.jpg" alt />
    </div>
    <div class="k3"></div>
    <div class="k4"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.username = localStorage.getItem('name')
  },
  watch: {},
  computed: {
    name() {
      return this.$store.state.name;
    }
  }
};
</script>

<style scoped lang='scss'>
.k2 {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>