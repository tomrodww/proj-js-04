import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    // Clear existing content
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Process schedules
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      item.setAttribute("data-id", schedule.id);
      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.src = "./src/assets/cancel.svg";
      cancelIcon.alt = "Cancelar";

      item.append(time, name, cancelIcon);

      const hour = dayjs(schedule.when).hour();

      // Append to appropriate container
      if (hour >= 9 && hour < 12) {
        periodMorning.append(item);
      } else if (hour >= 13 && hour < 18) {
        periodAfternoon.append(item);
      } else {
        periodNight.append(item);
      }
    });
  } catch (error) {
    console.error('Error displaying schedules:', error);
    alert("Erro ao exibir agendamentos");
  }
}