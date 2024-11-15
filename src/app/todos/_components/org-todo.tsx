"use client";

import { deleteOrgTodo, deleteTodo } from "@/app/todos/_actions/delete-todo";
import { toggleOrgTodo, toggleTodo } from "@/app/todos/_actions/toggle-todo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { OrgTodo, Todo } from "@/server/db/schema";
import { Trash2 } from "lucide-react";

export const OrgTodoItem = ({ todo }: { todo: OrgTodo }) => {
	return (
		<li className="border border-rose-200 rounded-md p-2 w-96 flex items-center justify-between">
			<div className="flex gap-x-4 items-center">
				<Checkbox
					id={todo.id.toString()}
					checked={todo.completed}
					onCheckedChange={() => toggleOrgTodo(todo.id, !todo.completed)}
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
				onClick={() => deleteOrgTodo(todo.id)}
			>
				<Trash2 className="size-4" />
			</Button>
		</li>
	);
};
