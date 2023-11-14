import { Header } from '@/components/Header'
import { Main } from '@/components/Main'

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <div className="overflow-x-hidden relative top-16">
        <Main />
      </div>
    </div>
  )
}
