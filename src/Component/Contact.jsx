import React, { useRef } from "react";
import image from "../assets/contact.webp";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5u5womx',
       'template_r1f4g62', 
       form.current, 
       'UOJFzrz_WfSUirtkr'
       )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact">
      <div>
        <div id="contact">
          <div className="text-center mt-40">
            <motion.div
              animate={{ scale: 2 }}
              className="text-center  font-bold mt-6 text-4xl font-section text-green-300 inline px-8 pb-4 rounded-lg border-green-300 border-b-4"
            >
              Contact Me
            </motion.div>
          </div>
          <div className="lg:w-[1200px] mx-auto mt-16">
            <div className="md:flex">
              <div className="md:w-[600px] w-[350px] flex justify-center mx-auto items-center aos-init">
                <img
                  src={image}
                  alt=""
                  style={{ width: "500px", height: "500px" }}
                  className="md:mb-10 mb-10"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                />
              </div>
              <div data-aos="fade-up-left" className="aos-init">
                < form 
                ref={form} onSubmit={sendEmail}
                className="md:w-[600px]">
                  <div className="mb-10 relative">
                     <input
                      type="text"
                      placeholder="Name"
                      name="from_name"
                      className="input input-bordered text-lg font-semibold text-blue-300 w-full bg-black opacity-30 h-20"
                    /> 
                   </div>

                  <div className="mb-10 relative"> 
                    <input
                      type="email"
                      placeholder="Email"
                      name="from_email"
                      className="input input-bordered text-lg font-semibold text-blue-300 w-full bg-black opacity-30 h-20"
                    />
      
                  </div>

                  <div className="mb-10 relative">
                    <input
                      type="text"
                      placeholder="Phone"
                      name="from_phone"
                      className="input input-bordered text-lg font-semibold text-blue-300 w-full bg-black opacity-30 h-20"
                    />
                  </div>

                  <div className="mb-10 relative">
                    <input
                      type="text"
                      placeholder="Subject"
                      name="from_subject"
                      className="input input-bordered text-lg font-semibold text-blue-300 w-full bg-black opacity-30 h-20"
                    />
                  </div>

                  <div className="mb-10 relative">
                    <input
                      type="text"
                      placeholder="Message"
                      name="message"
                      className="input  input-bordered text-lg font-semibold w-full bg-black  opacity-30 h-40 text-white"
                    />
                  </div>

                   <div className="text-center"> 
                    <input
                      className=" cursor-pointer  text-xl font-bold  btn btn-outline btn-success px-10 mb-20"
                      type="submit"
                      value="Send"
                    /> 
                  </div> 
 
                </form>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
