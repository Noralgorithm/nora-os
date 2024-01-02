import Image from 'next/image'
import Draggable from 'react-draggable'

interface Props {
  name: string
}

export default function DesktopIcon({ name }: Props) {
  return (
    <Draggable>
      <div className="h-[96px] w-[80px] bg-transparent hover:bg-blue-300 hover:bg-opacity-50">
        <figure className="flex h-full w-full flex-col items-center justify-between">
          {/* <Image
            src="/sprites/text-file.png"
            alt="text file-icon"
            width={72}
            height={72}
            className="h-[72px] w-[72px] select-none"
          ></Image> */}
          <div className="text-white">:)</div>
          <figcaption
            className="select-none text-white drop-shadow-lg"
            style={{ textShadow: '1px 1px 2px black' }}
          >
            {name}
          </figcaption>
        </figure>
      </div>
    </Draggable>
  )
}
