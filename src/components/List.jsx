import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addOneValue } from '../store/mySlice'
import Candidate from './Candidate'

const List = () => {
    const [cantidates,setCandidates] = useState([])
    const dispatch = useDispatch();
    const listWorkers = useSelector(state =>state.myWorkers.workers)

    useEffect(()=>{

        fetch("https://randomuser.me/api/?results=6")
        .then((response)=>response.json())
        .then((datas)=> setCandidates(datas.results))

    },[])

    const searchOne = (index)=>{
      fetch("https://randomuser.me/api/?results=1")
        .then((response)=>response.json())
        .then((datas)=>{ 
          const temporal = [...cantidates]
         temporal[index] = {...datas.results[0]}
         setCandidates(temporal)

    })

    }

    const saveOne = (value,index)=>{
      dispatch(addOneValue(value))
      searchOne(index)

    }
  return (
    <>
    <div className="presentation">
     {cantidates.map((value,index)=>
       <Candidate key={index} value ={value} onSearchOne={searchOne} onSaveOne={saveOne} index={index}/>

     )}
     </div>
     <hr />
     <div className='cadidates'>
      {listWorkers.map((value,index)=>
      <Link key={index} to="/management"><button type="button" class="btn btn-warning m-2">{value.name.first}</button></Link>
      )}

     </div>
    </>
  )
}

export default List
