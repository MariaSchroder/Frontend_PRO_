import React from 'react'
import { services } from '../../data/services'
import ServiceCard from '../ServiceCard'
import s from './index.module.css'

export default function Services() {
  return (
    <section className={s.services_section}>
      <div className={['wrapper', s.services_block].join(' ')}>
        {/* `wrapper ${s.services_block}` */}
        <p className='subheader'>Наши услуги</p>
        <h2>Мы специализируемся</h2>
        <div className={s.services_container}>
          {
            services.map(el => <ServiceCard key={el.id} {...el} />)
          }
        </div>
      </div>
    </section>
  )
}