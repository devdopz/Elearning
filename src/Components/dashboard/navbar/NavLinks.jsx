import { Link } from "react-router-dom";
import { links } from "../../../utils/links";

export default function NavLinks() {
  // const location = useLocation()
  return (
    <div className="flex items-center space-x-4">
      {links.map((link) => (
        <Link key={link.id} to={link.href} className="font-medium text-base">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
