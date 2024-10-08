"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I create high-performance websites tailored to your business needs. Whether it's custom WordPress themes, complex web applications, or eCommerce platforms, I deliver scalable solutions that are optimized for speed, user experience, and functionality. Every line of code I write is focused on helping your business grow.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I design interfaces that are not just visually appealing but deeply rooted in user experience. Every project I undertake begins with understanding your audience to craft designs that are intuitive, responsive, and enhance engagement. My design philosophy revolves around creating seamless digital experiences.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Your logo is the face of your brand, and I’m here to ensure it makes a lasting impression. With my design expertise, I craft logos that capture the essence of your business, helping you stand out in a crowded market. Whether it’s a new logo or a brand refresh, I’ll create something memorable and timeless.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I help businesses increase their online visibility with a strategic approach to SEO. From technical optimization to content strategy, I make sure your website ranks well, attracts the right audience, and converts visitors into customers. My goal is to get your business in front of the people who need it most.",
    href: "",
  },
];

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href={service.href}
                    key={index}
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
