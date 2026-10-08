"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [input,setInput]= useState('')
    const pathname = usePathname();
   
  return (
    <div>
      <div>
        <input className="border-white"
        type="text" value={input} onChange={e=>setInput(e.target.value)}/>
      </div>
      {navLinks.map((links) => {
        const isActive = pathname === links.href || (pathname.startsWith(links.href) && links.href !== "/")
        return (
          <Link className= {isActive? "font-bold mr-4" : "text-blue-500 mr-4"}href={links.href} key={links.name}>
            {" "}
            {links.name}
          </Link>
        );
      })}

      {children}
    </div>
  );
}
