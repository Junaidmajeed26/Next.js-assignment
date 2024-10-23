import Navbar from "@/components/navbar"

export default async function Services() {
    await new Promise((resolve) => {
       setTimeout(resolve, 1000);
    })

    return(
        <div>
        <Navbar/>
        <div className="flex-grow flex items-center justify-center">
        
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-lg text-center">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">Page Not Found</h1>
        
            
            </div>
            </div>
            <footer className="bg-slate-300 w-full h-full px-60 flex justify-center items-center"> 
            <p>2024 Junaid Majeed</p>
            </footer>
            </div>
    )
}