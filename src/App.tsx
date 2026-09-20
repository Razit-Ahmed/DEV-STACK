import Nav from "./components/nav"
import Hero from "./components/hero"
import Footer from "./components/fotter"
import Tech from "./components/tech"
import { Suspense } from "react"
import type { Itech } from "./types/techType"

 const techFetch = async():Promise<Itech[]>=>{
    const res =await fetch('/data.json');
    const data = await res.json();
    return data;
  }


function App() {
  const techPromise= techFetch()

  
  return (
    <>
    
    <Nav/>
    <Hero/>

    <Suspense fallback={<h2>Loading............. </h2>}>
<Tech techPromise={techPromise} />
    </Suspense>
    

    {/* <div class="divider"></div> */}
    <Footer/>

    </>
  )
}

export default App
