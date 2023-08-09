
interface SectionData {
    name: string;
    discretion: string;
}

const services: SectionData[] = [
    {
        name: "App Development",
        discretion: "We develop sleek and user-friendly Android & iOS mobile applications, equipped with the latest features, ensuring a seamless and contemporary user experience."
    },
    {
        name: "Web Development",
        discretion: "We craft dynamic and intuitive websites that captivate users, providing seamless navigation and delivering an exceptional online experience tailored to your business needs."
    },
    {
        name: "Devops",
        discretion: "Boost your software development with our efficient DevOps solutions, ensuring seamless collaboration and rapid deployment."
    },
]

const servicesHtml = services.map((section, index) => (
    <div key={index} className="bg-[#fff] bg-opacity-[0.12] rounded-2xl shadow-[4px_4px_4px_0px_rgba(0,223,192,1)] w-[31.8%] flex flex-col items-center px-2 py-6">

        <img src={`/OurServicesImgs/service${index+1}.webp`} alt={`service${index+1} img`} className="w-[40%] h-[30%] mb-4" />
        <h1 className="text-[#FFF] font-bold text-4xl 2xl:text-6xl text-center mb-4">{section.name}</h1>
        <p className="text-[#FFF] text-sm 2xl:text-lg text-center">{section.discretion}</p>

    </div>
))

const OurServices: React.FC = () => {
    return (
        <div className="bg-[#334A5C] w-full flex justify-around pt-12 " >
            <div id="OurServices" className="w-[90%] ">

                <h1 className="text-[#FFF] font-bold text-4xl 2xl:text-6xl border-l-[5px] border-[#00DFC0] pl-4 mb-10">Services We Offer</h1>

                <div className="flex justify-between">
                    {servicesHtml}
                </div>

            </div>
        </div>
    )
}

export default OurServices