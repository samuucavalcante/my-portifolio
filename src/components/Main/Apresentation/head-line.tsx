'use client'
import { useEffect, useState } from 'react'
import Typewriter, { type TypewriterClass } from 'typewriter-effect'
import { Buttons } from './buttons'

export default function HeadLine() {
  const [renderDescription, setRenderDescription] = useState(false)

  const onInit = (typewriter: TypewriterClass) => {
    typewriter
      .typeString(
        '<h2 class="inline-block text-4xl md:text-5xl">Olá, me chamo</h2> <br/>',
      )
      .typeString(
        '<h2 class="inline-block text-4xl md:text-5xl">Samuel Cavalcante :)</h2>',
      )
      .callFunction(() => {
        const elementMain = document.querySelector('.Typewriter')
        const itemThatMustBeRemove = elementMain?.lastChild
        console.log(itemThatMustBeRemove)
        if (itemThatMustBeRemove) itemThatMustBeRemove.textContent = ''
      })
      .stop()
      .start()
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderDescription(true)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="flex transition-all delay-200 flex-col gap-2">
        <Typewriter
          options={{
            autoStart: true,
            cursorClassName: 'text-5xl',
          }}
          component={'div'}
          onInit={onInit}
        />
        {renderDescription && (
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              deleteSpeed: 0.5,
              cursorClassName: 'text-lg',
              cursor:
                '<span id="cursor-description" class="font-bold">|</span>',
            }}
            component={'div'}
            onInit={(ty) => {
              ty.typeString(
                '<span class="text-neutral-500  text-lg">Desenvolvedor</span>',
              )
                .callFunction(() => {
                  const elementMain =
                    document.getElementById('cursor-description')
                  elementMain?.classList.add('text-indigo-500')
                })
                .typeString(
                  ' <span  class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500 ">ReactJS (NextJS 12, 13)</span>',
                )
                .deleteChars(23)
                .typeString(
                  '<span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500 ">2 Anos de Experiência</span>',
                )
                .deleteAll()
                .callFunction(() => {
                  const elementMain =
                    document.getElementById('cursor-description')
                  elementMain?.classList.remove('text-indigo-500')
                })
                .start()
            }}
          />
        )}
        <Buttons />
      </div>
    </>
  )
}
