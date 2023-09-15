const Page = () => (
	<div className="px-8 py-20 mb-16 min-h-[70vh]">
		<div className="max-w-[500px] mx-auto p-8 bg-light-500 border-2 border-light-700 rounded-lg">
			<p>
				Get in touch! We'd love to hear from you at <a href="mailto:chat@ubok.app" className="underline hover:text-red-700">chat@ubok.app</a>.
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
