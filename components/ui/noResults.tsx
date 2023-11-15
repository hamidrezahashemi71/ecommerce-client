
export default function NoResults(props: {text: string}) {
  const { text } = props
  return (
    <div className="flex items-center justify-center h-full w-full text-neutral-500">
      {text}
    </div>
  )
}
