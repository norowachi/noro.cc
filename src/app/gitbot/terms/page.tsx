import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Terms of Service",
};

export default function TOS() {
	return (
		<div>
			<h1 className="font-black text-4xl text-center my-8">Terms of Service</h1>
			<ol className="text-lg px-[6%] list-decimal mb-10">
				<h2 className="text-xl font-semibold">Effective: June 30, 2024</h2>
				<h2 className="text-xl font-semibold">Last Updated: June 30, 2024</h2>
				<p className="ml-5">
					By using our Service (&quot;Gitbot&quot;, &quot;we&quot;,
					&quot;us&quot;, &quot;our&quot;), you agree to the following Terms of
					Service (&quot;Terms&quot;). If you do not agree to these Terms, you
					may not use Gitbot.
				</p>
				<li className="text-xl font-semibold">Third Party Terms</li>
				<p className="ml-5">
					You are required to agree to additional terms and conditions when
					using our Service. You are responsible for reviewing and agreeing to
					these terms.
					<br />
					Discord&apos;s Terms of Service:{" "}
					<Link
						href="https://discord.com/terms"
						className="link"
						target="_blank"
					>
						https://discord.com/terms
					</Link>
					<br />
					GitHub&apos;s Terms of Service:{" "}
					<Link
						href="https://docs.github.com/en/github/site-policy/github-terms-of-service"
						className="link"
						target="_blank"
					>
						https://docs.github.com/en/github/site-policy/github-terms-of-service
					</Link>
				</p>
				<li className="text-xl font-semibold">Usage</li>
				<p className="ml-5">
					You may not use our Service in any way that is illegal, harmful, or
					offensive. You may not use our Service to distribute malware, spyware,
					or any other harmful software. You may not use our Service to
					distribute copyrighted material without permission.
				</p>
				<li className="text-xl font-semibold">Termination</li>
				<p className="ml-5">
					We may terminate or suspend your access to our Service immediately,
					without prior notice or liability, for any reason whatsoever,
					including but not limited to breaching of our Terms or any of our
					Third Party&apos;s Terms. Upon termination, your right to use the
					Service will immediately cease.
					<br />
					If you wish to terminate your account, you may simply discontinue
					using the Service, and submit a data deletion request to{" "}
					<Link
						href="https://discord.com/users/534783899331461123"
						target="_blank"
						className="link"
					>
						@norowachi
					</Link>{" "}
					on Discord or{" "}
					<Link href="mailto:termination@norowa.dev" className="link">
						termination@norowa.dev
					</Link>
					.
				</p>
				<li className="text-xl font-semibold">Limitation Of Liability</li>
				<div className="ml-5">
					We are not responsible for any indirect, incidental or consequential
					damages, including but not limited to loss of profits, data, goodwill
					or any other intangible losses that may occur as a result of
					<ol className="list-[lower-roman] ml-10">
						<li>
							your access to or use of or inability to access or use our
							Service.
						</li>
						<li>any conduct or content of any third party on our Service.</li>
						<li>
							any content obtained from our Service or any unauthorized access
							to, use of or alteration of your transmissions or content, whether
							based on warranty, contract, tort (including negligence) or any
							other legal theory, whether or not we have been informed of the
							possibility of such damage, and even if a remedy set forth herein
							is found to have failed of its essential purpose.
						</li>
					</ol>
				</div>
				<li className="text-xl font-semibold">Disclaimer</li>
				<p className="ml-5">
					Your use of our Service is at your sole risk. Our Service is provided
					on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. Our
					Service is provided without warranties of any kind, whether express or
					implied, including, but not limited to, implied warranties of
					merchantability, fitness for a particular purpose, non-infringement or
					course of performance.
				</p>
				<li className="text-xl font-semibold">Changes</li>
				<p className="ml-5">
					We reserve the right, at our sole discretion, to modify or replace
					these Terms at any time. if a revision is material we will provide you
					at least 30 days advance notice (unless the updates are urgent). If
					you continue to use our Service after the changes have taken effect,
					it means that you agree to the changes. If you do not agree, you must
					stop using Gitbot.
				</p>
				<li className="text-xl font-semibold">Contact</li>
				<p className="ml-5">
					If you have any questions, please contact us at{" "}
					<Link href="mailto:inquiries@norowa.dev" className="link">
						inquiries@norowa.dev
					</Link>
					.
				</p>
			</ol>
		</div>
	);
}
