import React from 'react'

function Categories(props) {

    const {filteritems}=props
    return (
        <div className='btn-container'>
        <button className='filter-btn' onClick={()=>filteritems('all')}>All</button>
        <button className='filter-btn' onClick={()=>filteritems('breakfast')}>breakfast</button>
        <button className='filter-btn' onClick={()=>filteritems('shakes')}>shake</button>
    </div>
  )
        }    

export default Categories