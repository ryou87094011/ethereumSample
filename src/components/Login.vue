<template>
  <div class="mx-auto">
    <div class="card mx-auto" style="width: 30rem">
      <img
        src="../../img/title.png"
        class="rounded mx-auto d-block titleLogo"
        alt="logo"
      />
      <div class="card-body">
        <form>
          <div class="form-group row">
            <label for="staticEmail" class="col-2 col-form-label"
              ><b>ID</b></label
            >
            <input
              v-model="email"
              type="text"
              class="col-8 form-control"
              id="inputEmail"
              placeholder="hogehoge@example.com"
            />
          </div>
          <div class="form-group row" style="margin-top: 0.5rem">
            <label for="inputPassword" class="col-2 col-form-label"
              ><b>PW</b></label
            >
            <input
              v-model="password"
              type="password"
              class="col-8 form-control"
              id="inputPassword"
            />
          </div>
        </form>
        <button
          type="button"
          class="btn btn-primary"
          style="margin-top: 2rem"
          @click="pushLoginButton"
        >
          Login
        </button>
      </div>
    </div>
    <Loading v-show="isload"></Loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      isload: false
    }
  },
  methods: {
    pushLoginButton: function () {
      if (!this.email || !this.password) {
        alert('未入力の項目があります')
      } else {
        this.isload = true
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(result => {
            this.isload = false
            this.$router.push('main')
          }).catch(error => {
            alert(error)
            this.isload = false
          })
        })
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
.titleLogo {
    width: 400px;
}
</style>
