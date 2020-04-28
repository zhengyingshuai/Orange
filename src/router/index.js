import Home from "../views/Home"
import Plus from "../views/Plus"
import Show from "../views/Show"
import ThreaterDetail from "../views/ThreaterDetail"
import Ticket from "../views/Ticket"
import Vip from "../views/Vip"
import homeRouter from "./homeRouter/index"
import Login from "../views/Login"
import Register from "../views/Register"
export default [
    {
        path:"/plus/index",
        component:Plus
    },
    {
        path:"/show/showsLibrary",
        component:Show
    },
    {
        path:"/theater/detail",
        component:ThreaterDetail
    },
    {
        path:"/ticket",
        component:Ticket
    },
    {
        path:"/vip/index/1",
        component:Vip
    },
    {
        path:"/passport/login",
        component:Login
    },
    {
        path:"/Passport/register",
        component:Register
    },
    {
        path:"/",
        component:Home,
        childrens:homeRouter
    },
]