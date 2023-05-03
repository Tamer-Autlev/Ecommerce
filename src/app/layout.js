import Footer from "./footer/Footer";
import "./globals.css";
import Header from "./header/Header";
import AuthProvider from "./AuthProvider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head></head>

      <AuthProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
