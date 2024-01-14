import slogan from "../assets/burger_house_logo.png"
import motorcycle_logo from "../assets/motorcycle_logo.png"
import Image from "next/image";
import styles from "./navbar.module.css"
import { Bebas_Neue } from 'next/font/google'
import { Montserrat } from 'next/font/google'


const Bebas_Neue_Font = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })
const Montserrat_Font = Montserrat({ subsets: ['latin'], weight: ['400'] })

const Navbar = () => {
    return (<>
        <div>
            <nav class={`navbar navbar-expand-lg bg-transparent fw-bolder d-flex ${Bebas_Neue_Font.className}`}>
                <Image src={slogan} className="m-5"></Image>
                <div class="container  flex-shrink-1 " >
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse m-0" id="navbarSupportedContent">
                        <div className=" d-flex w-100 align-items-end  flex-column">
                            <div className={` mt-5 d-flex align-items-center fw-bold justify-content-center `}>
                                <Image className="me-3" src={motorcycle_logo}></Image>
                                <div className={`row ${Montserrat_Font.className} h5 `}>
                                    <div className="me-1 col-auto gx-0 fw-bolder " >EXPRESS DELIVERY </div>
                                    <div className="col-auto gx-0 fw-bolder"> +1 234 567 890
                                    </div>
                                </div>

                            </div>
                            <ul class={`navbar-nav mt-2 h4 text-uppercase ${styles.letter_spacing_lg}`}>
                                <li class="nav-item m-0 mx-md-4  ">
                                    <a className={`nav-link  ${styles.main_color}`} aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item m-0 mx-md-4 ">
                                    <a className={`nav-link  ${styles.main_color}`} aria-current="page" href="#">Menu</a>
                                </li>
                                <li class="nav-item m-0 mx-md-4 ">
                                    <a className={`nav-link  ${styles.main_color}`} aria-current="page" href="#">our story</a>
                                </li>
                                <li class="nav-item m-0 ms-md-4 ">
                                    <a className={`nav-link  ${styles.main_color}`} aria-current="page" href="#">Contact us</a>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
            </nav>
        </div>
        

    </>)
}
export default Navbar;