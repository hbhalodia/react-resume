import Bio from "./components/Bio";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";

function App() {
	return(
		<main className="mx-auto w-10/12 my-10">
			<Bio />
			<Resume />
			<ContactForm />
		</main>
	);
}

export default App;
