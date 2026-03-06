"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { signIn, signUp } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
  isSignup?: boolean;
}

const LoginForm = ({ isSignup = false }: LoginFormProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmedEmail, setConfirmedEmail] = useState("");

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);

      if (isSignup) {
        const result = await signUp(formData);

        if (result && result.requiresEmailConfirmation) {
          setConfirmedEmail(result.email);
          setShowConfirmation(true);
          toast.success("Account created!", {
            description: "Please check your email to confirm your account.",
          });
        } else {
          // Auto-confirmed (e.g., local dev or disabled email confirmation)
          toast.success("Account created successfully!", {
            description: "Welcome to Sports Scheduler!",
          });
        }
      } else {
        await signIn(formData);
        toast.success("Signed in successfully!", {
          description: "Welcome back!",
        });
      }

      form.reset();
    } catch (error) {
      // Don't show error toast for Next.js redirect
      if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
        return;
      }

      toast.error(isSignup ? "Failed to create account" : "Failed to sign in", {
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again.",
      });
      setIsSubmitting(false);
    }
  };

  // Show email confirmation screen after successful signup
  if (showConfirmation) {
    return (
      <Card className="w-full border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl mb-2">Check your email</CardTitle>
          <CardDescription className="text-base">
            We&apos;ve sent a confirmation email to{" "}
            <strong>{confirmedEmail}</strong>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-center">
            Please click the link in the email to verify your account. Once
            confirmed, you can log in.
          </p>
          <div className="flex flex-col gap-3 pt-4">
            <Button asChild className="w-full">
              <Link href="/login">Go to Login</Link>
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowConfirmation(false)}
            >
              Create another account
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address*</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password*</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={isVisible ? "text" : "password"}
                    placeholder="••••••••••••••••"
                    className="pr-9"
                    {...field}
                    disabled={isSubmitting}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsVisible((prevState) => !prevState)}
                    disabled={isSubmitting}
                    className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
                  >
                    {isVisible ? <EyeOffIcon /> : <EyeIcon />}
                    <span className="sr-only">
                      {isVisible ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Remember Me and Forgot Password */}
        {!isSignup && (
          <div className="flex items-center justify-between gap-y-2">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={isSubmitting}
                      className="size-6"
                    />
                  </FormControl>
                  <FormLabel className="text-muted-foreground cursor-pointer">
                    Remember Me
                  </FormLabel>
                </FormItem>
              )}
            />

            <Link href="/forgot-password" className="hover:underline text-sm">
              Forgot Password?
            </Link>
          </div>
        )}

        <Button className="w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {isSignup ? "Creating account..." : "Signing in..."}
            </>
          ) : (
            <>{isSignup ? "Sign up" : "Sign in"}</>
          )}
        </Button>

        {isSignup ? (
          <p className="text-muted-foreground text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-card-foreground hover:underline"
            >
              Log in
            </Link>
          </p>
        ) : (
          <p className="text-muted-foreground text-center">
            New on our platform?{" "}
            <Link
              href="/signup"
              className="text-card-foreground hover:underline"
            >
              Create an account
            </Link>
          </p>
        )}
      </form>
    </Form>
  );
};

export default LoginForm;
