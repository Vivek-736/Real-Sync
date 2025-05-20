'use client';
import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex size-full h-screen items-center justify-center gap-3 bg-gradient-to-br from-blue-950 to-slate-900 text-white">
      <Image
        src="/assets/loader.svg"
        alt="loader"
        width={32}
        height={32}
        className="animate-spin"
      />
      Loading...
    </div>
  );
};

export default Loader;
