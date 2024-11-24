import React from 'react';
import { Star, Users, Heart } from 'lucide-react';

const highlights = [
  {
    id: 1,
    title: 'Sustainable Living Workshop',
    organizer: 'Green Practices Team',
    participants: 45,
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Youth Cultural Exchange',
    organizer: 'Cultural Integration Group',
    participants: 78,
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    title: 'Organic Farming Initiative',
    organizer: 'Food Link',
    participants: 32,
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

export default function CommunityHighlights() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <Star className="h-5 w-5 text-auroville-primary" />
        <h2 className="text-lg font-semibold text-gray-800">Community Highlights</h2>
      </div>
      <div className="space-y-4">
        {highlights.map((highlight) => (
          <div key={highlight.id} className="flex items-center gap-4">
            <img
              src={highlight.image}
              alt={highlight.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-800">{highlight.title}</h3>
              <p className="text-sm text-gray-500">{highlight.organizer}</p>
              <div className="flex items-center gap-2 mt-1">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">{highlight.participants} participants</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}