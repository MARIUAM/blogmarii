import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Post } from '@/types/blog';

interface FeaturedPostProps {
  post: Post;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden group">
      <img
        src={`https://source.unsplash.com/random/1200x800?${post.category}`}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm mb-4 inline-block">
          {post.category}
        </span>
        <h2 className="text-3xl font-bold text-white mb-4">{post.title}</h2>
        <p className="text-gray-200 mb-6 line-clamp-2">{post.body}</p>
        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300"
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}