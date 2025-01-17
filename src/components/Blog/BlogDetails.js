import React from 'react'
import {format, parseISO} from 'date-fns'
import Link from "next/link";

const BlogDetails = ({blog, slug}) => {
    console.log(slug);
    return (
        <div className='px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg'>
            <time className='m-3'>
                {format(parseISO(blog.publishedAt), "LLLL, d, yyyy")}
            </time>
            <span className='m-3'>10 views</span>
            {blog.readingTime ? (
            <div className='m-3'>
              {blog.readingTime.text}
            </div>
          ) : (
            <div className='m-3'>No reading time available</div>
          )}
          <Link href={`/categories/${blog.tags[0]}`}>
          #{blog.tags[0]}
          </Link>
        </div>
        
    )
}

export default BlogDetails