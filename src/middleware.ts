import { withAuth } from "next-auth/middleware";
import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse } from "next/server";
// export { default } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // console.log(req);
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      !req.nextauth.token?.isAdmin
    ) {
      return NextResponse.rewrite(
        new URL("/account/signIn?message=Unauthorized_User", req.url)
      );
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => (token ? true : false),
    },
  }
);

export const config = { matcher: ["/admin", "/infor"] };
