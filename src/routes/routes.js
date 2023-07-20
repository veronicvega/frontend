import login from "../components/login.vue"
import administrador from "../components/administrador.vue"
import vendedor from "../components/vendedor.vue"
import inicio from "../components/inicio.vue"
import {createRouter , createWebHashHistory} from 'vue-router'

const routes =[
    {path : "/", component : login  },
    {path : "/admin" , component: administrador},
    {path : "/vendedor" , component: vendedor},
    {path: "/inicio", component : inicio}
]

export const router = createRouter(
    {
        history : createWebHashHistory(),
        routes
    }
)