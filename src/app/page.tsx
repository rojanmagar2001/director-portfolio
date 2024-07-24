import MainPage from "@/components/MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uttar Rana Magar - Film Maker | Director | Editor | Cinematographer",
  description:
    "Welcome to the official site of Uttar Rana Magar, a passionate filmmaker, director, editor, cinematographer, photographer, and graphic designer. Explore his work and discover his creative journey.",
  openGraph: {
    title:
      "Uttar Rana Magar - Film Maker | Director | Editor | Cinematographer",
    description:
      "Welcome to the official site of Uttar Rana Magar, a passionate filmmaker, director, editor, cinematographer, photographer, and graphic designer. Explore his work and discover his creative journey.",
    images: [
      {
        url: "https://uttarranamagar.com.np/me.jpg",
        width: 800,
        height: 600,
        alt: "Uttar Rana Magar",
      },
    ],
    siteName: "Uttar Rana Magar",
    url: "https://uttarranamagar.com.np",
  },
};

export default function Page() {
  return <MainPage />;
}
