
import AboutHeroSection from '@/Components/About/AboutHeroSection'
import MissionVisionCards from '@/Components/About/MissionVisionCards'
import TeamSection from '@/Components/About/TeamSection'
import ValuesStatement from '@/Components/About/ValuesStatement'
import AwardsSection from '@/Components/About/AwardsSection'
import React from 'react'

function page() {
  return (
      <>
        <AboutHeroSection />
        <ValuesStatement />
        <MissionVisionCards />
        <TeamSection />
        <AwardsSection />
      </>
  )
}

export default page
