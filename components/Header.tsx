import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="min-h-[92px] min-w-full flex-nowrap bg-dark-100 flex w-full items-center justify-between gap-2 px-4">
      <Link href="/" className="md:flex-1 flex flex-row items-center gap-2">
        <Image
          src="/icon.png"
          alt="logo"
          width={40}
          height={40}
          className="hidden md:block"
        />
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          RealSync
        </span>
      </Link>
      {children}
    </div>
  );
};

export default Header;
