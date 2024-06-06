import AboutPage from './AboutPage'
import Conditional from './Conditional'
import Lists from './Lists'
import ClickAlert from './ClickAlert'
import UpdateClick from './UpdateClick'
import ShareClickApp from './ShareClickApp'
import ImpureFun from './ImpureFun'
import PureFun from './PureFun'

export default function ReactBasicDemo() {
  return (
    <>
      {/* <Header category={"Basics"} title={"React Basics"} /> */}
      <h1>🏷️01 React Basics</h1>
      <AboutPage />
      <Lists />
      <ClickAlert />
      <UpdateClick />
      <ShareClickApp />
      <Conditional />
      <ImpureFun />
      <PureFun />
      <hr />
    </>
  )
}
