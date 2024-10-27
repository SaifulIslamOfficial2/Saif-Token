/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { BsSearchHeartFill } from "react-icons/bs";
import { TextInput } from "flowbite-react";

function TaskTableHeader({onSearch}) {


const ChangeHandler = (e) => {
    const val = e.target.value;
    onSearch(val)
}

  return (
    <div className="flex justify-between items-center mt-2 mb-3 cursor-pointer">
    <h2 className="text-2xl pl-3 font-bold dark:text-white">Your <span className=" text-green-500">Tasks</span></h2>
    <div className="max-w-lg cursor-pointer">
    <TextInput onChange={ChangeHandler} id="email4" type="email" rightIcon={BsSearchHeartFill} placeholder="Search your Things" required />
    </div>
  </div>
  )
}

export default TaskTableHeader