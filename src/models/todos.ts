import { eq } from "drizzle-orm";
import { db } from "../db";
import { todos } from "../db/schema";

export const todosModel = {
  async getTodo(id: number) {
    const todosList = db.select().from(todos).where(eq(todos.id, id));
    return todosList;
  },

  async getTodos() {
    const todosList = await db.select().from(todos).orderBy(todos.id);
    return todosList;
  },

  async createTodo(title: string) {
    await db.insert(todos).values({ title });
  },

  async toggleTodo(id: number) {
    const oldTodo = await db.select().from(todos).where(eq(todos.id, id));

    await db
      .update(todos)
      .set({
        done: !oldTodo[0].done,
      })
      .where(eq(todos.id, oldTodo[0].id));
  },

  async deleteTodo(id: number) {
    await db.delete(todos).where(eq(todos.id, id));
  },
};
