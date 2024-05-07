import { Title } from '@/components'
import { mainTechSkills, otherSkills, programmingSkills } from '@/core'
import React from 'react'
import { SkillList } from './components'

export default function SkillScreen () {
  return (
    <div>
      <div>
        <Title>Main programming language</Title>
        <SkillList items={programmingSkills} />
      </div>
      <div>
        <Title>Main Technology</Title>
        <SkillList items={mainTechSkills} />
      </div>
      <div>
        <Title>Others</Title>
        <SkillList items={otherSkills} />
      </div>
    </div>
  )
}