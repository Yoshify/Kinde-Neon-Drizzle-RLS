"use client";

import { addOrgTodo, addTodo } from "@/app/todos/_actions/add-todo";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Form from "next/form";
import { useFormStatus } from "react-dom";

export const NewOrgTodoForm = () => {
	const status = useFormStatus();
	return (
		<Form action={addOrgTodo} className="flex flex-col gap-y-3 items-center">
			<Textarea
				name="task"
				placeholder="What does your org need to do?"
				className="resize-none w-96"
				required
			/>
			<Button
				type="submit"
				variant="secondary"
				disabled={status.pending}
				className="w-full"
			>
				{status.pending ? "Adding..." : "Add Todo"}
			</Button>
		</Form>
	);
};
