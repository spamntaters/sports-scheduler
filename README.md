This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Decisions made
I am an experienced react dev but this is my first foray into Next.js.
When building this app I decided that reactivity was not just meant to be an afterthought.
This is best seen on the home page and the event details page.
 Note: the Data Table approach on the dashboard isn't the best choice from a reactivity standpoint but I made everything around the data table reactive to make the mobile experience better there.

## Perfection as the enemy of completion
While working on this I spent too much time obsessing over small details on the navigation bar and the home page that really kept me from completing this as soon as I hoped

## The Navigation bar
The Navigation bar is one of the two major portions of this app that took a lot of time to get perfect.
Even though you can click on Sports Scheduler and get to the home page I added a home nav item just to make the navbar look nicer.

Handling the button logic for certain scenarios was interesting. My assumption was that giving a page it's own layout would override the global so I at first attempted to do that for the login page to change the button to sign up. I soon found out it added to and not overrides the global layout 

## The Home page
The home page was my way of adding my personal flair to the project.
I wanted to give unauthenticated users something worth looking at and give them a reason to sign up or sign in.
The carousel showing upcoming events was something I fixated on early in the process
