import axios from "axios";
import { API_BASE_PATH } from "./constant";

export const postMessage = async (args) => {
  try {
    const payload = {
      content: args.text,
      chat_id: args.conversationId
    };
    const res = await axios.post(`${API_BASE_PATH}/api/chat/send-messages/create`, payload);
    return res;
  } catch (error) {
    throw error;
  }
};
