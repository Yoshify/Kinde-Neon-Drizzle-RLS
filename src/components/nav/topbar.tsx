import { UserOrgButton } from "@/components/nav/user-org-button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export const Topbar = () => {
	return (
		<nav className="flex justify-between items-center p-4">
			<h2 className="font-bold">Yet Another Todo App</h2>
			<UserOrgButton />
		</nav>
	);
};
