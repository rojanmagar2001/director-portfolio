import { Metadata } from "next";
import ContactPage from "./_components/page";

export const metadata: Metadata = {
  title: "Contact Uttar Rana Magar - Film Maker | Director",
  description:
    "Get in touch with Uttar Rana Magar, a talented filmmaker, director, editor, cinematographer, photographer, and graphic designer. Reach out for collaborations, inquiries, or any other questions.",
  openGraph: {
    title: "Contact Uttar Rana Magar - Film Maker | Director",
    description:
      "Get in touch with Uttar Rana Magar, a talented filmmaker, director, editor, cinematographer, photographer, and graphic designer. Reach out for collaborations, inquiries, or any other questions.",
    images: [
      {
        url: "https://uttarranamagar.com.np/me.jpg",
        width: 800,
        height: 600,
        alt: "Contact Uttar Rana Magar",
      },
    ],
    siteName: "Uttar Rana Magar",
    url: "https://uttarranamagar.com.np/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
