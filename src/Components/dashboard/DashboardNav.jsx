import Logo from "./navbar/Logo";
import NavItems from "./navbar/NavItems";
import NavLinks from "./navbar/NavLinks";
import NavSearchBar from "./navbar/NavSearchBar";
import UserAvatar from "./navbar/UserAvatar";

export default function DashboardNav() {
  return (
    <nav className="px-8 py-5 flex items-center justify-between border-b border-b-black">
      <Logo />
      <NavSearchBar />
      <NavLinks />
      <NavItems />
      <UserAvatar />
    </nav>
  );
}
