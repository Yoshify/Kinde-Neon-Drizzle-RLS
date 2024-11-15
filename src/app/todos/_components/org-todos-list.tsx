import { OrgTodoItem } from "@/app/todos/_components/org-todo";
import { TodoItem } from "@/app/todos/_components/todo";
import type { OrgTodo, Todo } from "@/server/db/schema";

export const OrgTodosList = ({ todos }: { todos: OrgTodo[] }) => {
	return (
		<ul className="flex flex-col gap-y-3">
			{todos.map((todo) => (
				<OrgTodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};
