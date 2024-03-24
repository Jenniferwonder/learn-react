import ReactBasicDemo from "./01-react-basics/ReactBasicDemo";
import { Outlet } from "react-router-dom";
export default function App() {
	return (
		<div>
			<Outlet />
			<ReactBasicDemo />
		</div>
	);
}
