import React from 'react'
import { snsLink } from '../../data/header'

const Sns = () => {
  return (
    <div className='header_sns'>
                <ul>
                    {snsLink.map((sns, key) => (
                      <li key={key}>
                        <a href={sns.src} target='_blank' rel='noopner noreferrer' aria-label={sns.title}>
                          <span>{sns.icon}</span>
                        </a>
                      </li>
                    ))}
                </ul>
      </div>
  )
}

export default Sns