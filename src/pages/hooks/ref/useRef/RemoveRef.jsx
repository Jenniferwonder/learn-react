// ref: https://react.dev/learn/referencing-values-with-refs
// Done-20240320 Good
import { useRef, useState } from 'react'

export default function RemoveRef() {
  const [show, setShow] = useState(true)
  const ref = useRef(null)

  return (
    <div>
      <h2>Remove Ref</h2>
      <button
        type="button"
        onClick={() => {
				  setShow(!show)
        }}
      >
        Toggle with setState
      </button>
      <button
        type="button"
        onClick={() => {
				  ref.current.remove()
        }}
      >
        Remove from the DOM
      </button>
      {show && <p ref={ref}>Hello world</p>}
    </div>
  )
}
