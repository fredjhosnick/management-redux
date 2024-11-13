import React from 'react'

const Candidate = ({value,index, onSearchOne, onSaveOne}) => {
  return (
    <>
    <div className="user">
        <div className="foto">
            <img src={value.picture.large} alt="" />
        </div>
        <div className="datas">
            <div className="name">{value.name.title}. {value.name.first} {value.name.last}</div>
            <div>Location: {value.location.city}({value.location.country})</div>
            <div><a href="#">{value.email}</a></div>
            <div><a href="#">{value.phone}</a></div>
        </div>
        <div className='buttons'>
        <button onClick={()=> onSearchOne(index)}  type="button" className="btn btn-primary btns">Hide</button>
        <button onClick={()=> onSaveOne(value,index)} type="button" className="btn btn-success btns">Save</button>
        </div>
    </div>
      
    </>
  )
}

export default Candidate
