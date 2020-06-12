<template>
  <div>
    <h1>Criar Usuario</h1>
    <form v-on:submit.prevent="addUser">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nome</label>
            <input type="text" class="form-control" v-model="user.nome" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>email</label>
            <input type="text" class="form-control col-md-6" v-model="user.email" />
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Inserir informações</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "CriarUsuario"
,  data() {
    return {
      user: {}
    };
  },
  methods: {
    addUser() {
      let uri = "http://localhost:4000/user/add";
      this.axios.post(uri, this.user).then(response => {
        this.$router.push({ name: "ListarUsuario" });
      });
    }
  }
};
</script>
