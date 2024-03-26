// ref: https://stackoverflow.com/questions/74566649/createbrowserrouter-how-to-nest-child-routes-inside-another-route-that-itself-is/78214668#78214668
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import Sidebar from "./components/Sidebar.jsx";
import { pageLinks } from "./data/dummy";
import RouterApp, {
	loader as rootLoader,
	action as rootAction,
} from "./pages/routing/react-router/RouterApp.jsx";
import ErrorPage from "./pages/routing/react-router/ErrorPage.jsx";
import Contact, {
	loader as contactLoader,
} from "./pages/routing/react-router/Contact.jsx";
import EditContact, {
	action as editAction,
} from "./pages/routing/react-router/EditContact.jsx";
import { action as destroyAction } from "./pages/routing/react-router/Destroy.jsx";
import Index from "./pages/routing/react-router/Index";
import StateDemo from "./pages/hooks/state/useState/StateDemo.jsx";
import RefDemo from "./pages/hooks/ref/RefDemo.jsx";
import ReactBasicDemo from "./pages/react-basics/ReactBasicDemo";
import ThemeSettings from "./components/ThemeSettings.jsx";
import ReducerDemo from "./pages/hooks/state/useReducer/ReducerDemo";
import ContextDemo from "./pages/hooks/state/useContext/ContextDemo";
import EffectDemo from "./pages/hooks/effects/EffectDemo";
import MemoDemo from "./pages/hooks/memo/MemoDemo.jsx";

// ref: https://stackoverflow.com/questions/78098860/typeerror-cannot-destructure-property-basename-of-react2-usecontext-as
const AppLayout = () => {
	const {
		setCurrentColor,
		setCurrentMode,
		currentMode,
		activeMenu,
		currentColor,
		themeSettings,
		setThemeSettings,
	} = useStateContext();

	useEffect(() => {
		const currentThemeColor = localStorage.getItem("colorMode");
		const currentThemeMode = localStorage.getItem("themeMode");
		if (currentThemeColor && currentThemeMode) {
			setCurrentColor(currentThemeColor);
			setCurrentMode(currentThemeMode);
		}
	}, []);

	return (
		<>
			<div className={currentMode === "Dark" ? "dark" : ""}>
				<div className="flex relative dark:bg-main-dark-bg">
					<div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
						<button
							type="button"
							onClick={() => setThemeSettings(true)}
							style={{ background: currentColor, borderRadius: "50%" }}
							className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
						>
							<FiSettings />
						</button>
					</div>
					{activeMenu ? (
						<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
							<Sidebar />
						</div>
					) : (
						<div className="w-0 dark:bg-secondary-dark-bg">
							<Sidebar />
						</div>
					)}
					<div
						className={
							activeMenu
								? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
								: "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
						}
					>
						<div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
							{/* <Navbar /> */}
						</div>
						<div>{themeSettings && <ThemeSettings />}</div>
						<div className="m-6 ml-8">
							<div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-[#34373e] bg-white rounded-3xl">
								<Outlet />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/basic", element: <ReactBasicDemo /> },
			{ path: "/useState", element: <StateDemo /> },
			{ path: "/useReducer", element: <ReducerDemo /> },
			{ path: "/useContext", element: <ContextDemo /> },
			{ path: "/useRef", element: <RefDemo /> },
			{ path: "/useEffect", element: <EffectDemo /> },
			{ path: "/useMemo", element: <MemoDemo /> },
			{
				path: "/router-dom",
				element: <RouterApp />,
				loader: rootLoader,
				action: rootAction,
				children: [
					{ index: true, element: <Index /> },
					{
						path: "/router-dom/contacts/:contactId",
						element: <Contact />,
						loader: contactLoader,
					},
					// We want it to be rendered in the root route's outlet, so we made it a sibling to the existing child route
					{
						path: "/router-dom/contacts/:contactId/edit",
						element: <EditContact />,
						loader: contactLoader,
						action: editAction,
					},
					{
						path: "/router-dom/contacts/:contactId/destroy",
						action: destroyAction,
						errorElement: <div>Oops! There was an error.</div>,
					},
				],
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
