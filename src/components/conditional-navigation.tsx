"use client";

import { LogOut, Menu, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { signOut } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface ConditionalNavigationProps {
  userEmail?: string | null;
}

export function ConditionalNavigation({
  userEmail,
}: ConditionalNavigationProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  // Don't show navigation on auth pages
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  // Determine what action button to show
  const getActionButton = () => {
    if (isAuthPage) {
      // On login page, show Sign up button
      if (pathname === "/login") {
        return (
          <Button asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        );
      }
      // On signup page, show Log in button
      return (
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
      );
    }

    // On other pages, show user nav or login button
    if (userEmail) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                <p className="font-medium">{userEmail}</p>
              </div>
            </div>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={async () => {
                try {
                  setIsLoading(true);
                  await signOut();
                } catch (error) {
                  // Ignore redirect errors
                  if (
                    error instanceof Error &&
                    error.message.includes("NEXT_REDIRECT")
                  ) {
                    return;
                  }
                  throw error;
                }
              }}
              disabled={isLoading}
            >
              <LogOut className="mr-2 h-4 w-4" />
              {isLoading ? "Signing out..." : "Log out"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    // Not logged in, show login button
    return (
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    );
  };

  // On auth pages, show simplified nav without main navigation links
  if (isAuthPage) {
    return (
      <header className="w-full py-4 px-6">
        <NavigationMenu className="max-w-8xl mx-auto flex items-center justify-between gap-6">
          <Link href="/" className="text-foreground text-xl font-semibold">
            Sports Scheduler
          </Link>
          <div className="hidden md:flex items-center gap-4">
            {getActionButton()}
          </div>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetTitle className="text-left text-xl font-semibold p-2">
                Navigation
              </SheetTitle>
              <div className="flex flex-col items-stretch p-4">
                {getActionButton()}
              </div>
            </SheetContent>
          </Sheet>
        </NavigationMenu>
      </header>
    );
  }

  // On regular pages, show full navigation
  return (
    <header className="w-full py-4 px-6">
      <NavigationMenu className="max-w-8xl mx-auto flex items-center justify-between gap-6">
        <Link href="/" className="text-foreground text-xl font-semibold">
          Sports Scheduler
        </Link>
        <NavigationMenuList className="hidden md:flex items-center justify-between gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/dashboard">Dashboard</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="hidden md:flex items-center gap-4">
          {getActionButton()}
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-7 w-7" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetTitle className="text-left text-xl font-semibold p-2">
              Navigation
            </SheetTitle>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col items-stretch">
                <NavigationMenuItem className="text-lg py-1">
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="text-lg py-1">
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/dashboard">Dashboard</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="text-lg p-4">
                  {getActionButton()}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </NavigationMenu>
    </header>
  );
}
