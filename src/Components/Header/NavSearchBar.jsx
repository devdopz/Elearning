import { Search } from "lucide-react";

export default function NavSearchBar() {
  return (
    <form className="hidden lg:flex items-center space-x-2 rounded-xl border px-4 py-2 border-black lg:w-96">
      <Search />
      <input
        type="text"
        placeholder="Search which course you want"
        className="px-2 py-1 focus:outline-none w-full"
      />
    </form>
  );
}
