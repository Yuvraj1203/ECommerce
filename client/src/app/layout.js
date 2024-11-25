import {Quicksand} from "next/font/google"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import AuthContextProvider from "@/context/AuthContextProvider";

const quickSand = Quicksand({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quickSand.className} antialiased min-h-[100vh]`}
      >
        <AuthContextProvider>
          <ToastContainer />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
