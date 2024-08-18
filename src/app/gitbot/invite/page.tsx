import { redirect, RedirectType } from "next/navigation";

export default function Discord() {
	return redirect(
		"https://discord.com/oauth2/authorize?client_id=695588314765459488",
		RedirectType.replace
	);
}
