import { NextResponse } from "next/server";

export async function GET() {

  const data =  [
    {
      page: [
        { option: "News", href: "/news" },
        { option: "News", href: "/news" },
        { option: "News", href: "/news" },
        { option: "News", href: "/news" },
        { option: "News", href: "/news" },
        { option: "News", href: "/news" },
      ],
    },
    {
      page: [
        { option: "About", href: "/about" },
        { option: "About", href: "/about" },
        { option: "About", href: "/about" },
        { option: "About", href: "/about" },
        { option: "About", href: "/about" },
        { option: "About", href: "/about" },
      ],
    },
    {
      page: [
        { option: "Blog", href: "/blog" },
        { option: "Blog", href: "/blog" },
        { option: "Blog", href: "/blog" },
        { option: "Blog", href: "/blog" },
        { option: "Blog", href: "/blog" },
        { option: "Blog", href: "/blog" },
      ],
    },
    {
      page: [
        { option: "Home", href: "/" },
        { option: "Home", href: "/" },
        { option: "Home", href: "/" },
        { option: "Home", href: "/" },
        { option: "Home", href: "/" },
        { option: "Home", href: "/" },
      ],
    },
  ]
  
  return NextResponse.json(data);
}
