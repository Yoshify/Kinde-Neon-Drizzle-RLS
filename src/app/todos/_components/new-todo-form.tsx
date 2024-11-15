"use client";

import { addTodo } from "@/app/todos/_actions/add-todo";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Form from "next/form";
import { useFormStatus } from "react-dom";

export const NewTodoForm = () => {
	const status = useFormStatus();
	return (
		<Form action={addTodo} className="flex flex-col gap-y-3 items-center">
			<Textarea
				name="task"
				placeholder="What do you need to do?"
				className="resize-none w-96"
				required
			/>
			<Button type="submit" disabled={status.pending} className="w-full">
				{status.pending ? "Adding..." : "Add Todo"}
			</Button>
		</Form>
	);
};
