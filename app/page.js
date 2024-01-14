import Image from 'next/image'
import Navbar from '@/components/navbar'
import { Bebas_Neue } from 'next/font/google'
import { Alfa_Slab_One } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import burger_offer_img from "../assets/burger_offer(1).png"
import "./globals.css"
import g2_burger_img_1 from "../assets/group_2/Burger Image.png"
import g2_burger_img_2 from "../assets/group_2/image_1.png"
import g2_burger_img_3 from "../assets/group_2/image_2.png"
import g3_burger_img_1 from "../assets/group_3/burger_1.png"
import g3_burger_img_2 from "../assets/group_3/burger_2.png"
import Burger_Order from '@/components/burger_order'
import SliderSection from '@/components/SliderSection/slider_section'
import BookingForm from '@/components/bookingForm/booking_form'
import g6_background from '../assets/group_6/background.png'
import g6_logo from '../assets/group_6/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Bebas_Neue_Font = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })
const Alfa_Slab_One_Font = Alfa_Slab_One({ subsets: ['latin'], weight: ['400'] })
const Montserrat_Font = Montserrat({ subsets: ['latin'], weight: ['400'] })
export default function Home() {
  return (
    <>
      <div className="main-color">
        <div className='container-fluid background-yellow-img'>
          <Navbar></Navbar>
          <div className={`row gx-5 ${Alfa_Slab_One_Font.className}`}>
            <div className='col-md-6 col-sm-12  d-flex align-items-center ps-5'>
              <div className='text-start ps-5 container-fluid'>
                <h2 className={`text-uppercase border-dashed border-2 d-inline-block p-2  mb-4 ${Bebas_Neue_Font.className}`}>
                  It is a good time for the great taste of burgers
                </h2>
                <h2 className='fw-bolder  line-height-none font-size-lg text-shadow-white'>BURGER</h2>
                <h3 className='fw-bolder line-height-none  font-size-m text-shadow-white'>WEEK</h3>
              </div>
            </div>
            <div className='col-md-6 col-sm-12'>
              <Image src={burger_offer_img} className='img-fluid mb-5 pb-5'></Image>
            </div>
          </div>
        </div>
        <div className={`container-fluid ${Bebas_Neue_Font.className}`}>
          <div className='row text-uppercase gx-5 m-lg-5 p-lg-4 mt-3'>
            <div className='col-12 col-lg-6 mb-lg-0 mb-3 '>
              <div className='card'>
                <Image src={g2_burger_img_1} className='img-fluid card-img '></Image>
                <div className='card-img-overlay text-white p-4 text-uppercase'>
                  <h3 className=' fw-bold fs-3 line-height-none'> Try it today</h3>
                  <h2 className='line-height-none fs-1  fw-bolder'>Most Popular Burger</h2>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6 '>
              <div className='d-flex flex-column h-100 '>
                <div className='card d-flex align-items-start'>
                  <Image src={g2_burger_img_2} className='img-fluid card-img'></Image>
                  <div className='card-img-overlay text-white p-4 text-uppercase '>
                    <h4 className=' fs-4 line-height-none'> Try it today</h4>
                    <h1 className='line-height-none '>More Fun</h1>
                    <h1 className='line-height-none '>More Taste</h1>
                  </div>
                </div>
                <div className='card mt-auto'>
                  <Image src={g2_burger_img_3} className='img-fluid card-img my-3 my-lg-0'></Image>
                  <div className='card-img-overlay text-white p-4 text-uppercase'>
                    <h3 className='fs-5 line-height-none'> Try it today</h3>
                    <h2 className='line-height-none fs-1'>Fresh  & chili</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='container text-center '>
            <h4 className={`text-uppercase mt-3 mb-4 ${Bebas_Neue_Font.className}`}>
              <span className='bg-warning  px-3 py-2'>always tasty burger</span>
            </h4>
            <h1 className={`text-uppercase mb-4 display-5 ${Alfa_Slab_One_Font.className}`}>Choose & Enjoy</h1>
            <h5 className={`${Montserrat_Font.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </h5>
          </div>
        </div>
        <div className='container-fluid mt-5'>
          <div class="d-flex justify-content-between">
            <div className='row h-100'>
              <div className='col-12 col-sm-6 col-md-4 mb-4 mt-auto'>
                <Burger_Order Img_path={g3_burger_img_1}></Burger_Order>
              </div>
              <div className='col-12 col-sm-6 col-md-4 mb-4 mt-auto'>
                <Burger_Order Img_path={g3_burger_img_2}></Burger_Order>
              </div>
              <div className='col-12 col-sm-6 col-md-4 mb-4 mt-auto'>
                <Burger_Order Img_path={g3_burger_img_1}></Burger_Order>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SliderSection></SliderSection>
        </div>
        <div className='mt-5' >
          <BookingForm></BookingForm>
        </div>
        <div className='pb-5 px-5 container-fluid h-100 h6 pt-3'>
          <div class="card text-white h-100">
            <Image src={g6_background} class="card-img img-fluid" alt="..." />
            <div class="card-img-overlay d-flex flex-column ms-5 mt-5">
              <Image class="card-title img-fluid my-5" src={g6_logo}></Image>
              <div className='container-fluid mt-5'>
                <div className='row'>
                  <div className='col-12 col-lg-8 '>
                    <div className='w-75'>
                      <h4 className={`${Montserrat_Font.className} line-height-lg`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                        accumsan lacus vel facilisis.
                      </h4>
                    </div>
                  </div>
                  <div className='col-12 col-lg-4 d-flex align-items-start   flex-column justify-content-center'>
                    <div className='d-flex justify-content-start flex-column '>
                      <div className='d-flex my-0 align-items-end'>
                        <FontAwesomeIcon icon={faLocationDot} className={`fs-1 me-5`}></FontAwesomeIcon>
                        <h2 className={`${Bebas_Neue_Font.className} m-0 text-start`}>Main Road, Building Name, Country</h2>
                      </div>
                      <div className='d-flex mt-3 my-0 align-items-end'>
                        <FontAwesomeIcon icon={faEnvelope} className={`fs-1 me-5`}></FontAwesomeIcon>
                        <h2 className={`${Bebas_Neue_Font.className} m-0 p-0 text-start`}>info@companyname.com</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container-fluid d-flex h-100 '>
                <div className='mt-auto w-100 d-flex '>
                  <h4 className={`${Bebas_Neue_Font.className} w-25 d-inline`}>© Company Name 2020. All rights reserved.</h4>
                  <div className='w-75 d-flex justify-content-end'>
                    <FontAwesomeIcon icon={faInstagram} className='fs-4 bg-light text-dark ms-2 p-1 border rounded-circle border-2 border-white'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faFacebook} className='fs-4 bg-light  text-dark ms-2 p-1 border rounded-circle border-2 border-white'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter} className='fs-4 bg-light text-dark ms-2 p-1 border rounded-circle border-2 border-white'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faWhatsapp} className='fs-4 bg-light text-dark ms-2 p-1 border rounded-circle border-2 border-white'></FontAwesomeIcon>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  )
}
