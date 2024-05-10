// 🏷️ useEffect
import ChatRoomApp from './useEffect/ChatRoomApp'
import AnimationApp from './useEffect/AnimationApp'

import VisibleElement from './useEffect/VisibleElement'
import ChatRoomCustom from './useEffect/ChatRoomCustom'
import MapWidgetApp from './useEffect/MapWidgetApp'
import FetchBio from './useEffect/FetchBio'
// 🏷️ useLayoutEffect

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
  )
}
