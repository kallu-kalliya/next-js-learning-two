import { redirect } from "next/navigation";

function getRandomInt(count: number) {
  // either return 0 and number in between 0 and count but not count
  return Math.floor(Math.random() * count);
}

export default async function reviewsdata({
  params,
}: {
  params: Promise<{ productid: string; reviewid: string }>;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error(`Error loading review`);
  }
  const { productid, reviewid } = await params;
  if (parseInt(reviewid) > 1000) {
   redirect('/products')
  }
  return (
    <div>
      product id is {productid} {`.. `}
      review id is {reviewid}
    </div>
  );
}
