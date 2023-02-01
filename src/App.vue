<template>
  <nav class="navbar bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24">
      </a>
    </div>

  </nav>

  <!-- <p>{{ steam.applist }}</p> -->
  <p>{{ $store.state.list }}</p>
  <button @click="eval">버튼</button>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      steam: []
    }
  },

  created() {
    // this.axios
    //   .get("https://api.steampowered.com/ISteamApps/GetAppList/v2/")
    //   .then((res) => {
    //     this.steam = res.data
    //   }).catch(() => {
    //     alert(2);
    //   });
  },

  methods: {
    eval() {
      this.$store.dispatch('steamReq')
    }
  },
  computed: {

  },
  components: {
  }
}
</script>

<style>

</style>



