"use client";

import { deleteTodo } from "@/app/todos/_actions/delete-todo";
import { toggleTodo } from "@/app/todos/_actions/toggle-todo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { Todo } from "@/server/db/schema";
import { Trash2 } from "lucide-react";

export const TodoItem = ({ todo }: { todo: Todo }) => {
	return (
		<li className="border border-border rounded-md p-2 w-96 flex items-center justify-between">
			<div className="flex gap-x-4 items-center">
				<Checkbox
					id={todo.id.toString()}
					checked={todo.completed}
					onCheckedChange={() => toggleTodo(todo.id, !todo.completed)}
				/>
				<span
					className={cn(
						"line-clamp-1",
						todo.completed && "text-muted-foreground line-through",
					)}
				>
					{todo.task}
				</span>
			</div>
			<Button
				variant="destructive"
				size="icon"
				onClick={() => deleteTodo(todo.id)}
			>
				<Trash2 className="size-4" />
			</Button>
		</li>
	);
};
