import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavItems from "./NavItems";
import NavLinks from "./NavLinks";
import NavSearchBar from "./NavSearchBar";
import UserAvatar from "./UserAvatar";

export default function Header() {
  return (
    <nav className="px-8 py-5 flex items-center justify-between border-b border-b-black">
      <Logo />
      <NavSearchBar />
      <NavLinks />
      <NavItems />
      <UserAvatar />
      <MobileMenu />
    </nav>
  );
}
