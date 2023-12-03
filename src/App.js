// 01-quick-start
// import AboutPage from "./components/01-quick-start/AboutPage";
// import Conditional from "./components/01-quick-start/Conditional";
// import Lists from "./components/01-quick-start/Lists";
// import Click from "./components/01-quick-start/Click";
// import UpdateClick from "./components/01-quick-start/UpdateClick";
import { useState } from "react";
import ShareData from "./components/01-quick-start/ShareData";

// import PicBg from "./components/pic-bg/PicBg";
// import EditProfile from "./components/edit-profile/EditProfile";
// import MailClient from "./components/letter-highlight/MailClient";
// import MailSelect from "./components/letter-select/MailSelect";
// import TaskApp from "./components/task-app/TaskApp";
// import HeadingApp from "./components/heading-context/HeadingApp";
// import PostApp from "./components/heading-post/PostApp";

// 01-quick-start
// Update buttons (ShareData) together
export default function App() {
	const [count, setCount] = useState(0);
	function handleClick() {
		setCount(count + 1);
	}
	return (
		<div className="App">
			<ShareData count={count} onClick={handleClick} />
			<ShareData count={count} onClick={handleClick} />
		</div>
	);
}

// export default function App() {
// 	return (
// 		<div className="ButtonApp">
// 			<h1>Welcome to my app</h1>
// 			<AboutPage />
// 			<Conditional />
// 			<Lists />
// 			<Click />
// 			<UpdateClick />
// 			<UpdateClick />
// 			{/* <Game /> */}
// 			{/* <PicBg /> */}
// 			{/* <EditProfile /> */}
// 			{/* <MailClient /> */}
// 			{/* <MailSelect /> */}
// 			{/* <TaskApp /> */}
// 			{/* <HeadingApp /> */}
// 			{/* <PostApp /> */}
// 		</div>
// 	);
// }
