interface Props {
  id: string
}

export default function TitleBar({ id }: Props) {
  return (
    <div id={id} className="flex h-[24px] justify-end bg-blue-500">
      <button className="flex h-[20px] w-[20px] items-center justify-center bg-red-500 text-center text-white">
        X
      </button>
    </div>
  )
}
