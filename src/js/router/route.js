import Index from "../../views/home/index.vue";
import Menu from "../../views/menu/index.vue";
import Point from "../../views/form/point.vue";
import Polyline from "../../views/form/polyline.vue";
import Poloygon from "../../views/form/polygon.vue";
const Routers = [
  {
    path: "/",
    name: "Index",
    component: Index,
    redirect: "/menu",
    children: [
      { path: "/menu", name: "Menu", component: Menu },
      { path: "/point", name: "Point", component: Point },
      { path: "/polyline", name: "Polyline", component: Polyline },
      { path: "/Polygon", name: "Polygon", component: Poloygon },
    ],
  },
];

export default Routers;
