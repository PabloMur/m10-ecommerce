import Link from "next/link";
export default function MenuLi({ route, children }: any) {
  return (
    <li>
      <Link href={route}>{children}</Link>
    </li>
  );
}
