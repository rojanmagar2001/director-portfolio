import { Metadata } from "next";
import GalleryPage from "./_components/page";

export const metadata: Metadata = {
  title: "Gallery - Uttar Rana Magar - Film Maker | Director",
  description:
    "Explore the visual works of Uttar Rana Magar, showcasing his talent in filmmaking, directing, editing, cinematography, photography, and graphic design.",
  openGraph: {
    title: "Gallery - Uttar Rana Magar - Film Maker | Director",
    description:
      "Explore the visual works of Uttar Rana Magar, showcasing his talent in filmmaking, directing, editing, cinematography, photography, and graphic design.",
    images: [
      {
        url: "https://uttarranamagar.com.np/me.jpg",
        width: 800,
        height: 600,
        alt: "Gallery - Uttar Rana Magar",
      },
    ],
    siteName: "Uttar Rana Magar",
    url: "https://uttarranamagar.com.np/gallery",
  },
};

export default function Page() {
  return <GalleryPage />;
}
