import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    const cancelButton = event.target.classList.contains("cancel-icon");
    
    if (cancelButton) {
      const item = event.target.closest("li")
      const { id } = item.dataset;

      if(id) {
        const isConfirmed = confirm("Tem certeza que deseja cancelar o agendamento?");
      
        if(isConfirmed) {
          await scheduleCancel({ id });
          schedulesDay();
        }
      }
    }
  });
});
