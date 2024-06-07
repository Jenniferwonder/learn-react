// ref: https://stackoverflow.com/questions/25036935/get-anchor-tag-to-open-in-new-window
export default function IconRound({ children }) {
  return (
    <div className="block p-2 mr-3 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60">
      {children}
    </div>
  )
}
