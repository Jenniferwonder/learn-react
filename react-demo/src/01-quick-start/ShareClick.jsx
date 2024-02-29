// Share data from the App
export default function ShareClick({ count, onClick }) {
	return <button onClick={onClick}>Clicked {count} times</button>;
}
