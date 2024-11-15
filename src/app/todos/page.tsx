import { NewOrgTodoForm } from "@/app/todos/_components/new-org-todo-form";
import { NewTodoForm } from "@/app/todos/_components/new-todo-form";
import { OrgTodosList } from "@/app/todos/_components/org-todos-list";
import { TodosList } from "@/app/todos/_components/todos-list";
import { getOrgTodos, getTodos } from "@/app/todos/_queries/get-todos";

export default async function TodosPage() {
	const todos = await getTodos();
	const orgTodos = await getOrgTodos();
	return (
		<main className="flex flex-col gap-y-3 items-center justify-start p-8">
			<h1 className="text-4xl font-bold">Todos</h1>
			<div className="flex gap-x-8">
				<div className="flex flex-col gap-y-3">
					<NewTodoForm />
					<TodosList todos={todos} />
				</div>
				<div className="flex flex-col gap-y-3">
					<NewOrgTodoForm />
					<OrgTodosList todos={orgTodos} />
				</div>
			</div>
		</main>
	);
}
