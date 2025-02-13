import React from 'react'

function SearchFilter({search,setSearch,filter,setFilter}) {

    const handleInputChange=(e)=>{
        e.preventDefault();
        setSearch(e.target.value)
    }

    const handleSelectChange=(e)=>{
        e.preventDefault();
        setFilter(e.target.value)
    }
    
  return (
    <div>
      <input type='text' value={search} placeholder='Search' 
          onChange={handleInputChange}
      />

      <div>
        <select className='bg-black' value={filter} onChange={handleSelectChange}>
            <option value='all'>All</option>
            <option value='Africa'>Africa</option>
            <option value='America'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
        </select>
      </div>
    </div>

  )
}

export default SearchFilter
