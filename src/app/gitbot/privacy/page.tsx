import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Privacy Policy",
};

export default function Privacy() {
	return (
		<div>
			<h1 className="font-black text-4xl text-center my-8">Privacy Policy</h1>
			<ol className="text-lg px-[6%] list-decimal mb-10">
				<h2 className="text-xl font-semibold">Effective: June 30, 2024</h2>
				<h2 className="text-xl font-semibold">Last Updated: June 30, 2024</h2>
				<li className="text-xl font-semibold">Information We Collect</li>
				<p className="ml-5">
					We collect information from you when you link your Github Account,
					which includes your Github username and other public information. We
					also collect information from you when you use our Service, such as
					your Discord username and user ID, Github Repositories and Users you
					search for or use, and any other information you provide to us. Some
					of which may be collected but not stored.
				</p>
				<li className="text-xl font-semibold">How We Use Your Information</li>
				<p className="ml-5">
					We use the information we collect from you to provide our Service to
					you, most notably to provide you with information about the Github
					Requests you send. We do not use your information for any other
					purposes, that is; no marketing or personalization.
				</p>
				<li className="text-xl font-semibold">Cookies</li>
				<p className="ml-5">
					We use cookies to store information about your preferences and to
					allow us to provide you with a better experience when using our
					Service. We do not use cookies for any other purposes.
					<br />
					<strong>Third Party Cookies:</strong>
					<br />
					We use Cloudflare to protect our Service from malicious attacks. They
					may use cookies to protect our Service. you can read more about their
					cookies{" "}
					<Link
						href="https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/"
						className="link"
						target="_blank"
					>
						here
					</Link>
				</p>
				<li className="text-xl font-semibold">Information Sharing</li>
				<p className="ml-5">
					We do not share your information with any third parties outside of
					Discord or Github as they&apos;re essential for the Service&apos;s
					functionality. We do not sell or trade your information to any third
					parties.
				</p>
				<li className="text-xl font-semibold">Security</li>
				<p className="ml-5">
					We take security seriously and take precautions to protect your
					information. When you submit sensitive information via the Service,
					your information is protected both online and offline. We also use{" "}
					<Link
						href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"
						className="link"
						target="_blank"
					>
						Advanced Encryption Standard
					</Link>{" "}
					to protect your sensitive information at rest, and{" "}
					<Link
						href="https://en.wikipedia.org/wiki/HTTPS"
						className="link"
						target="_blank"
					>
						HTTPS
					</Link>{" "}
					to protect your information in transit.
				</p>
				<li className="text-xl font-semibold">Changes to This Policy</li>
				<p className="ml-5">
					We may update our Privacy Policy from time to time. We will notify you
					of any changes by posting the new Privacy Policy on this page. You are
					advised to review this Privacy Policy periodically for any changes.
					Changes to this Privacy Policy are effective according to the
					&quot;Effective&quot; date specified at the start of the page.
				</p>
				<li className="text-xl font-semibold">Your Consent</li>
				<p className="ml-5">
					By using our Service, you consent to our Privacy Policy and agree to
					its terms. If you do not agree to our Privacy Policy, you may not use
					our Service.
				</p>
				<li className="text-xl font-semibold">Children&apos;s Privacy</li>
				<p className="ml-5">
					Our Service does not address anyone under the age of 13. We do not
					knowingly collect personal identifiable information from children
					under 13. In the case we discover that a child under 13 has provided
					us with personal information, we immediately delete this from our
					servers. If you are a parent or guardian and you are aware that your
					child has provided us with personal information, please contact us so
					that we will be able to do necessary actions.
				</p>
				<li className="text-xl font-semibold">Data Deletion</li>
				<p className="ml-5">
					You may request to delete your data at any time by contacting us at{" "}
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
					</Link>{" "}
					. We will delete your data within 30 days of receiving your request,
					but do note we have the right to request verification of your identity
					before responding to such requests.
				</p>
				<li className="text-xl font-semibold">GDPR Data Protection Rights</li>
				<div className="ml-5">
					We would like to make sure you are fully aware of all of your data
					protection rights. Every user is entitled to the following:
					<ol className="ml-10 list-[lower-roman]">
						<li>
							The right to access – You have the right to request copies of your
							personal data. We may charge you a small fee for this service.
						</li>
						<li>
							The right to rectification – You have the right to request that we
							correct any information you believe is inaccurate. You also have
							the right to request that we complete the information you believe
							is incomplete.
						</li>
						<li>
							The right to erasure – You have the right to request that we erase
							your personal data, under certain conditions.
						</li>
						<li>
							The right to restrict processing – You have the right to request
							that we restrict the processing of your personal data, under
							certain conditions.
						</li>
						<li>
							The right to object to processing – You have the right to object
							to our processing of your personal data, under certain conditions.
						</li>
						<li>
							The right to data portability – You have the right to request that
							we transfer the data that we have collected to another
							organization, or directly to you, under certain conditions.
						</li>
					</ol>
					If you make a request, we have one month to respond to you. If you
					would like to exercise any of these rights, please contact us, but do
					note we have the right to request verification of your identity before
					responding to such requests.
				</div>
				<li className="text-xl font-semibold">
					CCPA Privacy Rights (Do Not Sell My Personal Information)
				</li>
				<div className="ml-5">
					Under the CCPA, among other rights, California consumers have the
					right to:
					<ol className="ml-10 list-[lower-roman]">
						<li>
							Request that a business that collects a consumer&apos;s personal
							data disclose the categories and specific pieces of personal data
							that a business has collected about consumers.
						</li>
						<li>
							Request that a business delete any personal data about the
							consumer that a business has collected.
						</li>
						<li>
							Request that a business that sells a consumer&apos;s personal
							data, not sell the consumer&apos;s personal data.
						</li>
					</ol>
					If you make a request, we have one month to respond to you. If you
					would like to exercise any of these rights, please contact us, but do
					note we have the right to request verification of your identity before
					responding to such requests.
				</div>
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
