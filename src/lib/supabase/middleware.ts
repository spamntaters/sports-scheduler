import { createServerClient } from "@supabase/ssr";
import type { User } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";

interface UpdateSessionResult {
  supabaseResponse: NextResponse;
  user: User | null;
}

export async function updateSession(
  request: NextRequest,
): Promise<UpdateSessionResult> {
  // Create initial response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Check for required env vars
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase environment variables");
    return { supabaseResponse: response, user: null };
  }

  try {
    const supabase = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Set cookies on the request
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          // Create new response with updated request
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });

          // Set cookies on the response
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    });

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error("Supabase auth error:", error);
      return { supabaseResponse: response, user: null };
    }

    return { supabaseResponse: response, user };
  } catch (error) {
    console.error("Middleware Supabase error:", error);
    return { supabaseResponse: response, user: null };
  }
}
