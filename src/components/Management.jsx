import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteOneWorker } from '../store/mySlice'
import Worker from './Worker'

const Management = () => {
  const listWorkers = useSelector(state =>state.myWorkers.workers)
  const dispatch = useDispatch();

  const deleteOne =(value)=>{
    dispatch(deleteOneWorker({
      name:value.name.first,
      lastname: value.name.last,
      phone: value.cell
    }))
  }

  return (
    <>
    <h1>My workers</h1>
    <Link to="/candidates"><button type="button" class="btn btn-primary">Candidates</button></Link>
    <div className="users">
      {listWorkers.map((value,index)=>(
        <Worker key={index} value={value} index={index} onDelete={deleteOne}/>
      ))}
    </div>
      
    </>
  )
}

export default Management
