/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Container from "../../components/Container";
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import TaskTableHeader from "./TaskTableHeader";
import TableItem from "./TableItem";
import { useState } from "react";
import ModalPopup from "../../components/ModalPopup";

// no data component
function NoData() {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell colSpan={6} className="text-center">
        No data Found
      </Table.Cell>
    </Table.Row>
  );
}

// main component

function TaskTable() {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [searchText , setSearchText] = useState('')

// item creat
const createHandler = (item) => {
    console.log(item);
        const updateTask = [
            ...tasks ,
            {
                ...item,
                id: tasks.length + 1,
            }

        ]
        setTasks(updateTask.reverse())
};

// item edit
let editHandler = (task) => {
   setTasks ( tasks.map( item => {
      if(task.id == item.id){
        return task;
      }else {
        return item;
      }
   }))
  
};

// alldelet 
 const deleteItem = (id)=> {
  setTasks(tasks.filter(item => {
    return item.id !== id;
}));
 };

// search
let searchHandler = (text) => {
  setSearchText(text);
}
let updatedTasks = tasks.filter(item => {
  return item.title.toLowerCase().includes(searchText.toLowerCase());
});


  return (
    <Container className=" dark:bg-slate-900">
      <div className="flex justify-end w-full">
        <Button
          onClick={() => setOpenModal(true)}
          className="mr-2"
          color="success"
        >
          Add Task
        </Button>
        <Button onClick={()=> setTasks ([])} color="failure">Clear Tasks</Button>
      </div>

      {/* taskTable */}
      <div className="p-3 rounded-sm border dark:border-[#666] my-3">

        <TaskTableHeader onSearch={searchHandler} />

        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Title</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
              <Table.HeadCell>Assigned To</Table.HeadCell>
              <Table.HeadCell>Priority</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {tasks.length == 0 ? <NoData /> : updatedTasks.map((item, index) => <TableItem onDelete={deleteItem } onEdite={editHandler} data={item} index={index} key={item.id} />)}
            </Table.Body>
          </Table>
        </div>
      </div>
      <ModalPopup  onCreate={createHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />
    </Container>
  );
}

export default TaskTable;
