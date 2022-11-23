export default function CommandText({ command }) {
  return (
    <code
      className="group relative ml-4 cursor-pointer rounded-md border px-4 font-mono"
      onClick={() => {
        navigator.clipboard.writeText(command)
      }}
    >
      {command}
      <div className="z-100 max-w-46 invisible absolute -top-10 left-2/4 w-max rounded-lg bg-black px-2 py-1 text-center text-sm text-white before:absolute before:-bottom-4 before:left-4 before:border-8 before:border-transparent before:border-t-black group-hover:visible">
        Click to Copy
      </div>
    </code>
  )
}
