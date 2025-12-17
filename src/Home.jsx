import React , {useEffect} from 'react';
import './App.css';
import { auto } from '@popperjs/core';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import imgul2 from '../public/assets/images/imgul2.png';
const Home = () => {

    useEffect(() => {
        const isDirectAccess = window.location.href === 'https://ulrich-mbouna.vercel.app/';
        if (isDirectAccess) {
          console.log("L'utilisateur est arrivé directement sur la page d'accueil");
        }
      }, []);


    return (
        <div classname="container" style={{ fontFamily: 'poppins', background: "#f3f5f7" }}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ background: '#a01051' }}>
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
                                <a className="nav-link" href="#propos237"> À propos </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services237">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects237">Projets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Contact237">Contact</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Bienvenue Monsieur/Madame, vous êtes sur le site <strong>ulrich-dev</strong>

                        </span>
                    </div>
                </div>
            </nav>


            <div className="card  d-flex flex-column flex-md-row-reverse container" style={{ padding: 0, border: 0, background: "linear-gradient(to right, #9A0214, #62010D)" }}>
                <img
                    src="./assets/images/imgul2.png"
                    height={500}
                    width={auto}
                    style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                    className='clip-path-image'
                    alt="..."
                />
                <div
                    className="card-body d-flex flex-column justify-content-center align-items-center"
                    style={{ color: 'white' }}
                >
                    <h2 className="card-title" style={{ fontWeight: 700 }}>Koudjou Mbouna Ulrich</h2>
                    <p className="card-text text-center">
                        Ingénieur en Génie Logiciel • Développeur Fullstack & Mobile
                    </p>
                    <p className=" text-center" style={{ fontWeight: 200 }}>
                        tel: +237697847790 Email: koudjouulrich@gmail.com
                    </p>
                    <p className="card-text">
                        <small className=" text-center" style={{ color: "rgb(135 135 135 / 75%)" }}>Passionné par l'innovation et l'amélioration continue,<br />
                            je transforme vos idées en applications concrètes et évolutives.</small>
                        <p className=" text-center d-block d-sm-none" style={{ color: "rgb(135 135 135 / 75%)" }}>Contact :+237697847790</p>
                    </p>
                </div>
            </div>
            <div style={{ height: "500px" }} id='propos237' className='container d-flex justify-content-center align-items-center' h-md-500>
                <p className='text-center mt-5 ' style={{ lineHeight: '30px', fontWeight: 100 }}>
                    <span className='' style={{ fontWeight: 'bold', color: '#62010D', fontSize: 20 }}>Qui suis-je ?</span><br />Ulrich-dev est un espace
                    professionnel dédié au développement de solutions web et mobiles modernes. En tant qu’ingénieur en génie logiciel, je mets la technologie au
                    service des entreprises et particuliers pour concevoir des applications performantes, intuitives et évolutives.<br />
                    🎯 Mon objectif : vous accompagner de la conception à la mise en ligne, tout en garantissant performance, sécurité et expérience utilisateur optimale.
                </p>
            </div>
            <div className='container' style={{ padding: 0, marginTop: 50 }} id='projects237'>
                <section className="light">
                    <div className="container py-2">
                        <div className="h1 text-center text-dark" id="pageHeaderTitle">Nos projets</div>
                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators mt-3">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 3" />

                            </div>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <article className="postcard light blue">
                                        <a className="postcard__img_link" href="#">
                                            <img className="postcard__img" src="./assets/images/2147767333.jpg" alt="Image Title" />
                                        </a>
                                        <div className="postcard__text t-dark">
                                            <h1 className="postcard__title blue"><a href="https://www.wemaza.com" target="_blank" rel="noopener noreferrer">Wemaza</a>
                                            </h1>
                                            <div className="postcard__subtitle small">
                                                <time dateTime="2020-05-25 12:00:00">
                                                    <i className="fas fa-calendar-alt mr-2" /> Tootree Cameroun
                                                </time>
                                            </div>
                                            <div className="postcard__bar" />
                                            <div className="postcard__preview-txt">
                                            Wemaza est une plateforme numérique innovante qui offre des services spécialisés dans le domaine de la santé, de la certification de documents et de l’accompagnement administratif. Ce site a été conçu pour faciliter l’accès des utilisateurs à des prestations fiables, rapides et centralisées, le tout à travers une interface intuitive. <br/>

