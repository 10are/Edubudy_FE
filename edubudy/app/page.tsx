import Image from 'next/image'
import Categories from './components/Categories/'
import Educards from './components/Educards/Educards'
import Data from './components/Educards/Data.json'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8 border min-h-screen overflow-hidden">

      <Categories />
      <Educards data={Data.cards} />
    </main>
  );
}
