// import { Achievements } from '@/components/Achievements'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col container mx-auto px-12 pt-24 pb-4">
        <Hero />
        {/* <Achievements /> */}
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
