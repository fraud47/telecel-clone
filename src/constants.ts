import { TopItemsTypes } from "./types"

import { TiDeviceTablet } from "react-icons/ti";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { GiNetworkBars } from "react-icons/gi";

export const topItems: TopItemsTypes[] = [
    { type: "clock", text: "Mon-fri 8a.m.-4.30 p.m." },
    { type: "clock", text: "Sat 8a.m. -1 p.m." },
    { type: "email", text: "info@telecelzim.co.zw" },
    { type: "phone", text: "Toll Free: 150" },
    { type: "phone", text: "0733150150" },
];

export const navs =[
    {title: "Home", route:"/"}, 
    {title: "About Us", route:"/"}, 
    {title: "Products", route:"/"},
    {title: "Services", route:"/"},
    {title: "Shortcodes", route:"/"},
    {title: "Vacancy", route:"/"}
]

export const carouselItems =[
   {img: "/carousel/red-carousel.jpg",heading:"Monthly Data Bundle",subheading:"Stay ahead of the game with our monthly data bundle"},
   {img: "/carousel/pink-carousel.jpg",heading:"Voice Bundles",subheading:"Affordable voice bundles that won't leave you speechless"},
   {img: "/carousel/orange-carousel.jpg",heading:"Megaboost Bundle",subheading:"For the bundle that got everybody smilling"}

]


export const cardItems =[
    {title: "Short codes", route:"/", icon: TiDeviceTablet }, 
    {title: "Voice Bundles", route:"/",icon: LuPhoneCall}, 
    {title: "Megaboost Bundle", route:"/",icon: HiOutlineRocketLaunch},
    {title: "USD Data bundle", route:"/",icon: GiNetworkBars},
  
  
]
