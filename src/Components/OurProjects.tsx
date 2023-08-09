
interface SectionData {
    name: string;
    textColor: string;
    bgColor: string;
    img: string;
    link: string;
}

const projects: SectionData[] = [
    {
        name: "Ali AlNono",
        textColor: 'text-[#DF3030]',
        bgColor: "bg-[#DF3030]",
        img: "/OurProjectsImgs/AliAlNono.webp",
        link: "https://al-nono.netlify.app/"
    },
    {
        name: "Al Mahaqeri",
        textColor: "text-[#F77F00]",
        bgColor: "bg-[#F77F00]",
        img: "/OurProjectsImgs/AlMahaqeri.webp",
        link: "https://almahaqeri.vercel.app/"
    },
    {
        name: "crystallpool",
        textColor: "text-[#08F]",
        bgColor: "bg-[#08F]",
        img: "/OurProjectsImgs/crystallpool.webp",
        link: "https://crystallpool.netlify.app/"
    },
    {
        name: "To Ru",
        textColor: "text-[#214966]",
        bgColor: "bg-[#214966]",
        img: "/OurProjectsImgs/toru.webp",
        link: "https://toru.netlify.app/"
    },
]

const OpenPage = (linkUrl: string) => {
    window.open(linkUrl, '_blank'); 
};

const projectsHtml = projects.map((section, index) => (
    <div key={index} className="relative bg-[#fff] bg-opacity-[0.12] rounded-2xl shadow-[4px_4px_4px_0px_rgba(0,223,192,1)] w-[31.8%] aspect-[1/0.7] px-2 cursor-pointer " onClick={()=>OpenPage(section.link)}>
        <h1 className={`text-3xl 2xl:text-5xl z-10  relative ` + section.textColor}>{section.name}</h1>
        <div className={"absolute left-1 top-1 w-[60%] z-0 aspect-square rounded-full bg-opacity-30 " + section.bgColor}></div>
        <img src={section.img} alt="" className="absolute w-[80%] h-[70%] right-3 bottom-3 " />
    </div>
))

const OurProjects: React.FC = () => {
    return (
        <div className="bg-[#334A5C] w-full flex justify-around pt-10 " >
            <div className="w-[90%] ">

                <h1 className="text-[#FFF] font-bold text-4xl 2xl:text-6xl border-l-[5px] border-[#00DFC0] pl-4 mb-4">Our Projects</h1>
                <p className="text-[#FFF] text-sm 2xl:text-lg pl-4 mb-8">Here, you can find a few samples of how we successfully helped companies heal their challenges and pain points</p>

                <div className="flex justify-evenly flex-wrap gap-y-4">
                    {projectsHtml}
                </div>

            </div>
        </div>
    )
}

export default OurProjects