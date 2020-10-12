import React from 'react';

const SearchBox =({searchChange})=> {

    return (
        <div >

                <input  className='bg-lightest-blue pa2' type="search"
                 id="gsearch"
                  name="gsearch"
                 placeholder="Search Robot Friends"
                 onChange={searchChange}/>
        </div>
    ) 
    
   

}

export default SearchBox;