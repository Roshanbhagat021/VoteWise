import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('petition');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    goal: 1000,
    question: '',
    options: ['', ''],
    daysOpen: 7
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData(prev => ({
      ...prev,
      options: newOptions
    }));
  };

  const addOption = () => {
    if (formData.options.length < 5) {
      setFormData(prev => ({
        ...prev,
        options: [...prev.options, '']
      }));
    }
  };

  const removeOption = (index) => {
    if (formData.options.length > 2) {
      const newOptions = [...formData.options];
      newOptions.splice(index, 1);
      setFormData(prev => ({
        ...prev,
        options: newOptions
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    if (activeTab === 'petition') {
      navigate('/petitions');
    } else {
      navigate('/polls');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-[68px]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create a New {activeTab === 'petition' ? 'Petition' : 'Poll'}</h1>
          <p className="mt-2 text-gray-600">
            {activeTab === 'petition' 
              ? 'Start a movement and gather support for your cause' 
              : 'Ask a question and gather community opinions'}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('petition')}
                className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${activeTab === 'petition' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Create Petition
              </button>
              <button
                onClick={() => setActiveTab('poll')}
                className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${activeTab === 'poll' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Create Poll
              </button>
            </nav>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit}>
              {activeTab === 'petition' ? (
                <>
                  <div className="mb-6">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Petition Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="What change do you want to see?"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Detailed Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Explain why this change is important and what impact it will have..."
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select a category</option>
                        <option value="Environment">Environment</option>
                        <option value="Education">Education</option>
                        <option value="Transport">Transport</option>
                        <option value="Health">Health</option>
                        <option value="Community">Community</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
                        Signature Goal
                      </label>
                      <input
                        type="number"
                        id="goal"
                        name="goal"
                        min="100"
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-6">
                    <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                      Poll Question
                    </label>
                    <input
                      type="text"
                      id="question"
                      name="question"
                      value={formData.question}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="What would you like to ask the community?"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Answer Options
                    </label>
                    <div className="space-y-2">
                      {formData.options.map((option, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder={`Option ${index + 1}`}
                            required
                          />
                          {formData.options.length > 2 && (
                            <button
                              type="button"
                              onClick={() => removeOption(index)}
                              className="ml-2 p-2 text-red-500 hover:text-red-700"
                            >
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                    {formData.options.length < 5 && (
                      <button
                        type="button"
                        onClick={addOption}
                        className="mt-2 inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <svg className="-ml-0.5 mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add Option
                      </button>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="daysOpen" className="block text-sm font-medium text-gray-700 mb-1">
                      Days Open
                    </label>
                    <input
                      type="number"
                      id="daysOpen"
                      name="daysOpen"
                      min="1"
                      max="30"
                      value={formData.daysOpen}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </>
              )}

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Create {activeTab === 'petition' ? 'Petition' : 'Poll'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;