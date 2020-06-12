<template>
    <div>
        <h1>Listar Usuarios</h1>

        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CriarUsuario' }" class="btn btn-primary">Criar Usuario</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Nome</td>
                <td>Email </td>
                <td>Ação</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="user in user" v-bind:key="user.id">
                    <td>{{ user._id }}</td>
                    <td>{{ user.nome }}</td>
                    <td>{{ user.email }}</td>
                    <td><router-link :to="{name: 'EditarUsuario', params: { id: user._id }}" class="btn btn-primary">Editar</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteUser(user._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                user: []
            }
        },

        created: function()
        {
            this.fetchUser();
        },

        methods: {
            fetchUser()
            {
              let uri = 'http://localhost:4000/user';
              this.axios.get(uri).then((response) => {
                  this.user = response.data;
              });
            },
            deleteUser(id)
            {
              let uri = 'http://localhost:4000/user/delete/'+id;
              this.user.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>
