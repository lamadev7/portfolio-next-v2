"use client";

import React from "react";
import Image from "next/image";
import { IoMdCall } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { TbExternalLink } from "react-icons/tb";
import MyWalletQR from "@/components/MyWalletQR";
import { Timeline } from "@/components/ui/timeline";
import { FlipWords } from "@/components/ui/flip-words";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { companies, projects, qualifications, words } from "@/lib/constants";
import { FollowerPointerCard, TitleComponent } from "@/components/ui/following-pointer";

export default function TimelineDemo() {
  const data = [
    {
      title: "👋",
      content: (
        <div className="flex flex-col gap-7">
          <Image src="/images/parbat.png" height={300} width={300} alt="profile image" className="rounded-full" />
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
            <a href="tel:9745339427" className="px-5 sm:px-3 py-2 w-full sm:w-fit bg-white text-sm text-slate-700 flex items-center gap-2 border border-slate-200 rounded-lg shadow-sm">
              <IoMdCall className="text-lg" />
              Let's Build Something Amazing!
            </a>
            <MyWalletQR />
          </div>
          <div>
            <FollowerPointerCard title={<TitleComponent />}>
              <h2 className="text-2xl font-semibold">Hey, I'm Parbat Lama 👋</h2>
              <div className="flex items-center gap-2 mt-3 mb-5">
                <MdKeyboardDoubleArrowRight className="text-xl" />
                <FlipWords words={words} className="text-md font-semibold ml-0 text-green-700" />
              </div>
              <p className="text-sm text-slate-700">Namaste! 🙏 &nbsp; I'm Parbat Lama, a Fullstack Web Developer hailing from the vibrant landscapes of Nepal. With a blend of Himalayan inspiration and a passion for coding, I craft digital wonders that bridge cultures and connect people worldwide. Explore my portfolio to witness how technology meets the spirit of Nepal in every line of code.</p>
            </FollowerPointerCard>
          </div>
        </div>
      ),
    },
    {
      title: "🎓",
      content: (
        <div>
          <h2 className="text-xl font-semibold mb-6">Academic Qualifications</h2>
          <div className="my-5 flex flex-col gap-2 items-center">
            {
              qualifications?.map((d, i) => (
                <div key={i.toString()} className="w-full bg-white shadow-md rounded-lg p-5 sm:p-1 sm:pt-2 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInLeft" id="el-o7dner3z">
                  <div className="sm:overflow-hidden h-full sm:h-[60px] flex flex-col md:flex-row gap-6" id="el-zgklnfnz">
                    <div className="sm:border-r-[1px] sm:border-green-600 w-full sm:w-20 flex items-center sm:justify-center" id="el-auwx175z">
                      <img src={d?.logo} className={d?.logoClass ?? "h-[70px] w-[70px]"} />
                    </div>
                    <div className="w-full md:w-3/4" id="el-u13nf1ws">
                      <div className="flex items-center justify-between">
                        <h3 className="text-md font-semibold text-neutral-700" id="el-kenasb5a">{d?.institution}</h3>
                        <TbExternalLink className="mr-3 text-neutral-600 cursor-pointer hover:text-blue-500" onClick={() => openLink(d?.website)} />
                      </div>
                      <div className="mt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                        <h4 className="text-sm text-gray-500" id="el-3vdmt3b9">{d?.degree}</h4>
                        <div className="flex items-center gap-2">
                          <CiCalendar className="text-neutral-600" />
                          <span className="text-[12px] text-neutral-600" id="el-x7dcvwz3">{d?.years}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      ),
    },
    {
      title: "💼",
      content: (
        <>
          <h2 className="text-xl font-semibold mb-6">Work Experience</h2>
          <div className="flex flex-col gap-5">
            {
              companies?.map((company, i) => (
                <div key={i.toString()} className="bg-white shadow-md rounded-xl py-3 px-6 transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInLeft" id="el-o7dner3z">
                  <div className="flex flex-col md:flex-row" id="el-zgklnfnz">
                    <div className="w-full md:w-[15%]" id="el-auwx175z">
                      <div className="p-2 rounded-lg inline-block" id="el-9e0mha5u">
                        <img src={company.logo} className="w-12 h-12 rounded-full" />
                      </div>
                    </div>
                    <div className="w-full md:w-[85%]" id="el-u13nf1ws">
                      <h3 className="text-md text-neutral-700 font-semibold" id="el-kenasb5a">{company?.designation}</h3>
                      <h4 className="text-sm text-neutral-600 mt-1 mb-4" id="el-3vdmt3b9">{company?.name}</h4>
                      <div className="flex flex-wrap gap-1" id="el-qj9r1pxc">
                        {
                          company?.techstacks?.map((d: any, i) => (
                            <span
                              id="el-969oc1ge"
                              key={i.toString()}
                              className="px-3 py-1 text-neutral-900 rounded-full text-[12px] shadow-inner flex items-center gap-2"
                            >
                              {React.createElement(d?.icon)} {d?.title}
                            </span>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </>
      ),
    },
    {
      title: "🗂️",
      content: (
        <section id="projects" className="">
          <h2 className="text-xl font-semibold mb-10">Projects</h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-2">
              {
                projects?.map((d, i) => (
                  <div key={i.toString()} className="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
                    <div className="relative">
                      <div className="aspect-video bg-neutral-200 flex items-center justify-center">
                        <img src={d?.thumbnail} />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="text-white px-3 py-1 rounded-full text-sm bg-neutral-300">Web App</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-md font-bold text-neutral-900 mb-2">{d?.title}</h3>
                      <p className="text-sm text-neutral-600 mb-4">A full-featured e-commerce platform with payment integration and inventory management.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {
                          d?.techstacks?.map((stack: any, j) => (
                            <span key={i.toString()} className="flex items-center gap-2 px-3 py-1 bg-slate-100 shadow-inner text-neutral-600 rounded-full text-[12px]">
                              {React.createElement(stack?.icon)}
                              {stack?.title}
                            </span>
                          ))
                        }
                      </div>
                      <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-500 hover:text-blue-600 text-sm flex items-center">
                          Live Demo
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
                        <a href="#" className="text-neutral-500 hover:text-neutral-600">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      ),
    },
  ];

  const openLink = (link: string) => {
    window.open(link, "__blank");
  }

  return (
    <div className="w-full flex justify-center">
      <BackgroundBeams />
      <div className="w-full sm:max-w-6xl">
        <Timeline data={data} />
      </div>
    </div>
  );
}