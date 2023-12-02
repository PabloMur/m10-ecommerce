const url = "/api/";
import axios from "axios";

export async function APIsendCode(email: string) {
  try {
    const response = await axios.post(`${url}auth`, { email });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function APIgetToken(email: string, code: number) {
  try {
    const response = await axios.post(`${url}auth/token`, { email, code });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function APIGetMe(token: string) {
  try {
    const response = await axios.get(`${url}me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function APIUpdatetMe(token: string) {
  try {
    const response = await axios.patch(`${url}me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function APIgetTopProducts() {
  try {
    const response = await axios.get(`${url}topProducts`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function APIGetProductData(id: any) {
  try {
    const response = await axios.get(`${url}products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function APICreateOrder(
  token: string,
  userId: string,
  productId: any,
  orderData: any // Aquí se pasa el cuerpo de la orden
) {
  try {
    const response = await axios.post(
      `${url}order?productId=${productId}`,
      orderData, // Usa el cuerpo proporcionado
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function APISearch({ limit, offset, q }: any) {
  try {
    const response = await axios.get(url + "search", {
      params: {
        limit,
        offset,
        q,
      },
    });

    return response.data.response;
  } catch (error) {
    console.error(error);
    throw new Error("Error en la búsqueda API");
  }
}
