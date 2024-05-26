import React from 'react'

const Piece = ({ pc }) => {
  return (
    <>
      {pc === '' ? (
        <div></div>
      ) : (
        pc==='bp'?(    
          <div>bp</div>
        ):(    
          <div>wp</div>
        )
        
      )}
    </>
  );
}
export default Piece