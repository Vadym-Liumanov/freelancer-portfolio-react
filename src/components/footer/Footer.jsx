import React from "react"

import SocialCard from "../socialCard/SocialCard"
import { socialList } from "../../helpers/socialList"

import "./styles.css"

const Footer = () => {
  const copyrightText = '© 2022 vvliumanov'

  const socials = socialList.map((item) => {
    return <SocialCard key={item.id} link={item.link} icon={item.icon} />
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