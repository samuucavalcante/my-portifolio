'use client'
import Typewriter, { type TypewriterClass } from 'typewriter-effect'

type TypingEffectProps = {
  fullText: string | string[]
  delay?: number
  hasDelete?: boolean
  cursor?: string
}

export function TypingEffect({
  fullText,
  delay = 100,
  hasDelete,
  cursor = '|',
}: TypingEffectProps) {
  const onInit = (typewriter: TypewriterClass) => {
    if (typeof fullText === 'string') {
      if (hasDelete) typewriter.typeString(fullText).deleteAll().start()
      else typewriter.typeString(fullText).start()
    } else {
      if (hasDelete) typewriter.deleteAll().start()
      else typewriter.start()
    }
  }

  return (
    <Typewriter
      component={'span'}
      options={{
        strings: typeof fullText === 'object' ? fullText : undefined,
        loop: !!hasDelete,
        delay,
        cursor,
        cursorClassName: 'text-indigo-500',
      }}
      onInit={onInit}
    />
  )
}
