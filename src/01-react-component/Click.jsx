// Responding to events
export default function Click() {
	function handleClick() {
		alert("You clicked me!");
	}

	return <button onClick={handleClick}>Click me</button>;
}
