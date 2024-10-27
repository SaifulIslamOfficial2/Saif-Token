/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Table } from "flowbite-react";
import { useState } from "react";
import ModalPopup from "../../components/ModalPopup";
import DeleteModal from "../DeleteModal";
// import { printValue } from "yup";



function TableItem(props) {

  const [openModal, setOpenModal] = useState(false);
  const [deleteopenModal, setdeleteOpenModal] = useState(null);
  let {id, title, description, assignTo, priority } = props.data;


  let clickkoro = ()=> {
    setOpenModal(true)
  }

  let editHandler = (task) => {
    props.onEdite(task);
  }




  return (
    <>
     <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell> {props.index + 1 } </Table.Cell>
        <Table.Cell>{title} </Table.Cell>
        <Table.Cell>{description}</Table.Cell>
        <Table.Cell>{assignTo}</Table.Cell>
        <Table.Cell>{priority}</Table.Cell>
        <Table.Cell>
          <button onClick={clickkoro} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-3">
            Edit
          </button>
          <button  onClick={ ()=> setdeleteOpenModal(true) } className="font-medium text-rose-600 hover:underline dark:text-rose-500">
            Delete
          </button>
        </Table.Cell>
      </Table.Row>
      <DeleteModal  deleteModal={deleteopenModal} onDeleteClous={ ()=>  setdeleteOpenModal(false)} onDelete={()=>props.onDelete(id)} />
      <ModalPopup taskToEdite={props.data} onEdite={editHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}

export default TableItem