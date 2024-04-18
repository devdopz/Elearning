import { Link, useLocation } from "react-router-dom";
import { links } from "../../utils/links";

export default function NavLinks() {
  const location = useLocation();
  return (
    <div className="hidden lg:flex items-center space-x-4">
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.href}
          className={
            location.pathname === link.href
              ? "font-medium text-base text-[#249EF0]"
              : "font-medium text-base"
          }
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
