"use client";
import { Form, Button, Input, Modal, Select, DatePicker } from "antd";

import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import ProjectForm from "./ProjectForm";
const { TextArea } = Input;
const { RangePicker } = DatePicker;
export default function ProjectHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal
        title="Create a new Project"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={null}
      >
        <ProjectForm />
      </Modal>
      <div className="rounded-lg bg-white  shadow-lg p-3 pt-3">
        <div className='flex w-full  flex-wrap justify-between "'>
          <Button
            type="primary"
            htmlType="button"
            className=" flex items-center h-[50px]"
            onClick={() => setOpen(true)}
          >
            <PlusOutlined /> <span>Add Project</span>
          </Button>

          <div className="   flex ">
            <Input placeholder="Search" />
          </div>
        </div>
      </div>
    </>
  );
}
