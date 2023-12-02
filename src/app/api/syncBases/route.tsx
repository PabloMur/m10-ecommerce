// pages/api/sync.js
import { algoliaDB } from "@/lib/algoliaConn";
import airtableBase from "@/lib/airtableConn";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await algoliaDB.clearObjects();
    const products = await airtableBase.table("relojes").select().all();
    const productsToSave = products.map((record) => ({
      ...record.fields,
      objectID: record.id,
    }));

    const algoliaResponse = await algoliaDB.saveObjects(productsToSave);

    return NextResponse.json({
      message: "Sync successful",
      algoliaResponse,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
