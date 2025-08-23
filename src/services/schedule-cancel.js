import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    // Ensure id is a string for consistent comparison
    const stringId = String(id);
    
    const response = await fetch(`${apiConfig.baseUrl}/schedules/${stringId}`, {
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
