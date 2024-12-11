import { navs, topItems } from "../constants"
import { TopItemsTypes } from "../types"

import { FiClock } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import NavItems from "./NavItems";
import { Button } from "./ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

type Props = {
  
}

const Header = (props: Props) => {
  return (

    <>

    <div className="bg-primary flex flex-wrap gap-4 w-full justify-center">
     {
        topItems.map((item)=>(
            <TopItem text={item.text} type={item.type}/>
        ))
     }
<div>

    

</div>

    </div>

<div className="hidden md:flex items-center justify-between h-32 relative ">
    <img src="/logo.png" alt="logo" className=" h-28 rounded-lg  absolute  z-40 left-4 -bottom-5"/>

    <div className="flex gap-4 p-10 absolute w-full h-full justify-end items-center">
    <NavItems/>
    <div className="hidden lg:flex gap-6">
         {navs.map((item)=>{

if (item.title==="Services") return(
<DropdownMenu>
<DropdownMenuTrigger className="font-gothicregular outline-none ring-0">Services</DropdownMenuTrigger>
<DropdownMenuContent>
  <DropdownMenuLabel>My Account</DropdownMenuLabel>
  <DropdownMenuSeparator />
  <DropdownMenuItem>Profile</DropdownMenuItem>
  <DropdownMenuItem>Billing</DropdownMenuItem>
  <DropdownMenuItem>Team</DropdownMenuItem>
  <DropdownMenuItem>Subscription</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>)
           
           return(<div className="cursor-pointer">
                <h1 className="font-gothicregular py-2 hover:text-primary">{item.title}</h1>
            </div>)
    
    
   
})}

</div>
    <Button>Enquiries</Button>
    </div>
    
</div>

    </>
  )
}

export default Header
  



const TopItem=(
    props:TopItemsTypes
)=>{
    return(
        <div className="flex items-center gap-3 text-white font-gothicregular py-2">
            {props.type === "clock" && <FiClock />}
            {props.type === "email" && <MdEmail />}
            {props.type === "phone" && <FaPhoneAlt/> }
            <h3 className="text-sm">{props.text}</h3>
        </div>
    )
}