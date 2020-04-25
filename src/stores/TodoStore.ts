import { action, observable, runInAction } from "mobx";

import Process from "./Process";
export type todoProp = {
  index: number;
  date: string;
  todo: string;
};
export class TodoStore {
  @observable public todo = Process.create<any[]>([]);

  @action
  async add(todo: any) {
    this.todo.setLoading(true);
    const data = this.todo
      .val()
      ?.concat({ ...todo, index: this.todo.val()?.length });
    runInAction("addtodo", () => {
      this.todo.set(data);
    });
  }
  @action
  async delete(index: number) {
    this.todo.setLoading(true);
    const data = this.todo
      .val()
      ?.filter((data: todoProp) => data.index !== index);
    runInAction("addtodo", () => {
      this.todo.set(data);
    });
  }
}
