"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" && (
        <footer className="py-8 xl:py-12 text-white">
          <div className="container mx-auto px-4">
            <div className="border-t border-gray-700 mt-8 pt-4">
              <p className="text-sm text-gray-500 text-center">
                &copy; {new Date().getFullYear()} Muzammil.dev. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
