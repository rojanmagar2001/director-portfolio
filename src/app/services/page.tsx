import { Metadata } from "next";
import ServicePage from "./_components/page";

export const metadata: Metadata = {
  title: "Services - Uttar Rana Magar - Film Maker | Director",
  description:
    "Discover the range of professional services offered by Uttar Rana Magar, including filmmaking, directing, editing, cinematography, photography, and graphic design. Collaborate to bring your creative vision to life.",
  openGraph: {
    title: "Services - Uttar Rana Magar - Film Maker | Director",
    description:
      "Discover the range of professional services offered by Uttar Rana Magar, including filmmaking, directing, editing, cinematography, photography, and graphic design. Collaborate to bring your creative vision to life.",
    images: [
      {
        url: "https://uttarranamagar.com.np/me.jpg",
        width: 800,
        height: 600,
        alt: "Services - Uttar Rana Magar",
      },
    ],
    siteName: "Uttar Rana Magar",
    url: "https://uttarranamagar.com.np/services",
  },
};

export default function Page() {
  return <ServicePage />;
}
