export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Remove selection from all hours
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      // Add selection to clicked hour
      selected.target.classList.add("hour-selected");
    });
  });
}
