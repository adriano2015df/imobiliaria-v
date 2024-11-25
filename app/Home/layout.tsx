import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home Imboliária V",
  description: "App Imbobiliária V",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body>
        {children}
      </body>
    </html>
  );
}
