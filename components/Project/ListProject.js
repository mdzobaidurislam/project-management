"use client"

import ProjectItem from "./ProjectItem";

export default function ListProject() {
    const data=[
        {
          "id": 1,
          "project_name": "Project A",
          "description": "This is project A description.",
          "team_members": [
            {
              "name": "John Doe",
              "image_url": "https://dash-tail.vercel.app/_next/static/media/avatar-1.f70409c3.jpg"
            },
            {
              "name": "Jane Smith",
              "image_url": "https://dash-tail.vercel.app/_next/static/media/avatar-2.1136fd53.jpg"
            }
          ],
          "priority": "High",
          "assigned_date": "2024-04-01",
          "due_date": "2024-05-15",
          "status": "In Progress"
        },
        {
          "id": 2,
          "project_name": "Project B",
          "description": "This is project B description.",
          "team_members": [
            {
              "name": "Alice Johnson",
              "image_url": "https://dash-tail.vercel.app/_next/static/media/avatar-1.f70409c3.jpg"
            },
            {
              "name": "Bob Brown",
              "image_url": "https://dash-tail.vercel.app/_next/static/media/avatar-2.1136fd53.jpg"
            },
            {
              "name": "Charlie Lee",
              "image_url": "https://dash-tail.vercel.app/_next/static/media/avatar-1.f70409c3.jpg"
            }
          ],
          "priority": "Medium",
          "assigned_date": "2024-03-15",
          "due_date": "2024-06-30",
          "status": "Pending"
        },
        {
          "id": 3,
          "project_name": "Project C",
          "description": "This is project C description.",
          "team_members": [
            {
              "name": "David Wilson",
              "image_url": "https://dash-tail.vercel.app/_next/static/media/avatar-1.f70409c3.jpg"
            },
            {
              "name": "Emma Garcia",
              "image_url": "https://dash-tail.vercel.app/_next/static/media/avatar-2.1136fd53.jpg"
            }
          ],
          "priority": "Low",
          "assigned_date": "2024-05-01",
          "due_date": "2024-07-15",
          "status": "Completed"
        }
      ]
      
    return (
        <div className='grid  xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5'>

        {
            data.map((item,i)=>(
<ProjectItem data={item} key={i} />
            ))
        }
            

        </div>
    )
}
