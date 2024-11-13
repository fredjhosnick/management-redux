import React from 'react'

const Worker = ({value, index,onDelete}) => {
  return (
    <>
    <div className="column">
        <div className="fotoUser">
            <img src={value.picture.large} alt="" />
        </div>
        <div className="nameUser">
            <strong>
                {value.name.last},{value.name.first}
            </strong>
        </div>
        <div>{value.location.city}</div>
        <div>({value.location.country})</div>
        <button onClick={()=>onDelete(value)}type="button" className="btn btn-danger m-2">Delete</button>
    </div>
      
    </>
  )
}

export default Worker
