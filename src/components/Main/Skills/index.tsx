import {
  BiHdd,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTypescript,
  BiPaintRoll,
  BiSolidData,
} from 'react-icons/bi'
import { SiNextdotjs, SiSwagger } from 'react-icons/si'

import { Item } from './Item'

const SKILLS = [
  { name: 'Typescript', icon: BiLogoTypescript, color: '#3178C6' },
  { name: 'React', icon: BiLogoReact, color: '#61DAFB' },
  { name: 'NextJS', icon: SiNextdotjs, color: '#6c757d' },
  { name: 'NodeJS', icon: BiLogoNodejs, color: '#8CC84B' },
  { name: 'SQL', icon: BiSolidData, color: '#4169E1' },
  { name: 'Design System', icon: BiPaintRoll, color: '#FF4785' },
  { name: 'ORMs', icon: BiHdd, color: '#6D5ACF' },
  { name: 'Documentação', icon: SiSwagger, color: '#38b832' },
]

export function Skills() {
  return (
    <div className="flex flex-col w-full px-4 justify-center items-center gap-4 mb-[15vw]">
      <h2 className="text-center text-3xl font-bold">Habilidades</h2>
      <ul className="grid justify-center content-center grid-cols-2 sm:grid-cols-2 w-full md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4  ">
        {SKILLS.map(({ icon, name, color }) => (
          <Item key={name} name={name} icon={icon} color={color} />
        ))}
      </ul>
    </div>
  )
}
