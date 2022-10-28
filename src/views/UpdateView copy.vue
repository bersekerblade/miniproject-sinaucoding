<template>
    <div class="container" style="align-items: center">
      <div class="row" style="align-items: center">
        <div class="col-6 col-md-6 text-center">
          <img src="../assets/logo-sinau.png" />
        </div>
  
        <div class="col-6 col-md-6">
          <div class="card" style="text-align: left">
            <h5
              class="card-header mb"
              style="text-align: center; background-color: aqua"
            >
              Login
            </h5>
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label">Nama Barang :{{resp1.namaBarang}}</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="namaBarang" 
                  maxlength="50"
                  required 
              />
              </div>
              <div class="mb-3">
                <label class="form-label">Harga :</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="harga"
                  maxlength="50"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Stok :</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="stok"
                  maxlength="50"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Supplier Telp :</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="supplier.noTelp"
                  maxlength="50"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Nama Supplier :</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="supplier.namaSupplier"
                  maxlength="50"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Alamat Supplier :</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="supplier.alamat"
                  maxlength="50"
                  required
                />
              </div>
              <div class="mb-3" style="text-align: center">
                <button class="btn btn-primary" @click="update()">Update</button>
              </div>
              <div class="mb-3" style="text-align: center">
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
        resp1: [],
        namaBarang: "",
        harga: "",
        stok: 0,
        supplier: {
          alamat: "",
          namaSupplier: "",
          noTelp: ""
        }
      };
    },
    async mounted() {
       const resp = await this.$axios.get('barang/find-by-id/'+this.$route.params.id)

      // this.users = resp.data
      console.log(this.$route.params.id)

      console.log("data res",resp)
      this.resp1 = resp.data.data;
      this.namaBarang = this.resp1.namaBarang;
      this.harga = 2121;

      console.log("data res1",this.resp1)
    },

    methods: {
      update() {
        console.log({
            namaBarang: this.namaBarang,
            harga: this.harga,
            stok: this.stok,
            supplier: this.supplier
          })
        this.$axios
          .put("/barang/update/"+this.$route.params.id, {
            namaBarang: this.namaBarang,
            harga: this.harga,
            stok: this.stok,
            supplier: {
            "namaSupplier": this.supplier.namaSupplier,
            "noTelp": this.supplier.noTelp,
            "alamat": this.supplier.alamat
            }
          })
          .then((resp) => {
              this.$router.push({ path: "/dashboard" });
              console.log(resp)
          });
      },
    },

    viewUpdate(){
    this.$axios.get("barang/find-by-id/"+this.$route.params.id, {

      })
    },

  };
  </script>
  
  <style scoped></style>
  