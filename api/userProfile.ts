import axios from "axios";
import { API_BASE_PATH } from "./constant";

export const getUserProfile = async () => {
  try {
    const authToken = localStorage.getItem('authToken_policy')
    const headers = {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',  // optional if you're sending JSON (default for axios)
    };
    const res = await axios.get(`${API_BASE_PATH}/api/user/profile/`, { headers });
    return res?.data;
  } catch (error) {
    throw error;
  }
};
