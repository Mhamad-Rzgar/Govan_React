

import Uploader from './Uploader';
import QueryUploader from './QueryUploader';


export default function Home() {

    return (
        <div>
            <header class="masthead bg-primary text-white text-center">
                <div class="container d-flex align-items-center flex-column">
                    <img class="masthead-avatar mb-5" src="https://cdn-icons-png.flaticon.com/512/2920/2920349.png" alt="..." />
                    <h1 class="masthead-heading text-uppercase mb-0" href="/">Perfonmance Tester App</h1>
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <p class="masthead-subheading font-weight-light mb-0">ASP.NET CORE - PYTHON - PHP</p>
                </div>
            </header>

            {/* ----------------- */}

            <section class="page-section portfolio" id="portfolio">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">programming languages</h2>
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row justify-content-center">

                        <a className="col-md-6 col-lg-4 mb-5" href='/asp'>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-angle-right fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/74/74857.png" alt="..." />
                            </div>
                        </a>
                        <a class="col-md-6 col-lg-4 mb-5" href='/Python'>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-angle-right fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="..." />
                            </div>
                        </a>
                        <a class="col-md-6 col-lg-4 mb-5" href='/php'>
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-angle-right fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/528/528261.png" alt="..." />
                            </div>
                        </a>

                    </div>
                </div>
            </section>


            {/* ----------------- */}


            <section class="page-section bg-primary text-white mb-0" id="about">
                <div class="container">
                    <h2 class="page-section-heading text-center text-uppercase text-white">About This Project</h2>
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 ms-auto"><p class="lead">This project is a type of benchmarking project that is able to compare programming languages ​​and database types based on the speed of sending data into the database.</p></div>
                        <div class="col-lg-4 me-auto"><p class="lead">Our tests consist of several different types that we work with databases, tests on images, videos and any type of file and finally we have a type of test that is done on a normal query and download the data from the server.</p></div>
                    </div>

                </div>
            </section>

        </div>
    );
}

