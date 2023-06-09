import type { APIContext } from "astro";
import { todosModel } from "../../../models/todos";

export async function post({ request, redirect }: APIContext) {
  const input = (await request.formData()).get("id");

  await todosModel.toggleTodo(Number(input));

  return redirect("/");
}
