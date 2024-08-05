import { Metadata } from "next";
import Image from 'next/image';


export const metadata: Metadata = {
	title: "Voxsio | Privacy policy",
	description: "The Voxsio Privacy Policy"
};


const Page = () => (
	<>
		<section className="mt-12 lg:flex items-center justify-center">
			<Image
				src="/images/ubee-safe.webp"
				alt="Our mascot Ubee leaning on a locked chest and giving a thumbs up"
				width={300}
				height={300}
				className="mx-auto lg:mx-0"
				priority
			/>
			<div className="lg:w-96 lg:ml-20">
				<h1 className="text-4xl leading-snug text-center lg:text-left">
					Privacy policy
				</h1>
			</div>
		</section>

		<section className="-mt-14 pt-28 pb-10">
			<div className="max-w-[800px] mx-auto bg-light-500 border-2 border-light-700 px-14 pt-8 pb-5 rounded-xl [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6">
				<h3>Who are we?</h3>
				<p>
					Voxsio Ltd developed UB-OK to help young people manage their mental and physical health.
				</p>

				<h3>What is a Privacy Policy?</h3>
				<p>
					A Privacy Policy is a statement from us to you, that describes how we collect, use, keep and share the information we hold about you. The Privacy Policy is part of our commitment to making sure that we process your personal information (sometimes called data) fairly and lawfully.
				</p>

				<h3>Why do I need to know what a Privacy Policy is?</h3>
				<p>
					We believe that it is important for you to understand how we:
				</p>
				<ol className="list-decimal ml-8 my-2">
					<li>Protect your personal and confidential information</li>
					<li>Take care to meet all legal and regulatory responsibilities</li>
					<li>Make sure that you understand the legal framework protecting your data and the choices that you have about how your data is used</li>
				</ol>
				<p>
					This policy explains the choices that you can make about the way in which we use your information and how you have the right to change your mind at any time.
				</p>

				<h3>What information do we collect and hold about you?</h3>
				<p>
					Voxsio collect and process several different types of information:
				</p>
				<ol className="list-decimal ml-8 my-2">
					<li>You set up a username on the app, which is held locally on your device and is not held by, known to, or processed by Voxsio</li>
					<li>We collect the conversations that you have with the app, without information that identifies you, including the answers that you give, and use them to gain insight into how the app is being used</li>
					<li>We collect aggregated statistical information about groups of individuals, and then combine this to show general trends</li>
				</ol>
				<p>
					When we need to use information about you we will only use the minimum amount of information necessary and never share any confidential information unless we have first gained your consent or if it is required in order to keep you or someone else safe.
				</p>

				<h3>Our Commitment to Data Privacy and Confidentiality</h3>
				<p>We are committed to protecting your privacy and will only process personal confidential data in accordance with the Data Protection Act 1998, the General Data Protection Regulation (2018), the Common Law Duty of Confidentiality and the Human Rights Act 1998.</p>
				<p>Everyone working for Voxsio has a legal duty to keep information about you confidential.</p>
				<p>All identifiable information that we hold about you will be held securely and confidentially. We use administrative and technical controls to do this. We use strict controls to ensure that only authorised staff are able to see information that identifies you. Only a limited number of authorised staff have access to information that identifies you where it is appropriate to their role and is strictly on a need-to-know basis.</p>
				<p>We will never sell any information about you.</p>

				<h3>Legal Obligations</h3>
				<p>In the circumstances where we are <u>required</u> to use personal identifiable information, we will only do this if:</p>
				<ul className="list-disc ml-8">
					<li>We have written consent from you to use your information for a specific purpose</li>
					<li>In order to keep you or someone else safe</li>
					<li>There is a legal requirement for us to use or provide information e.g. a formal court order or subpoena</li>
				</ul>

				<h3>Your Rights</h3>
				<p>You have certain legal rights, including a right to have your information processed fairly and lawfully and a right to access any identifiable information we hold about you.</p>
				<p>You have the right to privacy and to expect Voxsio to keep your information confidential and secure.</p>
				<p>You also have a right to request that your confidential information is not used beyond your use of the app and to have your objections considered.</p>
				<p>If we do hold identifiable information about you and you have any queries about the information we hold, please contact the Information Governance Officer using the details below:</p>
				<p className="pl-8">IG Officer, Voxsio Ltd, Bayes Centre, 47 Potterrow, Edinburgh EH8 9BT, Scotland</p>
				<p><i>You have the right to refuse/withdraw consent to information sharing at any time by using the contact details above. If there are any consequences to withdrawing consent these will be fully explained and discussed with you first.</i></p>
				<p>If you have any concerns as to how your data is processed please email us at <a href="mailto:chat@voxsio.com" className="underline hover:text-red-700">chat@voxsio.com</a>.</p>
			</div>
		</section>
	</>
);

export default Page;
