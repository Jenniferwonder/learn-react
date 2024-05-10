// ref: https://react.dev/learn/referencing-values-with-refs
// Done-20240320 Good
import { useRef, useState } from 'react'

export default function VideoRef() {
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef(null)

  function handleClick() {
    setIsPlaying(!isPlaying)
    if (!isPlaying)
      ref.current.play()
		 else
      ref.current.pause()
  }

  return (
    <>
      <h2>Video Ref</h2>
      <div>
        <button type="button" onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>

      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}
