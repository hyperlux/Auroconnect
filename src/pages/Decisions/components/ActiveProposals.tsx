import React from 'react';
import { Vote, Users, Clock, ChevronRight } from 'lucide-react';

const proposals = [
  {
    id: 1,
    title: 'Solar Panel Installation in International Zone',
    category: 'Infrastructure',
    description: 'Proposal to install solar panels across the International Zone to increase renewable energy usage.',
    deadline: '2024-03-20',
    votes: {
      total: 342,
      support: 285,
      against: 57
    },
    status: 'active'
  },
  {
    id: 2,
    title: 'New Community Garden Initiative',
    category: 'Agriculture',
    description: 'Creating a new community garden space with focus on permaculture principles.',
    deadline: '2024-03-25',
    votes: {
      total: 256,
      support: 198,
      against: 58
    },
    status: 'active'
  }
];

export default function ActiveProposals() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Vote className="h-5 w-5 text-auroville-primary" />
          <h2 className="text-lg font-semibold text-gray-900">Active Proposals</h2>
        </div>
        <span className="text-sm text-gray-500">{proposals.length} active proposals</span>
      </div>

      <div className="space-y-6">
        {proposals.map((proposal) => (
          <div 
            key={proposal.id}
            className="p-4 rounded-lg border border-gray-200 hover:border-auroville-primary transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-medium text-gray-900">{proposal.title}</h3>
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-auroville-light text-auroville-primary mt-1">
                  {proposal.category}
                </span>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4">{proposal.description}</p>

            <div className="space-y-3">
              <div className="bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-auroville-primary h-2 rounded-full"
                  style={{ width: `${(proposal.votes.support / proposal.votes.total) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{proposal.votes.total} participated</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">
                      Ends {new Date(proposal.deadline).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="font-medium text-gray-900">
                  {Math.round((proposal.votes.support / proposal.votes.total) * 100)}% Support
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}