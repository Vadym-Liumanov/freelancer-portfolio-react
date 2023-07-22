import React from "react"

import './styles.css'

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__wrapper">
                    <h1 className="contacts__title title-1">Contacts</h1>
                    <ul className="contacts__list">
                        {/* Location исключен из контактов добавлением класса "none" */}
                        <li className="contacts__item contacts__location none">
                            <h2 className="contacts__subtitle">Location</h2>
                            <p className="contacts__text">Voronezh, Russia</p>
                        </li>

                        <li className="contacts__item contacts__phone">
                            <h2 className="contacts__subtitle">Phone</h2>
                            <p className="contacts__text">
                                <a href="tel:+79202049920" className="contacts__link">+7 (920) 204-99-20</a>
                            </p>
                        </li>

                        <li className="contacts__item contacts__email">
                            <h2 className="contacts__subtitle">Email</h2>
                            <p className="contacts__text">
                                <a href="mailto:vliumanov@gmail.com" className="contacts__link">vliumanov@gmail.com</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contacts