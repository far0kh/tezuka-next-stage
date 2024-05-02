"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-10 md:pl-40 pb-44 md:pb-10 flex flex-col gap-5 z-[50] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            TIME TO MOVE ON TO
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28e7b4] to-[#e6ee92ef]">
              {" "}
              THE NEXT STAGE
            </span>
          </h1>
          <p className="text-[20px] text-gray-200 hidden md:block">
            The Gateway to Web 3.0 for “Artists”, “Businesses”, and “Decentralization Enthusiasts”.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/read-more"
              className="rounded-[20px] group relative bg-green-500 hover:bg-green-600 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Read more
            </Link>
            <Link
              href="/countdown"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Countdown
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-24 z-[50] right-5 flex-col md:hidden gap-5">
        <Link
          href="/read-more"
          className="rounded-[20px] group bg-green-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Read more
        </Link>

        <Link
          href="/countdown"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Be ready
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
          unoptimized
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
        unoptimized
      />
    </main>
  );
}
