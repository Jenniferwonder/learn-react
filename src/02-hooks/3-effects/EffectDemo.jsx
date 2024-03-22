// 🏷️ useEffect
import ChatRoomApp from "./05-more-hooks/useEffect/ChatRoomApp";
import GlobalEvent from "./05-more-hooks/useEffect/GlobalEvent";
import AnimationApp from "./05-more-hooks/useEffect/AnimationApp";

import VisibleElement from "./05-more-hooks/useEffect/VisibleElement";
import ChatRoomCustom from "./05-more-hooks/useEffect/ChatRoomCustom";
import MapWidgetApp from "./05-more-hooks/useEffect/MapWidgetApp";
import FetchBio from "./05-more-hooks/useEffect/FetchBio";
import StateUpdate from "./05-more-hooks/useEffect/StateUpdate";
// 🏷️ useLayoutEffect
import ToolTipButton from "./05-more-hooks/useLayoutEffect/ToolTipButton";

export default function EffectDemo() {
	return (
		<div>
			<h1>🏷️05-2-A-useEffect</h1>
			<ChatRoomApp />
			{/* <GlobalEvent /> */}
			<AnimationApp />
			<VisibleElement />
			<ChatRoomCustom />
			<MapWidgetApp />
			<FetchBio />
			{/* <StateUpdate /> */}
			<h1>🏷️05-2-B-useLayoutEffect</h1>
			{/* <ToolTipButton /> */}
		</div>
	);
}
