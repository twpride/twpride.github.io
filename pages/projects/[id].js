import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'

export default function Post({ postData }) {
  return <Layout>
    <Head>
      <title>{postData.title}</title>

      <link
        rel="preload"
        href="https://unpkg.com/prismjs@0.0.1/themes/prism.css"
        as="style"
      />
      <link
        rel="preload"
        href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
        as="style"
      />
      <link
        href={`https://unpkg.com/prismjs@0.0.1/themes/prism.css`}
        rel="stylesheet"
      />

    </Head>

    <div className="center-card post" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

  </Layout>
}

const pth = 'pages/projects' 
export async function getStaticPaths() {
  const paths = getAllPostIds(pth)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id, pth)
  return {
    props: {
      postData
    }
  }
}
