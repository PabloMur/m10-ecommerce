import { NextRequest, NextResponse } from "next/server";
import { algoliaDB } from "@/lib/algoliaConn";
export async function GET(request: NextRequest, { params }: any) {
  try {
    const id = params.id;
    const result = await algoliaDB.getObject(id);
    return NextResponse.json({ response: result });
  } catch (error: any) {
    if (error.message === "Object not found") {
      return NextResponse.json({ error: "No se encontró el objeto" });
    } else {
      console.error(error);
      return NextResponse.json({ error: error.message });
    }
  }
}
