<template>
  <div class="container">
    <div class="row">
      <div class="col-2 col-md-2 text-center">
        <div class="card" style="">
          <img src="../assets/logo-sinau.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              {{resp.profileName}}
            </p>
          </div>
        </div>
      </div>

      <div class="col-10 col-md-10">
        <div class="card">
          <h5
            class="card-header mb"
            style="text-align: left; background-color: aqua"
          >
            Dashoboard
          </h5>

          <table class="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama Barang</th>
                <th scope="col">Harga</th>
                <th scope="col">Stok</th>
                <th scope="col">Nama Supplier</th>
                <th scope="col">No Telp Supplier</th>
                <th scope="col">Alamat Supplier</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in resp">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.namaBarang }}</td>
                <td>{{ item.harga }}</td>
                <td>{{ item.stok }}</td>
                <td>{{ item.supplier.namaSupplier }}</td>
                <td>{{ item.supplier.noTelp }}</td>
                <td>{{ item.supplier.alamat }}</td>
                <td>
                  <button class="btn btn-danger btn-sm">Hapus</button>
                  <button class="btn btn-warning btn-sm" @click="update(item.id)">Update</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted } from 'vue';


export default {

  data() {
    return {
      username: "",
      password: "",
      resp: [],
    };
  },
  async mounted() {
    const data = await this.dashboard();

    this.resp = data.data.data;

    // const resp = await this.$axios.get('//jsonplaceholder.typicode.com/users')
    // this.users = resp.data
  },

  methods: {
    async dashboard() {
      return this.$axios.get("/barang/find-all", {
        params: {
          offset: 0,
          limit: 10,
        },
      });
    },
   
    update(id){
    this.$router.push({ path: '/update/'+id})
    },

    delete(id){
    this.$router.push({ path: '/update/'+id})
    }
  },
};
</script>

<style></style>
