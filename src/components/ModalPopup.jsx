/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {
  Button,
  Modal,
  Select,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { popupFormValidation } from "./form-validation/ModalForm";



// mai function

function ModalPopup({ onOpen, onClose ,onCreate,taskToEdite,onEdite }) {

  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver:yupResolver(popupFormValidation)
  });

  const onSubmit = (data)=> {

    if(taskToEdite){
      onEdite(data)
    } else {
      onCreate(data)
    }
    reset();
    onClose();
  }


  const formData = taskToEdite || {
    id: crypto.randomUUID(),
    title: null,
    description: null,
    assignTo: null,
    priority: null,
  }
  return (
    <>
      <Modal show={onOpen} onClose={() => onClose(false)}>
        <Modal.Header>{taskToEdite ? 'ApdateTask' : 'Add Task'}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form className="flex flex-wrap" onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Title" />
                </div>
                <input defaultValue={formData.id} {...register('id')} type="hidden" />

                <TextInput defaultValue={formData.title} {...register("title")} id="title" type="text" />
                {errors.title && <span className="text-red-500">{errors.title.message}</span>}
              </div>
              {/* description */}

              <div className="w-full mt-2">
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <Textarea defaultValue={formData.description} {...register("description")} id="description" rows={4} />
                {errors.description && <span className="text-red-500">{errors.description.message}</span>}
              </div>

              {/* Assing To  */}
              <div className="w-2/3 mt-2">
                <div className="pr-2">
                  <div className="mb-2 block">
                    <Label htmlFor="assign" value="Assign to" />
                  </div>
                  <Select defaultValue={formData.assignTo}  {...register("assignTo")} id="assign">
                    <option value="" disabled>
                      Select Assign To
                    </option>
                    <option value="Person One">Person One</option>
                    <option value="Person Two">Person Two</option>
                    <option value="Person Three">Person Three</option>
                    <option value="Person Four">Person Four</option>
                    <option value="Person Five">Person Five</option>
                  </Select>
                  {errors.assignTo && <span className="text-red-500">{errors.assignTo.message}</span>}
                </div>
              </div>

              {/* priority */}

              <div className="w-1/3 mt-2">
                <div className="mb-2 block">
                  <Label htmlFor="assign" value="Priority" />
                </div>
                <Select defaultValue={formData.priority} {...register('priority')} id="assign">
                  <option value="" disabled>
                    Select Priority
                  </option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Select>
                {errors.priority && <span className="text-red-500">{errors.priority.message}</span>}
              </div>
              <Button type="submit" className="mt-4">{taskToEdite ? 'Apdate Task' : 'Add Task'}</Button>
            </form>
          </div>
        </Modal.Body>
      
      </Modal>
    </>
  );
}

export default ModalPopup;
