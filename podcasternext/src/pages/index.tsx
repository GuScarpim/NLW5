import React, { useEffect } from 'react'

export default function Home(props) {
  console.log(props.episodes)

  return (
    <div>

    </div>
  )
}

// SSR Carrega no lado do servidor
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    // Segundos para gerar uma nova versão da página, a cada 8 horas gera uma nova chamada de api
    revalidate: 60 * 60 * 8,
  }
}