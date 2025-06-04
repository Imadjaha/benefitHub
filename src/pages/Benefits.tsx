import React from 'react'
import Header from '../components/Header'
import Snackbar from '../components/Snackbar'
import ScrollUpButton from '../components/ScrollUpButton'
import BenefitCard from '../components/BenefitCard'
import BenefitsList from '../components/BenefitsList'

export default function Benefits() {
  return (
    <div>
        <Header title="Benefits" darkModeSwitcher/>
        <ScrollUpButton />
        {/* <BenefitCard/> */}
        <BenefitsList/>

    </div>
  )
}
