import Navbar from "@/components/navbar";


export default async function About() {
    await new Promise((resolve) => {
       setTimeout(resolve, 5000);
    })
   
       return (
        <div>
            <Navbar/>
        
        <div className="flex-grow flex items-center justify-center">
        
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-lg text-center">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">Hello, I am Junaid Majeed</h1>
            <p>I am a college student Studying at the Governor House.
                My Interest in Web Development Started as a hobby and has grown into a passion. 
                I love creating moderm, responsive websites and exploring new technologies.
                I am continuously learning and expanding my skills in Web Development
            </p>

            </div>
            </div>
            <footer className="bg-slate-300 w-full h-full px-60 flex justify-center items-center"> 
            <p>2024 Junaid Majeed</p>
            </footer>
   </div>
    )
}