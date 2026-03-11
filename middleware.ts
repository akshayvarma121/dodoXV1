import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 1. Define the routes that require authentication.
// The (.*) means it protects the main route AND any sub-pages they might create.
const isProtectedRoute = createRouteMatcher([
  "/board(.*)", 
  "/editor(.*)"
]);

// 2. The Bouncer Logic: If someone tries to hit a protected route, force them to log in.
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

// 3. System Configuration: Tells Next.js when to actually run this middleware.
export const config = {
  matcher: [
    // Skip Next.js internals and static files (like your CSS and images)
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};