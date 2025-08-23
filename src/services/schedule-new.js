import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when}) {
  try {
    // Create new schedule using POST method
    const response = await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const newSchedule = await response.json();
    console.log("Schedule created:", newSchedule);
    alert("Agendamento criado com sucesso");
    return newSchedule;
  } catch (error) {
    console.error("Error creating schedule:", error);
    alert("Erro ao criar agendamento");
    return null;
  }
}
