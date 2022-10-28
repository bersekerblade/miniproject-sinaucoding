<template>
    <div class="container">
      <div class="row">
        <div class="col-2 text-center order-first">
          <div class="card">
            <img src="../assets/profileUser.jpg" class="card-img-top" alt="..." />
            <div class="card-body" style="background-color: aqua">
              <p class="card-text">Hi {{ profileName }} !!</p>
            </div>
          </div>
  
          <div class="card" style="margin: 5px 0 5px 0">
            <div class="row">
              <div class="">
                <p class="card-header" style="background-color: aqua">Menu</p>
                <div class="list-group" id="list-tab" role="tablist" style="text-align: left;">
                  <a
                    class="list-group-item list-group-item-action"
                    id="list-profile-list"
                    data-bs-toggle="list"
                    @click="barang()"
                    role="tab"
                    aria-controls="list-profile"
                    >Barang</a
                  >
                  <a
                    class="list-group-item list-group-item-action active"
                    id="list-messages-list"
                    data-bs-toggle="list"
                    @click=""
                    role="tab"
                    aria-controls="list-messages"
                    >Supplier</a
                  >
                </div>
              </div>
            </div>
          </div>
  
          <div class="card" style="margin: 5px 0 5px 0">
            <div class="row">
              <div class="">
                <p class="card-header" style="background-color: aqua">Online</p>
                <div class="list-group" id="list-tab" role="tablist" style="text-align: left;">
                  <li class="list-group-item">Hari : {{ new Date().toLocaleDateString() }}</li>
                  <li class="list-group-item">Jam : {{ new Date().getHours()}} : {{ new Date().getMinutes()}}</li>
                </div>
              </div>
            </div>
          </div>
  
  
  
        </div>
  
        <!-- baris 1 colom 1 -->
        <div class="col-10 order-last">
          <div class="card">
            <h5
              class="card-header mb"
              style="text-align: left; background-color: aqua;"
            >
              Dashoboard
            </h5>
            <div class="row" style="margin: 10px 10px 10px 4px;">
            <div class="col-6"><h6
              class=""
              style="text-align: left;"
            >
              Supplier
            </h6>
            </div>
            <div class="col-6"><h6
              class=""
              style="text-align: right;"
            >
            <button
                      class="btn btn-primary btn-sm"
                      @click="tambah()"
                    >
                      Tambah Supplier
                    </button>
            </h6>
            </div>
            </div>
            <div class="row" style="margin: 10px;">
            <table class="table table-bordered text-center">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Nama Supplier</th>
                  <th scope="col">Alamat</th>
                  <th scope="col">No Telp</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in resp">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item.namaSupplier }}</td>
                  <td>{{ item.alamat }}</td>
                  <td>{{ item.noTelp }}</td>
                  <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                    <button class="btn btn-danger btn-sm">Hapus</button>
                    <button
                      class="btn btn-warning btn-sm"
                      @click="update(item.id)"
                    >
                      Update
                    </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
        <!-- baris 1 kol 2 -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        resp: [],
        profileName: window.localStorage.getItem("profileName"),
      };
    },
    async mounted() {
      const data = await this.supplier();
  
      this.resp = data.data.data;
      console.log("iki suplier",this.resp)
    },
  
    methods: {
      async supplier() {
        return this.$axios.get("/supplier/find-all", {
          params: {
            offset: 0,
            limit: 6,
          },
        });
      },
  
      update(id) {
        this.$router.push({ path: "/update/" + id });
      },
  
      delete(id) {
        this.$router.push({ path: "/update/" + id });
      },
  
      tambah() {
        this.$router.push({ path: "/tambahsupplier" });
      },

      barang() {
        this.$router.push({ path: "/dashboard" });
      },
    },
  };
  
  
  
  </script>
  
  <style></style>
  