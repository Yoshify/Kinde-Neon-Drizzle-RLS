"use client";

import { Loading } from "@/components/common/loading";
import { OrgSwitcher } from "@/components/nav/org-switcher";
import { Button } from "@/components/ui/button";
import {
	LoginLink,
	LogoutLink,
	useKindeAuth,
} from "@kinde-oss/kinde-auth-nextjs";
import { Loader2 } from "lucide-react";

export const UserOrgButton = () => {
	const auth = useKindeAuth();

	if (auth.isLoading) {
		return <Loading />;
	}

	return (
		<div className="flex items-center gap-x-8">
			{auth.isAuthenticated ? (
				<div className="flex items-center gap-x-8">
					<div className="flex items-center gap-x-2 shrink-0">
						<span>✌️</span>
						<span>Hey, {auth.user?.given_name ?? "User."}</span>
					</div>
					<OrgSwitcher />

					<Button asChild>
						<LogoutLink>Logout</LogoutLink>
					</Button>
				</div>
			) : (
				<Button asChild>
					<LoginLink>Login</LoginLink>
				</Button>
			)}
		</div>
	);
};
