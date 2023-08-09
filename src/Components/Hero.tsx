
const Hero: React.FC = () => {
    return (
        <div className="bg-[#334A5C] w-full flex justify-around ">
            <div id="Hero" className="w-[90%] flex justify-center items-center">


                <div className="w-[50%] h-full bg-[url(/HeroImgs/bg.webp)] bg-no-repeat bg-contain flex flex-col justify-center">
                    <h1 className="text-[#00DFC0] text-2xl 2xl:text-4xl font-bold mb-4 ">Transforming Visions into Reality</h1>
                    <p className="text-[#D8E0E1] text-sm 2xl:text-lg max-w-[90%] mb-10 ">At <span className="text-[#00DFC0] font-bold">ProTechies</span>, we create transformative digital solutions. Our expert developers craft seamless web applications, powerful mobile experiences, and groundbreaking software tailored to your needs. Embrace the future of technology with us!</p>
                    <h1 className="bg-[#00DFC0] w-fit px-6 py-2 text-xl 2xl:text-3xl rounded-2xl font-bold " >Contact Us</h1>
                </div>

                <img src="/HeroImgs/HeroMainImg.webp" alt="HeroMainImg" className="w-[50%] h-[90%]" />

            </div>
        </div>
    )
}

export default Hero