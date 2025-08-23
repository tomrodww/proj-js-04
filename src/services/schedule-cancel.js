import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error("Error canceling schedule:", error);
    alert("Erro ao cancelar agendamento");
    return false;
  }
}
