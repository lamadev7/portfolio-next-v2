import Image from "next/image";
import { FaBootstrap, FaGithub, FaReact } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { SiExpress, SiNextdotjs, SiPayloadcms, SiReactquery, SiRedux, SiSequelize } from "react-icons/si";
import { CiCalendar } from "react-icons/ci";
import { TbExternalLink } from "react-icons/tb";
import { Timeline } from "@/components/ui/timeline";
import { FlipWords } from "@/components/ui/flip-words";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FollowerPointerCard, TitleComponent } from "@/components/ui/following-pointer";
import MyWalletQR from "@/components/MyWalletQR";
import { DiMongodb } from "react-icons/di";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";


export const words = [
    "A Full-Stack Software Engineer",
    "A UI/UX Designer",
    "A Backend Developer",
    "A Mobile Application Developer",
    "A System Design Enthusiast"
];
export const qualifications = [
    {
        "institution": "Herald College Kathmandu (HCK)",
        "degree": "BSc (Hons) Computer Science (BIT)",
        "years": "2021 - 2023",
        "logo": '/images/herald.png',
        "website": "https://heraldcollege.edu.np/",
    },
    {
        "institution": "Uniglobe SS/College",
        "degree": "Higher Secondary School (+2)",
        "years": "2019 - 2020",
        "logo": '/images/uniglobe.png',
        "website": "https://uniglobecollege.edu.np/",
    },
    {
        "institution": "Kalpavriksha Secondary School",
        "degree": "Secondary School",
        "years": "2005 - 2018",
        "logo": '/images/kalpavriksha.jpg',
        "logoClass": 'h-[50px] w-[50px]',
        "website": "https://www.facebook.com/Kalpavrikshaenglishschool/",
    }
];
export const companies = [
    {
        name: "Portpro (Full Time)",
        logo: "/images/portpro.webp",
        experience: "2022 - Present",
        designation: "Mid. Fullstack Software Engineer",
        techstacks: [
            { title: 'React', icon: FaReact },
            { title: 'Redux', icon: SiRedux },
            { title: 'Bootstrap', icon: FaBootstrap },
            { title: 'Express', icon: SiExpress },
            { title: 'Mongodb', icon: DiMongodb },
            { title: 'Sequelize', icon: SiSequelize },
        ]
    },
    {
        name: "Scala Technologies (Contract)",
        logo: "/images/scala.jpeg",
        experience: "2024 - 2025",
        designation: "Fullstack Software Engineer",
        techstacks: [
            { title: 'Next JS', icon: SiNextdotjs },
            { title: 'Redux', icon: SiRedux },
            { title: 'Tailwind', icon: RiTailwindCssFill },
            { title: 'Express', icon: SiExpress },
            { title: 'Mongodb', icon: DiMongodb },
            { title: 'Payload', icon: SiPayloadcms },
        ]
    },
    {
        name: "Princelab Pvt. Ltd.",
        logo: "/images/princelab.jpeg",
        experience: "2021 - 2023",
        designation: "Frontend Engineer",
        techstacks: [
            { title: 'React', icon: FaReact },
            { title: 'Next JS', icon: SiNextdotjs },
            { title: 'Bootstrap', icon: FaBootstrap },
            { title: 'Redux', icon: SiRedux },
            { title: 'React Query', icon: SiReactquery },
            { title: 'Firebase', icon: RiFirebaseFill },
        ]
    }
];
export const projects = [
    {
        id: 1,
        title: "Pets Clinic Nepal",
        techstacks: [
            { title: 'React', icon: FaReact },
            { title: 'Next JS', icon: SiNextdotjs },
            { title: 'Bootstrap', icon: FaBootstrap },
            { title: 'Redux', icon: SiRedux },
            { title: 'React Query', icon: SiReactquery },
            { title: 'Firebase', icon: RiFirebaseFill },
        ],
        thumbnail: "/images/pets-clinic.png",
    },
    {
        id: 2,
        title: "Pests Control Australia",
        techstacks: [
            { title: 'React', icon: FaReact },
            { title: 'Next JS', icon: SiNextdotjs },
            { title: 'Bootstrap', icon: FaBootstrap },
            { title: 'Redux', icon: SiRedux },
            { title: 'React Query', icon: SiReactquery },
            { title: 'Firebase', icon: RiFirebaseFill },
        ],
        thumbnail: "/images/pests-controll.png",
    },
    {
        id: 3,
        title: "Clothing Eccommerce Website",
        techstacks: [
            { title: 'React', icon: FaReact },
            { title: 'Next JS', icon: SiNextdotjs },
            { title: 'Bootstrap', icon: FaBootstrap },
            { title: 'Redux', icon: SiRedux },
            { title: 'React Query', icon: SiReactquery },
            { title: 'Firebase', icon: RiFirebaseFill },
        ],
        thumbnail: "/images/php-ecommerce.webp",
    },
    {
        id: 4,
        title: "Realtime Chat Application",
        techstacks: [
            { title: 'React', icon: FaReact },
            { title: 'Next JS', icon: SiNextdotjs },
            { title: 'Bootstrap', icon: FaBootstrap },
            { title: 'Redux', icon: SiRedux },
            { title: 'React Query', icon: SiReactquery },
            { title: 'Firebase', icon: RiFirebaseFill },
        ],
        thumbnail: "/images/chat-application.webp",
    },
];