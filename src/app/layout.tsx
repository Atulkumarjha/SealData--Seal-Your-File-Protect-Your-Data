import React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "SealData",
  description: "App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      
      <body style={{ margin: 0, padding: 0, height: '100vh' }}>
        <Navbar />
       <main> {children}</main>
      </body>
    </html>
  );
}