import { createRouter, createWebHashHistory } from "vue-router";
import Accueil from "./pages/Accueil.vue";
import Connexion from "./pages/Connexion.vue";
import Inscription from "./pages/Inscription.vue";
import Dashboard from "./pages/Dashboard.vue";
import Club from "./pages/Club.vue";
import ClubDetaille from "./pages/ClubDetaille.vue";
import Cours from "./pages/CoursCollectif.vue";
import Abonnement from "./pages/Abonnement.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Accueil
        },
        {
            path: '/connexion',
            component: Connexion
        },
        {
            path: '/inscription',
            component: Inscription
        },
        {
            path: '/dashboard',
            component: Dashboard,
            meta : { requiresAuth : true }
        },
        {
            path: '/club',
            component: Club
        },
        {
            path: '/clubdetaille/:id',
            component: ClubDetaille
        },
        {
            path : '/courscollectif',
            component: Cours
        },
        {
            path: 'abonnement',
            component: Abonnement
        }
    ]
})

export default router; 