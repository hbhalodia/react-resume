import React from "react";

export default function ContactForm() {

	const [name, setName] = React.useState( '' );
	const [email, setEmail] = React.useState( '' );
	const [message, setMessage] = React.useState( '' );

	function encode( data ) {
		return Object.keys( data )
		.map(
			( key ) => encodeURIComponent( key ) + "=" + encodeURIComponent( data[ key ] )
		).join( '&' );
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		fetch( "/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode( { "form-name": "contact", name, email, message } ),
		} )
		.then(
			() => {
				alert( 'Contacted Success!!' )
				setName( '' );
				setEmail( '' );
				setMessage( '' );
			}
		).catch( ( error ) => alert( error ) );
	}


	return (
		<div className="grid grid-cols-1 bg-slate-400 py-10 px-4 rounded-2xl">
			<h1 className="my-10 text-center font-Tungsten text-Tungsten-heading-font font-bold">
				Want to have a chat?
			</h1>
			<form
				netlify
				className="my-10 mx-20 flex flex-row gap-10 flex-wrap mobile:mx-0"
				onSubmit={handleFormSubmit}
			>
				<div className="flex flex-col flex-1">
					<label htmlFor="name" className="font-semibold text-description-font font-HelveticaNeueLTPro-BdCn py-2">Enter Name</label>
					<input
						type="text"
						id="name"
						name="name"
						className="rounded-md outline-none bg-slate-200 p-2 border border-gray-700 focus:border-green-500 focus:ring-0 focus:ring-green-500"
						onChange={ (e) => setName( e.target.value ) }
					/>
				</div>
				<div className="flex flex-col flex-1">
					<label htmlFor="email" className="font-semibold text-description-font font-HelveticaNeueLTPro-BdCn py-2">Enter Email</label>
					<input
						type="email"
						id="email"
						name="email"
						className="rounded-md outline-none bg-slate-200 p-2 border border-gray-700 focus:border-green-500 focus:ring-0 focus:ring-green-500"
						onChange={ (e) => setEmail( e.target.value ) }
					/>
				</div>
				<div className="flex flex-col flex-[0_0_100%]">
					<label htmlFor="message" className="font-semibold text-description-font font-HelveticaNeueLTPro-BdCn py-2">Add a chat</label>
					<textarea
						type="text"
						id="message"
						name="message"
						rows={5}
						className="rounded-md outline-none bg-slate-200 p-2 border border-gray-700 focus:border-green-500 focus:ring-0 focus:ring-green-500"
						onChange={ (e) => setMessage( e.target.value ) }
					/>
				</div>
				<div className="text-center mx-auto">
					<button
						type="submit"
						className="text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};