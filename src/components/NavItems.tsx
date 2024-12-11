import { Button } from "@/components/ui/button"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navs } from "@/constants";

import { RxHamburgerMenu } from "react-icons/rx";


const NavItems = () => {
  return (

    <div className="hidden md:block lg:hidden">

   
    <Sheet >
    <SheetTrigger asChild>
      <Button size={"icon"}>
      <RxHamburgerMenu />

      </Button>
    </SheetTrigger>
    <SheetContent side="left">
     
      <div className="mt-10 mx-5">
        {navs.map((item)=>{
if (item.title==="Services") return(
    <Accordion type="single" collapsible className="w-full">
   
   
    <AccordionItem value="item-2">
      <AccordionTrigger className="font-gothicregular text-base py-2">
        <h1>Services</h1>
      </AccordionTrigger>
      <AccordionContent>
        Services.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
   )





return (<div className="cursor-pointer">
                <h1 className="font-gothicregular py-2 hover:text-primary">{item.title}</h1>
            </div>)
})}
      </div>
    </SheetContent>
  </Sheet>

  </div>
  )
}

export default NavItems



