"use client";
import { usePathname } from "next/navigation";
export default function PathName() {
  const pathname = usePathname();
  const fullURL = process.env.NEXT_PUBLIC_URL + pathname;

  return <>{fullURL}</>;
}
