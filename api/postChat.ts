import axios from "axios";
import { API_BASE_PATH } from "./constant";

export const postMessage = async (args) => {
  try {
    const payload = {
      content: args.text,
      chat_id: localStorage.getItem('policy_bandhu_chat_id')
    };
    const authToken = localStorage.getItem('authToken_policy')
    const headers = {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',  // optional if you're sending JSON (default for axios)
  };
    const res = await axios.post(`${API_BASE_PATH}/api/chat/send-messages/create`, payload, { headers });
    return res;
  } catch (error) {
    throw error;
  }
};
