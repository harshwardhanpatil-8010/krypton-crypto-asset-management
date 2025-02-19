"use client"
import Link from "next/link";
//import { useState } from "react";
export default function Home() {
 
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
  
    // async function handleLogin(e) {
    //   e.preventDefault();
  
    //   const res = await fetch("/api/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });
  
    //   const data = await res.json();
  
    //   if (res.ok) {
    //     localStorage.setItem("token", data.token); // Store token in localStorage
    //     alert("Login successful!");
    //   } else {
    //     alert(data.error);
    //   }
    // }
  
 
  return (
    
   <div className="container p-9">
    <Link href="/dashboard" className="border-2 border-blue-400 hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105 px-10 py-3 text-lg rounded-xl backdrop-blur-sm">Dashboard</Link>
   </div>
  );
}
