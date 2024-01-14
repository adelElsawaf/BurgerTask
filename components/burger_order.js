import Image from "next/image";
import { Bebas_Neue } from 'next/font/google'
import styles from './burger_order.module.css'
import { Montserrat } from 'next/font/google'
import { Alfa_Slab_One } from 'next/font/google'

const Bebas_Neue_Font = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })
const Montserrat_Font = Montserrat({ subsets: ['latin'], weight: ['400'] })
const Alfa_Slab_One_Font = Alfa_Slab_One({ subsets: ['latin'], weight: ['400'] })



const Burger_Order = ({ Img_path }) => {
    return (
        <>
            <div className="">
                <div className="d-flex flex-column justify-content-center text-center align-items-center">
                    <Image src={Img_path} className="mb-3 img-fluid h-auto"></Image>
                    <div className="w-75 mt-auto">
                        <h1 className={`${styles.main_color} ${Bebas_Neue_Font.className}`}>Lorem ipsum dolor</h1>
                        <h5 className={`${Montserrat_Font.className} ${styles.main_color}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h5>
                        <button className={`text-uppercase btn btn-danger btn-lg  rounded-0 mt-4 mb-4 ${Alfa_Slab_One_Font.className}`}>
                            <span className=' text-white h6  px-3 py-2'>Order Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Burger_Order;