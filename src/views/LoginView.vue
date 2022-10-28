<template>

<div class="container" style="align-items: center;">
  <div class="row" style="align-items: center;">
    <div class="col-6 col-md-6 text-center">
        <img src="../assets/logo-sinau.png">
    </div>
    
    <div class="col-6 col-md-6">
        <div class="card" style="text-align: left;">
            <h5 class="card-header mb" style="text-align: center; background-color: aqua;">Login</h5>
                <div class="card-body">
                    <div class="mb-3">
                        <label class="form-label">Username :</label>
                             <input type="text" class="form-control" v-model="username" maxlength="50" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password :</label>
                             <input type="password" class="form-control" v-model="password" maxlength="50" required>
                    </div>
                    <div class="mb-3" style="text-align: center;">
                        <button class="btn btn-primary" @click="login()">Masuk</button>
                    </div>
                    <div class="mb-3" style="text-align: center;">
                        <a href="/register">Belum Punya Akun</a>
                    </div>
     
                </div>
        </div>
    </div>
  </div>
</div>

</template>
    
    <script>
    export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  async mounted() {
    // const resp = await this.$axios.get('//jsonplaceholder.typicode.com/users')
    // this.users = resp.data
  },

  methods: {
    async login() { 
            this.$axios.post('/auth/login',{
            username: this.username,
            password: this.password
        }).then(resp => {
            console.log('ini data', resp)
            if(resp.data.message == 'LOGIN SUCCESS'){
                //untuk save token ke local storage
                window.localStorage.setItem('accessToken',resp.data.data.token)
                window.localStorage.setItem('profileName', resp.data.data.profileName)
                this.$router.push({ path: '/dashboard'})
                alert('Berhasil Login')
            } else {
                this.$router.push({ path: '/login'})
                alert('Username atau Password Salah')
            }
        })

    },

    
  }

}
</script>
    
<style scoped>
    
</style>