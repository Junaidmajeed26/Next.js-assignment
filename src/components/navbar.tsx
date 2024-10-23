import Link from "next/link";

export default function Navbar(){
    return(
    <div>

    <h1 className="text-center bg-yellow-800 text-white py-4 px-4 text-xl">Tuition  Free  Education  Program  on  Latest  Technologies </h1>

    <div className="bg-blue-800 text-white text-right">       
    <div className="flex justify-between items-center h-full px-4">


<div className="container mx-auto flex p-5 items-center">

<a className="mr-96 flex titlefont font-medium items-center text-grey-900 mb-4 md:mb-0">    
<img src="https://www.creativefabrica.com/wp-content/uploads/2023/01/31/Letter-J-and-JJ-Logo-Graphics-59541643-1-1-580x387.jpg" 
alt="j logo" 
className="w-20 h-18 rounded-full"/>
<span className="ml-2 text-xl mr-5">Junaid</span></a><image />


            <Link className="mr-5 hover:text-black" href="/">Home</Link>
            <Link className="mr-5 hover:text-black" href="about">About</Link>
            <Link className="mr-5 hover:text-black" href="services">Services</Link>
            <Link className="mr-5 hover:text-black" href="admission">Admission</Link>
            <Link className="mr-5 hover:text-black" href="careers">Careers</Link>
            <Link className="mr-5 hover:text-black" href="contact">Contact</Link>



            
            <button className="ml-64 border-2 border-red-400 bg-yellow-800 pl rounded-lg">
            <Link className="ml-5 mr-5 hover:text-black" href="signup/">Sign up</Link></button>

            <button className="border-2 border-red-400 bg-yellow-800 pl rounded-lg">
            <Link className="ml-5 mr-5 hover:text-black" href="signin/">Sign in</Link></button>
            
            </div>
            </div>
            </div>
         </div>
    )
}