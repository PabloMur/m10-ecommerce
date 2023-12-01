import Link from "next/link";
export default function MenuLi({ route, children }: any) {
  return (
    <button>
      <Link href={route} className=" h-full px-4 py-2 mr-2 rounded-lg border">
        {children}
      </Link>
    </button>
  );
}
