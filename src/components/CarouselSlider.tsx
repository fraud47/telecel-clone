import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { carouselItems } from "@/constants"
import { useAutoScroll } from "@/hooks/useAutoScroll"
import { useEffect, useState } from 'react'
import { Button } from "./ui/button"
  

const CarouselSlider = () => {

    const currentIndex = useAutoScroll(carouselItems.length, 4000)
    const [api, setApi] = useState<any>()
  
    useEffect(() => {
      if (api) {
        api.scrollTo(currentIndex)
      }
    }, [api, currentIndex])


  return (
    <div>
        <Carousel className="w-full mx-auto"
        opts={{
            loop: true,
          }}
          setApi={setApi}
        >
    <CarouselContent>
      {carouselItems.map((item)=>(
        <CarouselItem key={item.img} className="p-0 h-[552px] flex justify-center ">
            <div className="relative">
                <div className="w-full h-full bg-black opacity-40 absolute"/>
                <img src={item.img} alt="" className="w-full  object-cover"/>

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center  px-16 text-white ">
                
                <div className="container">
                <h4 className=" text-xl font-gothicregular" >{item.heading}</h4>
                <h2 className="font-gothicregular text-6xl">
                    {item.subheading}
                </h2>
                <div className="mt-5">
                <Button className="px-7 text-md ">Get Started</Button>
                </div>

                </div>
                
                
                
                

                </div>
                

            </div>
        </CarouselItem>
      ))}
      
    </CarouselContent>
   
  </Carousel>
  </div>
  )
}

export default CarouselSlider