import { Header } from '@/components/Header'
import { Main } from '@/components/Main'

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <div className="relative top-16">
        <Main />
      </div>
    </div>
  )
}
