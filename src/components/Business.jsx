import React from 'react'
import styles, {layout} from '../Style'
import Button from './Button'
import { features } from '../constants'

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2>You do the business, <br /> we'll handle the money.</h2>
      </div>


    </section>
  )
}

export default Business