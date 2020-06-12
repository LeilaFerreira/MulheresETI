<template>
  <div>
    
    <ul>
      <router-link to="/PagInterna">Cadastro</router-link>
      <router-link to="/PagInterna/criar">Criar</router-link>
      <router-link to="/PagInterna/editar">Editar</router-link>
      <router-link to="/PagInterna/listar">Listar</router-link>
    </ul>

    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>