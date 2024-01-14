'use client'
import Image from 'next/image';
import styles from "./booking_form.module.css"
import { useForm } from "react-hook-form"
import { Alfa_Slab_One } from 'next/font/google'
import { Bebas_Neue } from 'next/font/google'
import bottle_img from '../../assets/booking_form/Bottle.png'
import right_img from '../../assets/booking_form/Image(1).png'
import left_img from '../../assets/booking_form/Burger(1).png'

const Bebas_Neue_Font = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })
const Alfa_Slab_One_Font = Alfa_Slab_One({ subsets: ['latin'], weight: ['400'] })

const BookingForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    return (<>
        <div className=''>
            <div>
                <div className='row'>
                    <div className='col-2 d-none d-md-block'>
                        <Image src={left_img} className={`${styles.negative_margin}`}></Image>
                    </div>
                    <div className='col-12 col-md-8 text-center d-flex justify-content-center align-items-center flex-column'>
                        <h3 className={`${Bebas_Neue_Font.className}`}>Reservation</h3>
                        <h1 className={`text-uppercase mb-4 display-5 ${Alfa_Slab_One_Font.className}`}>Book your table</h1>
                        <div className='row'>
                            <div className='col-2 d-none d-md-block'>
                                <Image src={bottle_img}></Image>
                            </div>
                            <div className='col'>
                                <form onSubmit={handleSubmit()}>
                                    <div class="input-group d-flex align-items-center justify-content-center input-group-lg mt-5">
                                        <div className='row   w-100 h-100'>
                                            <div className='col-12  mt-4  col-md-6 '>
                                                <input type="text" {...register("name", { required: "this is required" })} class={`form-control border border-2  text-uppercase form-control-lg p-3 ${Bebas_Neue_Font.className}`} placeholder='NAME' />
                                                {errors.name && <span className='ms-2 text-danger'>Name is required</span>}
                                            </div>
                                            <div className='col-12 mt-4 col-md-6 '>
                                                <input type="Email" {...register("email", { required: "this is required" })} class={`form-control border border-2  text-uppercase form-control-lg p-3 ${Bebas_Neue_Font.className}`} placeholder='Email' />
                                                {errors.email && <span className='ms-2 text-danger'>Email is required</span>}
                                            </div>
                                        </div>
                                        <div className='row  w-100 h-100'>
                                            <div className='col-12 mt-4 col-md-6 '>
                                                <input type="text" {...register("date", { required: "this is required" })} class={`form-control border border-2  text-uppercase form-control-lg p-3 ${Bebas_Neue_Font.className}`} placeholder='Date' />
                                                {errors.date && <span className='ms-2 text-danger'>Date is required</span>}
                                            </div>
                                            <div className='col-12 mt-4  col-md-6 '>
                                                <input type="text" {...register("time", { required: "this is required" })} class={`form-control border border-2  text-uppercase form-control-lg p-3 ${Bebas_Neue_Font.className}`} placeholder='time' />
                                                {errors.time && <span className='ms-2 text-danger'>Time is required</span>}
                                            </div>
                                        </div>
                                        <div className='row  w-100 h-100' >
                                            <div className='col-12 mt-4 mt col-md-6 '>
                                                <input type="text" class={`form-control border border-2  text-uppercase form-control-lg p-3 ${Bebas_Neue_Font.className}`} placeholder='people' />
                                            </div>
                                            <div className='col-12 col-md-6 mt-4 '>
                                                <button type="submit" class={` w-100 btn   btn-danger text-uppercase  p-3 ${Bebas_Neue_Font.className}`} >
                                                    <span className={`h4 ${Alfa_Slab_One_Font.className}`}>FIND A TABLE</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-1 ms-3  position-relative d-none d-md-block'>
                        <Image src={right_img} className='position-absolute left-0 bottom-0'></Image>
                    </div>
                </div>
            </div>
        </div >

    </>)
}
export default BookingForm;
