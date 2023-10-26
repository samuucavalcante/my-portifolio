'use client'

import { Menu } from 'lucide-react'

export function MenuButton() {
  return (
    <div className="p-1 group cursor-pointer flex justify-center items-center rounded-md hover:bg-indigo-500 transition-all duration-300">
      <Menu className="text-indigo-500 group-hover:text-white transition-all duration-30" />
    </div>
  )
}
