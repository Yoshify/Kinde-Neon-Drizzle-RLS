import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export const Loading = ({ className }: { className?: string }) => {
	return (
		<div className={cn("flex items-center justify-center w-16 h-10", className)}>
			<Loader2 className="animate-spin size-4" />
		</div>
	);
};
