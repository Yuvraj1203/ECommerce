import React from 'react'
import { NextResponse } from 'next/server';

const middleware = (request) => {
    const token = request.cookies.get('userToken');
    console.log("=====================================================================",request.nextUrl,"====",token)
    if(request.nextUrl.pathname == '/dashboard' && !token){
        return NextResponse.rewrite(new URL('/register',request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard'], // Apply middleware to the /dashboard route
  };

export default middleware