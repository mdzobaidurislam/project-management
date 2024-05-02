"use client"
import {
    CheckCircleOutlined,
    ProductOutlined,
    QrcodeOutlined,
    FallOutlined
  } from '@ant-design/icons';
export default function Dashboard() {
  return (
    <div>
        <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <div className="p-4 shadow-lg rounded-lg bg-primary ">
                            <div className=" text-white flex items-center">
                            <ProductOutlined />
                                <div className="flex flex-col ms-3">
                                    <h6 className="mb-0">Total Projects</h6>
                                    <span className="text-white">550</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                    <div className="p-4 shadow-lg rounded-lg bg-primary ">
                            <div className=" text-white flex items-center">
                            <QrcodeOutlined />
                                <div className="flex flex-col ms-3">
                                    <h6 className="mb-0">Coming Projects</h6>
                                    <span className="text-white">210</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                    <div className="p-4 shadow-lg rounded-lg bg-primary ">
                            <div className=" text-white flex items-center">
                            <FallOutlined />
                                <div className="flex flex-col ms-3">
                                    <h6 className="mb-0">Progress Projects</h6>
                                    <span className="text-white">8456 Files</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                    <div className="p-4 shadow-lg rounded-lg bg-primary ">
                            <div className=" text-white flex items-center">
                            <CheckCircleOutlined />
                                <div className="flex flex-col ms-3">
                                    <h6 className="mb-0">Finished Projects</h6>
                                    <span className="text-white">88 Files</span>
                                </div>
                            </div>
                        </div>
                    </div>             
                </div>
    </div>
  )
}
