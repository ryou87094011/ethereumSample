<template>
<div class="mx-auto">
  <div class="card mx-auto" style="width: 30rem;">
      <img src="../../img/logo.png" class="rounded mx-auto d-block" alt="logo">
      <div class="card-body">
            <form>
      <div class="form-group row">
        <label for="staticEmail" class="col-2 col-form-label"><b>ID</b></label>
        <input type="text" class="col-8 form-control" id="inputEmail" placeholder="hogehoge@example.com" :value="email">
      </div>
      <div class="form-group row" style="margin-top: 0.5rem;">
        <label for="inputPassword" class="col-2 col-form-label"><b>PW</b></label>
        <input type="password" class="col-8 form-control" id="inputPassword" :value="password">
      </div>
    </form>
    <button type="button" class="btn btn-primary" style="margin-top: 2rem;">ログイン</button>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      email: '',
      password: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
