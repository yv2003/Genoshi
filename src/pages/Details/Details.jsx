// import React from 'react'

// function Details() {
//   return (
//       <div className='background'>
//           <p>CREATE NEW GRAPH</p>
//       <form action=""></form>
//     </div>
//   )
// }

// export default Details

import React, { useState } from 'react';

const CreateNewGraphPage = () => {
  // State variables to manage form inputs
  const [graphTitle, setGraphTitle] = useState('');
  const [graphDescription, setGraphDescription] = useState('');
  const [selectedPapers, setSelectedPapers] = useState([]);
  const [graphSettings, setGraphSettings] = useState({
    layout: 'default',
    colors: {
      nodeColor: '#3498db',
      edgeColor: '#2ecc71',
    },
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data (e.g., send to backend for further processing)
    console.log({
      graphTitle,
      graphDescription,
      selectedPapers,
      graphSettings,
    });
  };

  return (
    <div className='background flex flex-col items-center align-center text-center text-2xl h-full'>
      <h1 className="text-center text-6xl pb-10 font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">
          Create New Graph
        </h1>
      <form onSubmit={handleSubmit}>
        {/* Graph Title */}
        <div className="placeholder:italic placeholder:text-black bg-transparent  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm leading-loose text-2xl" placeholder="Search for anything...">
          <label htmlFor="graphTitle">Graph Title:<br/></label>
          <input
            type="text"
            id="graphTitle"
            value={graphTitle}
            onChange={(e) => setGraphTitle(e.target.value)}
            required
          />
        </div>

        {/* Graph Description */}
        <div>
          <label htmlFor="graphDescription" className='placeholder:rounded-lg'>Graph Description:<br/></label>
          <textarea
            id="graphDescription"
            value={graphDescription}
            onChange={(e) => setGraphDescription(e.target.value)}
            required
          />
        </div>

        {/* Paper Selection */}
        <div>
          <label htmlFor="paperSelection">Select Papers:</label>
          {/* Implement paper selection component or integration here */}
        </div>

        {/* Graph Settings */}
        <div>
          <label htmlFor="layout">Layout:</label>
          <select
            id="layout"
            value={graphSettings.layout}
            onChange={(e) =>
              setGraphSettings({ ...graphSettings, layout: e.target.value })
            }
          >
            <option value="default">Default</option>
            {/* Add more layout options as needed */}
          </select>
        </div>

        <div>
          <label htmlFor="nodeColor">Node Color:</label>
          <input
            type="color"
            id="nodeColor"
            value={graphSettings.colors.nodeColor}
            onChange={(e) =>
              setGraphSettings({
                ...graphSettings,
                colors: {
                  ...graphSettings.colors,
                  nodeColor: e.target.value,
                },
              })
            }
          />
        </div>

        <div>
          <label htmlFor="edgeColor">Edge Color:</label>
          <input
            type="color"
            id="edgeColor"
            value={graphSettings.colors.edgeColor}
            onChange={(e) =>
              setGraphSettings({
                ...graphSettings,
                colors: {
                  ...graphSettings.colors,
                  edgeColor: e.target.value,
                },
              })
            }
          />
        </div>

        {/* Preview Graph Visualization */}
        <div>
          {/* Implement graph visualization preview component or integration here */}
        </div>

        {/* Submit Button */}
                <button type="submit" className="flex flex-row items-center text-white p-2 my-4 border-sky-500 rounded bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-lg font-semibold md:mx-10">CREATE NEW GRAPH</button>

      </form>
    </div>
  );
};

export default CreateNewGraphPage;
