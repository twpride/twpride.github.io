import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/layout'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  // console.log(allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  const [ct, setCt] = useState(0);

  return (
    <Layout>
      <Head>
        <title>Howard Hwang</title>
      </Head>
      <div>
        {allPostsData.map(({ id, title, date, preview, blurb, tags, bgColor }) => (
          <div className='preview' key={id}>
            <img src={preview} style={{ backgroundColor: bgColor }}></img>
            <div>
              <Link href={`/posts/${id}`}>
                <div className="title">{title}</div>
              </Link>
              <br />
              <div className="blurb">{blurb}</div>
            </div>
          </div>
        ))}
      </div>


      <button
        onClick={() => setCt(state => state + 1)}
      >increment +</button>

      <div>{ct}</div>
      <Link href="/posts/tangram">
        <a>tangram</a>
      </Link>



    </Layout>
  )
}
