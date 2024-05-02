"use client";

import { useEffect, useState } from "react";
import Column from "./Column";
import TaskDIalog from "./TaskDIalog";
import { useTaskStore } from "@/utils/useStore";
import { DatePicker, Input, Select, Spin } from "antd";
import { taskList } from "@/lib/taskApi";
import { useQuery } from "react-query";
import{ userList } from "@/lib/userApi";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";

export default function Task() {
  const [activeCard, setActiveCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState({ title: '', status: '', startDate: '', endDate: '' });


  const tasks = useTaskStore((state) => state.tasks);
  const setTasks = useTaskStore((state) => state.setTasks);
  const setUser = useTaskStore((state) => state.setUser);
 

  const { data: clientTasks, isLoading, isError } = useQuery(
    ['tasks', searchTerm],
    () => taskList(buildQueryString(searchTerm)),
    { keepPreviousData: true }
  );
  const { data: clientUser } =  useQuery(['userList'], userList); 

  useEffect(() => {
    if (clientTasks) {
      console.log("clientTasks",clientTasks.data.docs)
      setTasks(clientTasks.data.docs)
    }
    if (clientUser) {
      setUser(clientUser.data)
    }

  }, [clientTasks,clientUser]);
  // Function to build query string from search term object
  const buildQueryString = (searchTerm) => {
    const queryString = Object.keys(searchTerm)
      .filter(key => searchTerm[key])
      .map(key => `${key}=${searchTerm[key]}`)
      .join('&');
    return queryString ? `${queryString}` : '';
  };

  // Handle search term change for title, status, start_date, and end_date
  const handleTitleInputChange = (e) => {
    setSearchTerm({ ...searchTerm, title: e.target.value });
  };

  const handleStatusSelectChange = (value) => {
    setSearchTerm({ ...searchTerm, status: value });
  };

  const handleDateChange = (dates, dateStrings) => {
    setSearchTerm({ ...searchTerm, startDate: dateStrings[0], endDate: dateStrings[1] });
  };


  const onDrop = (status, position) => {
    if (activeCard == null || activeCard === undefined) return;
    const taskToMove = tasks[activeCard];
    const updateTasks = tasks.filter((task, index) => index !== activeCard);
    updateTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setTasks(updateTasks);
  };

  return (
    <>
      <div className="rounded-lg bg-white  shadow-lg p-3 pt-3">
        <div className='flex w-full  flex-wrap justify-between "'>
          <TaskDIalog />
          <div className="flex gap-3 ">
            <div className="   flex ">
              <Input placeholder="Search" onChange={(e)=>handleTitleInputChange(e)} />
            </div>
            <RangePicker
              onChange={handleDateChange}
            />
            <Select
              allowClear
              showSearch={true}
              placeholder="Status"
              className="w-[180px] h-[50px]"
              options={[
                {
                  value: "todo",
                  label: "To Do",
                },
                {
                  value: "inProgress",
                  label: "In Progress",
                },

                {
                  value: "done",
                  label: "Done",
                },
              ]}
              onChange={(value, item) => handleStatusSelectChange(value)}
            />
          </div>
        </div>
      </div>

      {
        isLoading && <div className="flex items-center justify-center h-lvh w-full absolute top-0 left-0 right-0 bottom-0 bg-zinc-300  opacity-65 ">
          <Spin/>
        </div>
      }

{
  isError && 'Error...'
}
      <section className="mt-10 flex gap-6 lg:gap-12">
        <Column
          title="Todo"
          status="todo"
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <Column
          title="In Progress"
          status="inProgress"
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <Column
          title="Done"
          status="done"
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </section>
    </>
  );
}
