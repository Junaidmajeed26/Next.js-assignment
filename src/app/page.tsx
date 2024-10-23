import Navbar from "@/components/navbar";

export default function Home() {
  return (

    <div>
            <Navbar/>
            <div className="flex flex-col items-center justify-centern h-full text-center bg-red-900 bg-opacity-85">
        
            <h1 className="text-4xl font-bold  mb-4">This is a Home Page</h1>
            <p className="text-lg text-black mb-2">Welcome to my website here, you Can explore my journey as a developer. From crafting responsive designs to developing interective application,
              I take pride in  transforming ideas into reality.
              </p>
              <p className="text-lg text-black mb-2">With a passion forlearning and staying update on the latest technologies,
              I continuously strive to enhance my skills and expend my knowledge.
              </p>
              <p className="text-lg text-black mb-2">i believe in the power of collaboration and creativity, and I am excited to connect with likeminded individuals andpotential clients.
              </p>
              <p className="text-lg text-black mb-2"> Take a look at my website and feel free to reach out if you have anyqyestions or opportunities for collaboration.
              Lets create something amazing together!
            </p>
            
          
            </div>
            <footer className="bg-slate-300 w-full h-full px-60 flex justify-center items-center"> 
            <p>2024 Junaid Majeed</p>
            </footer>
</div>  
  );
}
