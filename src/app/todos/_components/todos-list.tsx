import { TodoItem } from "@/app/todos/_components/todo";
import type { Todo } from "@/server/db/schema";

export const TodosList = ({ todos }: { todos: Todo[] }) => {
	return (
		<ul className="flex flex-col gap-y-3">
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};
