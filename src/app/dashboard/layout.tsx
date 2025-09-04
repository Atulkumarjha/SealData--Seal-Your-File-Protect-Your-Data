// app/dashboard/layout.tsx
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div 
      style={{ background: 'linear-gradient(to bottom, #081d16, #000503, #04261b)' }}
      className="relative z-50 min-h-screen w-full flex"
    >
      

      {/* Main content */}
      <main className="flex-1 text-white p-6">{children}</main>
    </div>
  );
}
