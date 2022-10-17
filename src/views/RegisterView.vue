<template>

    <div class="container" style="align-items: center;">
      <div class="row" style="align-items: center;">
        <div class="col-6 col-md-6 text-center">
            <img src="../assets/logo-sinau.png">
        </div>
        
        <div class="col-6 col-md-6">
            <div class="card" style="text-align: left;">
                <h5 class="card-header mb" style="text-align: center; background-color: aqua;">Register</h5>
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="form-label">Username :</label>
                                 <input type="text" class="form-control" v-model="username" maxlength="50" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Profile :</label>
                                 <input type="text" class="form-control" v-model="profile" maxlength="50" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password :</label>
                                 <input type="password" class="form-control" v-model="password" maxlength="50" required>
                        </div>
                        <div class="mb-3" style="text-align: center;">
                            <button class="submit btn btn-primary" v-on:click="register()">Daftar</button>
                        </div>
                        <div class="mb-3" style="text-align: center;">
                            <a href="/login">Sudah Punya Akun</a>
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
      profile: '',
      password: ''
    }
  },
  async mounted() {
    // const resp = await this.$axios.get('//jsonplaceholder.typicode.com/users')
    // this.users = resp.data
  },

  methods: {
    register(){ 
        console.log('adsadas',this.$axios)
        this.$axios.post('/auth/register',{
            profileName : this.profile,
            username: this.username,
            password: this.password
        }).then((resp) => {
            console.log(resp)
            var msg = resp.data.message
            if(msg == 'USERNAME IS REGISTERED'){
                alert('Username yang anda masukkan sudah terdaftar atau data belum di isi, coba dengan yang lain')
            } else {
                this.$router.push({ path: '/login'})
                alert('Berhasil daftar')
            }
        })
    }
  }

}

</script>


<style>

</style>