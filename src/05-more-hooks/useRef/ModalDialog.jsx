// ref: https://react.dev/reference/react/useEffect
// Done-20240321 Good
import { useState, useEffect, useRef } from "react";

export default function ModalDialog() {
	const [show, setShow] = useState(false);
	return (
		<>
			<h2>Modal Dialog</h2>
			<button onClick={() => setShow(true)}>Open dialog</button>
			<Dialog isOpen={show}>
				Hello there!
				<br />
				<button
					onClick={() => {
						setShow(false);
					}}
				>
					Close
				</button>
			</Dialog>
		</>
	);
}

function Dialog({ isOpen, children }) {
	const ref = useRef();

	useEffect(() => {
		if (!isOpen) {
			return;
		}
		const dialog = ref.current;
		dialog.showModal();
		return () => {
			dialog.close();
		};
	}, [isOpen]);

	return <dialog ref={ref}>{children}</dialog>;
}
