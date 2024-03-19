import "./App.css";
// 🏷️01-react-component
import AboutPage from "./01-react-component/AboutPage";
import Conditional from "./01-react-component/Conditional";
import Lists from "./01-react-component/Lists";
import Click from "./01-react-component/Click";
import UpdateClick from "./01-react-component/UpdateClick";
import ShareClickApp from "./01-react-component/ShareClickApp";

// 🏷️02-tic-tac-toe
import Game from "./02-tic-tac-toe/Game";

// 🏷️03-think-in-react
import ProductTableApp from "./03-think-in-react/product-table-app/ProductTableApp";

// 🏷️04-state-management/useState/add-interactivity
import Message from "./04-state-management/useState/add-interactivity/Message";
import Gallery from "./04-state-management/useState/add-interactivity/Gallery";
import Scores from "./04-state-management/useState/add-interactivity/Scores";
import InfoChange from "./04-state-management/useState/add-interactivity/InfoChange";
import ImmerInfoChange from "./04-state-management/useState/add-interactivity/ImmerInfoChange";

// 🏷️04-state-management/useState/react-to-input
import Quiz from "./04-state-management/useState/react-to-input/city-quiz/Quiz";
import RemoveBg from "./04-state-management/useState/react-to-input/remove-bg/RemoveBg";
import EditProfile from "./04-state-management/useState/react-to-input/edit-profile/EditProfile";
import MailSelect from "./04-state-management/useState/react-to-input/mail-select/MailSelect";
import MailHighlight from "./04-state-management/useState/react-to-input/mail-highlight/MailHighlight";

// 🏷️04-state-management/useState/state-structure
import TravelPlan from "./04-state-management/useState/state-structure/travel-plan/TravelPlan";

// 🏷️04-state-management/useState/share-state
import FilterList from "./04-state-management/useState/share-state/filter-list/FilterList";

// 🏷️04-state-management/useState/preserve-reset-state
import FancyCounter from "./04-state-management/useState/preserve-reset-state/score-board/FancyCounter";
import PauseCounter from "./04-state-management/useState/preserve-reset-state/score-board/PauseCounter";
import ScoreboardA from "./04-state-management/useState/preserve-reset-state/score-board/ScoreboardA";
import ScoreboardB from "./04-state-management/useState/preserve-reset-state/score-board/ScoreboardB";
import ChatForm from "./04-state-management/useState/preserve-reset-state/chat-form/ChatForm";

// 🏷️useContext
import NavApp from "./04-state-management/useContext/nav-message/NavApp";
// import HeadingApp from "./heading-context/HeadingApp";
// import PostApp from "./heading-post/PostApp";

// 🏷️04-state-management/useReducer/TaskApp
import TaskApp from "./04-state-management/useReducer/TaskApp/TaskApp";

// 🏷️Consume my-react-component-lib
// import { Button } from "@jenniferwonder/my-react-component-lib";

export default function App() {
	return (
		<>
			<h1>🏷️01-quick-start</h1>
			<blockquote>
				<i>JSX, Prop, useState Basics (Number, Boolean)</i>
			</blockquote>
			<h2>About Page</h2>
			<AboutPage />
			<h2>Lists</h2>
			<Lists />
			<h2>Click to alert</h2>
			<Click />
			<h2>Update Click</h2>
			<UpdateClick />
			<UpdateClick />
			<h2>Share Click</h2>
			<ShareClickApp />
			<h2>Conditional Rendering</h2>
			<Conditional />
			<hr></hr>
			<h1>🏷️02-tic-tac-toe</h1>
			<blockquote>
				<i>Prop, useState (Array, Boolean) </i>
			</blockquote>
			<Game />
			<hr></hr>
			<h1>🏷️03-think-in-react</h1>
			<blockquote>
				<i>Prop, useState (String, Boolean) </i>
			</blockquote>
			<h2>Product Table</h2>
			<ProductTableApp />
			<hr></hr>
			<h1>🏷️04-1-useState</h1>
			<blockquote>
				<i>-- Add interactivity --</i>
			</blockquote>
			<h2>Gallery</h2>
			<Gallery />
			<h2>Message</h2>
			<Message />
			<h2>Scores Updater</h2>
			<Scores />
			<h2>Info Change</h2>
			<InfoChange />
			<h2>Immer Info Change</h2>
			<ImmerInfoChange />
			<hr></hr>
			<blockquote>
				<i>-- React to input --</i>
			</blockquote>
			<Quiz />
			<h2>Click to Remove Background</h2>
			<RemoveBg />
			<h2>Edit Profile</h2>
			<EditProfile />
			<h2>Mail Highlight</h2>
			<MailHighlight />
			<h2>Mail Select</h2>
			<MailSelect />
			<hr></hr>
			<blockquote>
				<i>-- State Structure --</i>
			</blockquote>
			<h2>Travel Plan</h2>
			<TravelPlan />
			<hr></hr>
			<blockquote>
				<i>-- Share State --</i>
			</blockquote>
			<h2>Filter List</h2>
			<FilterList />
			<hr></hr>
			<blockquote>
				<i>-- Preserve & Reset State --</i>
			</blockquote>
			<h2>Fancy Counter</h2>
			<FancyCounter />
			<h2>Pause Counter</h2>
			<PauseCounter />
			<h2>Scoreboard</h2>
			<ScoreboardA />
			<ScoreboardB />
			<h2>Chat Form</h2>
			<ChatForm />
			<hr></hr>
			<h1>🏷️04-2-useReducer</h1>
			<h2>Task App</h2>
			<TaskApp />
			{/* <HeadingApp /> */}
			{/* <PostApp /> */}
			{/* <h1>🏷️component from my-react-component-lib</h1> */}
			{/* <Button label="Hello World"></Button> */}
			<hr></hr>
			<h1>🏷️04-3-useContext</h1>
			<NavApp />
		</>
	);
}
