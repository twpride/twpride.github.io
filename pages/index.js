import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/layout'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData('pages/projects')
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Howard Hwang</title>
      </Head>
      {allPostsData.map(({ id, title, date, preview, blurb, tags, bgColor }) => (
        <div className='center-card preview' key={id}>
          <Link href={`/projects/${id}`} >
          <img src={preview} style={{ backgroundColor: bgColor }}></img>
          </Link>
          <div>
            <div className="title">
              <Link href={`/projects/${id}`}>{title}
              </Link>
            </div>
            <br />
            <div className="blurb">{blurb}</div>
          </div>
        </div>
      ))}


    </Layout>
  )
}
