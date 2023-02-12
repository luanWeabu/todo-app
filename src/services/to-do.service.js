import { TO_DO_STATUS } from "@/constants/to-do-status.constant";
import { generateNewId } from "@/utils/generate-new-id.util";

class ToDoService {
  idPrefix = "to-do";
  toDoItems = [];

  async queryToDo() {
    return this.toDoItems;
  }

  async createToDo(payload) {
    const toDo = {
      ...payload,
    };
    toDo.id = generateNewId(this.idPrefix);
    toDo.createdAt = new Date();
    toDo.lastModifiedAt = new Date();
    toDo.status = TO_DO_STATUS.TO_DO;
    this.toDoItems.push(toDo);
  }
}

export default new ToDoService();
