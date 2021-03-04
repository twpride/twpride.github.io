import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

import yaml from 'js-yaml'

// https://github.com/jonschlinkert/gray-matter/issues/62
const matter_mod = (blob) => matter(blob, {
  engines: {
    yaml: s => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA })
  }
})

export function getSortedPostsData(pth) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(pth)
  const allPostsData = fileNames.filter(name=>name.includes('.md')).map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(pth, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section


    const matterResult = matter_mod(fileContents)


    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds(pth) {
  const fileNames = fs.readdirSync(pth)
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.filter(name=>name.includes('.md')).map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}





export async function getPostData(id, pth) {
  const fullPath = path.join(pth, `${id}.md`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter_mod(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .use(prism)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
