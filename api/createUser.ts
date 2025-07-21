import axios from "axios";
import { API_BASE_PATH } from "./constant";

export const createUser = async (user: any) => {
  try {
    const { name, email, sub, picture } = user
    const res = await axios.post(`${API_BASE_PATH}/api/user/login/`, { name, email, sub, picture });
    return res;
  } catch (error) {
    throw error;
  }
};
