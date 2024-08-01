
import { client } from "@/constants/client";

export type returnedProductData = {
  productName: string;
  shortNote: string;
  slug: {
    current: string;
  };
  originalPrice: string;
  paymentPage: string;
  discountedPrice: string;
  productImage: {
    asset: string;
  };
};

const FetchingDate = async () => {
  const query = '*[_type == "product"]';
  const data = await client.fetch<returnedProductData[]>(query);
  // console.log("Date in the fetching data is", data);

  return data;
};

export const firstFourProducts = async () => {
  const query = '*[_type == "product"][0..3]';
  const firstFourProducts = await client.fetch<returnedProductData[]>(query);
  // console.log("Date in the fetching data is", firstFourProducts);
  return firstFourProducts;
};


export const fetchingPerticularProductUsingSlug = async (slug: string) => {
  
      const query = `*[slug.current == $slug ]{
        productName,
        productImage,
        shortNote,
        originalPrice,
        discountedPrice,
        paymentPage
  }`;

      const returnedProduct = await client.fetch<any>(query, {
        slug,
      });
      // console.log("Returned Prodct from slug: ", returnedProduct);
      return returnedProduct;
    
    
};

export const FetchingPoster = async () => {
  const query = '*[_type == "logo_poster"]';
  const poster = await client.fetch(query);

  console.log("Poster in the fetching part", poster)

  return poster;

}

export const FetchingGallery = async () => {
  const query = '*[_type == "mainGallery"]';

  const gallery = await client.fetch(query)

  console.log("Gallery", gallery)
  return gallery;
}




export default FetchingDate;
