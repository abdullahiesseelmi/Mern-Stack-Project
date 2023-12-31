import React from "react";
import testimonials from "../../assets/images/Home/Testimonial/testimonials.png";
import testimonials1 from "../../assets/images/Home/Testimonial/testimonial1.png";
import testimonials2 from "../../assets/images/Home/Testimonial/testimonial2.png";
import testimonials3 from "../../assets/images/Home/Testimonial/testimonial3.png";
import { FaStar } from "react-icons/fa6";

const Testimonials = () => {

    // const renderStars = () => {
    //     const stars = [];
    //     for (let i = 0; i < 4; i++) {
    //         stars.push(<FaStar key={i} className="text-yellow-500" />);
    //     }
    //     return stars;
    // };

    return (
        <div className='section-container py-16 bg-gradient-to-r
         from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
                <div className='md:w-1/2'>
                    <img src={testimonials} alt='' className='' />
                </div>
                <div className='md:w-4/5'>
                    <div className="text-left">
                        <p className="subtitle">Testimonials</p>
                        <h2 className="title">What Our Customer<br /> Say About Us</h2>
                        <blockquote className="my-5 text-secondary leading-[30px]">
                            “I had the pleasure of dining at Foodi last night, and I'm still
                            raving about the experience! The attention to detail in
                            presentation and service was impeccable”
                        </blockquote>

                        {/* avatar */}
                        <div className="flex items-center gap-4 flex-wrap">
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={testimonials1} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={testimonials2} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src={testimonials3} />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <span>+99</span>
                                    </div>
                                </div>
                            </div>
                       

                        <div className="space-y-1">
                            <h5 className="text-lg font-semibold">Customer Feedback</h5>
                            <div className="flex items-center gap-2">
                                <FaStar className="text-yellow-400" />
                                <span className="font-medium">4.9</span>
                                <span className="text-[#807E7E]">(18.6k Reviews)</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Testimonials