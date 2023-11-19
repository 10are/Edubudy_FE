import Image from 'next/image'
import Categories from './components/Categories/'
import Card from './components/Educards/Card'


export default function Home() {
  return (
    <main >
      <Categories />
      <Card/> 
    </main>
  
  )

}
