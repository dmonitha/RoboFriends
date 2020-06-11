import React from 'react';

const SearchBox=({searchF,searchC})=>{
	return(
		<div className='pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue'
		type ='Search' 
		placeholder=' search robots'
		onChange={searchC}
		/>
		</div>
		);
}
export default SearchBox;