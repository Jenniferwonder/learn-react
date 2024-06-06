// ref: https://react.dev/reference/react/useEffect
// Done-20240321 Good
import { useEffect, useRef, useState } from 'react'
import { MapWidget } from './map-widget.js'

export default function MapWidgetApp() {
  const [zoomLevel, setZoomLevel] = useState(0)
  return (
    <>
      <h2>Map Widget</h2>
      Zoom level:
      {' '}
      {zoomLevel}
      x
      <button type="button" onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
      <button type="button" onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
      <hr />
      <MapView zoomLevel={zoomLevel} />
    </>
  )
}

function MapView({ zoomLevel }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    if (mapRef.current === null)
      mapRef.current = new MapWidget(containerRef.current)

    const map = mapRef.current
    map.setZoom(zoomLevel)
  }, [zoomLevel])

  return <div style={{ width: 200, height: 200 }} ref={containerRef} />
}
