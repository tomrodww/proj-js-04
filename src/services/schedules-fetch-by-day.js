import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function schedulesFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);

    const data = await response.json();

    const dailySchedules = data.filter((schedule) => {
      return dayjs(date).isSame(schedule.when, "day")
    });

    return dailySchedules;
  } catch (error) {
    console.error(error);

    alert("Erro ao buscar agendamentos");
  }
}