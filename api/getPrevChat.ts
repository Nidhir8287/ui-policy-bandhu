import axios from "axios";
import { API_BASE_PATH } from "./constant";

export const getConversations = async (conversationId: string) => {
  try {
    const res = await axios.get(`${API_BASE_PATH}/api/chat/messages/${conversationId}`);
    return res;
  } catch (error) {
    throw error;
  }
};
