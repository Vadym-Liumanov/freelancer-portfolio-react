import React from "react"

import { socialList } from "../../helpers/socialList"

import "./styles.css"

const Footer = () => {
  const copyrightText = '© 2022 vvliumanov'

  const socials = socialList.map((item) => {
    return (
      <li className="social__item" key={item.id}>
        <a href={item.link} target="_blank" rel="noreferrer">
          <img src={item.icon} alt="Link" className="social__icon" />
        </a>
      </li>
    )
  })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="footer__social social">
            {socials}
          </ul>
          <div className="footer__copyright copyright">
            <p>{copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer