"use client";

import { Dropdown, Modal, message } from "antd";
import TeamMember from "./Team";
import { useState } from "react";
import ViewProject from "./ViewProject";
function ProjectItem({ data }) {
  const [messageApi, contextHolder] = message.useMessage();
  const [projectShow, setProjectShow] = useState(false);
  const [teamData, setTeamData] = useState({});
  const items = [
    {
      label: (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleView(data.id);
          }}
        >
          View {data.id}{" "}
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleEdit(data.id);
          }}
        >
          Edit {data.id}
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleDelete(data.id);
          }}
        >
          Delete {data.id}{" "}
        </a>
      ),
      key: "3",
    },
  ];
  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message",
    });
  };
  const handleView = (id) => {
    setProjectShow(true);
    setTeamData({
      id,
      type: "view",
    });
  };
  const handleEdit = (id) => {
    setProjectShow(true);
    setTeamData({
      id,
      type: "edit",
    });
  };
  const handleDelete = (id) => {
    success();
  };

  return (
    <>
      {contextHolder}
      <Modal
        title="Project details"
        centered
        open={projectShow}
        onOk={() => setProjectShow(false)}
        onCancel={() => setProjectShow(false)}
        width={600}
        footer={null}
      >
        <ViewProject teamData={teamData} />
      </Modal>

      <div className="rounded-lg  shadow-lg bg-white ">
        <div className="flex space-y-1.5 px-4 py-4 border-b border-border flex-row items-center gap-3 border-none mb-0">
          <div className="flex-1">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary bg-opacity-10 text-primary hover:text-primary capitalize">
              {data.status}
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
        <div className="flex gap-2">
          <div className="pt-2 pb-2 pl-2 pr-2">
            <div className="text-base font-semibold text-default-900 capitalize mb-1">
              {" "}
              {data.project_name}
            </div>
            <div className="text-xs font-medium  max-h-[34px]  overflow-hidden">
              {data.description}
            </div>
          </div>
        </div>
        <TeamMember teams={data.team_members} priority={data.priority} />
        <div className="items-center flex justify-between border-t p-4">
          <div>
            <div className="text-xs  text-default-600 mb-[2px]">
              Assigned Date:
            </div>
            <span className="text-xs font-medium text-default-900">
              {data.assigned_date}
            </span>
          </div>
          <div>
            <div className="text-xs  text-default-600 mb-[2px]">Due Date:</div>
            <span className="text-xs font-medium text-default-900">
              {data.due_date}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
