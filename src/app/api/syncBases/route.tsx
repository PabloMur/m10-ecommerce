// pages/api/sync.js
import { algoliaDB } from "@/lib/algoliaConn";
import airtableBase from "@/lib/airtableConn";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Paso 1: Eliminar todos los objetos existentes en Algolia
    await algoliaDB.clearObjects();

    // Paso 2: Guardar objetos de Airtable en Algolia
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
