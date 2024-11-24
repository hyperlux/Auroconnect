import React from 'react';
import { MessageSquare, Users, Clock } from 'lucide-react';

const categories = [
  { id: 1, name: 'General Discussion', count: 156 },
  { id: 2, name: 'City Announcements', count: 43 },
  { id: 3, name: 'Community Projects', count: 89 },
  { id: 4, name: 'Events & Activities', count: 124 }
];

const posts = [
  {
    id: 1,
    title: 'Community Garden Project Proposal',
    category: 'Community Projects',
    author: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    replies: 23,
    views: 156,
    lastActivity: '2h ago'
  },
  {
    id: 2,
    title: 'Monthly Town Hall Meeting - March 2024',
    category: 'City Announcements',
    author: 'Mike Peters',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    replies: 45,
    views: 289,
    lastActivity: '4h ago'
  }
];

export default function Forums() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Community Forums</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          New Discussion
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <a
                    href="#"
                    className="flex items-center justify-between text-gray-700 hover:text-blue-600"
                  >
                    <span>{category.name}</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm divide-y">
            {posts.map((post) => (
              <div key={post.id} className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                    <p className="text-sm text-gray-500">
                      Posted by {post.author} in {post.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>{post.replies} replies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{post.views} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Last activity {post.lastActivity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}