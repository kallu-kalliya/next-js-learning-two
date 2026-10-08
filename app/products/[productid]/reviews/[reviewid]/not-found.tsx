"use client";
import { usePathname } from "next/navigation"

export default function NotFound () {
    const pathname = usePathname();
    const productid = pathname.split("/")[2]
    const reviewid = pathname.split("/")[4]
    return (
        <div>
            <h1> review {reviewid} not found for product id : {productid}</h1>  
        </div>
    )
}