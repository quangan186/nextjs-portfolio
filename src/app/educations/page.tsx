import { Title } from '@/components'
import { certificates, educations } from '@/core'
import React from 'react'
import { CertificateCard, EducationCard } from './components'

export default function EducationScreen () {
  return (
    <div>
      <div>
          <Title className='!text-[32px]'>Educations</Title>
          {
          educations.map((education, index) => {
            return(
              <EducationCard key={index} item={education}/>
            )
          })
        }
        </div>
        
        <div>
          <Title className='!text-[32px]'>Certificates</Title>
          {certificates.map((cert, index) => {
            return(
                <CertificateCard key={index} item={cert} />
            )
        })}
        </div>
    </div>
  )
}