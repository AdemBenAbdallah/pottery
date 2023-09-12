import backgroundImage from '../assets/footer.png'
import Container from "./Container"

const Footer = () => {
    return (
        <section className="bg-cover bg-center h-screen relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Container>
                <div className="w-[19rem] h-[34rem] bg-white absolute bottom-0 p-12 flex flex-col gap-4">
                    <h3 className='mt-2'>Contact</h3>
                    <div className="mt-3 font-habib">
                        <h4>Alice Habibi</h4>
                        <p>1524 541 245</p>
                        <p>clay more,whahington</p>
                        <p>88605</p>
                    </div>
                    <div className="mt-3">
                        <p>aliceHabub@playdirt.com</p>
                        <p>(2544) 124 453</p>
                    </div>
                    <button
                        className={`bg-[#000000B2] text-white py-2 px-4 self-start max-md:self-center mt-12`}
                    >
                        SignUp
                    </button>
                </div>
            </Container>
        </section>
    )
}

export default Footer