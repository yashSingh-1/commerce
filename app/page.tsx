
import Card from "@/components/Card";
import { firstFourProducts } from "@/components/FetchingDate";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Poster from "@/components/Poster";
import Types from "@/components/Types";
import { urlFor } from "@/constants/client";
import Link from "next/link";

export default async function Home() {
  const returnedData = await firstFourProducts();

  return (
    <div className={`h-screen `}>
      <NavBar />
      <Poster />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 mx-2">
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
        {
          returnedData.map((e) => (
            <Link href={`/Product/${e.slug.current}`} className="transition ease-in-out rounded-lg
            hover:-translate-z-1 delay-150 hover:scale-105 hover:bg-white duration-30" key={e.slug.current}>
              <Card img={urlFor(e.productImage.asset).url()}
                 title={e.productName}
                  discountedPrice={e.discountedPrice} />
            </Link>
          ))
        }
      </div>
      <div className="flex justify-center mt-5 p-2 w-full">
      <Link href="/allProducts" className="w-full">
      <button type="button" className="text-white bg-gradient-to-br from-purple-900 w-full
       to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-100
        dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center  mb-2">
          Take a look at some customized Products!
        </button>
      </Link>
        
      </div>


      <Types />
      <Footer />
    </div>
  );
}
