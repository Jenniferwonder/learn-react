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
			<h1>Welcome to 01-quick-start</h1>
			<h2>About Page</h2>
			<AboutPage />
			{/* <Conditional /> */}
			<h2>Lists</h2>
			<Lists />
			<h2>Click to alert</h2>
			<Click />
			<h2>Update Click</h2>
			<UpdateClick />
			<UpdateClick />
			<h2>Share Click</h2>
			<ShareClickApp />
			<h1>Welcome to 02-tic-tac-toe</h1>
			<Game />
			<h1>Welcome to 03-think-in-react</h1>
			<ProductTableApp />
			<h1>Welcome to 04-state-management/useState</h1>
			<h2>add-interactivity</h2>
			<Gallery />
			<Message />
			<Scores />
			<InfoChange />
			<ImmerInfoChange />
			<h2>react-to-input</h2>
			<Quiz />
			<RemoveBg />
			<EditProfile />
			<MailHighlight />
			<MailSelect />
			<h2>state-structure</h2>
			<TravelPlan />
			<h2>share-state</h2>
			<FilterList />
			<h2>preserve-reset-state</h2>
			<FancyCounter />
			<PauseCounter />
			<ScoreboardA />
			<ScoreboardB />
			<ChatForm />
			<h1>Welcome to 04-state-management/useReducer</h1>
			<TaskApp />
			{/* <HeadingApp /> */}
			{/* <PostApp /> */}
			{/* <h1>Welcome to component from my-react-component-lib</h1> */}
			{/* <Button label="Hello World"></Button> */}
			<h1>Welcome to 04-state-management/useContext</h1>
			<NavApp />
		</>
	);
}
