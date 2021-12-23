import Link from 'next/link'
import { Card, Author } from '~components/styled/Tag.styled'

import advancedFormat from 'dayjs/plugin/advancedFormat'
import dayjs from 'dayjs'

dayjs.extend(advancedFormat)

const Tags = ({ posts }) => {
  return (
    <ul>
      {posts.map(
        (
          { slug, title, excerpt, coverImage, author, authorImage, time },
          index
        ) => {
          return (
            <Link key={index} href={`/blog/${slug}`} passHref>
              <Card>
                <Author>
                  <div className="author-image">
                    <img src={authorImage} alt="Author image" />
                  </div>
                  <span>
                    {author} <br />
                    Publised {dayjs(time).format('MMMM DD, YYYY')}
                  </span>
                </Author>
                <div className="blog_img">
                  <img
                    src={coverImage || '/images/default-cover-image.png'}
                    alt="Post image"
                  />
                </div>
                <li>
                  <h2>{title}</h2>
                  <p>
                    {excerpt}
                    <a>Read more</a>...
                  </p>
                </li>
              </Card>
            </Link>
          )
        }
      )}
    </ul>
  )
}

export default Tags
