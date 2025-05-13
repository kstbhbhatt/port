import ClientThemeProvider from "@/components/ClientThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Kaustubh Bhatt - Portfolio",
  description: "Frontend Developer Portfolio",
  meta: {
    viewport: "width=device-width, initial-scale=1.0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}
