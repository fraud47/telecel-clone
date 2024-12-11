import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { Button } from "./ui/button";


const AboutUs = () => {
  return (

    <>
  
    <div className="w-full p-10 grid grid-cols-1 md:grid-cols-2 ">
     


     <div>
     <h4 className="font-gothicregular text-primary bg-gray-200 rounded-md p-1 w-20">About Us</h4>
        <h2 className="text-5xl pt-3 pb-6 font-gothicbold">Connecting Lives</h2>
        <h3 className="">Telecel Zimbabwe is the leading mobile network operator , dedicated to providing innovative and affordable mobile communication solutions to our customers. We strive to offer remarkable services including voice, SMS, mobile data and value added services.</h3>
        <Button className="text-lg py-6 my-6">Discover more..</Button>
     </div>

     <div className="w-full relative ">

        <img src="/about-img.jpg" alt="connecting lives img" className="rounded-full h-72 w-72 object-cover mx-auto"  />
        <div className="bg-primary absolute h-52 w-52 rounded-full flex flex-col text-white items-center justify-center bottom-0">
            <HiOutlineRocketLaunch size={36}/>
             <h5 className="text-2xl py-2">Fast Broadband</h5> 
             <p>New Technology</p>
        </div>

     </div>
       
        
       
        
        
    </div>
    <h4 className="font-gothicregular text-primary bg-gray-200 rounded-md p-1 w-20 mx-auto m-5">Services</h4>


    </>
  )
}

export default AboutUs