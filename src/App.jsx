import "./App.css";
// 🏷️Consume my-react-component-lib
// import { Button } from "@jenniferwonder/my-react-component-lib";
// 🏷️01-react-component
import AboutPage from "./01-react-component/AboutPage";
import Conditional from "./01-react-component/Conditional";
import Lists from "./01-react-component/Lists";
import ClickAlert from "./01-react-component/ClickAlert";
import UpdateClick from "./01-react-component/UpdateClick";
import ShareClickApp from "./01-react-component/ShareClickApp";
import ImpureFun from "./01-react-component/ImpureFun";
import PureFun from "./01-react-component/PureFun";

// 🏷️02-tic-tac-toe
import Game from "./02-tic-tac-toe/Game";

// 🏷️03-think-in-react
import ProductTableApp from "./03-think-in-react/product-table-app/ProductTableApp";

// 🏷️04-useState
import Message from "./04-state-management/useState/add-interactivity/Message";
import Gallery from "./04-state-management/useState/add-interactivity/Gallery";
import Scores from "./04-state-management/useState/add-interactivity/Scores";
import InfoChange from "./04-state-management/useState/add-interactivity/InfoChange";
import ImmerInfoChange from "./04-state-management/useState/add-interactivity/ImmerInfoChange";

import Quiz from "./04-state-management/useState/react-to-input/city-quiz/Quiz";
import RemoveBg from "./04-state-management/useState/react-to-input/remove-bg/RemoveBg";
import EditProfile from "./04-state-management/useState/react-to-input/edit-profile/EditProfile";
import MailSelect from "./04-state-management/useState/react-to-input/mail-select/MailSelect";
import MailHighlight from "./04-state-management/useState/react-to-input/mail-highlight/MailHighlight";

import TravelPlan from "./04-state-management/useState/state-structure/travel-plan/TravelPlan";

import FilterList from "./04-state-management/useState/share-state/filter-list/FilterList";

import FancyCounter from "./04-state-management/useState/preserve-reset-state/score-board/FancyCounter";
import PauseCounter from "./04-state-management/useState/preserve-reset-state/score-board/PauseCounter";
import ScoreboardA from "./04-state-management/useState/preserve-reset-state/score-board/ScoreboardA";
import ScoreboardB from "./04-state-management/useState/preserve-reset-state/score-board/ScoreboardB";
import ChatForm from "./04-state-management/useState/preserve-reset-state/chat-form/ChatForm";
import TaskStateApp from "./04-state-management/useReducer/TaskApp/TaskStateApp";

// 🏷️04-useReducer
import TaskApp from "./04-state-management/useReducer/TaskApp/TaskApp";
import CountReducerApp from "./04-state-management/useReducer/CountReducerApp";
import DualCount from "./04-state-management/useReducer/DualCount";
import TextReducer from "./04-state-management/useReducer/TextReducer";

// 🏷️useContext
import NavApp from "./04-state-management/useContext/nav-message/NavApp";
// import HeadingApp from "./heading-context/HeadingApp";
// import PostApp from "./heading-post/PostApp";

// 🏷️useRef
import ClickRef from "./05-more-hooks/useRef/ClickRef";
import InputRef from "./05-more-hooks/useRef/InputRef";
import ListRef from "./05-more-hooks/useRef/ListRef";
import VideoRef from "./05-more-hooks/useRef/VideoRef";
import RemoveRef from "./05-more-hooks/useRef/RemoveRef";
import ForwardRef from "./05-more-hooks/useRef/ForwardRef";

export default function App() {
	return (
		<>
			<h1>🏷️01-react-component</h1>
			<AboutPage />
			<Lists />
			<ClickAlert />
			<UpdateClick />
			<ShareClickApp />
			<Conditional />
			<ImpureFun />
			<PureFun />
			<hr></hr>
			<h1>🏷️02-tic-tac-toe</h1>
			<Game />
			<hr></hr>
			<h1>🏷️03-think-in-react</h1>
			<ProductTableApp />
			<hr></hr>
			<h1>🏷️04-1-useState</h1>
			<Gallery />
			<Message />
			<Scores />
			<InfoChange />
			<ImmerInfoChange />
			<Quiz />
			<RemoveBg />
			<EditProfile />
			<MailHighlight />
			<MailSelect />
			<TravelPlan />
			<FilterList />
			<FancyCounter />
			<PauseCounter />
			<ScoreboardA />
			<ScoreboardB />
			<ChatForm />
			<TaskStateApp />
			<hr></hr>
			<h1>🏷️04-2-useReducer</h1>
			<TaskApp />
			<CountReducerApp />
			<DualCount />
			<TextReducer />
			{/* <HeadingApp /> */}
			{/* <PostApp /> */}
			{/* <h1>🏷️component from my-react-component-lib</h1> */}
			{/* <Button label="Hello World"></Button> */}
			<hr></hr>
			<h1>🏷️04-3-useContext</h1>
			<NavApp />
			<hr></hr>
			<h1>🏷️05-1-useRef</h1>
			<ClickRef />
			<InputRef />
			<ListRef />
			<VideoRef />
			<ForwardRef />
			<RemoveRef />
		</>
	);
}
