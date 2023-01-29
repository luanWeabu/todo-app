import { TO_DO_STATUS } from "@/constants/to-do-status.constant";

class ToDoStatusMapper {
  convertRawToLabel(status) {
    switch (status) {
      case TO_DO_STATUS.TO_DO:
        return "To do";
      case TO_DO_STATUS.COMPLETED:
        return "Completed";
      case TO_DO_STATUS.IN_PROGRESS:
        return "In progress";
      case TO_DO_STATUS.REJECTED:
        return "Rejected";
      default: {
        return "N/A";
      }
    }
  }
}

export default new ToDoStatusMapper();
