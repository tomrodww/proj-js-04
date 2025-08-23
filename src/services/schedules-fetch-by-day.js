import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function schedulesFetchByDay({ date }) {
  if (!date) {
    console.warn('No date provided to schedulesFetchByDay');
    return [];
  }

  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);
    
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return [];
    }

    const data = await response.json();
    
    // Ensure we have an array to work with
    let schedules = [];
    if (Array.isArray(data)) {
      schedules = data;
    } else if (data && typeof data === 'object' && Array.isArray(data.schedules)) {
      schedules = data.schedules;
    }

    // Parse the date once
    const targetDate = dayjs(date);
    
    return schedules.filter(schedule => {
      try {
        return dayjs(schedule.when).isSame(targetDate, 'day');
      } catch (e) {
        console.warn('Invalid date in schedule:', schedule);
        return false;
      }
    });
  } catch (error) {
    console.error("Error fetching schedules:", error);
    return [];
  }
}