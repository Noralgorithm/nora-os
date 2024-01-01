'use client'

import Window from '@/src/components/system/window/window'
import TaskBar from '@/src/components/system/task-bar/task-bar'
import Desktop from '@/src/components/system/desktop/desktop'
import DesktopIcon from '@/src/components/system/desktop/desktop-icon/desktop-icon'

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Window>
        <div className="h-full w-full bg-white"></div>
      </Window>
      <Desktop>
        <DesktopIcon name="Papelera"></DesktopIcon>
        <DesktopIcon name="Papelera"></DesktopIcon>
        <DesktopIcon name="Papelera"></DesktopIcon>
      </Desktop>
      <TaskBar />
    </main>
  )
}
