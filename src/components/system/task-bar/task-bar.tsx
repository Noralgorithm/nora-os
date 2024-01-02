import { useState } from 'react'

export default function TaskBar() {
  const [openedMenu, setOpenedMenu] = useState(false)

  function toggleMenu() {
    setOpenedMenu(prev => !prev)
  }

  return (
    <>
      {openedMenu && (
        <div className="absolute bottom-0 left-0 h-[500px] w-[400px] bg-gray-400"></div>
      )}
      <footer className="absolute bottom-0 z-10 flex h-[48px] w-full items-center bg-blue-500 pl-4">
        <button
          className="h-[40px] w-[40px] bg-pink-500"
          onClick={toggleMenu}
        ></button>
      </footer>
    </>
  )
}
