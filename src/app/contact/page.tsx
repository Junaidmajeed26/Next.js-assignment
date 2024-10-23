import Navbar from "@/components/navbar"

export default function contact(){
    return(
        <div>
            <Navbar/>
            <div className="flex-grow flex items-center justify-center">
        
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-lg text-center">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">Contact Us</h1><br/>
            <p>Phone: +92 (345)-3355225 <br/>
                Email: junaidmajeed26@yahoo.com</p>
        
            
            </div>
            </div>
            <footer className="bg-slate-300 w-full h-full px-60 flex justify-center items-center"> 
            <p>2024 Junaid Majeed</p>
            </footer>
            </div>
    )
}
