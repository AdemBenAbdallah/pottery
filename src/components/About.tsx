import girl from '../assets/girl.svg'
import section1 from '../assets/section1.svg'
import section2 from '../assets/section2.svg'

const About = () => {
    return (
        <div className="mx-auto xl:px-20 md:px-10 mt-12">
            <section className="h-screen max-md:h-fit md:h-auto flex relative max-md:bg-white">
                <div className='w-[7%] h-screen bg-transparent max-md:hidden'></div>
                <div className="bg-white w-full h-[41.3125rem] max-md:h-fit max-md:flex max-md:gap-2">
                    <img
                        className='max-w-[19.6875rem] absolute left-0 top-[-3rem] max-lg:w-[9rem] max-md:static transform max-md:translate-y-[-7rem] max-sm:ml-1'
                        src={girl}
                        alt="girl"
                    />
                    <div className="transform translate-x-[18rem] max-lg:translate-x-[13rem] translate-y-[10rem] max-md:transform-none max-md:p-1 font-habib w-2/3">
                        <h1 className="md:text-6xl text-6xl mb-4 max-md:text-4xl max-md:mt-3">Alice Habibi</h1>
                        <p className="max-w-[35rem] max-md:text-sm ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>
            <div className="w-full sm:w-5/6 flex gap-11 max-md:gap-5 max-md:px-4 max-md:py-2 max-md:items-center transform translate-y-[-11rem] max-md:transform-none bg-white relative left-0 right-0">
                <div className='w-[24rem] bg-[#474747B2] flex flex-col font-habib px-3 max-2xl:hidden'>
                    <p className='text-white text-2xl leading-normal tracking-tight mt-6'>In Studio</p>
                    <p className='text-white leading-loose tracking-widest'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <img src={section1} alt='image seaction 1' className='w-[24rem] max-md:w-[15rem] max-sm:w-[9rem]' />
                <img src={section2} alt='image seaction 2' className='w-[24rem] max-md:w-[15rem] max-sm:w-[9rem]' />
            </div>
        </div>
    )
}

export default About