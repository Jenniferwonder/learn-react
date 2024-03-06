const user = {
	name: "Hedy Lamarr",
	imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
	imageSize: 90,
	isLoggedIn: true,
};
function Image() {
	return (
		<>
			<h1>{user.name}</h1>
			<img
				className="avatar"
				src={user.imageUrl}
				alt={"Photo of " + user.name}
				style={{
					width: user.imageSize,
					height: user.imageSize,
				}}
			/>
		</>
	);
}
function Default() {
	return (
		<>
			<p>
				Hello there.
				<br />
				How do you do?
			</p>
			<button>I'm a button</button>
		</>
	);
}

// Case-1: if...else
// export default function AboutPage() {
// 	let content;
// 	if (user.isLoggedIn) {
// 		content = <Image />;
// 	} else {
// 		content = <Default />;
// 	}
// 	return { content };
// }

// Case-2: {test?a:b}
export default function AboutPage() {
	return (
	<div>
		{user.isLoggedIn ? (
			<Image />
		) : (
			<Default />
		)}
	</div>
	);
}

// Case-3: &&
// export default function AboutPage() {
// 	return <div>{user.isLoggedIn && <Image />}</div>;
// }
