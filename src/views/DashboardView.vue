<template>
  <div class="container" style="align-items: center">
    <div class="row" style="align-items: center">
      <div class="col-3 col-md-3 text-center">
        <div class="card" style="">
          <img src="../assets/logo-sinau.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <div class="col-9 col-md-9">
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
                <th scope="col">Nama</th>
                <th scope="col">Alamat</th>
                <th scope="col">Telepon</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in resp">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.harga }}</td>
                <td>{{ item.stok }}</td>
                <td>{{ item.supplier.namaSupplier }}</td>
                <td>
                  <button class="btn btn-danger">Hapus</button>
                  <button class="btn btn-warning" @click="update(item.id)">Update</button>
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
