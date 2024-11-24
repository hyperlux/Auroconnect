import React from 'react';
import { FileText, ListChecks, Users } from 'lucide-react';

const categories = [
  'Infrastructure',
  'Education',
  'Culture',
  'Environment',
  'Policy',
  'Community Life'
];

export default function ProposalSubmission() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="h-5 w-5 text-auroville-primary" />
        <h2 className="text-lg font-semibold text-gray-900">Submit a Proposal</h2>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            className="w-full rounded-lg border-gray-300 focus:border-auroville-primary focus:ring-auroville-primary"
            placeholder="Enter proposal title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            className="w-full rounded-lg border-gray-300 focus:border-auroville-primary focus:ring-auroville-primary"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category.toLowerCase()}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            rows={4}
            className="w-full rounded-lg border-gray-300 focus:border-auroville-primary focus:ring-auroville-primary"
            placeholder="Describe your proposal in detail"
          />
        </div>

        <div className="pt-4 space-y-4">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-auroville-light">
            <ListChecks className="h-5 w-5 text-auroville-primary mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-900">Guidelines</h3>
              <ul className="mt-1 text-sm text-gray-600 space-y-1">
                <li>• Be clear and specific about your proposal</li>
                <li>• Include potential impact and benefits</li>
                <li>• Consider resource requirements</li>
                <li>• Address potential concerns</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
            <Users className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-900">Process</h3>
              <p className="mt-1 text-sm text-gray-600">
                Your proposal will be reviewed by the Working Committee before being
                opened for community voting.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-auroville-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Submit Proposal
          </button>
        </div>
      </form>
    </div>
  );
}