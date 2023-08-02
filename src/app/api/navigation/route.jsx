import { NextResponse } from "next/server";

export async function GET() {
  // const res = await fetch("https://data.mongodb-api.com/...", {
  //   next: { revalidate: 60 }, // Revalidate every 60 seconds
  // });
  // const data = await res.json();
  const data =  [
    { key: 0, option: "Home", href: "/" },
    { key: 1, option: "About", href: "/about" },
    { key: 2, option: "Blog", href: "/blog" },
    { key: 3, option: "News", href: "/news" },
  ]
  
  return NextResponse.json(data);
}
