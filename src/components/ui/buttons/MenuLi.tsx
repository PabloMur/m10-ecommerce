import Link from "next/link";
export default function MenuLi({ route, children }: any) {
  return (
    <li className=" h-full px-4 py-2 mr-2 rounded-lg border">
      <Link href={route}>{children}</Link>
    </li>
  );
}
