import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/SignIn")) {
    if (request.cookies.has("sessionID")) {
      const sessionID = request.cookies.get("sessionID");
      if (sessionID) {
        const {value} = sessionID
        const promisehandle = await fetch('http://localhost:3000/SignIn',{method:'POST',headers:{"Content-Type":"application/json"},body:JSON.stringify(value)})
        const result = await promisehandle.json()
        if(result){
          return NextResponse.redirect("http://localhost:3000/")
        }
      }
    }
  }
}
