import { useEffect, useRef, useState } from 'react'

export default function Details({ title, children }) {
  const [isOpen, setIsOpen] = useState(true)
  const detailsRef = useRef(null)
  function toggleOpen(newValue) {
    newValue = detailsRef.current?.open
    if (newValue !== undefined && newValue !== isOpen) {
      // console.log('Setting isOpen', newValue)
      setIsOpen(newValue)
    }
  }

  useEffect(() => {
    detailsRef.current?.addEventListener('toggle', toggleOpen)

    return () => {
      detailsRef.current?.removeEventListener('toggle', toggleOpen)
    }
  }, [toggleOpen])

  return (
    <details open={isOpen} ref={detailsRef}>
      <summary className=" list-none cursor-pointer pl-3 pt-2 pb-1.5 my-1 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black dark:hover:bg-gray-400  ml-0">
        {title}
        <i className={`${isOpen ? 'i-mdi-chevron-down' : 'i-mdi-chevron-right'} ml-4 mb-1 text-xl`} />
      </summary>
      {children}
    </details>
  )
}
