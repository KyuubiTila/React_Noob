import { useState } from 'react';

// Box card will be having access to result and children elements as properties available on the BoxCard element
export const BoxCard = ({ result, children }) => {
  const [show, setShow] = useState(true);
  return (
    // each child component wold independently take each property as assigned by this to itself
    // using ternay operators for conditional rendering
    <div className={show ? '' : 'hidden'}>
      {/* using template literals in passing parameters */}
      <div className={`box ${result}`}>
        {children}
        {/* it will take the show and hide button */}
        <button className="trigger" onClick={() => setShow(!show)}>
          Show
        </button>
      </div>
    </div>
  );
};
