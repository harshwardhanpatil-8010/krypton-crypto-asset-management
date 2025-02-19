import { NextResponse } from "next/server";

export function middleware(req) {
  // const token = req.headers.get("cookie")?.split("token=")[1]?.split(";")[0];


  
  // const protectedRoutes = ["/dashboard"];

  // if (protectedRoutes.includes(req.nextUrl.pathname) && !token) {
  //   return NextResponse.redirect(new URL("/login", req.url)); 
  // }

  return NextResponse.next();
}


export const config = {
  matcher: ["/dashboard/:path*"], 
};
