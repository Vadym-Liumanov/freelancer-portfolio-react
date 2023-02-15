import React from "react"

import SocialCard from "../socialCard/SocialCard"
import { socialList } from "../../helpers/socialList"

import "./styles.css"

// import { gitHub, instagram, linkedIn, twitter, vk } from "../../img/icons"

const Footer = () => {
  const copyrightText = '© 2022 vvliumanov'

  const socials = socialList.map((item) => {
    return <SocialCard key={item.id} link={item.link} icon={item.icon} />
  })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {socials}
          </ul>
          <div className="copyright">
            <p>{copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer