function Button({ children,
}) {
  return (
    <button
      type="button"
      className="dark:bg-[gray] p-1 m-2 font-medium rounded-lg bg-[#fafbfb] cursor-pointer text-base border-2  shadow-md border-solid border-transparent transition duration-[.25s] hover:drop-shadow-xl active:translate-y-1;"
    >
      {children}
    </button>
  )
}

export default Button
