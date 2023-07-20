import login from "../components/login.vue"
import administrador from "../components/administrador.vue"
import vendedor from "../components/vendedor.vue"
import inicio from "../components/inicio.vue"
import registro from "../components/registro.vue"
import {createRouter , createWebHashHistory} from 'vue-router'

const routes =[
    {path : "/", component : login  },
    {path : "/admin" , component: administrador},
    {path : "/vendedor" , component: vendedor},
    {path: "/inicio", component : inicio , children:[
        {path: "/inicio/registro" , component : registro}
    ]}
]

export const router = createRouter(
    {
        history : createWebHashHistory(),
        routes
    }
)