/*
 * @Author: dushuai
 * @Date: 2024-04-23 14:36:27
 * @LastEditors: dushuai
 * @LastEditTime: 2024-04-23 17:52:38
 * @description: 路由拦截 middleware
 */
import { NextResponse, NextRequest } from 'next/server';
import { TOKEN_KEY } from './common';

/**
 * 不需要鉴权的路由白名单
 */
const whiteRoute = ['/login'];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // console.log('pathname:>> ==========================================', pathname);
  if(!pathname.startsWith('/api')) { // 路由拦截
    const token = request.cookies.get(TOKEN_KEY),
      whitePath = whiteRoute.includes(pathname);
    // console.log('token:>> ==========================================', token);
    /**
     * 一个基础的鉴权
     * 无token时 进入除白名单外 重定向登录页
     * 有token时 进入白名单  重定向首页
     * 其他情况放行
     */
    if(!token) {
      if(!whitePath) return NextResponse.redirect(new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url));
    } else {
      if(whitePath) return NextResponse.redirect(new URL('/', request.url));
    }

  } else { // 接口拦截 前提是 /api 开头
    console.log('接口拦截:>> ', pathname);
  }

  return NextResponse.next();
}

// 这个也可以不需要，在middleware中处理也可以。
export const config = {
  matcher: [
    // "/api/:path*", // 仅api接口
    // '/:path*' // 所有
    // '/((?!api|next/_next/static|next/_next/image|favicon.ico).*)' // 匹配除了api和静态资源之外的 所有路径
    '/((?!next/_next/static|next/_next/image|favicon.ico).*)' // 匹配除了静态资源之外的 所有路径和api请求
  ]
};
