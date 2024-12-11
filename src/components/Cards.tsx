import { cardItems } from "@/constants"


const Cards = () => {
  return (
    <div className="bg-[#3E3D40]">
        
        <div className="container flex justify-between p-5 gap-5">

            {cardItems.map((item)=>(
                <div key={item.title} className="bg-primary border border-white flex items-center justify-center flex-col h-36 w-64 text-white rounded-lg px-4 hover:bg-[#3E3D40] group">
                    <div className="group-hover:text-primary">
                    <item.icon size={35}/>
                    </div>
                    

                    <h3 className="text-2xl font-gothicregular text-center ">
                    {item.title}
                    </h3>
                    
                    </div>
            ))}

        </div>
    </div>
  )
}

export default Cards