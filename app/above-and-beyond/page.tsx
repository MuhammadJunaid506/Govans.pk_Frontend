import Banner from '@/components/Banner'
import Proactive from '@/components/Proactive'
import React from 'react'

const AboveBeyond = () => {
  return <><Banner Heading={"Setting the bar above and beyond for safe youth transportation solutions"} Text={"Safety means going above and beyond the current ‘norms’ to set a much, much higher bar for ourselves and the industry as a whole."} Btn={true}/>
    <Banner Heading='Our safety philosophy can be summed up in three pillars:
        proactive, innovative, relentless.' Text='We’re bringing safety into 2023, not just complying with regulations that were written years before. HopSkipDrive is the leader in safe youth transportation — for children today and tomorrow.' Btn={false} />
    <Proactive/>
    </>

}

export default AboveBeyond
