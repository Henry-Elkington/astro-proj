import type { APIContext } from "astro";
import { todosModel } from "../../../models/todos";

export async function post({ request, redirect }: APIContext) {
  const input = (await request.formData()).get("title");

  await todosModel.createTodo(input as string);

  return redirect("/");
}
