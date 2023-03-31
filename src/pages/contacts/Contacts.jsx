import React from "react"

const Contacts = () => {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Contacts</h1>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Voronezh, Russia</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Phone</h2>
                            <p><a href="tel:+79202049920">+7 (920) 204-99-20</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:vliumanov@gmail.com">vliumanov@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Contacts