import Navbar from "@/component/Navbar";
import Card from "@/component/ui/Card";

export default async function Home() {

  return (
    <>
      <div

          className={"Container h-screen w-screen text-center"}>
         <div className={"mt-64"}>
             <h1 className={"justify-center text-white font-bold font-serif text-3xl"}>We belong here.</h1>
             <br/>
             <h1 className={"justify-center text-white font-bold font-serif text-3xl "} >Together.</h1>
         </div>
      </div>
    </>
  )
}