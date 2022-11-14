import React from 'react'
import Worker from '../Worker'
import { workers } from '../../data/workers'
export default function Cards() {
  
  // const active_workers = workers.filter(el => el.in_office);

  return (
    <div>
      {
        workers
          .map(el => <Worker {...el} key={el.id} />)
      }
    </div>
  )
}