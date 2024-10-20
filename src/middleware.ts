import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest, response: NextResponse) {
  const token = await getToken({ req: request });

  if (token) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// export default withAuth(function middleware(req) {
//   console.log(req.nextauth);
// });

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/my-polls"],
};
