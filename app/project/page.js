import ListProject from '@/components/Project/ListProject'
import ProjectHeader from '@/components/Project/ProjectHeader'
import React from 'react'

export default function page() {
  return (
    <div className='flex  flex-col gap-3 '>
        <ProjectHeader/>
        <ListProject/>
    </div>
  )
}
