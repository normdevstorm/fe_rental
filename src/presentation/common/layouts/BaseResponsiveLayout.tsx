import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileMenu from "../components/HeaderMobileMenuProps";

export default function BaseResponseiveLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Header />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
