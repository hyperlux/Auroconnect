import React from 'react';
import { MessageSquare, Heart, Share2 } from 'lucide-react';

const posts = [
  {
    id: 1,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    content: 'Just finished a wonderful permaculture workshop at Buddha Garden. Amazing to see how many community members are interested in sustainable farming!',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    likes: 45,
    comments: 12,
    time: '2 hours ago'
  },
  {
    id: 2,
    author: {
      name: 'Michael Kumar',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    content: 'Beautiful sunrise meditation at Matrimandir this morning. The energy was incredible!',
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    likes: 72,
    comments: 8,
    time: '5 hours ago'
  }
];

export default function LatestPosts() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-gray-900">Latest Community Posts</h2>
      </div>

      <div className="divide-y">
        {posts.map((post) => (
          <div key={post.id} className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900">{post.author.name}</h3>
                <p className="text-sm text-gray-500">{post.time}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-3">{post.content}</p>
            
            {post.image && (
              <img
                src={post.image}
                alt="Post content"
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
            )}

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <button className="flex items-center gap-1 hover:text-auroville-primary">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-1 hover:text-auroville-primary">
                <MessageSquare className="h-4 w-4" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-1 hover:text-auroville-primary">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}