<template>
    <div>
        <h1>Editar Usuario</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'ListarUsuario' }" class="btn btn-success">Voltar</router-link></div>
        </div>

        <form v-on:submit.prevent="updateUser">
            <div class="form-group">
                <label>Nome</label>
                <input type="text" class="form-control" v-model="user.nome">
            </div>

            <div class="form-group">
                <label name="email">email</label>
                <input type="text" class="form-control" v-model="user.email">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Alterar</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default{
        name: "Cadastro",
        data(){
            return{
                user:{}
            }
        },

        created: function(){
            this.getUser();
        },

        methods: {
            getUser()
            {
              let uri = 'http://localhost:4000/user/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.user = response.data;
                });
            },

            updateUser()
            {
              let uri = 'http://localhost:4000/user/update/' + this.$route.params.id;
                this.axios.post(uri, this.user).then((response) => {
                  this.$router.push({name: 'ListarUsuario'});
                });
            }
        }
    }
</script>
