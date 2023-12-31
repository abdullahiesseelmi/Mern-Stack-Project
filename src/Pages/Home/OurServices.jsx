import React from 'react'
import testimonials from "../../assets/images/Home/Testimonial/testimonials.png";




const serviceLists = [
    { id: 1, title: "Catering", des: "Delight your guests with our flavors and  presentation", img: "https://i.ibb.co/Y0nFZ0D/icon1.png" },
    { id: 2, title: "Fast delivery", des: "We deliver your order promptly to your door", img: "https://i.ibb.co/wCQGTFz/icon2.png" },
    { id: 3, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering n", img: "https://i.ibb.co/R0wQ1gm/icon3.png" },
    { id: 4, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", img: "https://i.ibb.co/C8LGfKn/icon4.png" },
]

const OurServices = () => {
    return (
        <div className='section-container py-16 bg-gradient-to-r
         from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12'>

                {/* TEXT */}
                <div className='md:w-4/5'>
                    <div className="text-left">
                        <p className="subtitle">Our Story & Services</p>
                        <h2 className="title">Our Culinary Journey And Services</h2>
                        <p className="my-5 text-secondary leading-[30px]">
                            Rooted in passion, we curate unforgettable dining experiences and
                            offer exceptional services, blending culinary artistry with warm
                            hospitality.
                        </p>

                        <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
                            Explore
                        </button>
                    </div>
                </div>

                <div className='md:w-1/2'>
                    <div className='grid sm:grid-cols-2 grid-cols-1 items-center gap-8'>
                        {
                            serviceLists.map((service) => (
                                <div key={service.id} className='shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer
                                 hover:border-indigo-600 transition-all duration-200 hover:border'>
                                    <img src={service.img} className='mx-auto' />
                                    <h5 className='pt-3 font-semibold'>{service.title}</h5>
                                    <p className='text-[#90BD95]'>{service.des}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>


    )
}

export default OurServices