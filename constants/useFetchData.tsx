"use client"

import { useEffect, useState } from "react"
import { client } from "./client";
import { returnedProductData } from "@/components/FetchingDate";

export const useFetchData = (slug: string) => {
    const [data, setData] = useState<returnedProductData>()

    useEffect(() => {
        async function dick(){
            const query = `*[slug.current == $slug ]{
                productName,
                productImage,
                shortNote,
                originalPrice,
                discountedPrice,
                paymentPage
          }`;
        
              const returnedProduct = await client.fetch<returnedProductData>(query, {
                slug,
              });
              console.log("In the hook", returnedProduct)
              setData(returnedProduct)
        }
        dick();
    }, [slug])

    return { data }

}