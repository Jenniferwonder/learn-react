import { useState } from 'react'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
  isLoggedIn: false,
}
function Button({ info, onClick }) {
  return <button type="button" onClick={onClick}>{info}</button>
}
// 🏷️Case-1: if...else
// export default function AboutPage() {
// 	let content;
// 	if (user.isLoggedIn) {
// 		content = <Image />;
// 	} else {
// 		content = <Default />;
// 	}
// 	return { content };
// }

// 🏷️Case-2: {test?a:b}
export default function Conditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(user.isLoggedIn)
  function handleClick() {
    setIsLoggedIn(!isLoggedIn)
  }
  return (
    <div>
      <h2>Conditional Rendering</h2>
      {isLoggedIn
        ? (
          <Image onLogOut={handleClick} />
          )
        : (
          <Default onLogIn={handleClick} />
          )}
    </div>
  )
}
function Image({ onLogOut }) {
  return (
    <>
      <h3>{user.name}</h3>
      <div>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={`Photo of ${user.name}`}
          style={{
					  width: user.imageSize,
					  height: user.imageSize,
          }}
        />
      </div>
      <Button info="Log out" onClick={onLogOut} />
    </>
  )
}
function Default({ onLogIn }) {
  return (
    <>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
      <Button info="Log in" onClick={onLogIn} />
    </>
  )
}
// 🏷️Case-3: &&
// export default function AboutPage() {
// 	return <div>{user.isLoggedIn && <Image />}</div>;
// }
