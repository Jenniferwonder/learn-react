import { Outlet, redirect } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { getContacts, createContact } from "./contacts.js";
// import { getContacts, createContact } from "./contacts.js";
// import "./style.css";

export default function Route() {
	return (
		// <Outlet />
		<div id="route-root">
			<Navbar />
			<Sidebar />
			<div id="detail">
				<Outlet />
			</div>
		</div>
	);
}

export async function loader() {
	const contacts = await getContacts();
	return { contacts };
}

export async function action() {
	const contact = await createContact();
	// return { contact };
	return redirect(`/route/contacts/${contact.id}/edit`);
}
