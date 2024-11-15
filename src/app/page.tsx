import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center">
				<h1 className="text-7xl font-bold">Home</h1>
				<Button variant="link" asChild>
					<Link href="/todos">
						Go to Todos
						<ArrowRightCircle className="size-4" />
					</Link>
				</Button>
			</main>
		</div>
	);
}
