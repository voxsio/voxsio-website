import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Voxsio | Modern slavery statement",
	description: "The Voxsio modern slavery and human trafficking statement"
};


const Page = () => (
	<>
		<section className="max-w-[800px] mx-auto mt-12 px-16">
			<h1 className="text-4xl leading-snug">
				Modern slavery and human trafficking statement
			</h1>
		</section>

		<section className="-mt-14 pt-28 pb-10">
			<div className="max-w-[800px] mx-auto bg-light-500 border-2 border-light-700 px-14 pt-8 pb-5 rounded-xl [&>p]:mb-6 [&>ul]:mb-6 [&>ol]:mb-6">
				<p>
					Here are the steps Voxsio has taken and continues to take to understand and minimise the potential risk of modern slavery in its business and supply chains. This statement is published in line with section 54(1) of the Modern Slavery Act 2015.
				</p>

				<h3>About Voxsio</h3>
				<p>
					Voxsio works closely with NHS clinicians to develop apps to support people’s physical and mental health and wellbeing.A Privacy Policy is a statement from us to you, that describes how we collect, use, keep and share the information we hold about you. The Privacy Policy is part of our commitment to making sure that we process your personal information (sometimes called data) fairly and lawfully.
				</p>

				<h3>Our commitment to the principles of the Modern Slavery Act 2015</h3>
				<p>
					Voxsio is committed to the principles of the Modern Slavery Act 2015 and the abolition of modern slavery and human trafficking.
				</p>
				<p>
					As an equal opportunities employer, we're committed to creating and ensuring a non-discriminatory and respectful working environment for our staff. We want all our staff to feel confident that they can expose wrongdoing without any risk to themselves.
				</p>
				<p>
					Our recruitment and people management processes are designed to ensure that all prospective employees are legally entitled to work in the UK and to safeguard employees from any abuse or coercion.
				</p>
				<p>
					We do not enter into business with any organisation, in the UK or abroad, which knowingly supports or is found to be involved in slavery, servitude, or forced or compulsory labour.
				</p>

				<h3>Our supply chain</h3>
				<p>
					Our supply chains include large and small technology suppliers based in the UK and worldwide, IT and other office equipment providers, professional services from our lawyers, accountants and other advisors, and office facilities. We are committed to ensuring that there is no modern slavery or human trafficking in our supply chains or in any part of our business.
				</p>
				<p>
					Voxsio is not aware of any slavery or human trafficking in any part of our business or supply chain, and no issues were raised during the year ending 31 August 2024. We continue to monitor the safety and security of our platforms and business.
				</p>
				<p>
					This statement will be reviewed and updated every year.
				</p>
			</div>
		</section>
	</>
);

export default Page;
