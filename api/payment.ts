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
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);
    formData.append('screenshot', file);
    const res = await axios.post(`${API_BASE_PATH}/api/payment/create-order/`, formData, { headers });
    return res;
  } catch (error) {
    throw error;
  }
};
