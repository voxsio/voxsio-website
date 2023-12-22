import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Voxsio | Contact",
	description: "Get in touch! We'd love to hear from you."
};


const Page = () => (
	<div className="px-8 py-20 mb-16 min-h-[70vh]">
		<div className="max-w-[500px] mx-auto p-8 bg-light-500 border-2 border-light-700 rounded-lg">
			<p>
				Get in touch! We'd love to hear from you at <a href="mailto:chat@voxsio.com" className="underline hover:text-red-900">chat@voxsio.com</a>.
			</p>

			<p className="mt-8">
				Alternatively, come say hi in person! We are based in the Bayes Centre at the University of Edinburgh and we are always open for visitors.
			</p>
			
			<address className="not-italic mt-8">
				<strong>Voxsio Ltd</strong><br />
				Office 4.35<br />
				Bayes Centre<br />
				47 Potterrow<br />
				Edinburgh EH8 9BT
			</address>
		</div>
	</div>
);

export default Page;
