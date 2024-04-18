import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, Bell, Heart, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { links } from "../../utils/links";
import { Link, useLocation } from "react-router-dom";

export default function MobileMenu() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <div className="lg:hidden">
      <AlignJustify
        className="size-8 cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: 1,
              transition: { duration: 0.2 },
            }}
            exit={{
              scaleY: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
            className="w-full z-50 h-full absolute top-0 left-0 bg-black text-white 
        flex flex-col p-6 origin-top"
          >
            <span className="justify-end items-end flex w-full">
              <X
                className="size-8 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </span>
            <div className="h-full w-full flex flex-col items-center justify-center space-y-6">
              {links.map((link) => (
                <Link
                  to={link.href}
                  key={link.id}
                  className="text-xl font-medium w-full text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="items-end justify-end flex gap-5">
              <Link to="/favorites">
                <Heart />
              </Link>
              <Link to="/cart">
                <ShoppingCart />
              </Link>

              <Link to="/notifications">
                <Bell />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
