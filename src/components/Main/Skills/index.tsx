import { BiLogoTypescript } from 'react-icons/bi'
import { Item } from './Item'

const SKILLS = [
  { name: 'Typescript', icon: BiLogoTypescript, color: '#0074D9' },
]

export function Skills() {
  return (
    <div className="m-4">
      {SKILLS.map(({ icon, name, color }) => (
        <Item key={name} name={name} icon={icon} color={color} />
      ))}
    </div>
  )
}
