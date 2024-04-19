import { NavLink } from "react-router-dom";
export default function UserAvatar() {
  return <div className="size-12 rounded-full hidden lg:flex">
   <NavLink to='/shamly'> <img src="/placeholder.png" alt="user" className="size-full" /></NavLink>
  </div>;
}
