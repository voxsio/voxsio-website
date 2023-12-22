import { Metadata } from "next";
import Image from "next/image";
import cso from "../logos/cso.webp";
import nhsgrampian from "../logos/nhsgrampian.webp";
import nhshighland from "../logos/nhshighland.svg";
import nhstayside from "../logos/nhstayside.webp";


export const metadata: Metadata = {
	title: "Voxsio | NHS Feasibility Study",
	description: "Evaluating a digital application designed to support young people with functional gastrointestinal disorders: a feasibility study."
};


const Page = () => (
	<div className="px-8 pt-20 pb-60">
		<div className="max-w-[650px] mx-auto">
			<div className="[&>*]:h-[60px] [&>*]:w-auto [&>*]:mr-4 flex flex-row flex-wrap justify-start">
				<Image src={nhsgrampian} alt="NHS Grampian logo" />
				<Image src={nhstayside} alt="NHS Tayside logo" />
				<Image src={nhshighland} alt="NHS Highland logo" />
				<Image src={cso} alt="Chief Scientist Office logo" className="md:ml-auto mr-0" />
			</div>

			<h1 className="mt-8 mb-12 text-3xl">
				Evaluating a digital application designed to support young people with functional gastrointestinal disorders: a feasibility study.
			</h1>

			<h2 className="font-bold text-2xl mb-2">
				FAQ for trial participants
			</h2>

			<details>
				<summary>How do I download the UB-OK app?</summary>
				You can download the UB-OK app from the <a href="https://apps.apple.com/gb/app/ub-ok/id6443469165" rel="noopener noreferrer" target="_blank" className="underline hover:text-red-900">Apple App Store</a> for iPhones and the <a href="https://play.google.com/store/apps/details?id=com.ubok.ubok" rel="noopener noreferrer" target="_blank" className="underline hover:text-red-900">Google Play Store</a> for Android phones.
			</details>

			<details>
				<summary>How do I get a code to use the app?</summary>
				The app is only available to people taking part in the feasibility study in NHS Grampian, Tayside, & Highland. If you have agreed to take part in the study your clinician will give you an access code.
			</details>

			<details>
				<summary>How can I report a problem with the UB-OK app not working?</summary>
				Please email <a href="mailto:chat@voxsio.com" className="underline hover:text-red-900">chat@voxsio.com</a> and describe the details of your issue.
			</details>

			<details>
				<summary>How can I get help using the UB-OK app?</summary>
				Please email <a href="mailto:chat@voxsio.com" className="underline hover:text-red-900">chat@voxsio.com</a> and we will get back to you as soon as we can.
			</details>

			<details>
				<summary>How can I get help for how I'm feeling?</summary>
				You have a few options:
				<ol>
					<li>You can contact the person that you signed up for the trial with</li>
					<li>You can call or contact <a href="https://www.nhs24.scot/" rel="noopener noreferrer" target="_blank" className="underline hover:text-red-900">NHS 24</a></li>
					<li>You can access the Help page in the UB-OK app, which has a directory of organisations that you can contact for specific issues</li>
				</ol>
			</details>

			<h2 className="font-bold text-2xl mt-16 mb-2">
				Study information
			</h2>
			<p>
				Sponsor: NHS Grampian<br />
				Funder: Chief Scientist Office<br />
				Chief Investigator: Dr Andrew Keen
			</p>

			<h3 className="mt-8">Background</h3>
			<p>
				Many young people experience uncomfortable sensations in their stomach such as pain, nausea and increased toileting, yet have no underlying medical disease. These conditions are commonly called functional gastrointestinal disorders. Functional gastrointestinal disorders can cause substantial difficulties for young people, and their families. These challenges include poor emotional wellbeing, school absence, disengagement from peers and hobbies, as well as regular attendance at appointments in primary and secondary care services. As there is no underlying disease, there are no agreed effective drug treatments.
			</p>
			<p className="mt-2">
				There is systematic review evidence that cognitive behavioural therapy is an effective treatment. However, overall, few young people have access to psychological interventions designed to help those with this specific difficulty. There is a substantial workforce challenge which constrains the ability of healthcare organisations to deliver face-to-face psychological therapy. Moreover, whilst there is empirical evidence that digital products such as computerised cognitive behaviour therapy are effective, we have no products on the market tailored for the challenges of this population. 
			</p>
			<p className="mt-2">
				The aim of this project is to establish if it is possible to run a definitive, multi-site randomised controlled trial exploring whether a specially designed interactive digital health app based on cognitive behavioural approaches can help young people more skilfully manage their symptoms, improve emotional wellbeing and help them engage meaningfully in their lives.
			</p>

			<h3 className="mt-8">Process for participants</h3>
			<ol>
				<li className="mt-0">After consenting / assenting you will be asked to complete a small number of questionnaires about your wellbeing and about how often you have used health care services recently.</li>
				<li>You will be randomly allocated one of two groups. One group will be able to access the digital application immediately whilst the other group will be able to use it in 3 months' time.</li>
				<li>Whilst you have access to the digital app you can use it as much or as little as you like, when you like. 3 months after you completed the first small number of questionnaires, we will ask you to complete them again, so we can see what, if anything, has changed.</li>
				<li>If you were in the group who had access to the digital app straight after you consented, we may ask you along for a short conversation with one of our researchers so you can tell us in more detail what you thought about it.</li>
			</ol>

			<h3 className="mt-8">Ethical conduct of the study</h3>
			<p>The study will be conducted in accordance with the principles of good clinical practice (GCP). In addition to Sponsorship approval, a favourable ethical opinion will be obtained from the appropriate REC and appropriate NHS R&D approval(s) will be obtained prior to commencement of the study.</p>
			
			<h3 className="mt-8">Confidentiality</h3>
			<p>All laboratory specimens, evaluation forms, reports, and other records will be identified in a manner designed to maintain participant confidentiality. All records will be kept in a secure storage area with limited access to study staff only. Clinical information will not be released without the written permission of the participant, except as necessary for monitoring and auditing by the Sponsor or its designee. The CI and study staff involved with this study will not disclose or use for any purpose other than performance of the study, any data, record, or other unpublished, confidential information disclosed to those individuals for the purpose of the study. Prior written agreement from the Sponsor or its designee will be obtained for the disclosure of any said confidential information to other Parties.</p>

			<h3 className="mt-8">Data protection</h3>
			<p>The CI and study staff involved with this project will comply with the requirements of the General Data Protection Regulations (GDPR) and the Data Protection Act 2018. The HRA recommended wording to fulfil transparency requirements under the GDPR for health and care research has been included in the PIS. The CI and study staff will also adhere, if appropriate, to the current version of the NHS Scotland Code of Practice on Protecting Patient Confidentiality. Access to collated participant data will be restricted to the CI and appropriate study staff. Computers used to collate the data will have limited access measures via usernames and passwords. Published results will not contain any personal data that could allow identification of individual participants.</p>

			<h3 className="mt-8">Insurance and indemnity</h3>
			<p>Grampian Health Board is Sponsoring the study.</p>
			<ol>
				<li>Insurance: Grampian Health Board will maintain its membership of the Clinical Negligence and Other Risks Insurance Scheme (“CNORIS”) which covers the legal liability of Grampian in relation to the study.</li>
				<li>Indemnity: The Sponsor does not provide study participants with indemnity in relation to participation in the Study but has insurance for legal liability as described above.</li>
			</ol>
		</div>
	</div>
);

export default Page;
