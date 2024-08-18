import { redirect, RedirectType } from "next/navigation";

export default function Discord() {
	return redirect("https://discord.gg/fqJmXyEpEj", RedirectType.replace);
}
