import axios from "axios";
import { API_BASE_PATH } from "./constant";

export const getConversations = async (conversationId: string) => {
  try {
    const authToken = localStorage.getItem('authToken_policy')
    const headers = {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',  // optional if you're sending JSON (default for axios)
  };
    const res = await axios.get(`${API_BASE_PATH}/api/chat/messages/`, { headers });
    return res;
  } catch (error) {
    throw error;
  }
};
