import AboutPage from "./_components/page";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Uttar Rana Magar - Film Maker | Director",
  description:
    "Learn more about Uttar Rana Magar, a versatile and passionate filmmaker, director, editor, cinematographer, photographer, and graphic designer. Discover his journey and works.",
  openGraph: {
    title: "About Uttar Rana Magar - Film Maker | Director",
    description:
      "Learn more about Uttar Rana Magar, a versatile and passionate filmmaker, director, editor, cinematographer, photographer, and graphic designer. Discover his journey and works.",
    images: [
      {
        url: "https://uttarranamagar.com.np/me.jpg",
        width: 800,
        height: 600,
        alt: "Uttar Rana Magar",
      },
    ],
    siteName: "Uttar Rana Magar",
    url: "https://uttarranamagar.com.np/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
