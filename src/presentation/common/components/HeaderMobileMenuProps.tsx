import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// const navigate = useNavigate();

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={onClose} className="p-2">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-center space-x-4 pb-4 border-b">
          <img
            src="https://n1-astg.mioto.vn/g/2025/08/06/10/nIFDhHR4rWzDOipBKvS_hA.jpg"
            alt="Profile"
            className="h-12 w-12 rounded-full"
          />
          <span className="font-medium">Noah Nguyen</span>
        </div>

        <nav className="space-y-4">
          <Link
            to="/mycars"
            className="block py-2 text-gray-700 hover:text-gray-900"
          >
            Xe của tôi
          </Link>
          <Link
            to="/myfavs"
            className="block py-2 text-gray-700 hover:text-gray-900"
          >
            Xe yêu thích
          </Link>
          <Link
            to="/myreward"
            className="block py-2 text-gray-700 hover:text-gray-900"
          >
            Quà tặng
          </Link>
          <Link
            to="/aboutus"
            className="block py-2 text-gray-700 hover:text-gray-900"
          >
            Về Mioto
          </Link>
          <Link
            to="/owner/register"
            className="block py-2 text-gray-700 hover:text-gray-900"
          >
            Trở thành chủ xe
          </Link>
          <Link
            to="/mytrips"
            className="block py-2 text-gray-700 hover:text-gray-900"
          >
            Chuyến của tôi
          </Link>
        </nav>

        <button
          className="flex items-center space-x-2 text-red-600 mt-8"
          onClick={() => {
            /* Add logout logic */
            // navigate("/login");
          }}
        >
          <span>Đăng xuất</span>
        </button>
      </div>
    </div>
  );
}
