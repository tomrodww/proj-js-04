import dayjs from "dayjs";
import { hoursClick } from './hours-click.js';
import { openingHours } from "../../utils/opening-hours.js";


const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  // Clear existing hours first
  hours.innerHTML = '';

  const unavailableHours = dailySchedules.map((schedule) => {
    return dayjs(schedule.when).format("HH:mm");
  })

  const opening = openingHours.map((hour) => {

    const [scheduleHour] = hour.split(":");
    
    const isHourFuture = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    const available = !unavailableHours.includes(hour) && isHourFuture;
    
    return {
      hour,
      available
    }
  })
  
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    
    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    
    li.textContent = hour;
    
    if(hour === "09:00") {
      hourHeaderAdd("Manhã");
    }else if(hour === "13:00") {
      hourHeaderAdd("Tarde");
    }else if(hour === "18:00") {
      hourHeaderAdd("Noite");
    }
    
    hours.append(li);
  })
  
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;
  hours.append(header);
}
