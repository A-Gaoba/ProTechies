interface SectionData {
    name: string;
    discretion: string;
}

const process: SectionData[] = [
    {
        name: "1. Requirement Gathering",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    {
        name: "2. UI/UX Design",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    {
        name: "3. Prototype",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    {
        name: "4. Development",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    {
        name: "5. Quality Assurance",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    {
        name: "6. Deployment",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    {
        name: "7. Support & Maintenance",
        discretion : "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project."
    },
    
]

const processHtml = process.map((section, index) => (
    <div key={index} className="bg-[#fff] bg-opacity-[0.12] rounded-2xl shadow-[4px_4px_4px_0px_rgba(0,223,192,1)] w-[22%] flex flex-col items-center px-2 py-6">

        <img src={`/OurProcessImgs/proces${index+1}.webp`} alt={`proces${index+1} img`} className="w-[40%] h-[30%] mb-4" />
        <h1 className="text-[#FFF] font-bold text-2xl 2xl:text-4xl text-center mb-4">{section.name}</h1>
        <p className="text-[#FFF] text-sm 2xl:text-lg text-center">{section.discretion}</p>

    </div>
))

const OurProcess: React.FC = () => {
    return (
        <div className="bg-[#334A5C] w-full flex justify-around pt-10 " >
            <div className="w-[90%] ">

                <h1 className="text-[#FFF] font-bold text-4xl 2xl:text-6xl border-l-[5px] border-[#00DFC0] pl-4 mb-4">Process We Follow</h1>

                <div className="flex gap-x-10 justify-between">
                    {processHtml[0]}
                    {processHtml[1]}
                    {processHtml[2]}
                    {processHtml[3]}
                </div>
                
                <div className="flex gap-x-10 justify-center mt-6">
                    {processHtml[4]}
                    {processHtml[5]}
                    {processHtml[6]}
                </div>

            </div>
        </div>
    )
}

export default OurProcess