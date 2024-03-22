// 🏷️useRef
import ClickRef from "./05-more-hooks/useRef/ClickRef";
import InputRef from "./05-more-hooks/useRef/InputRef";
import ListRef from "./05-more-hooks/useRef/ListRef";
import VideoRef from "./05-more-hooks/useRef/VideoRef";
import RemoveRef from "./05-more-hooks/useRef/RemoveRef";
import ForwardRef from "./05-more-hooks/useRef/ForwardRef";
import ModalDialog from "./05-more-hooks/useRef/ModalDialog";
// 🏷️ useImperativeHandle
import CommentApp from "./05-more-hooks/useImperativeHandle/CommentApp";

export default function RefDemo() {
	return (
		<div>
			<h1>🏷️05-1-A-useRef</h1>
			<ClickRef />
			<InputRef />
			<ListRef />
			<VideoRef />
			<ForwardRef />
			<RemoveRef />
			<ModalDialog />
			<h1>🏷️05-1-B-useImperativeHandle</h1>
			<CommentApp />
		</div>
	);
}
