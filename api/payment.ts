import axios from "axios";
import { API_BASE_PATH } from "./constant";

export const postFormData = async (data: any) => {
  try {
    const { name, email, phone, message, file } = data
    const authToken = localStorage.getItem('authToken_policy')

    const headers = {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'multipart/form-data',  // optional if you're sending JSON (default for axios)
    };
    const res = await axios.post(`${API_BASE_PATH}/api/payment/create-order/`, data, { headers });
    return res;
  } catch (error) {
    throw error;
  }
};
