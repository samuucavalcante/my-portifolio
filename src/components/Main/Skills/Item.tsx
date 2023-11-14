import { ElementType } from 'react'
import { IconBaseProps } from 'react-icons'

type ItemProps = {
  name: string
  icon: ElementType<IconBaseProps>
  color: string
}

export function Item({ name, icon: Icon, color }: ItemProps) {
  return (
    <li className="p-4 bg-background rounded-tl-3xl flex flex-col m-2 justify-center items-center gap-3 shadow-md shadow-indigo-500 ">
      <h5 className="tracking-wider text-md ">{name}</h5>
      <Icon size={45} color={color} />
    </li>
  )
}
