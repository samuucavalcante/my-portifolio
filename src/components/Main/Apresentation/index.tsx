import Image from 'next/image'
import HeadLine from './head-line'

export default function Apresentation() {
  return (
    <div className="w-full h-[95vh] min-h-[600px] grid grid-cols-1 sm:grid-cols-2 justify-center p-6 gap-12">
      <div className="flex max-w-[800px] flex-col items-center justify-center">
        <HeadLine />
      </div>
      <div className="flex justify-center  items-center">
        <Image
          className="rounded-full"
          src={'/me.png'}
          alt="Samuel Cavalcante"
          width={300}
          height={300}
          layout="object-fit"
        />
      </div>
    </div>
  )
}
