import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artinox Design | Ouvrages en inox à Madagascar",
  description:
    "Artinox Design conçoit des pare-chocs, rampes d’escalier, balcons et ouvrages en inox sur mesure. Plus de 15 ans d’expérience, partout à Madagascar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
