"use client"
import React,{useState} from 'react'

const page = () => {
  const [Title, setTitle] = useState("")
  const [Desc, setDesc] = useState("")
  const [maintask, setmaintask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()

    setmaintask([...maintask,{Title,Desc}])

    // set title and desc empty

    setDesc("")
    setTitle("")

    // console.log(maintask);
  }

  const deleteHandeler=(i)=>{
    let copyTask=[...maintask]
    copyTask.splice(i,1)
    setmaintask(copyTask)
  }
  let renTask=<h1>No task available</h1>

  if (maintask.length>0) {
    renTask=maintask.map((task,i)=>{
      return(
      <li key={i} className='flex items-center justify-between mb-5 '>
        <div className='flex items-center justify-between w-2/3'>
            <h5 className='text-4xl font-semibold'>{task.Title}</h5>
            <h6 className='text-2xl font-semibold'>{task.Desc}</h6>
            </div>
          <button onClick={()=>{deleteHandeler()}} className='bg-red-400 rounded-3xl text text-2xl font-bold p-3'>Delete</button>
  
        </li>
      );
  });
}
  

  return (
    <>
    <h1 className='text-7xl mt-5 text-center font-bold bg-blend-color-dodge text-cyan-600'>Preyansh Todo List</h1>
    <form className='mt-2 ' onSubmit={submitHandler}>
      <input className="  mt-5 mr-3 p-2 rounded-3xl border-y-4 border-sky-300 text-3xl font-bold text-black ml-5" type='text' placeholder='Enter your title' value={Title} 
      onChange={(e)=>{
        setTitle(e.target.value)
      }}>
      </input>
      <input className="  mt-5 mr-3 p-2 rounded-3xl border-y-4 border-sky-300 text-3xl font-bold text-black " type='text' placeholder='Enter your Task'
       value={Desc} 
       onChange={(e)=>{
         setDesc(e.target.value)
       }}>
      </input>
      <button className="  mt-5 mr-3 p-2 rounded-3xl text-3xl font-bold hover:ring-4 ring-cyan-300	 bg-cyan-500 text-neutral-700 border-yellow-400">Add task</button>
    </form>
    <div className='p-8 bg-black'>
      <ul>
        {renTask}
      </ul>
    </div>

    </>
  )
}
export default page


