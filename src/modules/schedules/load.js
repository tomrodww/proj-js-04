import { schedulesFetchByDay } from "../../services/schedules-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "../schedules/show.js";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  try {
    // Get the date value, fallback to today if not set
    let date = selectedDate.value;
    if (!date) {
      date = new Date().toISOString().split('T')[0];
      selectedDate.value = date;
    }

    const dailySchedules = await schedulesFetchByDay({ date });

    if (Array.isArray(dailySchedules)) {
      schedulesShow({ dailySchedules });
      hoursLoad({ date, dailySchedules });
    } else {
      console.error('Invalid schedules data:', dailySchedules);
      schedulesShow({ dailySchedules: [] });
      hoursLoad({ date, dailySchedules: [] });
    }
  } catch (error) {
    console.error('Error loading schedules:', error);
    schedulesShow({ dailySchedules: [] });
    hoursLoad({ date: selectedDate.value, dailySchedules: [] });
  }
}

