import {NextRequest, NextResponse} from 'next/server'


export function middleware(req, res){
    // req.cookies.get('token')?.valueOf()
    console.log('request', req.nextUrl.pathname);
    return NextResponse.next()
}

export const config = {
    matcher: '/'
}