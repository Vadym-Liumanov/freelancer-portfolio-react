import React from "react"

import "./styles.css"

import gitHubIcon from "../../img/icons/gitHub.svg"
import instagramIcon from "../../img/icons/instagram.svg"
import linkedInIcon from "../../img/icons/linkedIn.svg"
import twitterIcon from "../../img/icons/twitter.svg"
import vkIcon from "../../img/icons/vk.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item"><a href="#!"><img src={vkIcon} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img src={instagramIcon} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img src={twitterIcon} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img src={gitHubIcon} alt="Link" /></a></li>
            <li className="social__item"><a href="#!"><img src={linkedInIcon} alt="Link" /></a></li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer