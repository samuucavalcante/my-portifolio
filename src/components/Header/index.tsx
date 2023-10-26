import { ButtonToogleTheme } from './button-toogle-theme'
import { MenuButton } from './menu-button'

export function Header() {
  return (
    <>
      <div className="flex justify-between px-8 py-4 bg-background border-b-2 border-b-indigo-500">
        <MenuButton />
        <h2 className="text-2xl font-bold">Portifólio</h2>
        <ButtonToogleTheme />
      </div>
    </>
  )
}
