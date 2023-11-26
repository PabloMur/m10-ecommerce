import Link from "next/link";
export default function SocialNets() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link href={"/profile"}>Instagram</Link>
      <Link href={"/search"}>Facebook</Link>
    </div>
  );
}
