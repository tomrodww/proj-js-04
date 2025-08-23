import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (e) => {
  e.preventDefault();

  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert("Name is required");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Hour is required");
    }

    const [hour] = hourSelected.innerText.split(":");
    const when = dayjs(selectedDate.value).add(hour, "hour").format();
    const id = new Date().getTime().toString();

    await scheduleNew({ id, name, when });
    await schedulesDay();

    // Reset form
    clientName.value = "";
    hourSelected.classList.remove("hour-selected");
  } catch (error) {
    alert("Appointment could not be scheduled");
    console.error(error);
  }
};
