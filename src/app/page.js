// import styles from "./page.module.css";
import Link from "next/link";
import "./myGlobal.css";

export default function Home() {
  return (
    <main>
      <button>trutton</button>
      <Link href="/kkk">kkk</Link>
      <Link href="/uniformAccelerationDist">uniform Acceleration Dists</Link>
      <Link href="/TuniformAccelerationDist2">
        Tuniform Acceleration Dists2
      </Link>
      <Link href="/BMI">BMI</Link>

      <h1>Single post page</h1>
    </main>
  );
}
