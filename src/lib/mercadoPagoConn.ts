import MercadoPagoConfig from "mercadopago";
import { Preference, MerchantOrder } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_TOKEN as string,
});

export async function GetMerchantOrder(id: any) {
  const merchantOrder = new MerchantOrder(client);
  const data = await merchantOrder.get({
    merchantOrderId: id,
  });
  return data;
}

export async function CreatePreference(
  items: any = [],
  external_reference: string
) {
  const preference = new Preference(client);
  const createdPreference = await preference.create({
    body: {
      items,
      external_reference,
      back_urls: {
        success: "https://m10-ecommerce.vercel.app/thanks",
      },
      notification_url:
        "https://m9-entregable.vercel.app/api/ipn/mercadopago?id=13533682457&topic=merchant_order",
    },
  });
  return createdPreference;
}
