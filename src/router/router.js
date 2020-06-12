import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// Views
import Index from '../views/PaginaInicial.vue';
import PagInterna from '../views/PagInterna.vue';

// Components
import Cadastro from '../content/Cadastro.vue';
import CriarUsuario from '../content/components/user/CriarUsuario.vue';
import ListarUsuario from '../content/components/user/ListarUsuario.vue';
import EditarUsuario from '../content/components/user/EditarUsuario.vue';


const routes = [{
        path: "/",
        name: "Index",
        components: {
            default: Index
        }
    },
    {
        path: "/PagInterna",
        components: {
            default: PagInterna
        },
        children: [{
                path: "",
                name: "Cadastro",
                component: Cadastro
            },
            {
                path: "criar",
                name: "CriarUsuario",
                component: CriarUsuario
            },
            {
                path: "listar",
                name: "ListarUsuario",
                component: ListarUsuario,
                meta: {
                    title: "Cadastro | Tem Saída"
                }
            },
            {
                path: "editar",
                name: "EditarUsuario",
                component: EditarUsuario
            },

        ]
    },
];

const router = new Router({
    mode: "history",
    routes,
});

export default router;