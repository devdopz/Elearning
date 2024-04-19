import { Bell, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavItems() {
  return (
    <div className="hidden lg:flex items-center space-x-6 font-normal text-base">
      <Link to="/saved">
        <Heart />
      </Link>

      <Link to="/carts">
        <ShoppingCart />
      </Link>

      <Link to="/notification">
        <Bell />
      </Link>
    </div>
  );
}
