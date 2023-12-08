import Link from "next/link";
export default function MenuLi({ route, children }: any) {
  return (
    <button>
      <Link href={route} className=" h-full rounded-lg border px-3 py-2 w-full">
        {children}
      </Link>
    </button>
  );
}
