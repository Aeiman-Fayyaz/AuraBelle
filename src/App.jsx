import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import heroBanner from "./assets/hero-banner.png";
import bridalService from "./assets/bridal.jpg";
import makeupService from "./assets/makeup.jpg";
import hairService from "./assets/hair.jpg";
import skinService from "./assets/skincare.jpg";
import handService from "./assets/hand-feet.jpg";
import lashesBrowsService from "./assets/lashes-brows.jpg";
import waxingService from "./assets/waxing.jpg";
import bridalPackage from "./assets/bridal-package.jpg";
import airbrush from "./assets/airbrush.jpg";
import glam from "./assets/glam.jpg";
import trailBridal from "./assets/trial-brial.jpg";
import partyMakeup from "./assets/party-makeup.jpg";
import hairstyling from "./assets/hairstyling.jpg";
import softnatural from "./assets/soft-natural.jpg";
import hairCutting from "./assets/hair-cutting.jpg";
import hairStyle from "./assets/hair-styling.jpg";
import blowDry from "./assets/blowdry.jpg";
import hairWash from "./assets/hair-wash.jpg";
import hairDying from "./assets/hair-dying.jpg";
import highlights from "./assets/highlights.jpg";
import basicfacial from "./assets/basic-facial.jpg";
import goldFacial from "./assets/gold-facial.jpg";
import diamondFacial from "./assets/diamond-facial.jpg";
import hydraFacial from "./assets/hydra-facial.jpg";
import acneTreatment from "./assets/acne-treatment.jpg";
import undereyeTreatment from "./assets/undereye-treatment.jpg";
import meniPedi from "./assets/menipedi.jpg";
import nailShaping from "./assets/nail-shaping.jpg";
import nailArt from "./assets/nail-art.jpg";
import fullBodyWax from "./assets/fullBody-wax.jpg";
import armWax from "./assets/arm-wax.jpg";
import faceWax from "./assets/face-wax.jpg";
import threading from "./assets/threading.jpg";
import instaLogo from "./assets/insta-logo.jpg";
import facebookLogo from "./assets/facebook-logo.jpg";
import whatsappLogo from "./assets/whatsapp-logo.jpg";
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      {/* NAVBAR START */}
      <nav className="bg-[#E89DAE] fixed w-full z-20 top-0 start-0 text-black backdrop-blur-7xl bg-pink-200\/30 border border-white/30 shadow-2xl">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse logo"
          >
            Aura Belle
          </a>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="flex items-center justify-center md:hidden text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-2 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm w-10 h-10 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <label htmlFor="input-group-1" className="sr-only">
              Your Email
            </label>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-body"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="block w-full ps-9 pe-3 py-2\.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body"
                placeholder="Search"
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-body"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="block w-full ps-9 pe-3 py-2\.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm focus:ring-brand focus:border-brand px-2.5 py-2.5 shadow-xs placeholder:text-body"
                placeholder="Search"
              />
            </div>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 hover:text-black hover:border-b"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="services"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:border-b"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:border-b"
                >
                  Makeup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:border-b"
                >
                  Hair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:border-b"
                >
                  Skincare & Facial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:border-b"
                >
                  Hand & Feet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:border-b"
                >
                  Waxing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:border-b"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* NAVBAR END */}
      {/* HERO BANNER START */}
      <div className="relative w-full min-h-\[300px\] md\:min-h-\[500px\] md:pt-5 pt-18 flex items-center justify-center">
        <img
          src={heroBanner}
          alt="Banner"
          className="w-full h-full object-contain"
        />
      </div>
      {/* HERO BANNER END */}
      {/* SERVICES SECTION START */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            className="flex flex-col text-center w-full mb-20"
            data-aos="fade-up"
          >
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Luxury Beauty Services, Tailored for You
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We offer a complete range of professional beauty services designed
              to enhance your natural beauty. From flawless makeup and expert
              hair styling to relaxing facials and bridal packages, our
              experienced team uses high-quality products and modern techniques
              to deliver exceptional results. Your comfort, confidence, and
              satisfaction are always our top priority.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
              <div className="flex relative">
                <img
                  alt="Bridal Service"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                  src={bridalService}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 rounded-xl bg-[#e89dafbf] opacity-0 hover:opacity-100">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    Bridal Services
                  </h1>
                  <p className="leading-relaxed">
                    We serve{" "}
                    <b>
                      Bridal Makeup, Mehndi Makeup, Baraat Makeup, Walima
                      Makeup, Bridal Hairstyle, Dupatta Setting, Jewelry
                      Setting, Customized Bridal Packages
                    </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
              <div className="flex relative">
                <img
                  alt="Makeup Service"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                  src={makeupService}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 rounded-xl bg-[#e89dafbf] opacity-0 hover:opacity-100">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    Makeup Services
                  </h1>
                  <p className="leading-relaxed">
                    We serve{" "}
                    <b>
                      Party Makeup, Engagement Makeup, Airbrush Makeup, Soft /
                      Natural Makeup, Glam Makeup, Makeup Trial (Bridal)
                    </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
              <div className="flex relative">
                <img
                  alt="Hair Service"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                  src={hairService}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 rounded-xl bg-[#e89dafbf] opacity-0 hover:opacity-100">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    Hair Service
                  </h1>
                  <p className="leading-relaxed">
                    We serve{" "}
                    <b>
                      Hair Cut (Layer, Bob, Step, U-Cut, V-Cut), Hair Styling
                      (Straight, Curls, Waves), Blow Dry, Hair Wash, Hair
                      Coloring, Highlights / Lowlights
                    </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
              <div className="flex relative">
                <img
                  alt="Skincare & Facial Service "
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                  src={skinService}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 rounded-xl bg-[#e89dafbf] opacity-0 hover:opacity-100">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    Skincare & Facial Service
                  </h1>
                  <p className="leading-relaxed">
                    We serve{" "}
                    <b>
                      Basic Facial, Gold Facial, Diamond Facial, Pearl Facial,
                      Hydra Facial, Clean-Up, Skin Polishing, Acne Treatment,
                      Under Eye Treatment
                    </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
              <div className="flex relative">
                <img
                  alt="Hands & Feet Care"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                  src={handService}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 rounded-xl bg-[#e89dafbf] opacity-0 hover:opacity-100">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    Hands & Feet Care
                  </h1>
                  <p className="leading-relaxed">
                    We serve{" "}
                    <b>
                      Manicure Pedicure, Spa Manicure, Spa Pedicure, Paraffin
                      Wax, Nail Cutting & Shaping, Nail Art, Gel Nails, Acrylic
                      Nails, French Tips
                    </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
              <div className="flex relative">
                <img
                  alt="Waxing & Hair Removal"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                  src={waxingService}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 rounded-xl bg-[#e89dafbf] opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Waxing & Hair Removal
                  </h1>
                  <p className="leading-relaxed">
                    We serve{" "}
                    <b>
                      Full Body Wax, Arms & Legs Wax, Face Wax, Brazilian Wax,
                      Bikini Wax, Threading, Face Threading, Laser Hair Removal
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES SECTION END */}
      {/* MAKEUP PRICING SECTION START */}
      <section className="text-gray-600 body-font bg-[#E89DAE]" id="services">
        <div className="container px-5 py-12 mx-auto">
          <h1
            className="text-center mb-10 lg:text-5xl md:text-4xl text-2xl text-black"
            data-aos="fade-up"
          >
            Makeup
          </h1>
          <div className="flex flex-wrap -m-4">
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Bridal Package"
                  className="object-cover object-center w-full h-full block"
                  src={bridalPackage}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Bridal Package (3 days)
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Mehndi, Barat, Valima
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$850.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Airbrush Makeup"
                  className="object-cover object-center w-full h-full block"
                  src={airbrush}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Airbrush Makeup (1 day)
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Any Event
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$850.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Glam Makeup"
                  className="object-cover object-center w-full h-full block"
                  src={glam}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Glam Makeup (1 day)
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Any Event
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$250.00</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Makeup Trail Bridal "
                  className="object-cover object-center w-full h-full block"
                  src={trailBridal}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Makeup Trail Bridal
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Mehndi, Barat, Valima (1 look)
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$350.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Party Makeup"
                  className="object-cover object-center w-full h-full block"
                  src={partyMakeup}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Party Makeup (1 day)
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Any Event
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$400.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Hairstyling"
                  className="object-cover object-center w-full h-full block"
                  src={hairstyling}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Hairstyling
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Any look (Extra charge for flowers)
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$150.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Soft Natural Makeup"
                  className="object-cover object-center w-full h-full block"
                  src={softnatural}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Soft Natural Makeup (1 day)
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Any Event
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$325.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MAKEUP PRICING SECTION END */}
      {/* HAIR PRICING SECTION START */}
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-12 mx-auto">
          <h1
            className="text-center mb-10 lg:text-5xl md:text-4xl text-2xl text-black"
            data-aos="fade-up"
          >
            Hair
          </h1>
          <div className="flex flex-wrap -m-4">
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Hair Cutting"
                  className="object-cover object-center w-full h-full block"
                  src={hairCutting}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Hair Cutting
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Layer, Bob, Step
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$300.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Hair Style"
                  className="object-cover object-center w-full h-full block"
                  src={hairStyle}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Hair Style
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Any Style (Extra pay for fresh flower)
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$180.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Blow Dry"
                  className="object-cover object-center w-full h-full block"
                  src={blowDry}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Blow Dry
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  On Advance Booking
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$300.00</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Hair Wash"
                  className="object-cover object-center w-full h-full block"
                  src={hairWash}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Hair Wash
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Small Length
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$225.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Hair Dying"
                  className="object-cover object-center w-full h-full block"
                  src={hairDying}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Hair Dying
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Medium Length
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$380.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Highlights"
                  className="object-cover object-center w-full h-full block"
                  src={highlights}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Highlights
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Medium Length
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$320.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HAIR PRICING SECTION END */}
      {/* SKIN CARE PRICING SECTION START */}
      <section className="text-gray-600 body-font bg-[#E89DAE]" id="services">
        <div className="container px-5 py-12 mx-auto">
          <h1
            className="text-center mb-10 lg:text-5xl md:text-4xl text-2xl text-black"
            data-aos="fade-up"
          >
            Skincare & Facial
          </h1>
          <div className="flex flex-wrap -m-4">
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Basic Facial"
                  className="object-cover object-center w-full h-full block"
                  src={basicfacial}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Basic Facial
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Normal Skin type
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$110.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Gold Facial"
                  className="object-cover object-center w-full h-full block"
                  src={goldFacial}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Gold Facial
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  All skin type
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$130.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Diamond Facial"
                  className="object-cover object-center w-full h-full block"
                  src={diamondFacial}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Diamond Facial & Pearl Facial
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  on Advance Booking
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$310.00</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Hydra Facial"
                  className="object-cover object-center w-full h-full block"
                  src={hydraFacial}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Hydra Facial
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  on Advanvce Booking
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$500.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Acne Treatment"
                  className="object-cover object-center w-full h-full block"
                  src={acneTreatment}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Acne Treatment
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  on Advance Booking
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">
                    $450.00 <small>per session</small>
                  </p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Under Eye Treatment"
                  className="object-cover object-center w-full h-full block"
                  src={undereyeTreatment}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Under Eye Treatment
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  on Advance Booking
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$550.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SKIN CARE PRICING SECTION END */}
      {/* HAIR PRICING SECTION START */}
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-12 mx-auto">
          <h1
            className="text-center mb-10 lg:text-5xl md:text-4xl text-2xl text-black"
            data-aos="fade-up"
          >
            Hand & Feet Caring
          </h1>
          <div className="flex flex-wrap -m-4">
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Meni Pedi"
                  className="object-cover object-center w-full h-full block"
                  src={meniPedi}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Menicure & Pedicure
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  on Advance Booking
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$245.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Nail Cutting & Shapping"
                  className="object-cover object-center w-full h-full block"
                  src={nailShaping}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Nail Cutting & Shapping
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Any Shape
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$80.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Nail Art"
                  className="object-cover object-center w-full h-full block"
                  src={nailArt}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Nail Art
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Any Art or design
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$140.00</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HAIR PRICING SECTION END */}
      {/* WAXING PRICING SECTION START */}
      <section className="text-gray-600 body-font bg-[#E89DAE]" id="services">
        <div className="container px-5 py-12 mx-auto">
          <h1
            className="text-center mb-10 lg:text-5xl md:text-4xl text-2xl text-black"
            data-aos="fade-up"
          >
            Waxing
          </h1>
          <div className="flex flex-wrap -m-4">
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Full Body Wax"
                  className="object-cover object-center w-full h-full block"
                  src={fullBodyWax}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Full Body Wax
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  on Advance Booking
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$500.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Arm & Leg Wax"
                  className="object-cover object-center w-full h-full block"
                  src={armWax}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Arm & Leg Wax
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Hot wax
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$90.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Face Wax"
                  className="object-cover object-center w-full h-full block"
                  src={faceWax}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Face Wax
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  Hot wax
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$60.00</p>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="Threading"
                  className="object-cover object-center w-full h-full block"
                  src={threading}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  threading
                </h2>
                <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">
                  For Sensitive Skin
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-black text-xl font-semibold">$60.00</p>

                  <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WAXING PRICING SECTION END */}
      {/* CONTACT SECTION START */}
      <section className=" body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
              data-aos="fade-up"
            >
              Contact Us
            </h1>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Your Good Name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#E89DAE] focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Ypur Email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#E89DAE] focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Contact no
                  </label>
                  <input
                    type="number"
                    id="name"
                    placeholder="Contact no"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#E89DAE] focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Service You Choose
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Service You Choose"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#E89DAE] focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Enter Your Message or Feedback"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#E89DAE] focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <button className="flex mx-auto py-2 px-8 text-white bg-pink-600 rounded-lg hover:bg-transparent hover:text-pink-600 hover:border-2 hover:border-pink-600">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT SECTION END */}
      {/* FOOTER START */}
      <footer className="bg-pink-200/30 backdrop-blur-md border-t border-white/30 shadow-2xl text-black">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-semibold logo mb-3">Aura Belle</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Premium beauty salon offering professional makeup, hair styling,
                skincare, and bridal services with elegance and care.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-medium mb-3">Services</h3>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:text-pink-600">Makeup</li>
                <li className="cursor-pointer hover:text-pink-600">
                  Hair Styling
                </li>
                <li className="cursor-pointer hover:text-pink-600">
                  Skincare & Facial
                </li>
                <li className="cursor-pointer hover:text-pink-600">
                  Hand & Feet
                </li>
                <li className="cursor-pointer hover:text-pink-600">Waxing</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:text-pink-600">Home</li>
                <li className="cursor-pointer hover:text-pink-600">Services</li>
                <li className="cursor-pointer hover:text-pink-600">Makeup</li>
                <li className="cursor-pointer hover:text-pink-600">Contact</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-medium mb-3">Contact</h3>
              <p className="text-sm text-gray-700 hover:text-pink-600 cursor-pointer">
                Karachi, Pakistan
              </p>
              <p className="text-sm text-gray-700 hover:text-pink-600 mt-1 cursor-pointer">
                +92 300 1234567
              </p>
              <p className="text-sm text-gray-700 hover:text-pink-600 mt-1 cursor-pointer">
                aurabelle@gmail.com
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/30 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700">
            <p>© 2026 Aura Belle. All rights reserved.</p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              Developed by{" "}
              <span>
                <b> AEIMAN FAYYAZ</b>
              </span>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER END */}
    </>
  );
}
