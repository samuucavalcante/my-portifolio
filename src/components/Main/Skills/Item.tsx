import { ElementType } from 'react'
import { IconBaseProps } from 'react-icons'

type ItemProps = {
  name: string
  icon: ElementType<IconBaseProps>
  color: string
}

export function Item({ name, icon: Icon, color }: ItemProps) {
  return (
    <div className="flex flex-col m-2 justify-center items-center gap-1 shadow-lg shadow-indigo-500 h-56 w-48">
      <h5 className="tracking-wider">{name}</h5>
      <Icon size={50} color={color} />
    </div>
  )
}
