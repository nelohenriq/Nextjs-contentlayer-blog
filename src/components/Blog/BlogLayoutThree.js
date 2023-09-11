import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from'react'
import Tag from '../Elements/Tag'

const BlogLayoutThree = ({blog}) => {
    return <div className='group flex flex-col items-center text-dark'>
        <Link href={blog.url_path} className='h-full rounded-xl overflow-hidden'>
            <Image 
                src={blog.image.filePath.replace("../public", "")}
                placeholder="blur"
                blurDataURL={blog.image.blurhashDataUrl}
                alt={blog.title}
                width={blog.image.width}
                height={blog.image.height}
                className="aspect-[4/3] w-full h-full object-center object-cover group-hover:scale-105 transition-all ease duration-500" />
        </Link>

        <div className="flex flex-col w-full mt-4">
        <span className='uppercase text-accent font-semibold text-sm'>{blog.tags[0]}</span>
        <Link href={blog.url_path} className="group inline-block my-1">
          <h2 className="font-semibold capitalize text-lg ">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] group-hover:bg-[length:100%-6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>
        <span className='capitalize text-dark/50 font-semibold text-base'>{format(new Date(blog.publishedAt), 'dd MMM yyyy')} </span>
      </div>
    </div>
}

export default BlogLayoutThree