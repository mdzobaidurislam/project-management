"use client";
import { useTaskStore } from "@/utils/useStore";
import { Dropdown, Modal } from "antd";
import { useState } from "react";
import ViewTask from "./ViewTask";

export default function TaskItem({
  id,
  title,
  description,
  status,
  setActiveCard,
  index,
}) {
  const dragTask = useTaskStore((state) => state.dragTask);
  const removeTask = useTaskStore((state) => state.removeTask);
  const [taskShow, setTaskShow] = useState(false);
  const [teamData, setTeamData] = useState(null);
  const items = [
    {
      label: (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleViewTask(id);
          }}
        >
          View{" "}
        </a>
      ),
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">Edit {id}</a>,
      key: "2",
    },
    {
      label: <a href="https://www.aliyun.com">Delete {id} </a>,
      key: "3",
    },
  ];
  const handleViewTask = (id) => {
    setTaskShow(true);
    setTeamData(id);
  };

  return (
    <>
      <Modal
        title="Task details"
        centered
        open={taskShow}
        onOk={() => setTaskShow(false)}
        onCancel={() => setTaskShow(false)}
        width={600}
        footer={null}
      >
        <ViewTask teamData={teamData} />
      </Modal>

      <div
        className="rounded-lg bg-white shadow-lg"
        onDragStart={() => {
          dragTask(id);
          setActiveCard(index);
        }}
        onDragEnd={() => setActiveCard(null)}
        draggable
      >
        <div className="flex space-y-1.5 px-4 py-2 border-b border-border flex-row items-center gap-3 border-none mb-0">
          <div className="flex-1">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary bg-opacity-10 text-primary hover:text-primary capitalize">
              {status}
            </div>
          </div>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["hover"]}
            placement="bottomRight"
          >
            <a onClick={(e) => e.preventDefault()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4 text-default-700"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </a>
          </Dropdown>
        </div>
        <div
          className={
            "flex cursor-move items-start justify-between   px-3 py-2 text-gray-900"
          }
        >
          <div>
            <h3 className="font-medium text-gray-700">{title}</h3>
            <p className="text-sm font-light text-gray-500">{description}</p>
          </div>

          <button className="cursor-pointer" onClick={() => removeTask(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-gray-500 hover:text-rose-400"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="items-center flex justify-between border-t p-4">
          <div>
            <div className="text-xs  text-default-600 mb-[2px]">
              Assigned Date:
            </div>
            <span className="text-xs font-medium text-default-900">
              03-23-2024{" "}
            </span>
          </div>
          <div>
            <div className="text-xs  text-default-600 mb-[2px]">Due Date:</div>
            <span className="text-xs font-medium text-default-900">
              03-23-2024
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
