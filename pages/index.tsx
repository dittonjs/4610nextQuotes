import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

type HomeProps = {
  results: Record<string, any>[]
}

export default function Home({ results }: HomeProps) {

  return (
    <main>
      {results.map((quote) => (
        <div key={quote._id}>
          <div>{quote.content}</div>
          <div>{quote.author}</div>
        </div>
      ))}
    </main>
  )
}

export async function getServerSideProps() {
  const result = await fetch("https://usu-quotes-mimic.vercel.app/api/search?query=Thomas Jefferson");
  const { results } =  await result.json();
  return {
    props: {
      results
    }
  }
}
