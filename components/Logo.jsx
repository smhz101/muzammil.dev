import Link from "next/link";

const Logo = ({ link = "/", size = "lg" }) => {
  return (
    <Link href={link}>
      <h1 className={`text-3xl md:text-4xl font-bold md:font-semibold`}>
        <span className="text-accent">&#60;</span>muzammil
        <span className="text-accent">.</span>dev
        <span className="text-accent">&#32;&#47;&#62;</span>
      </h1>
    </Link>
  );
};

export default Logo;
