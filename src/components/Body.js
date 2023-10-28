import React, { useState } from "react";
import bodyimg from "../assets/images/bg ice mnt.webp";
import headimg from "../assets/images/head.webp";
import mongodb from "../assets/images/skills/MongoDB_Fores-Green.svg";
import nodejs from "../assets/images/skills/nodejs.svg";
import react from "../assets/images/skills/react.svg";
import js from "../assets/images/skills/js.svg";
import redux from "../assets/images/skills/redux.png";
import sql from "../assets/images/skills/sql.png";
import html from "../assets/images/skills/html.svg";
import css from "../assets/images/skills/css.svg";
import bootstrap from "../assets/images/skills/bootstrap.svg";
import mui from "../assets/images/skills/mui.png";
import rest from "../assets/images/skills/restfulapi.png";
import firebase from "../assets/images/skills/firebase.svg";
import gclouds from "../assets/images/skills/gcloud_storage.png";
import tailwinds from "../assets/images/skills/tailwind-css.png";
import SkillImage from "../SkillImage";
import resume from "../assets/images/resume.pdf";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "react-awesome-reveal";

const Body = () => {
  const [setSwiperRef] = useState(null);

  const skills = [
    { imageSrc: mongodb, altText: "MongoDB" },
    { imageSrc: react, altText: "React" },
    { imageSrc: nodejs, altText: "Node.js" },
    { imageSrc: gclouds, altText: "G-cloud Bucket" },
    { imageSrc: firebase, altText: "Firebase" },
    { imageSrc: redux, altText: "Redux" },
    { imageSrc: js, altText: "JavaScript" },
    { imageSrc: sql, altText: "SQL" },
    { imageSrc: html, altText: "HTML5" },
    { imageSrc: css, altText: "CSS" },
    { imageSrc: bootstrap, altText: "Bootstrap" },
    { imageSrc: mui, altText: "Mui" },
    { imageSrc: rest, altText: "Restful API" },
    { imageSrc: tailwinds, altText: "Tailwind CSS" },
  ];

  return (
    <>
      <div
        className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
        id="about"
      >
        <img
          src={headimg}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-40">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="font-poppinslight">
            <button class="btnhi">Hi 👋 I'm Raghul...</button>
            </div>

            <p class="text-white tracking-wider text-[30px] font-normal font-redhatregular leading-[30px] tracking-wide">
              MERN Stack Developer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline ml-2 absolute h-8 w-8"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M39.1665 0.166992L36.4365 6.12533L30.4999 8.83366L36.4365 11.5637L39.1665 17.5003L41.8749 11.5637L47.8332 8.83366L41.8749 6.12533M17.4998 6.667L12.0832 18.5837L0.166504 24.0003L12.0832 29.417L17.4998 41.3337L22.9165 29.417L34.8332 24.0003L22.9165 18.5837M39.1665 30.5003L36.4365 36.437L30.4999 39.167L36.4365 41.8753L39.1665 47.8337L41.8749 41.8753L47.8332 39.167L41.8749 36.437"
                  fill="url(#paint0_linear_1008_201)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1008_201"
                    x1="23.9998"
                    y1="0.166992"
                    x2="23.9998"
                    y2="47.8337"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0625" stop-color="#F8EE00" />
                    <stop offset="1" stop-color="#FF3D00" />
                  </linearGradient>
                </defs>
              </svg>
            </p>
            <p class="mt-4 tracking-wider text-neutral-200 text-opacity-40 text-[28px] font-normal font-redhatregular line-through leading-[30px] tracking-wide">
              Back End
            </p>
            <div class="mt-4 tracking-wider text-neutral-200 text-opacity-25 text-[28px] font-normal font-redhatregular line-through leading-[30px] tracking-wide">
              Front End
            </div>
          </div>

          <div className="grid grid-cols-12 mx-auto mt-20">
            <div className="col-span-12 md:col-span-4 grid grid-cols-12">
              <div className="col-span-2">
                <a
                  href="https://github.com/Un-Knwn-me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M19.3625 41.0738C19.3625 40.4558 19.3392 38.4204 19.3392 35.8978C19.3392 34.1331 19.9219 32.9824 20.5812 32.3958C16.4299 31.9151 12.0619 30.2938 12.0619 23.0398C12.0619 20.9744 12.7925 19.2851 13.9865 17.9631C13.7959 17.4831 13.1512 15.5591 14.1719 12.9538C14.1719 12.9538 15.7419 12.4444 19.3159 14.8924C22.3819 14.0477 25.6192 14.0477 28.6852 14.8924C32.2565 12.4444 33.8259 12.9538 33.8259 12.9538C34.8472 15.5591 34.2059 17.4838 34.0112 17.9631C35.2085 19.2851 35.9325 20.9724 35.9325 23.0398C35.9325 30.3098 31.5592 31.9111 27.3879 32.3784C28.0632 32.9664 28.6605 34.1191 28.6605 35.8871C28.6605 38.4151 28.6372 40.4538 28.6372 41.0738C28.6372 41.5818 28.9739 42.1678 29.9239 41.9864C37.3539 39.4811 42.7085 32.3891 42.7085 24.0318C42.7085 13.5798 34.3305 5.10645 23.9972 5.10645C13.6679 5.10645 5.29053 13.5778 5.29053 24.0318C5.29053 32.3924 10.6505 39.4864 18.0919 41.9878C19.0219 42.1624 19.3625 41.5778 19.3625 41.0738Z"
                      fill="#D0CFCE"
                      fill-opacity="0.61"
                    />
                    <path
                      d="M19.3625 41.0738C19.3625 40.4558 19.3392 38.4204 19.3392 35.8978C19.3392 34.1331 19.9219 32.9824 20.5812 32.3958C16.4299 31.9151 12.0619 30.2938 12.0619 23.0398C12.0619 20.9744 12.7925 19.2851 13.9865 17.9631C13.7959 17.4831 13.1512 15.5591 14.1719 12.9538C14.1719 12.9538 15.7419 12.4444 19.3159 14.8924C22.3819 14.0477 25.6192 14.0477 28.6852 14.8924C32.2565 12.4444 33.8259 12.9538 33.8259 12.9538C34.8472 15.5591 34.2059 17.4838 34.0112 17.9631C35.2085 19.2851 35.9325 20.9724 35.9325 23.0398C35.9325 30.3098 31.5592 31.9111 27.3879 32.3784C28.0632 32.9664 28.6605 34.1191 28.6605 35.8871C28.6605 38.4151 28.6372 40.4538 28.6372 41.0738C28.6372 41.5818 28.9739 42.1678 29.9239 41.9864C37.3539 39.4811 42.7085 32.3891 42.7085 24.0318C42.7085 13.5798 34.3305 5.10645 23.9972 5.10645C13.6679 5.10645 5.29053 13.5778 5.29053 24.0318C5.29053 32.3924 10.6505 39.4864 18.0919 41.9878C19.0219 42.1624 19.3625 41.5778 19.3625 41.0738Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.8599 32.0596C12.5719 32.5796 13.2465 33.1496 14.0525 34.5002C14.8559 35.8509 15.7992 37.3582 19.3412 36.4996"
                      stroke="white"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <div className="col-span-2">
                <a
                  href="mailto:raghul9510@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      opacity="0.3"
                      d="M40 12H8L24 21.98L40 12ZM8 16V36H40V16L24 26L8 16Z"
                      fill="#F4F4F4"
                    />
                    <path
                      d="M40 8H8C5.8 8 4 9.8 4 12V36C4 38.2 5.8 40 8 40H40C42.2 40 44 38.2 44 36V12C44 9.8 42.2 8 40 8ZM40 12L24 21.98L8 12H40ZM40 36H8V16L24 26L40 16V36Z"
                      fill="#F4F4F4"
                    />
                  </svg>
                </a>
              </div>

              <div className="col-span-2 pt-1">
                <a
                  href="https://www.linkedin.com/in/raghul-manoharan-155705104"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1008_191)">
                      <rect width="40" height="40" rx="5" fill="#EBEBEB" />
                      <path
                        d="M0 2.865C0 1.2825 1.315 0 2.9375 0H37.0625C38.685 0 40 1.2825 40 2.865V37.135C40 38.7175 38.685 40 37.0625 40H2.9375C1.315 40 0 38.7175 0 37.135V2.865ZM12.3575 33.485V15.4225H6.355V33.485H12.3575ZM9.3575 12.955C11.45 12.955 12.7525 11.57 12.7525 9.835C12.715 8.0625 11.4525 6.715 9.3975 6.715C7.3425 6.715 6 8.065 6 9.835C6 11.57 7.3025 12.955 9.3175 12.955H9.3575ZM21.6275 33.485V23.3975C21.6275 22.8575 21.6675 22.3175 21.8275 21.9325C22.26 20.855 23.2475 19.7375 24.9075 19.7375C27.08 19.7375 27.9475 21.3925 27.9475 23.8225V33.485H33.95V23.125C33.95 17.575 30.99 14.995 27.04 14.995C23.855 14.995 22.4275 16.745 21.6275 17.9775V18.04H21.5875C21.6008 18.0191 21.6141 17.9983 21.6275 17.9775V15.4225H15.6275C15.7025 17.1175 15.6275 33.485 15.6275 33.485H21.6275Z"
                        fill="#9C9C9C"
                        fill-opacity="0.84"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1008_191">
                        <rect width="40" height="40" rx="5" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="relative isolate overflow-hidden bg-gray-900">
        <img
          src={bodyimg}
          alt="Home background"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />

        {/* About */}
        <div className="mt-10">
          <div class="text-black tracking-wide text-center text-xl font-redhatregular">
            <p>
              Crafting solutions with{" "}
              <span class="text-red-600">MERN's precision</span>,
            </p>
            <p>
              I turn ideas <span class="text-red-600">into</span> digital
              realities.
            </p>
            <p>
              One <span class="text-red-600">line of code</span> at a time.
            </p>
          </div>

          {/* skill */}
          <Slide direction="right">
            <div className="transform-gpu mt-10 md:mx-40" id="skills">
              <div className="rounded-2xl bg-white-100 bg-opacity-20 px-16 py-10 shadow-md backdrop-blur-md max-sm:px-8">
                <div className="text-black text-start">
                  <p className="font-redhatmedium text-2xl underline underline-offset-14 pb-5 decoration-red-500">
                    My Skills
                  </p>
                  <div className="grid grid-cols-1 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-14 mt-10">
                    {skills.map((skill, index) => (
                      <SkillImage
                        key={index}
                        imageSrc={skill.imageSrc}
                        altText={skill.altText}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          {/* Projects */}
          <Slide direction="left">
            <div className="transform-gpu my-20 md:mx-40" id="projects">
              <div className="rounded-2xl bg-white-100 bg-opacity-20 px-16 py-10 shadow-md backdrop-blur-md max-sm:px-8">
                <div className="text-black text-start">
                  <p className="font-redhatmedium text-2xl underline underline-offset-14 decoration-red-500">
                    My Projects
                  </p>

                  <div class="my-10 max-w-md mx-auto rounded-xl mt-20 overflow-hidden md:max-w-2xl">
                    <div class="md:flex">
                      <div class="md:shrink-0">
                        <img
                          class="h-48 w-full object-cover md:h-full md:w-48"
                          src="https://images.pexels.com/photos/8761559/pexels-photo-8761559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Modern building architecture"
                        />
                      </div>

                      <div class="p-8">
                        <h5 className="tracking-wide font-redhatregular text-black text-lg mb-5">
                          Institution Event Management
                        </h5>
                        <div class="grid grid-cols-2 gap-5">
                          <div>
                            <p className="tracking-wide text-cyan-500 font-redhatregular text-black text-base mb-5">
                              Front-end Link
                            </p>
                            <div>
                              <div class="grid grid-cols-2 gap-0">
                                <div>
                                  <a
                                    href="https://github.com/Un-Knwn-me/Zenclass_event_management_frontend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                      >
                                        <g clip-path="url(#clip0_1025_294)">
                                          <path
                                            d="M18 0.444336C8.055 0.444336 0 8.50384 0 18.4443C0 26.3988 5.157 33.1443 12.3075 35.5218C13.2075 35.6913 13.5375 35.1348 13.5375 34.6563C13.5375 34.2288 13.5225 33.0963 13.515 31.5963C8.508 32.6823 7.452 29.1813 7.452 29.1813C6.633 27.1038 5.4495 26.5488 5.4495 26.5488C3.819 25.4328 5.5755 25.4553 5.5755 25.4553C7.383 25.5813 8.3325 27.3093 8.3325 27.3093C9.9375 30.0618 12.546 29.2668 13.575 28.8063C13.737 27.6423 14.2005 26.8488 14.715 26.3988C10.7175 25.9488 6.516 24.4008 6.516 17.5038C6.516 15.5388 7.2135 13.9338 8.3685 12.6738C8.166 12.2193 7.5585 10.3893 8.526 7.90984C8.526 7.90984 10.0335 7.42684 13.476 9.75484C14.916 9.35434 16.446 9.15634 17.976 9.14734C19.506 9.15634 21.036 9.35434 22.476 9.75484C25.896 7.42684 27.4035 7.90984 27.4035 7.90984C28.371 10.3893 27.7635 12.2193 27.5835 12.6738C28.731 13.9338 29.4285 15.5388 29.4285 17.5038C29.4285 24.4188 25.221 25.9413 21.216 26.3838C21.846 26.9238 22.431 28.0278 22.431 29.7138C22.431 32.1228 22.4085 34.0578 22.4085 34.6428C22.4085 35.1153 22.7235 35.6778 23.646 35.4978C30.8475 33.1368 36 26.3868 36 18.4443C36 8.50384 27.9405 0.444336 18 0.444336Z"
                                            fill="black"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_1025_294">
                                            <rect
                                              width="36"
                                              height="36"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </span>
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="https://zenclass-event-management-app.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="32"
                                      height="32"
                                      viewBox="0 0 36 40"
                                      fill="none"
                                    >
                                      <path
                                        d="M29.25 5.90625H6.75C5.92949 5.90625 5.14258 6.2322 4.56239 6.81239C3.9822 7.39258 3.65625 8.17949 3.65625 9V24.75C3.65625 25.5705 3.9822 26.3574 4.56239 26.9376C5.14258 27.5178 5.92949 27.8438 6.75 27.8438H29.25C30.0705 27.8438 30.8574 27.5178 31.4376 26.9376C32.0178 26.3574 32.3438 25.5705 32.3438 24.75V9C32.3438 8.17949 32.0178 7.39258 31.4376 6.81239C30.8574 6.2322 30.0705 5.90625 29.25 5.90625ZM30.6562 24.75C30.6562 25.123 30.5081 25.4806 30.2444 25.7444C29.9806 26.0081 29.623 26.1562 29.25 26.1562H6.75C6.37704 26.1562 6.01935 26.0081 5.75563 25.7444C5.49191 25.4806 5.34375 25.123 5.34375 24.75V9C5.34375 8.62704 5.49191 8.26935 5.75563 8.00563C6.01935 7.74191 6.37704 7.59375 6.75 7.59375H29.25C29.623 7.59375 29.9806 7.74191 30.2444 8.00563C30.5081 8.26935 30.6562 8.62704 30.6562 9V24.75ZM23.3438 31.5C23.3438 31.7238 23.2549 31.9384 23.0966 32.0966C22.9384 32.2549 22.7238 32.3438 22.5 32.3438H13.5C13.2762 32.3438 13.0616 32.2549 12.9034 32.0966C12.7451 31.9384 12.6562 31.7238 12.6562 31.5C12.6562 31.2762 12.7451 31.0616 12.9034 30.9034C13.0616 30.7451 13.2762 30.6562 13.5 30.6562H22.5C22.7238 30.6562 22.9384 30.7451 23.0966 30.9034C23.2549 31.0616 23.3438 31.2762 23.3438 31.5Z"
                                        fill="#111111"
                                      />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <p className="tracking-wide text-cyan-500 font-redhatregular text-black text-base mb-5">
                              Back-end Link
                            </p>
                            <div>
                              <div class="grid grid-cols-2 gap-0">
                                <div>
                                  <a
                                    href="https://github.com/Un-Knwn-me/Zen-class-Event-Management-for-students-backend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                      >
                                        <g clip-path="url(#clip0_1025_294)">
                                          <path
                                            d="M18 0.444336C8.055 0.444336 0 8.50384 0 18.4443C0 26.3988 5.157 33.1443 12.3075 35.5218C13.2075 35.6913 13.5375 35.1348 13.5375 34.6563C13.5375 34.2288 13.5225 33.0963 13.515 31.5963C8.508 32.6823 7.452 29.1813 7.452 29.1813C6.633 27.1038 5.4495 26.5488 5.4495 26.5488C3.819 25.4328 5.5755 25.4553 5.5755 25.4553C7.383 25.5813 8.3325 27.3093 8.3325 27.3093C9.9375 30.0618 12.546 29.2668 13.575 28.8063C13.737 27.6423 14.2005 26.8488 14.715 26.3988C10.7175 25.9488 6.516 24.4008 6.516 17.5038C6.516 15.5388 7.2135 13.9338 8.3685 12.6738C8.166 12.2193 7.5585 10.3893 8.526 7.90984C8.526 7.90984 10.0335 7.42684 13.476 9.75484C14.916 9.35434 16.446 9.15634 17.976 9.14734C19.506 9.15634 21.036 9.35434 22.476 9.75484C25.896 7.42684 27.4035 7.90984 27.4035 7.90984C28.371 10.3893 27.7635 12.2193 27.5835 12.6738C28.731 13.9338 29.4285 15.5388 29.4285 17.5038C29.4285 24.4188 25.221 25.9413 21.216 26.3838C21.846 26.9238 22.431 28.0278 22.431 29.7138C22.431 32.1228 22.4085 34.0578 22.4085 34.6428C22.4085 35.1153 22.7235 35.6778 23.646 35.4978C30.8475 33.1368 36 26.3868 36 18.4443C36 8.50384 27.9405 0.444336 18 0.444336Z"
                                            fill="black"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_1025_294">
                                            <rect
                                              width="36"
                                              height="36"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </span>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://zen-class-event-management-for-students.onrender.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="32"
                                      height="32"
                                      viewBox="0 0 36 40"
                                      fill="none"
                                    >
                                      <path
                                        d="M29.25 5.90625H6.75C5.92949 5.90625 5.14258 6.2322 4.56239 6.81239C3.9822 7.39258 3.65625 8.17949 3.65625 9V24.75C3.65625 25.5705 3.9822 26.3574 4.56239 26.9376C5.14258 27.5178 5.92949 27.8438 6.75 27.8438H29.25C30.0705 27.8438 30.8574 27.5178 31.4376 26.9376C32.0178 26.3574 32.3438 25.5705 32.3438 24.75V9C32.3438 8.17949 32.0178 7.39258 31.4376 6.81239C30.8574 6.2322 30.0705 5.90625 29.25 5.90625ZM30.6562 24.75C30.6562 25.123 30.5081 25.4806 30.2444 25.7444C29.9806 26.0081 29.623 26.1562 29.25 26.1562H6.75C6.37704 26.1562 6.01935 26.0081 5.75563 25.7444C5.49191 25.4806 5.34375 25.123 5.34375 24.75V9C5.34375 8.62704 5.49191 8.26935 5.75563 8.00563C6.01935 7.74191 6.37704 7.59375 6.75 7.59375H29.25C29.623 7.59375 29.9806 7.74191 30.2444 8.00563C30.5081 8.26935 30.6562 8.62704 30.6562 9V24.75ZM23.3438 31.5C23.3438 31.7238 23.2549 31.9384 23.0966 32.0966C22.9384 32.2549 22.7238 32.3438 22.5 32.3438H13.5C13.2762 32.3438 13.0616 32.2549 12.9034 32.0966C12.7451 31.9384 12.6562 31.7238 12.6562 31.5C12.6562 31.2762 12.7451 31.0616 12.9034 30.9034C13.0616 30.7451 13.2762 30.6562 13.5 30.6562H22.5C22.7238 30.6562 22.9384 30.7451 23.0966 30.9034C23.2549 31.0616 23.3438 31.2762 23.3438 31.5Z"
                                        fill="#111111"
                                      />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="my-20 max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl">
                    <div class="md:flex">
                      <div class="md:shrink-0">
                        <img
                          class="h-48 w-full object-cover md:h-full md:w-48"
                          src="https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Modern building architecture"
                        />
                      </div>
                      <div class="p-8">
                        <h5 className="tracking-wide font-redhatregular text-black text-lg mb-5">
                          CRM Application
                        </h5>
                        <div class="grid grid-cols-2 gap-5">
                          <div>
                            <p className="tracking-wide text-cyan-500 font-redhatregular text-black text-base mb-5">
                              Front-end Link
                            </p>
                            <div>
                              <div class="grid grid-cols-2 gap-0">
                                <div>
                                  <a
                                    href="https://github.com/Un-Knwn-me/CRM-front-end"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 36 36"
                                      fill="none"
                                    >
                                      <g clip-path="url(#clip0_1025_294)">
                                        <path
                                          d="M18 0.444336C8.055 0.444336 0 8.50384 0 18.4443C0 26.3988 5.157 33.1443 12.3075 35.5218C13.2075 35.6913 13.5375 35.1348 13.5375 34.6563C13.5375 34.2288 13.5225 33.0963 13.515 31.5963C8.508 32.6823 7.452 29.1813 7.452 29.1813C6.633 27.1038 5.4495 26.5488 5.4495 26.5488C3.819 25.4328 5.5755 25.4553 5.5755 25.4553C7.383 25.5813 8.3325 27.3093 8.3325 27.3093C9.9375 30.0618 12.546 29.2668 13.575 28.8063C13.737 27.6423 14.2005 26.8488 14.715 26.3988C10.7175 25.9488 6.516 24.4008 6.516 17.5038C6.516 15.5388 7.2135 13.9338 8.3685 12.6738C8.166 12.2193 7.5585 10.3893 8.526 7.90984C8.526 7.90984 10.0335 7.42684 13.476 9.75484C14.916 9.35434 16.446 9.15634 17.976 9.14734C19.506 9.15634 21.036 9.35434 22.476 9.75484C25.896 7.42684 27.4035 7.90984 27.4035 7.90984C28.371 10.3893 27.7635 12.2193 27.5835 12.6738C28.731 13.9338 29.4285 15.5388 29.4285 17.5038C29.4285 24.4188 25.221 25.9413 21.216 26.3838C21.846 26.9238 22.431 28.0278 22.431 29.7138C22.431 32.1228 22.4085 34.0578 22.4085 34.6428C22.4085 35.1153 22.7235 35.6778 23.646 35.4978C30.8475 33.1368 36 26.3868 36 18.4443C36 8.50384 27.9405 0.444336 18 0.444336Z"
                                          fill="black"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_1025_294">
                                          <rect
                                            width="36"
                                            height="36"
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="https://crm-zen.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="32"
                                      height="32"
                                      viewBox="0 0 36 40"
                                      fill="none"
                                    >
                                      <path
                                        d="M29.25 5.90625H6.75C5.92949 5.90625 5.14258 6.2322 4.56239 6.81239C3.9822 7.39258 3.65625 8.17949 3.65625 9V24.75C3.65625 25.5705 3.9822 26.3574 4.56239 26.9376C5.14258 27.5178 5.92949 27.8438 6.75 27.8438H29.25C30.0705 27.8438 30.8574 27.5178 31.4376 26.9376C32.0178 26.3574 32.3438 25.5705 32.3438 24.75V9C32.3438 8.17949 32.0178 7.39258 31.4376 6.81239C30.8574 6.2322 30.0705 5.90625 29.25 5.90625ZM30.6562 24.75C30.6562 25.123 30.5081 25.4806 30.2444 25.7444C29.9806 26.0081 29.623 26.1562 29.25 26.1562H6.75C6.37704 26.1562 6.01935 26.0081 5.75563 25.7444C5.49191 25.4806 5.34375 25.123 5.34375 24.75V9C5.34375 8.62704 5.49191 8.26935 5.75563 8.00563C6.01935 7.74191 6.37704 7.59375 6.75 7.59375H29.25C29.623 7.59375 29.9806 7.74191 30.2444 8.00563C30.5081 8.26935 30.6562 8.62704 30.6562 9V24.75ZM23.3438 31.5C23.3438 31.7238 23.2549 31.9384 23.0966 32.0966C22.9384 32.2549 22.7238 32.3438 22.5 32.3438H13.5C13.2762 32.3438 13.0616 32.2549 12.9034 32.0966C12.7451 31.9384 12.6562 31.7238 12.6562 31.5C12.6562 31.2762 12.7451 31.0616 12.9034 30.9034C13.0616 30.7451 13.2762 30.6562 13.5 30.6562H22.5C22.7238 30.6562 22.9384 30.7451 23.0966 30.9034C23.2549 31.0616 23.3438 31.2762 23.3438 31.5Z"
                                        fill="#111111"
                                      />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <p className="tracking-wide text-cyan-500 font-redhatregular text-black text-base mb-5">
                              Back-end Link
                            </p>
                            <div>
                              <div class="grid grid-cols-2 gap-0">
                                <div>
                                  <a
                                    href="https://github.com/Un-Knwn-me/CRM-Backend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 36 36"
                                        fill="none"
                                      >
                                        <g clip-path="url(#clip0_1025_294)">
                                          <path
                                            d="M18 0.444336C8.055 0.444336 0 8.50384 0 18.4443C0 26.3988 5.157 33.1443 12.3075 35.5218C13.2075 35.6913 13.5375 35.1348 13.5375 34.6563C13.5375 34.2288 13.5225 33.0963 13.515 31.5963C8.508 32.6823 7.452 29.1813 7.452 29.1813C6.633 27.1038 5.4495 26.5488 5.4495 26.5488C3.819 25.4328 5.5755 25.4553 5.5755 25.4553C7.383 25.5813 8.3325 27.3093 8.3325 27.3093C9.9375 30.0618 12.546 29.2668 13.575 28.8063C13.737 27.6423 14.2005 26.8488 14.715 26.3988C10.7175 25.9488 6.516 24.4008 6.516 17.5038C6.516 15.5388 7.2135 13.9338 8.3685 12.6738C8.166 12.2193 7.5585 10.3893 8.526 7.90984C8.526 7.90984 10.0335 7.42684 13.476 9.75484C14.916 9.35434 16.446 9.15634 17.976 9.14734C19.506 9.15634 21.036 9.35434 22.476 9.75484C25.896 7.42684 27.4035 7.90984 27.4035 7.90984C28.371 10.3893 27.7635 12.2193 27.5835 12.6738C28.731 13.9338 29.4285 15.5388 29.4285 17.5038C29.4285 24.4188 25.221 25.9413 21.216 26.3838C21.846 26.9238 22.431 28.0278 22.431 29.7138C22.431 32.1228 22.4085 34.0578 22.4085 34.6428C22.4085 35.1153 22.7235 35.6778 23.646 35.4978C30.8475 33.1368 36 26.3868 36 18.4443C36 8.50384 27.9405 0.444336 18 0.444336Z"
                                            fill="black"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_1025_294">
                                            <rect
                                              width="36"
                                              height="36"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </span>
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="https://crm-backend-5con.onrender.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="32"
                                      height="32"
                                      viewBox="0 0 36 40"
                                      fill="none"
                                    >
                                      <path
                                        d="M29.25 5.90625H6.75C5.92949 5.90625 5.14258 6.2322 4.56239 6.81239C3.9822 7.39258 3.65625 8.17949 3.65625 9V24.75C3.65625 25.5705 3.9822 26.3574 4.56239 26.9376C5.14258 27.5178 5.92949 27.8438 6.75 27.8438H29.25C30.0705 27.8438 30.8574 27.5178 31.4376 26.9376C32.0178 26.3574 32.3438 25.5705 32.3438 24.75V9C32.3438 8.17949 32.0178 7.39258 31.4376 6.81239C30.8574 6.2322 30.0705 5.90625 29.25 5.90625ZM30.6562 24.75C30.6562 25.123 30.5081 25.4806 30.2444 25.7444C29.9806 26.0081 29.623 26.1562 29.25 26.1562H6.75C6.37704 26.1562 6.01935 26.0081 5.75563 25.7444C5.49191 25.4806 5.34375 25.123 5.34375 24.75V9C5.34375 8.62704 5.49191 8.26935 5.75563 8.00563C6.01935 7.74191 6.37704 7.59375 6.75 7.59375H29.25C29.623 7.59375 29.9806 7.74191 30.2444 8.00563C30.5081 8.26935 30.6562 8.62704 30.6562 9V24.75ZM23.3438 31.5C23.3438 31.7238 23.2549 31.9384 23.0966 32.0966C22.9384 32.2549 22.7238 32.3438 22.5 32.3438H13.5C13.2762 32.3438 13.0616 32.2549 12.9034 32.0966C12.7451 31.9384 12.6562 31.7238 12.6562 31.5C12.6562 31.2762 12.7451 31.0616 12.9034 30.9034C13.0616 30.7451 13.2762 30.6562 13.5 30.6562H22.5C22.7238 30.6562 22.9384 30.7451 23.0966 30.9034C23.2549 31.0616 23.3438 31.2762 23.3438 31.5Z"
                                        fill="#111111"
                                      />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          <div className="relative isolate overflow-hidden bg-black py-10">
            <div className="px-10 md:px-40">
              <div className="text-white text-start mb-6">
                <p className="font-redhatmedium text-2xl underline underline-offset-14 decoration-red-500">
                  Team Reviews
                </p>
              </div>
            </div>

            <div className="px-10">
              <Swiper
                modules={[Virtual, Navigation, Pagination]}
                onSwiper={setSwiperRef}
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                navigation={false}
                virtual
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="transform-gpu text-white mt-10">
                    <a
                      href="https://www.linkedin.com/in/raghul-manoharan-155705104/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-2xl col-span-4 bg-white bg-opacity-10 px-10 py-5 shadow-lg backdrop-blur-md max-sm:px-8 teamreview">
                        <p className="font-redhatmedium text-lg">Gopal Swamy</p>
                        <p className="font-redhatregular text-sm text-gray-300">
                          - Flutter Developer
                        </p>
                        <p className="font-redhatregular text-sm mt-3 indent-8 reviewtext">
                          I'm pleased to recommend Raghul for his budding talent
                          in web development. He has consistently demonstrated
                          remarkable problem-solving skills and a keen
                          intellect, making him a quick learner with great
                          potential.
                        </p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="transform-gpu text-white mt-10">
                    <a
                      href="https://www.linkedin.com/in/raghul-manoharan-155705104/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-2xl grid col-span-4 bg-white bg-opacity-10 px-10 py-5 shadow-lg backdrop-blur-md max-sm:px-8 teamreview">
                        <p className="font-redhatmedium text-lg">Selva kumar</p>
                        <p className="font-redhatregular text-sm text-gray-300">
                          - UX UI & Visual Designer
                        </p>
                        <p className="font-redhatregular text-sm mt-3 indent-8 reviewtext">
                          I highly recommend Raghul as a MERN stack developer.
                          He is diligent, optimistic, and a joy to work with.
                          Raghul's dedication to his work is impressive, and he
                          consistently delivers high-quality solutions in
                          challenging situations make him a valuable team
                          member....
                        </p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="transform-gpu text-white mt-10">
                    <a
                      href="https://www.linkedin.com/in/raghul-manoharan-155705104/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-2xl col-span-4 bg-white bg-opacity-10 px-10 py-5 shadow-lg backdrop-blur-md max-sm:px-8 teamreview">
                        <p className="font-redhatmedium text-lg">
                          venkatramanan S
                        </p>
                        <p className="font-redhatregular text-sm text-gray-300">
                          - Senior IT Recruiter
                        </p>
                        <p className="font-redhatregular text-sm mt-3 indent-8 reviewtext">
                          I would recommend that Raghul places a stronger focus
                          on achieving financial stability, as it not only
                          enhances one's quality of life but also lays a solid
                          foundation for personal and professional growth. While
                          pursuing business endeavors can be appealing, ensuring
                          financial stability should be a primary concern at any
                          stage of life.
                        </p>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* contacts */}
      <footer id="contact">
        <div className="relative isolate overflow-hidden bg-white py-10 px-10 md:px-40">
          <div className="grid md:grid-cols-12 gap-10 text-black text-start">
            <div className="text-center md:text-left col-span-12 md:col-span-4 mx-auto">
              <p className="font-redhatmedium text-xl mb-6">Contact me</p>

              <a
                href="tel:+91822060110"
                rel="noopener noreferrer"
                className="text-left"
              >
                <p className="font-redhatregular text-l">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline mr-2 my-2"
                    width="30"
                    height="30"
                    viewBox="0 0 40 36"
                    fill="none"
                  >
                    <path
                      d="M21.3333 2.66699H10.6667C9.95942 2.66699 9.28115 2.94794 8.78105 3.44804C8.28095 3.94814 8 4.62641 8 5.33366V26.667C8 27.3742 8.28095 28.0525 8.78105 28.5526C9.28115 29.0527 9.95942 29.3337 10.6667 29.3337H21.3333C22.0406 29.3337 22.7189 29.0527 23.219 28.5526C23.719 28.0525 24 27.3742 24 26.667V5.33366C24 4.62641 23.719 3.94814 23.219 3.44804C22.7189 2.94794 22.0406 2.66699 21.3333 2.66699ZM17.3333 28.0003H14.6667V26.667H17.3333V28.0003ZM21.3333 25.3337H10.6667V6.66699H21.3333V25.3337Z"
                      fill="#FF0000"
                    />
                  </svg>
                  +91 82202 60110
                </p>
              </a>

              <a
                href="mailto:raghul9510@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left"
              >
                <p className="font-redhatregular text-l">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline mr-4 my-2"
                    width="20"
                    height="22"
                    viewBox="0 0 27 22"
                    fill="none"
                  >
                    <path
                      d="M2.66667 21.3333C1.93334 21.3333 1.30534 21.072 0.782669 20.5493C0.260002 20.0267 -0.000886625 19.3991 2.26373e-06 18.6667V2.66667C2.26373e-06 1.93334 0.261336 1.30534 0.784002 0.782669C1.30667 0.260002 1.93423 -0.000886625 2.66667 2.26373e-06H24C24.7333 2.26373e-06 25.3613 0.261335 25.884 0.784002C26.4067 1.30667 26.6676 1.93423 26.6667 2.66667V18.6667C26.6667 19.4 26.4053 20.028 25.8827 20.5507C25.36 21.0733 24.7325 21.3342 24 21.3333H2.66667ZM13.3333 12L2.66667 5.33334V18.6667H24V5.33334L13.3333 12ZM13.3333 9.33334L24 2.66667H2.66667L13.3333 9.33334ZM2.66667 5.33334V2.66667V18.6667V5.33334Z"
                      fill="#FF0000"
                    />
                  </svg>
                  raghul9510@gmail.com{" "}
                </p>
              </a>
            </div>

            <div className="text-center col-span-12 md:col-span-4 mx-auto">
              <p className="font-redhatmedium text-xl mb-8">
                I am available here...
              </p>

              <a
                href="https://www.linkedin.com/in/raghul-manoharan-155705104"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline mx-5"
                  width="28"
                  height="28"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1026_597)">
                    <rect width="38" height="38" rx="5" fill="#EBEBEB" />
                    <path
                      d="M0 2.72175C0 1.21837 1.24925 0 2.79062 0H35.2094C36.7507 0 38 1.21837 38 2.72175V35.2783C38 36.7816 36.7507 38 35.2094 38H2.79062C1.24925 38 0 36.7816 0 35.2783V2.72175ZM11.7396 31.8108V14.6514H6.03725V31.8108H11.7396ZM8.88963 12.3073C10.8775 12.3073 12.1149 10.9915 12.1149 9.34325C12.0792 7.65938 10.8799 6.37925 8.92762 6.37925C6.97538 6.37925 5.7 7.66175 5.7 9.34325C5.7 10.9915 6.93738 12.3073 8.85163 12.3073H8.88963ZM20.5461 31.8108V22.2276C20.5461 21.7146 20.5841 21.2016 20.7361 20.8359C21.147 19.8123 22.0851 18.7506 23.6621 18.7506C25.726 18.7506 26.5501 20.3229 26.5501 22.6314V31.8108H32.2525V21.9688C32.2525 16.6962 29.4405 14.2453 25.688 14.2453C22.6623 14.2453 21.3061 15.9078 20.5461 17.0786V17.138H20.5081C20.5207 17.1182 20.5334 17.0984 20.5461 17.0786V14.6514H14.8461C14.9174 16.2616 14.8461 31.8108 14.8461 31.8108H20.5461Z"
                      fill="#108BEA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1026_597">
                      <rect width="38" height="38" rx="5" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a
                href="https://wa.me/918220260110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline mx-5"
                  width="34"
                  height="34"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1026_599)">
                    <path
                      d="M0.85332 19.7598C0.852383 23.1206 1.73738 26.4022 3.4202 29.2946L0.692383 39.1771L10.8849 36.5253C13.704 38.0481 16.8626 38.846 20.0724 38.8462H20.0808C30.6769 38.8462 39.3024 30.2907 39.3069 19.7749C39.3089 14.6792 37.3108 9.88759 33.6805 6.28263C30.0508 2.67798 25.2235 0.691779 20.08 0.689453C9.4827 0.689453 0.857852 9.24449 0.853477 19.7598"
                      fill="url(#paint0_linear_1026_599)"
                    />
                    <path
                      d="M0.167188 19.7544C0.166094 23.2361 1.08281 26.635 2.82562 29.631L0 39.8678L10.558 37.1209C13.467 38.6947 16.7423 39.5245 20.0752 39.5257H20.0837C31.06 39.5257 39.9953 30.6625 40 19.7702C40.0019 14.4915 37.9319 9.5276 34.1719 5.79349C30.4114 2.05984 25.4114 0.00217054 20.0837 0C9.10562 0 0.171563 8.86202 0.167188 19.7544ZM6.45469 29.115L6.06047 28.4941C4.40328 25.8795 3.52859 22.8581 3.52984 19.7557C3.53344 10.7022 10.9591 3.33643 20.09 3.33643C24.5119 3.33829 28.6675 5.04868 31.7931 8.15194C34.9186 11.2555 36.6384 15.3811 36.6373 19.769C36.6333 28.8225 29.2075 36.1892 20.0837 36.1892H20.0772C17.1064 36.1876 14.1928 35.396 11.6519 33.9L11.0472 33.5442L4.78188 35.1741L6.45469 29.1149V29.115Z"
                      fill="url(#paint1_linear_1026_599)"
                    />
                    <path
                      d="M15.1061 11.4955C14.7332 10.6734 14.3409 10.6568 13.9864 10.6423C13.6961 10.6299 13.3642 10.6309 13.0326 10.6309C12.7007 10.6309 12.1615 10.7548 11.7057 11.2485C11.2495 11.7428 9.96387 12.9372 9.96387 15.3665C9.96387 17.796 11.7471 20.1437 11.9957 20.4735C12.2446 20.8027 15.4384 25.9475 20.4965 27.9267C24.7003 29.5715 25.5557 29.2444 26.4681 29.1619C27.3806 29.0797 29.4125 27.9678 29.827 26.8148C30.2418 25.6619 30.2418 24.6737 30.1175 24.4672C29.9931 24.2614 29.6612 24.1379 29.1636 23.891C28.6657 23.6441 26.2192 22.4495 25.7631 22.2847C25.3068 22.12 24.9751 22.0379 24.6432 22.5323C24.3114 23.0259 23.3584 24.1379 23.0679 24.4672C22.7778 24.7972 22.4873 24.8383 21.9898 24.5913C21.4918 24.3436 19.8892 23.8228 17.9878 22.1408C16.5084 20.832 15.5096 19.2157 15.2193 18.7213C14.929 18.2276 15.1882 17.96 15.4378 17.714C15.6614 17.4927 15.9356 17.1374 16.1846 16.8492C16.4328 16.5608 16.5156 16.3551 16.6815 16.0258C16.8476 15.6961 16.7645 15.4078 16.6403 15.1608C16.5156 14.9138 15.5486 12.4718 15.1061 11.4955Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1026_599"
                      x1="1931.42"
                      y1="3849.45"
                      x2="1931.42"
                      y2="0.689453"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1FAF38" />
                      <stop offset="1" stop-color="#60D669" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1026_599"
                      x1="2000"
                      y1="3986.78"
                      x2="2000"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F9F9F9" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                    <clipPath id="clip0_1026_599">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>

            <div className="text-center col-span-12 md:col-span-4 mx-auto">
              <a
                href={resume}
                download="Raghul Manoharan Resume"
                className="hover:cursor-pointer"
              >
                <p className="mt-2 text-lg font-redhatmedium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline mx-2"
                    width="38"
                    height="38"
                    viewBox="0 0 66 66"
                    fill="none"
                  >
                    <path
                      d="M22.7339 40.3691C22.2279 40.3691 21.8869 40.4186 21.7109 40.4681V43.7076C21.9199 43.7571 22.1812 43.7709 22.5414 43.7709C23.8587 43.7709 24.6699 43.1054 24.6699 41.9806C24.6699 40.9741 23.9714 40.3691 22.7339 40.3691ZM32.3232 40.4021C31.7732 40.4021 31.4157 40.4516 31.2039 40.5011V47.6786C31.4157 47.7281 31.7567 47.7281 32.0647 47.7281C34.3114 47.7446 35.7744 46.5071 35.7744 43.8891C35.7909 41.6066 34.4572 40.4021 32.3232 40.4021Z"
                      fill="#FF0000"
                    />
                    <path
                      d="M38.5 5.5H16.5C15.0413 5.5 13.6424 6.07946 12.6109 7.11091C11.5795 8.14236 11 9.54131 11 11V55C11 56.4587 11.5795 57.8576 12.6109 58.8891C13.6424 59.9205 15.0413 60.5 16.5 60.5H49.5C50.9587 60.5 52.3576 59.9205 53.3891 58.8891C54.4205 57.8576 55 56.4587 55 55V22L38.5 5.5ZM26.1195 44.5225C25.2698 45.32 24.0157 45.6775 22.5555 45.6775C22.2724 45.6806 21.9894 45.664 21.7085 45.628V49.5495H19.25V38.7255C20.3595 38.56 21.4806 38.4846 22.6022 38.5C24.134 38.5 25.223 38.7915 25.9573 39.3773C26.6558 39.9328 27.1287 40.843 27.1287 41.9155C27.126 42.9935 26.7685 43.9038 26.1195 44.5225ZM36.5888 48.2487C35.4338 49.2085 33.6765 49.665 31.5288 49.665C30.2418 49.665 29.3315 49.5825 28.7127 49.5V38.7282C29.8227 38.5663 30.9434 38.4899 32.065 38.5C34.1467 38.5 35.4998 38.874 36.5557 39.6715C37.697 40.5185 38.412 41.8688 38.412 43.8075C38.412 45.9058 37.6448 47.355 36.5888 48.2487ZM46.75 40.6175H42.537V43.1227H46.475V45.1413H42.537V49.5522H40.0455V38.5825H46.75V40.6175ZM38.5 24.75H35.75V11L49.5 24.75H38.5Z"
                      fill="#FF0000"
                    />
                  </svg>
                  Download Resume
                </p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Body;
