import LoginForm from "@/components/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8">
      <Card className="w-full border-none shadow-md sm:max-w-lg">
        <CardHeader>
          <CardTitle className="mb-1.5 text-2xl">
            Sign in to Sports Scheduler
          </CardTitle>
          <CardDescription className="text-base">
            The internet&apos;s home for Sports Scheduling
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
