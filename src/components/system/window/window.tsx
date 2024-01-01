import { ReactNode, useState } from 'react'
import Draggable from 'react-draggable'
import TitleBar from './title-bar'

interface Props {
  children: ReactNode
}

const titleBarId = 'title-bar'

export default function Window({ children }: Props) {
  const [size, setSize] = useState({ width: 500, height: 500 })

  return (
    <Draggable handle={`#${titleBarId}`}>
      <div
        className="absolute w-fit border-8 border-blue-500"
        style={{ width: size.width, height: size.height }}
      >
        <TitleBar id={titleBarId} />
        <div className="h-[calc(100%-24px)]">{children}</div>
      </div>
    </Draggable>
  )
}
