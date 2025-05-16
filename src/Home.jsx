import React from 'react';
import './App.css';
import imgul2 from '../public/assets/images/imgul2.png';
const Home = () => {
    return (
        <div classname="container" style={{ fontFamily: 'poppins' }}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ background: '#bed4ff' }}>
                <div className="container-fluid" style={{ padding: "20px" }}>
                    <a className="navbar-brand" href="#" style={{ fontWeight: 'bold', fontSize: 23 }}>Ulrich Koudjou</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse mx-auto" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> À propos </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Bienvenue Monsieur/Madame, vous êtes sur le site <strong>ulrich-dev</strong>

                        </span>
                    </div>
                </div>
            </nav>


            <div className="card  d-flex flex-column flex-md-row-reverse container" style={{padding:0,border:0}}>
                <img
                    // src="./assets/images/imgul2.png"
                    src={imgul2}
                   
                    alt="..."
                />
                <div
                    className="card-body cardstyle"
                    style={{ background: '#a01051', color: 'white'}}
                >
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </p>
                    <p className="card-text">
                        <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>






        </div>

    );
};

export default Home;