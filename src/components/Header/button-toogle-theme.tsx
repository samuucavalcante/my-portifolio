'use client'

import { Switch } from '@/components/ui/switch'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ButtonToogleTheme() {
  const { setTheme, theme } = useTheme()

  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Switch
        className="data-[state=checked]:bg-indigo-500 data-[state=unchecked]:bg-indigo-500"
        onCheckedChange={toogleTheme}
        checked={theme === 'dark'}
      />
    </div>
  )
}
