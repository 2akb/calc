"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const MyHomeImage = () => {
  const router = useRouter();
  return (
    <span onClick={() => router.push("/")}>
      <Image
        priority={true}
        src="/BN2.png"
        width={121}
        height={84}
        alt="Picture of the author"
      />
    </span>
  );
};

export default MyHomeImage;
