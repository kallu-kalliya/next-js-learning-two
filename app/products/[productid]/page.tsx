import { Metadata } from "next";

type Props = {
  params: Promise<{ productid: string }>;
};

export const generateMetadata = async ({params,}: Props): Promise<Metadata> => {
  const id = (await params).productid;
  const title = await new Promise ((resolve)=>{
      setTimeout(() => {
        resolve (`iphone ${id}`)
      }, 100);
  })
  return {
    title: `Product ${title}`,
    //  title: `Product ${id}`,
  };
};

export default async function product({ params }: Props) {
  const { productid } = await params;
  return <div>product details of .. {productid}</div>;
}
