"use client";
import {
  AppstoreOutlined,
  AlignLeftOutlined,
  PicLeftOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
export default function ViewTask({ teamData }) {
  return (
    <div className="bg-white  ">
      {/* header start */}
      <div className="flex  gap-3 mb-3 items-center ">
        <div className="w-[30px] h-[30px">
          <AppstoreOutlined className="text-[30px]" />
        </div>
        <h3 className=" text-[20px] ">
          Trello Tip: Card labels! What do they mean? (Click for more info)
        </h3>
      </div>
      {/* header end  */}
      {/* Member start  */}
      <div>
        <div className="text-sm font-medium  mb-3">Assigned Member:</div>
        <div>
          <div className="relative w-max-content flex gap-2 avatarGroup items-center">
            {[
              {
                name: "John Doe",
                image_url:
                  "https://dash-tail.vercel.app/_next/static/media/avatar-1.f70409c3.jpg",
              },
              {
                name: "Jane Smith",
                image_url:
                  "https://dash-tail.vercel.app/_next/static/media/avatar-2.1136fd53.jpg",
              },
            ].map((item, i) => (
              <span className="relative flex shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-background h-[40px] w-[40px">
                <img
                  className="aspect-square h-full w-full"
                  src={item.image_url}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Member end  */}

      {/* description start  */}
      <div className="flex  gap-3 mb-3 items-center justify-between mt-5 ">
        <div className="flex  gap-3 mb-3 items-center">
          <div className="w-[30px] h-[30px">
            <AlignLeftOutlined className="text-[30px]" />
          </div>
          <h3 className=" text-[20px] ">Description</h3>
        </div>
        <div>
          <h3 className=" text-[18px] ">Dead lines : 90-9-2043 - 09-8-2024 </h3>
        </div>
      </div>
      <div>
        Add labels by clicking the "Labels" button on the right What are labels?
        Labels are great ways to differentiate the type of tasks your team has.
        For example: (yellow) Copy Request: Any doc, task, or page that needs a
        grammatical overview or general words in order for it to be done. (red)
        Priority: This task needs to be finished first before anything else gets
        done. Communicate the urgency with this handy label. (purple) Design
        Team: Use this label to indicate that the design team is involved in
        some capacity so there's never any confusion. (green) Halp: A hilarious
        plea? Yes. A useful indication? Definitely. Labels can be used for
        anything, including an indication that someone needs assistance with a
        task. Bonus Notice the patterns on the labels: designed for those that
        may not be able to see colors properly.
      </div>

      {/* description end  */}

      {/* activity start  */}
      <div className="flex  gap-3 mb-3 items-center mt-5 ">
        <div className="w-[30px] h-[30px">
          <PicLeftOutlined className="text-[30px]" />
        </div>
        <h3 className=" text-[20px] ">Activity</h3>
      </div>

      {[2, 2, 3, 4, 5, 5].map((item) => (
        <div className="flex  gap-3 mb-3 items-center mt-5">
          <div className="relative flex shrink-0 overflow-hidden rounded-full ring-1 ring-background ring-offset-[2px] ring-offset-background h-[50px] w-[50px]">
            <img
              className="  aspect-square h-full w-full "
              src="https://dash-tail.vercel.app/_next/static/media/avatar-2.1136fd53.jpg"
            />
          </div>
          <div>
            <div className="flex gap-2 ">
              <h4>Md. Jami</h4>{" "}
              <span> set this card to be due 21 May at 14:33</span>
            </div>
            <p>6 minutes ago</p>
          </div>
        </div>
      ))}

      {/* activity end  */}
    </div>
  );
}
