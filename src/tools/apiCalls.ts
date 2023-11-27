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
export async function APIgetTopProducts(email: string) {
  try {
    const response = await axios.get(`${url}topProducts`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
