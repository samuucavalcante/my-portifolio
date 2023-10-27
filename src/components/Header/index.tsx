import { ButtonToogleTheme } from './button-toogle-theme'
import { MenuButton } from './menu-button'

export function Header() {
  return (
    <div className="fixed z-10 w-full">
      <div className="flex justify-between px-8 py-4 bg-background ">
        <MenuButton />
        <h2 className="text-2xl font-bold">Portifólio</h2>
        <ButtonToogleTheme />
      </div>
      <div className="h-2 w-full bg-gradient-to-b from-indigo-500 to-indigo-500/5" />
    </div>
  )
}
