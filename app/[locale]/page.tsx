import Image from 'next/image'

export default function Home({ params: { lang }}) {

  console.log({ lang })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="w-full">
        <Image
        alt="picture of the birch"
        src="/berzs-back.jpg"
        width="1600"
        height="900"
        className="w-full"
        />
      </div>
    </main>
  )
}
