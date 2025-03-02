import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE",

    });
  } catch (error) {
    console.error(error);
    alert("Erro ao cancelar agendamento");
  }
}
