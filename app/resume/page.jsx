"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiPhp,
  SiTailwindcss,
  SiNextdotjs,
  SiLaravel,
  SiShopify,
  SiExpress,
  SiBootstrap,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { BsWordpress } from "react-icons/bs";

import { DiPhotoshop, DiIllustrator } from "react-icons/di";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am Muzammil Hussain, a seasoned full-stack developer with over 12 years of experience building high-performance websites and custom web solutions. I specialize in WordPress, PHP, React, and Node.js, delivering scalable and efficient applications for businesses around the globe. Passionate about coding, design, and problem-solving, I thrive on turning complex challenges into seamless digital experiences. Whether it’s creating custom themes or optimizing performance, I’m dedicated to helping businesses grow through innovative web solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muzammil Hussain",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 315 842 0084",
    },
    {
      fieldName: "Experience",
      fieldValue: "15 Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "muzammil.hussain101",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldName: "Email",
      fieldValue: "sayhi@muzammil.dev",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Urdu",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "With over 15 years of experience across various roles in software development, product management, and full-stack development, I have successfully delivered high-performance web solutions. Here’s a summary of my journey through various positions where I applied my expertise in web development, project management, and more.",
  items: [
    {
      company: "Upwork",
      position: "Professional Freelancer",
      duration: "Nov 2008 - Present (16 years)",
      responsibilities:
        "As a full-stack developer, I have worked with international clients, specializing in WordPress, WooCommerce, and Genesis frameworks. I deliver custom themes, plugins, and high-performance web applications while adhering to SEO best practices and optimizing site performance. Technologies used: Angular, CSS3, PHP, JavaScript, and more.",
    },
    {
      company: "AppsGenii Technologies",
      position: "Product Manager",
      duration: "Jan 2021 - Dec 2021 (1 year)",
      responsibilities:
        "Led product development teams in creating responsive web applications and optimizing features for better user experience. Worked closely with developers to implement product improvements and ensure timely delivery. Technologies used: Responsiveness, Ruby, and more.",
    },
    {
      company: "GharPar Technologies Private Limited",
      position: "Product Manager",
      duration: "Mar 2020 - Dec 2020 (10 months)",
      responsibilities:
        "Managed the development and launch of a robust web platform tailored to on-demand services. Oversaw design, development, and deployment, focusing on enhancing user experience and overall platform performance. Technologies used: MySQL, Bootstrap 4, and more.",
    },
    {
      company: "GharPar Technologies Private Limited",
      position: "Senior Information Technology Engineer",
      duration: "Jun 2017 - Mar 2020 (2 years 10 months)",
      responsibilities:
        "Led the IT team in maintaining the company’s infrastructure and ensuring the smooth development of core applications. Played a critical role in scaling the tech stack and improving the website’s performance. Technologies used: MySQL, Bootstrap 4, PHP.",
    },
    {
      company: "Tintash",
      position: "Software Engineer",
      duration: "Jul 2017 - Jan 2018 (7 months)",
      responsibilities:
        "Part of a team that developed custom solutions for clients using Ruby on Rails and other technologies. Focused on web development, database optimization, and back-end functionality. Technologies used: Ruby on Rails, Software Development.",
    },
    {
      company: "AlphaSquared Technologies Inc.",
      position: "PHP Developer",
      duration: "Jun 2015 - Jun 2017 (2 years 1 month)",
      responsibilities:
        "Developed and maintained PHP-based web applications. Collaborated with teams to deliver scalable web solutions, optimize databases, and improve performance. Technologies used: MySQL, Bootstrap 4, PHP.",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Throughout my educational journey, I have continually sought to expand my knowledge and skills, both through formal education and self-driven learning. From commerce studies to online certifications, my education has provided a solid foundation for my career in software development.",
  items: [
    {
      institute: "Udemy",
      degree: "Various Professional Courses in Software Development",
      duration: "2018 - 2024",
    },
    {
      institute: "University of the Punjab",
      degree: "Bachelor of Commerce (BCom)",
      duration: "2002 - 2004",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have a diverse range of technical skills that allow me to create high-performance websites, scalable applications, and visually compelling designs. With expertise across various programming languages, frameworks, and design tools, I’m equipped to deliver top-notch solutions that meet your business needs.",
  categories: [
    {
      categoryTitle: "Languages",
      skillsList: [
        {
          icon: <FaHtml5 />,
          name: "HTML 5",
        },
        {
          icon: <FaCss3 />,
          name: "CSS 3",
        },
        {
          icon: <FaJs />,
          name: "Javascript",
        },
        {
          icon: <SiPhp />,
          name: "PHP",
        },
        {
          icon: <SiMysql />,
          name: "Mysql",
        },
        {
          icon: <SiMongodb />,
          name: "Mongodb",
        },
      ],
    },
    {
      categoryTitle: "Frameworks & Libraries",
      skillsList: [
        {
          icon: <FaReact />,
          name: "React",
        },
        {
          icon: <SiNextdotjs />,
          name: "Next.js",
        },
        {
          icon: <FaNodeJs />,
          name: "Node Js",
        },
        {
          icon: <SiLaravel />,
          name: "Laravel",
        },
        {
          icon: <SiExpress />,
          name: "Express.js",
        },
      ],
    },
    {
      categoryTitle: "Design Tools",
      skillsList: [
        {
          icon: <FaFigma />,
          name: "Figma",
        },
        {
          icon: <DiPhotoshop />,
          name: "Adobe Photoshop",
        },
        {
          icon: <DiIllustrator />,
          name: "Adobe Illustrator",
        },
      ],
    },
    {
      categoryTitle: "CSS Frameworks",
      skillsList: [
        {
          icon: <SiTailwindcss />,
          name: "Tailwind CSS",
        },
        {
          icon: <SiBootstrap />,
          name: "Bootstrap",
        },
      ],
    },
    {
      categoryTitle: "Content Management & E-Commerce Platforms",
      skillsList: [
        {
          icon: <BsWordpress />,
          name: "WordPress",
        },
        {
          icon: <SiShopify />,
          name: "Shopify",
        },
      ],
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left mx-10 xl:mx-0">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] md:max-w-full text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <span className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left capitalize">
                            {item.position}
                          </span>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left mx-10 xl:mx-0">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] md:max-w-full text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <span className="text-xl max-w-[260px] max-h-[200px] text-center lg:text-left capitalize">
                            {item.degree}
                          </span>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] mx-10 xl:mx-0 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] md:max-w-full text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>

                {/* Render Categories and Skill List */}
                {skills.categories.map((category, catIndex) => (
                  <div key={catIndex} className="mt-[30px]">
                    <h4 className="text-1xl font-semibold flex justify-center items-center lg:justify-start lg:items-start">
                      {category.categoryTitle}
                    </h4>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-[30px] mt-[20px]">
                      {category.skillsList.map((skill, index) => (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] lg:h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl lg:text-5xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left mx-10 xl:mx-0">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] md:max-w-full text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:items-start xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
