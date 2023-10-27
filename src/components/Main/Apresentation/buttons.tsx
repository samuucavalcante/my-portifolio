'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export function Buttons() {
  const [renderBuuttons, setRenderButtons] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderButtons(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        'mt-2 opacity-0 transition-all flex duration-300 delay-150 gap-3',
        {
          'opacity-100': renderBuuttons,
        },
      )}
    >
      <Button className="bg-gradient-to-r text-white from-indigo-500 to-blue-500  hover:opacity-90">
        Baixar CV
      </Button>
      <Button
        variant={'secondary'}
        className="bg-transparent border-2 border-indigo-500 dura  hover:bg-gradient-to-r hover:text-white hover:from-indigo-500 hover:to-blue-500 "
      >
        Entrar em contato
      </Button>
    </div>
  )
}
