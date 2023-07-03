import React from "react";


const Features = () => {
  return (
    <>
      <section id="features" className=" w-full max-w-[1240px] mx-auto flex flex-col justify-center h-full space-y-4">
        <div className="flex flex-col gap-4 mb-14">
          <h2 className="text-4xl font-section text-green-300 inline px-8 pb-4 rounded-lg border-green-300 border-b-4">
            Features
          </h2>
          <h1 className="text-5xl text-gray-300 font-bold capitalize">
            What I do{" "}
          </h1>
          <div>
            <div className="container">
              <div className="box">
                <span></span>
                <div className="content">
                  <h2>Responsive Web Design</h2>
                  <p>
                    With the increasing use of mobile devices, it's crucial to
                    have a website that looks great and functions flawlessly on
                    any screen size. I ensure that your website is fully
                    responsive, providing optimal user experience across
                    desktops, tablets, and smartphones.
                  </p>
                </div>
              </div>
              <div className="box">
                <span></span>
                <div className="content">
                  <h2>Custom Website Development</h2>
                  <p>
                    I specialize in creating custom websites using the MERN
                    stack, tailored to your unique requirements. From front-end
                    design to back-end development, I deliver high-quality,
                    responsive websites that provide an exceptional user
                    experience.
                  </p>
                </div>
              </div>
              <div className="box">
                <span></span>
                <div className="content">
                  <h2>Database Integration</h2>
                  <p>
                    I have experience working with databases like MongoDB
                    allowing me to design and implement efficient data storage
                    and retrieval solutions. Whether you need a database-driven
                    web application or seamless integration with existing
                    databases, I've got you covered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