En tant que développeur front-end, j’ai été en charge de l’intégration complète de l’interface utilisateur en React.js, tout en assurant la consommation sécurisée et fluide des API REST fournies par l’équipe back-end. J’ai également veillé à l’optimisation de l’expérience utilisateur (UX) sur desktop et mobile.
                                            </div>
                                            <ul className="postcard__tagbox">
                                                <li className="tag__item"><i className="fas fa-tag mr-2" />Toujours encours</li>
                                                <li className="tag__item"><i className="fas fa-clock mr-2" /> assistant developpeur react js</li>
                                                <li className="tag__item play blue">
                                                    <a href="#"><i className="fas fa-play mr-2" />Cliquer sur le nom "wemaza" pour acceder au site</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                                <div className="carousel-item">
                                    <article className="postcard light red">
                                        <a className="postcard__img_link" href="#">
                                            <img className="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />
                                        </a>
                                        <div className="postcard__text t-dark">
                                            <h1 className="postcard__title red"><a href="#">Application de gestion de stock</a></h1>
                                            <div className="postcard__subtitle small">
                                                <time dateTime="2020-05-25 12:00:00">
                                                    <i className="fas fa-calendar-alt mr-2" /> DieuneDort Shop
                                                </time>
                                            </div>
                                            <div className="postcard__bar" />
                                            <div className="postcard__preview-txt">
                                            DieuneDort Shop est une boutique située au marché Nkulu a douala, spécialisée dans la vente de sacs importés pour divers usages : école, milieu professionnel, sorties entre amis, etc. Dans le cadre de leur activité, j’ai été chargé de développer une application mobile compatible avec les tablettes et les petits téléphones. Cette application permet de consulter en temps réel les quantités d’un article disponibles en boutique et en magasin, d’identifier le fournisseur associé, et de déterminer automatiquement s’il est nécessaire de passer une commande externe en fonction des seuils de stock. Mon intervention a permis d’optimiser la gestion des stocks et de faciliter la prise de décision pour les réapprovisionnements.
                                            </div>
                                            <ul className="postcard__tagbox">
                                                <li className="tag__item"><i className="fas fa-tag mr-2" />Déjà livré</li>
                                                <li className="tag__item"><i className="fas fa-clock mr-2" />Utilisation de flutter</li>
                                                {/* <li className="tag__item play red">
                                                    <a href="#"><i className="fas fa-play mr-2" />Play Episode</a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                                <div className="carousel-item">
                                    <article className="postcard light green">
                                        <a className="postcard__img_link" href="#">
                                            <img className="postcard__img" src="https://picsum.photos/500/501" alt="Image Title" />
                                        </a>
                                        <div className="postcard__text t-dark">
                                            <h1 className="postcard__title green"><a href="#">Application de gestion de finance</a></h1>
                                            <div className="postcard__subtitle small">
                                                <time dateTime="2020-05-25 12:00:00">
                                                    <i className="fas fa-calendar-alt mr-2" /> Particulier
                                                </time>
                                            </div>
                                            <div className="postcard__bar" />
                                            <div className="postcard__preview-txt">
                                            J’ai développé une application de gestion financière destinée à un particulier, visant à suivre de manière précise les mouvements de trésorerie. Après chaque vente réalisée auprès d’un client, l’application calcule automatiquement le solde restant en caisse en prenant en compte les différentes charges liées à la transaction. Elle soustrait de manière dynamique les dépenses telles que le coût du service, les frais de transport ainsi que les frais de transfert, permettant ainsi une visibilité claire et instantanée sur les bénéfices nets et la situation financière réelle.
                                            </div>
                                            <ul className="postcard__tagbox">
                                                <li className="tag__item"><i className="fas fa-tag mr-2" />Déjà livré</li>
                                                <li className="tag__item"><i className="fas fa-clock mr-2" />Application web</li>
                                                {/* <li className="tag__item play green">
                                                    <a href="#"><i className="fas fa-play mr-2" />Play Episode</a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                                <div className="carousel-item">
                                    <article className="postcard light yellow">
                                        <a className="postcard__img_link" href="#">
                                            <img className="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" />
                                        </a>
                                        <div className="postcard__text t-dark">
                                            <h1 className="postcard__title yellow"><a href="#">Ulrich-DEV</a></h1>
                                            <div className="postcard__subtitle small">
                                                <time dateTime="2020-05-25 12:00:00">
                                                    <i className="fas fa-calendar-alt mr-2" />Mon, May 25th 2020
                                                </time>
                                            </div>
                                            <div className="postcard__bar" />
                                            <div className="postcard__preview-txt">Ulrich-dev est un espace professionnel dédié au développement de solutions web et mobiles modernes. En tant qu’ingénieur en génie logiciel, je mets la technologie au service des entreprises et particuliers pour concevoir des applications performantes, intuitives et évolutives.</div>
                                            <ul className="postcard__tagbox">
                                                <li className="tag__item"><i className="fas fa-tag mr-2" />Déjà livré</li>
                                                <li className="tag__item"><i className="fas fa-clock mr-2" />Application web</li>
                                                {/* <li className="tag__item play yellow">
                                                    <a href="#"><i className="fas fa-play mr-2" />Play Episode</a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: 'black', borderRadius: '50%' }} />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: 'black', borderRadius: '50%' }} />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>








                    </div>
                </section>
            </div>
            <div className="h1 text-center text-dark mb-5" id='services237'>Nos services</div>
            <div className='container d-flex justify-content-center align-items-center mb-5' style={{ height: 'auto', background: 'linear-gradient(to right, #9A0214, #62010D)', padding: '0 20px', borderRadius: 15 }}>
                <section className="mt-5">
                    <div className="container">

                        <div className="d-flex justify-content-center align-items-center  row">
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 width350" >
                                <div className="card text-dark card-has-bg click-col" style={{ backgroundImage: 'url("https://api.unsplash.com/search/collections?page=1&query=office")' }}>
                                    <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
                                    <div className="card-img-overlay d-flex flex-column">
                                        <div className="card-body">
                                            <small className="card-meta mb-2"> Développement Web Fullstack</small>
                                            <h4 className="card-title mt-0 "><a className="text-dark" herf="#">Création de sites et applications web dynamiques, performants et responsives.</a></h4>
                                            <small><i className="far fa-clock" /> tout type</small>
                                        </div>
                                        <div className="card-footer">
                                            <div className="media">
                                                <img className="mr-3 rounded-circle" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder image" style={{ maxWidth: 50 }} />
                                                <div className="media-body">
                                                    <h6 className="my-0 text-dark d-block">Ulrich Mbouna</h6>
                                                    <small>Développeur</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 width350"><div className="card text-dark card-has-bg click-col" style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?tree,nature")' }}>
                                <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tree,nature" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">Développement Mobile</small>
                                        <h4 className="card-title mt-0 "><a className="text-dark" herf="#">Conception d’applications mobiles natives ou hybrides pour Android et iOS.</a></h4>
                                        <small><i className="far fa-clock" /> android & ios</small>
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <img className="mr-3 rounded-circle" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder image" style={{ maxWidth: 50 }} />
                                            <div className="media-body">
                                                <h6 className="my-0 text-dark d-block">Ulrich Mbouna</h6>
                                                <small>Développeur</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 width350"><div className="card text-dark card-has-bg click-col" style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?computer,design")' }}>
                                <img className="card-img d-none" src="https://source.unsplash.com/600x900/?computer,design" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">Déploiement Cloud & Conteneurisation</small>
                                        <h4 className="card-title mt-0 "><a className="text-dark" herf="#">Mise en ligne, optimisation et sécurisation de vos projets via le cloud.</a></h4>
                                        {/* <small><i className="far fa-clock" /> October 15, 2020</small> */}
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <img className="mr-3 rounded-circle" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder image" style={{ maxWidth: 50 }} />
                                            <div className="media-body">
                                                <h6 className="my-0 text-dark d-block">Ulrich Mbouna</h6>
                                                <small>Développeur</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 width350"><div className="card text-dark card-has-bg click-col" style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?tech,street")' }}>
                                <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt=" Lorem Ipsum Sit Amet Consectetur dipisi?" />
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">Maintenance & Amélioration d'applications existantes</small>
                                        <h4 className="card-title mt-0 "><a className="text-dark" herf="#">Audit, amélioration de performance, débogage et ajout de nouvelles fonctionnalités.</a></h4>
                                        {/* <small><i className="far fa-clock" /> October 15, 2020</small> */}
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <img className="mr-3 rounded-circle" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder image" style={{ maxWidth: 50 }} />
                                            <div className="media-body">
                                                <h6 className="my-0 text-dark d-block">Ulrich Mbouna</h6>
                                                <small>Développeur</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            {/* <div className="col-sm-12 col-md-6 col-lg-4 mb-4 width350"><div className="card text-dark card-has-bg click-col" style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?tree,nature")' }}>
                                <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tree,nature" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">Thought Leadership</small>
                                        <h4 className="card-title mt-0 "><a className="text-dark" herf="#">Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?</a></h4>
                                        <small><i className="far fa-clock" /> October 15, 2020</small>
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <img className="mr-3 rounded-circle" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder image" style={{ maxWidth: 50 }} />
                                            <div className="media-body">
                                                <h6 className="my-0 text-dark d-block">Oz Coruhlu</h6>
                                                <small>Director of UI/UX</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 width350"><div className="card text-dark card-has-bg click-col" style={{ backgroundImage: 'url("https://source.unsplash.com/600x900/?computer,design")' }}>
                                <img className="card-img d-none" src="https://source.unsplash.com/600x900/?computer,design" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
                                <div className="card-img-overlay d-flex flex-column">
                                    <div className="card-body">
                                        <small className="card-meta mb-2">Thought Leadership</small>
                                        <h4 className="card-title mt-0 "><a className="text-dark" herf="#">Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?</a></h4>
                                        <small><i className="far fa-clock" /> October 15, 2020</small>
                                    </div>
                                    <div className="card-footer">
                                        <div className="media">
                                            <img className="mr-3 rounded-circle" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder image" style={{ maxWidth: 50 }} />
                                            <div className="media-body">
                                                <h6 className="my-0 text-dark d-block">Oz Coruhlu</h6>
                                                <small>Director of UI/UX</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></div> */}
                        </div>
                    </div>
                </section>


            </div>





            <div className="container-fluid mt-5" id='Contact237'>
                {/* Footer */}
                <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#ECEFF1' }}>
                    {/* Section: Social media */}
                    <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        {/* Left */}
                        <div className="me-5">
                            {/* <span>Get connected with us on social networks:</span> */}
                        </div>
                        {/* Left */}
                        {/* Right */}
                        <div>
                            <a href className="text-white me-4">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href className="text-white me-4">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href className="text-white me-4">
                                <i className="fab fa-google" />
                            </a>
                            <a href className="text-white me-4">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href className="text-white me-4">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a href className="text-white me-4">
                                <i className="fab fa-github" />
                            </a>
                        </div>
                        {/* Right */}
                    </section>
                    {/* Section: Social media */}
                    {/* Section: Links  */}
                    <section className>
                        <div className="container text-center text-md-start mt-5">
                            {/* Grid row */}
                            <div className="row mt-3">
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* Content */}
                                    <h6 className="text-uppercase fw-bold">Ulrich-DEV</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p>
                                        Je crée des sites web, des applications mobiles, des API sécurisées et je les déploie avec efficacité dans le cloud.
                                        🚀 Du design à la mise en production, je vous accompagne à chaque étape.
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold">Reseaux</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p>
                                        <a
                                            href="https://www.linkedin.com/in/ulrich-koudjou-mbouna-437a0435"
                                            className="text-dark"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fab fa-linkedin me-2"></i>LinkedIn
                                        </a>
                                    </p>
                                    <p>
                                        {/* <a href="#!" className="text-dark"></a>
            </p>
            <p>
              <a href="#!" className="text-dark">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="text-dark">Bootstrap Angular</a> */}
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold">Liens utiles</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p>
                                        <a href="#projects237" className="text-dark">Nos projects</a>
                                    </p>
                                    <p>
                                        <a href="#services237" className="text-dark">Nos services</a>
                                    </p>
                                    <p>
                                        <a href="#propos237" className="text-dark">A propos</a>
                                    </p>
                                    <p>
                                        <a href="#Aide237" className="text-dark">Aide</a>
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p><i className="fas fa-home mr-3" /> Douala ,village entree lycee</p>
                                    <p><i className="fas fa-envelope mr-3" /> koudjouulrich@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3" /> + 237 6 97 84 77 90</p>
                                    <p><i className="fas fa-print mr-3" /> + 237 6 51 67 14 35</p>
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                        </div>
                    </section>
                    {/* Section: Links  */}
                    {/* Copyright */}
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2025 Copyright:
                        <a className="text-dark" href="#">UlrichMbouna</a>
                    </div>
                    {/* Copyright */}
                </footer>
                {/* Footer */}
            </div>






        </div >

    );
};

export default Home;