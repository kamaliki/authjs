//protect entire project
//export { default } from 'next-auth/middleware'
import { withAuth } from 'next-auth/middleware'

console.log("middleware.ts");

export default withAuth(
    {
        callbacks: {
            authorized: async ({ req: { cookies } }) => {
                const secureCookie = process.env.NEXTAUTH_URL?.startsWith("https://") ?? !!process.env.VERCEL;
                const cookieName = secureCookie ? "__Secure-next-auth.session-token" : "next-auth.session-token";
                const session = await (await fetch('http://localhost:3000/api/auth/session', { method: 'GET', headers: { 'Cookie': `${cookieName}=${cookies.get(cookieName)?.value}` } })).json();
                return !!session.user;
            },
        },
    }
)

//protect specific routes
//use a matcher to protect specific routes
export const config = {
    //protect all routes that start with /dashboard/
    matcher: '/settings/:path*',
}