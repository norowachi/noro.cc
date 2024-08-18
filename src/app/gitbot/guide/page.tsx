"use client";
import { CircleCheckBigIcon } from "lucide-react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

export default function Guide() {
	return (
		<Suspense>
			<TheActualGuide />
		</Suspense>
	);
}

function TheActualGuide() {
	let success = useSearchParams().has("success");
	const [open, setOpen] = useState(success);

	return (
		<section
			className="gitbot-guide mb-10"
			onClick={() => {
				if (open) setOpen(false);
			}}
		>
			<AlertDialog open={open} onOpenChange={setOpen}>
				<AlertDialogContent className="bg-white border-black dark:bg-black dark:border-white">
					<AlertDialogHeader>
						<div className="flex">
							<CircleCheckBigIcon className="mr-2" />
							Successful Installation!
						</div>
						<AlertDialogDescription>
							Congrats! You have successfully linked your account to Gitbot.
							<br />
							Now it&apos;s time to learn how to use it!
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogAction>Let&apos;s Go!</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			<h1 className="font-black text-4xl text-center my-8 justify-center">
				How to use Gitbot
			</h1>
			<div className="flex m-auto justify-center">
				<p>
					guide color code: <span className="text-red-600">required</span> |{" "}
					<span className="text-green-600">optional</span>
				</p>
			</div>
			<ol className="text-lg px-[6%] list-decimal">
				{!success && (
					<>
						<li className="font-semibold text-xl">Getting Started</li>
						<div className="ml-5">
							Link your Github Account using the <code>/link</code> command,
							either by authorizing the github app or providing your own github
							token
						</div>
					</>
				)}
				<li className="font-semibold text-xl" id="issues">
					Issues <code>/issue</code>
				</li>
				<div className="ml-5">
					<ul className="list-disc">
						<li>
							<code>
								/issues get <span className="text-red-600">owner:</span>{" "}
								<span className="text-red-600">repo:</span>{" "}
								<span className="text-red-600">issue_number:</span>
							</code>{" "}
							- Get an issue by its number
						</li>
						<li>
							<code>
								/issues create <span className="text-red-600">owner:</span>{" "}
								<span className="text-red-600">repo:</span>{" "}
								<span className="text-red-600">title:</span>{" "}
								<span className="text-green-600">body:</span>{" "}
								<span className="text-green-600">labels:</span>{" "}
								<span className="text-green-600">assignees:</span>{" "}
								<span className="text-green-600">milestone:</span>
							</code>{" "}
							- Create a new issue
						</li>
						<li>
							<code>
								/issues close <span className="text-red-600">owner:</span>{" "}
								<span className="text-red-600">repo:</span>{" "}
								<span className="text-red-600">issue_number:</span>{" "}
								<span className="text-green-600">reason:</span>
							</code>{" "}
							- Close an issue by its number
						</li>
						<li>
							<code>
								/issues update <span className="text-red-600">owner:</span>{" "}
								<span className="text-red-600">repo:</span>{" "}
								<span className="text-red-600">issue_number:</span>
							</code>{" "}
							- Returns a link to edit the issue on Github
						</li>
					</ul>
				</div>
				<li className="font-semibold text-xl" id="pulls">
					Pull Requests <code>/pulls</code>
				</li>
				<div className="ml-5">
					<ul className="list-disc">
						<li>
							<code>
								/pulls get <span className="text-red-600">owner:</span>{" "}
								<span className="text-red-600">repo:</span>{" "}
								<span className="text-red-600">pull_number:</span>
							</code>{" "}
							- Get a PR by its number
						</li>
						<li>
							<code>
								/pulls create <span className="text-red-600">owner:</span>{" "}
								<span className="text-red-600">repo:</span>{" "}
								<span className="text-red-600">head:</span>{" "}
								<span className="text-red-600">base:</span>{" "}
								<span className="text-green-600">title:</span>{" "}
								<span className="text-green-600">head_repo:</span>{" "}
								<span className="text-green-600">issue:</span>{" "}
								<span className="text-green-600">body:</span>{" "}
								<span className="text-green-600">draft:</span>{" "}
								<span className="text-green-600">maintainer_can_modify:</span>
							</code>{" "}
							- Create a new Pull Request
							<div className="ml-5">
								Note: Requires either{" "}
								<code className="text-red-600">title:</code> or{" "}
								<code className="text-red-600">issue:</code>
							</div>
						</li>
						<li>
							<code>
								/pulls close <span className="text-red-600">owner:</span>{" "}
								<span className="text-red-600">repo:</span>{" "}
								<span className="text-red-600">pull_number:</span>{" "}
							</code>{" "}
							- Close a PR by its number
						</li>
						<li>
							<code>
								/pulls update <span className="text-red-600">owner:</span>{" "}
								<span className="text-red-600">repo:</span>{" "}
								<span className="text-red-600">pull_number:</span>{" "}
							</code>{" "}
							- Returns a link to edit the PR on Github
						</li>
					</ul>
				</div>
				<li className="font-semibold text-xl" id="my">
					My <code>/my</code>
				</li>
				<div>
					this is a shortcut to get information about your stuff, basically
					autofills the <code className="text-red-600">owner:</code> field with
					your (the authorized user&apos;s) username
				</div>
				<div className="ml-5">
					<ul className="list-disc">
						<li>
							<code>/my issues</code> - Group for the Issues commands
						</li>
						<li>
							<code>/my pulls</code> - Group for the Pulls commands
						</li>
					</ul>
				</div>
				<li className="font-semibold text-xl" id="settings">
					Settings <code>/settings</code>
				</li>
				<div className="ml-5">
					<ul className="list-disc">
						<li>
							<code>
								/settings issues <span className="text-red-600">owner:</span>{" "}
								<span className="text-red-600">repo:</span>
							</code>{" "}
							- Manage Issues settings
						</li>
						<ul className="list-[lower-roman] ml-5">
							<code className="text-green-600">auto_project:</code> -
							Automatically add new issues created with the bot to a project
							(needs project node_id)
							<br />
							<code className="text-green-600">auto_assignees:</code> -
							Automatically assign the new issues to users (logins comma
							separated)
						</ul>
						<li>
							<code>/settings misc</code> - Manage General settings with the bot
						</li>
						<ul className="list-[lower-roman] ml-5">
							<code className="text-green-600">ephermal:</code> - Whether the
							message should be ephermal/hidden or not (default: false)
						</ul>
					</ul>
				</div>
			</ol>
		</section>
	);
}
