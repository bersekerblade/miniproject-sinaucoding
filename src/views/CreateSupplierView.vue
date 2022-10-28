<template>
    <div class="container" style="align-items: center">
      <div class="row" style="align-items: center">
        <div class="col-7 col-md-7 text-center">
          
          <div class="card" style="text-align: left">
            <h5
              class="card-header mb"
              style="text-align: center; background-color: aqua"
            >
              Tambah Supplier
            </h5>
            <div class="card-body">
            <div class="mb-3">
                <label class="form-label">Nama Supplier :</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="namaSupplier"
                  maxlength="50"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Alamat Supplier :</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="alamat"
                  maxlength="50"
                  required
                />
              </div>
              
              <div class="mb-3">
                <label class="form-label">Supplier Telp :</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="noTelp"
                  maxlength="50"
                  required
                />
              </div>
              <div class="mb-3" style="text-align: center">
                <button class="btn btn-primary" @click="create()">Tambah</button>
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
          namaSupplier: "",
          noTelp: "",
          alamat: ""     
      };
    },
    async mounted() {
      // const resp = await this.$axios.get('//jsonplaceholder.typicode.com/users')
      // this.users = resp.data
    },
  
    methods: {
      create() {
        this.$axios
          .post("/supplier/create", {
            namaSupplier: this.namaSupplier,
            noTelp: this.noTelp,
            alamat: this.alamat,
          })
          .then((resp) => {
              this.$router.push({ path: "/supplier" });
              console.log(resp)
              alert('Supplier Berhasil Ditambahkan!')
          });
      },
    },
  };
  </script>
  
  <style scoped></style>
  