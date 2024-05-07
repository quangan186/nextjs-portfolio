import { Text, Title } from '@/components'
import { EducationModel } from '@/core'
import React from 'react'

interface Props {
    item: EducationModel
}

export const EducationCard = (props: Props) => {
  return (
    <div>
         <div className='flex gap-4'>
            <Title className='!text-[20px]'>{props.item.degree}</Title>
            <Title className='!text-[20px] text-right'>{props.item.school}</Title>
        </div>
        <div className='flex justify-between'>
            <Text className='!text-[16px] py-4 italic'>GPA: {props.item.gpa} / 4.0</Text>
            <Text className='!text-[16px] py-4 italic'>({props.item.startTime} - {props.item.endTime})</Text>
        </div>
        <a href={props.item.testamur} target='_blank' rel='noreferrer' className="text-blue-500 hover:underline flex gap-4 ">Link to my testamur</a>
    </div>
  )
}