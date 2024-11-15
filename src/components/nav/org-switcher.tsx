import { Loading } from "@/components/common/loading";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { LoginLink, useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";

export const OrgSwitcher = () => {
	const auth = useKindeAuth();
	const router = useRouter();

	if (auth.isLoading) {
		return <Loading />;
	}

	return (
		<Select
			value={auth.getOrganization().orgCode ?? undefined}
			onValueChange={(value) => {
				router.push(`/api/auth/login?org_code=${value}`);
			}}
		>
			<SelectTrigger>
				<SelectValue placeholder="Select an organization" />
			</SelectTrigger>
			<SelectContent>
				{auth.getUserOrganizations()?.orgs?.map((org) => (
					<SelectItem key={org.code} value={org.code}>
						{org.name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};
