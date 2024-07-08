import {
  fetchingPerticularProductUsingSlug,
  returnedProductData,
} from "@/components/FetchingDate";
import Footer from "@/components/Footer";
import SingleProduct from "@/components/SingleProduct";
import { client, urlFor } from "@/constants/client";
import { useFetchData } from "@/constants/useFetchData";
import { useParams, usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const callingData = async (slug: any) => {
  // const pathSlug = usePathname();
  // const slug = pathSlug.split("/");
  // const realSlug = slug[2];

  // console.log("Sluggy boi", slug);
  const perticularProduct = await fetchingPerticularProductUsingSlug(slug);
  // console.log("Thee u go", perticularProduct);
  return perticularProduct;
};

const page = async ({ params }: { params: any }) => {
  // const pathSlug = usePathname();
  // const slug = pathSlug.split("/");
  // const realSlug = slug[2]
  // const [data, setData] = useState(() => () => {fetchingPerticularProductUsingSlug(realSlug)})
  const slug = params.slug;
  const perticularProduct = await callingData(slug[0]);
  // const d = perticularProduct.then((e) => {
  //   console.log("E", e.discountedPrice)
  //   setData(e)
  // })
  // console.log("Here is th e data", data)
  // console.log("Here is th e e piouifycth", perticularProduct[0]);

  // deconstruction
  

  const data = perticularProduct[0]

  // const data  = useFetchData(realSlug);
  // console.log("Perticular Product: ", perticularProduct.then((e) => {
  //   console.log("Here is e my bou", e)
  // }))
  // console.log("fetch Product in the state: ", fetchFunction)

  return (
    <div>
      
      {data.productImage && (
        <SingleProduct
          productImage={urlFor(data.productImage.asset).url()}
          productName={data.productName}
          shortNote={data.shortNote}
          originalPrice={data.originalPrice}
          discountedPrice={data.discountedPrice}
          paymentPage={data.paymentPage}
          key={data.productName}
        />
     )} 

    </div>
  );
};

export default page;
// the error here is i am using  a client component which does let me do a async function
// but i need async to fetch data as i am using usePathName hook and if i remove client then i wont be able to use usePathname hook
// so find the solution?!
