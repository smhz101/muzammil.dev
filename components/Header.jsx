import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white mb-16 xl:mb-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Logo />

        {/* desktop nav & hire button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
