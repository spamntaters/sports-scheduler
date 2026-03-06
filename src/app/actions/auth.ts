"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function isRedirectError(error: unknown): boolean {
  return error instanceof Error && error.message.includes("NEXT_REDIRECT");
}

export async function signIn(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    throw new Error(
      error instanceof Error ? error.message : "Failed to sign in",
    );
  }

  redirect("/dashboard");
}

export async function signUp(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/callback`,
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    // Return info about email confirmation
    return {
      requiresEmailConfirmation: data.user?.identities?.length === 0 || false,
      email: email,
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    throw new Error(
      error instanceof Error ? error.message : "Failed to create account",
    );
  }
}

export async function signOut() {
  const supabase = await createClient();

  try {
    await supabase.auth.signOut();
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    throw new Error(
      error instanceof Error ? error.message : "Failed to sign out",
    );
  }

  redirect("/");
}

export async function getUser() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  return user;
}
