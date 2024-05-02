"use client";
import React, { useState } from "react";
import { Button, Input, Modal } from "antd";

import { PlusOutlined } from "@ant-design/icons";
import TaskForm from "./TaskForm";
const { TextArea } = Input;

export default function TaskDIalog() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        htmlType="button"
        className=" flex items-center h-[50px]"
        onClick={() => setOpen(true)}
      >
        <PlusOutlined /> <span>Add task</span>
      </Button>
      <Modal
        title="Create a new Project"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={600}
        footer={null}
      >
        <TaskForm setOpen={setOpen}/>
      </Modal>
    </div>
  );
}
