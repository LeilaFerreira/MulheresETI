<template>
  <div>
    <!-- <div>
    <div class="container">-->
    <!-- <div class="logo max-logo">
          <img src="imgs/logo.svg" alt="logomarca tem saida" />
    </div>-->

    <div class="menu">
      <div class="hamburger max-hamburger"></div>
    </div>


   <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" role="navigation">
    <div class="container">
        <a class="navbar-brand size-logo" href="#">
        <!-- <img src="imgs/logo.jpg" alt="logomarca tem saida" /> -->
      </a>

       <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#conteudoNavbarSuportado"
        aria-controls="conteudoNavbarSuportado"
        aria-expanded="false"
        aria-label="Alterna navegação"
       
      >
        <span class="navbar-toggler-icon"></span>
      </button>
	  
	  
	      <div class="collapse navbar-collapse navbar-size" id="conteudoNavbarSuportado">
            <ul class="nav navbar-nav">
            
                <li class="nav-item active"><a class="nav-link" href="#sobre"> O Programa </a></li>
                <li class="nav-item"><a class="nav-link" href="#como-funciona">Como Funciona</a></li>
                <li class="nav-item"><a class="nav-link" href="#parceiros">Parceiros</a></li>
                <li class="nav-item"><a class="nav-link" href="#contato">Contato</a></li>
            </ul>
			
			
            <ul class="nav navbar-nav flex-row justify-content-between ml-auto">
                <li class="dropdown order-1">
                    <button type="button" id="dropdownMenu1" data-toggle="dropdown" 
                      class="btn btn-outline-secondary dropdown-toggle">Login 
                      <span class="caret"></span>
                    </button>
                    
                    <ul class="dropdown-menu dropdown-menu-right mt-1">
                       <li class="px-3 py-2">
                           <form v-on:submit.prevent="logarUser" class="form" role="form">
                                <div class="form-group">
                                    <input 
                                    id="emailInput" 
                                    placeholder="cpf" 
                                    class="form-control form-control-sm" 
                                    type="text" 
                                    required="" 
                                    v-model="user.cpf">
                                </div>
                                <div class="form-group">
                                    <input 
                                    id="passwordInput" 
                                    placeholder="senha" 
                                    class="form-control form-control-sm" 
                                    type="text" 
                                    required="" 
                                    v-model="user.senha">
                                </div>
                                  <div class="form-group">
                                    <label for="inputOrgao">Orgão</label>
                                    <select id="inputOrgao" class="form-control ">
                                      <option selected>Escolher...</option>
                                      <option value="1">Ministério Público</option>
                                      <option value="2">Tribunal de Justiça</option>
                                      <option value="3">CAT</option>
                                      <option value="4">Parceiro</option>
                                    </select>
                                    </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-block" >Login</button>
                                </div>
                                <div class="form-group text-center">
                                    <small><a href="#" data-toggle="modal" data-target="#modalPassword">Forgot password?</a></small>
                                </div>
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div id="modalPassword" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Forgot password</h3>
                <button type="button" class="close font-weight-light" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <p>Reset your password..</p>
            </div>
            <div class="modal-footer">
                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                <button class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>


    <!-- </div>
    </div>-->
    <div class="col-12 size-logo">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="imgs/index.mulher.fundopreto.direita.png"
              alt="abertura tem saida"
              style="width: 100%"
              class="imag-stye"
            />
          </div>
          <div class="carousel-item">
            <img
              src="imgs/index.mulher.fundobranco.png"
              alt="abertura tem saida"
              style="width: 100%"
              class="imag-stye"
            />
          </div>
          <div class="carousel-item">
            <img
              src="imgs/index.mulher.fundolaranja.png"
              alt="abertura tem saida"
              style="width: 100%"
              class="imag-stye"
            />
          </div>
          <div class="carousel-item">
            <img
              src="imgs/index.muher.fundoamarelo.png"
              alt="abertura tem saida"
              style="width: 100%"
              class="imag-stye"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <!-- <section class="ghost"></section> -->
    <main>
      <section id="capa" class="img-capa">
        <div>
          <div class="text-inicial">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum vel nulla eget dolor volutpat vulputate at eu diam. 
            Duis ac rhoncus tellus. Nullam luctus venenatis risus consectetur eleifend. 
            Phasellus et suscipit lacus, vitae rhoncus ipsum. Quisque ut eros eget nulla ultricies accumsan in nec turpis. 
            Suspendisse congue enim in condimentum volutpat. In aliquet tincidunt venenatis. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Praesent nec magna id velit aliquet interdum et a erat. 
            Vestibulum quis interdum metus, eu aliquet justo. 
            Nulla massa nunc, condimentum eget justo quis, blandit semper augue. 
            Vivamus efficitur est et magna mollis sodales. Nam molestie enim a viverra luctus.
          </div>
        </div>
      </section>
      <section id="sobre" whidth="100%">
        <p class="text-funcion">COMO FUNCIONA</p>
        <div class="container">
          <div class="row row justify-content-around">
            <div class="col-4 col-md-10 col-lg-4 col-xl-4 mb-lg-0 eclipse">
              <img src="imgs/Vector.png" style="padding: 19px 18px 17px 5px;" />
            </div>
            <div class="col-4 col-md-10 col-lg-4 col-xl-4 mb-lg-0 eclipse">
              <img src="imgs/Vector2.png" style="padding: 19px 18px 17px 5px;" />
            </div>
            <div class="col-4 col-md-10 col-lg-4 col-xl-4 mb-lg-0 eclipse">
              <img src="imgs/Vector3.png" style="padding: 23px 17px 17px 5px;" />
            </div>
          </div>
        </div>
      </section>
      <section id="como-funciona">Como Funciona</section>
      <section id="parceiros">Parceiros</section>
      <section id="contato">Contato</section>
    </main>
  </div>
</template>
<script>
 export default {
        data(){
            return{
                user: {}
            }
        },

       
        methods: {
            logarUser()
            {
              let uri = 'http://localhost:4000/api/login';
             
              this.axios.post(uri, this.user).then((response) => {
                  this.user = response.data;
                  this.$router.push({ name: "ListarUsuario" });
              });
            }
            
        }
    }
</script>
<style scoped>
.text-inicial {
  text-align: justify;

  padding: 80px 30px 81px 30px;
  font-family: Roboto;
  font-size: 18px;
  margin-right: auto;
  display: flex;
  align-items: center;
  color: #000000;
}
.imag-style {
  position: absolute;
  width: 100%;

  /* left: 4px; */
}
.text-funcion {
  /* position: absolute; */
  width: 284px;
  height: 41px;
  /* left: calc(50% - 284px/2 - 0.5px);
top: calc(50% - 41px/2 - 299.5px); */
  color: #5a297b;

  font-family: Roboto;

  font-weight: bold;
  font-size: 35px;
  line-height: 41px;
  /* identical to box height */
}
.eclipse {
  /* position: absolute; */
  width: 108px;
  height: 108px;

  border-radius: 100%;
  background: #3391ff;
}
.box-login {
  right: 0 !important;
  left: auto !important;
  padding: 0;
  margin: 0;
}
.navbar-size {
  padding-left: 30%;
}

</style>












