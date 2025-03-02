import { schedulesFetchByDay } from "../../services/schedules-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "../schedules/show.js";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {

  const date = selectedDate.value;

  const dailySchedules = await schedulesFetchByDay({ date });

  schedulesShow({ dailySchedules });

  hoursLoad({ date, dailySchedules });
}

