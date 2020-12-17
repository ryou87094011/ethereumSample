<template>
<div class="mx-auto">
  <div class="card mx-auto" style="width: 30rem;">
      <img src="../../img/logo.png" class="rounded mx-auto d-block" alt="logo">
      <div class="card-body">
            <form>
      <div class="form-group row">
        <label for="staticEmail" class="col-2 col-form-label"><b>ID</b></label>
        <input v-model="email" type="text" class="col-8 form-control" id="inputEmail" placeholder="hogehoge@example.com">
      </div>
      <div class="form-group row" style="margin-top: 0.5rem;">
        <label for="inputPassword" class="col-2 col-form-label"><b>PW</b></label>
        <input v-model="password" type="password" class="col-8 form-control" id="inputPassword">
      </div>
    </form>
    <button type="button" class="btn btn-primary" style="margin-top: 2rem;" @click="pushLoginButton">Login</button>
      </div>
  </div>
  <Loading v-show="loading"></Loading>
</div>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    pushLoginButton: function () {
      // 処理
      console.log(this.email)
      console.log(this.password)
      if (!this.email || !this.password) {
        alert('未入力の項目があります')
      } else {
        this.loading = true
      }
    }
  },
  components: {
    Loading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
