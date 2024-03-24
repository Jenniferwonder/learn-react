// import "./style.css";
import { Form } from "react-router-dom";
export default function Navbar() {
	return (
		<div className="flex">
			<form id="search-form" role="search" className="">
				<input
					id="q"
					aria-label="Search contacts"
					placeholder="Search"
					type="search"
					name="q"
					className="pl-3 h-8 m-2 h-10 rounded-md"
				/>
				<div id="search-spinner" aria-hidden hidden={true} />
				<div className="sr-only" aria-live="polite"></div>
			</form>
			<Form method="post">
				<button type="submit" className=" bg-gray-500">
					New
				</button>
			</Form>
		</div>
	);
}
