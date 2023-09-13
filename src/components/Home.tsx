import backgroundImage from '../assets/handsHome.webp';
import About from './About';
import Button from './Button';
import Container from './Container';
import Navbar from './Navbar';

const Home = () => {
    return (
        <section className="bg-cover bg-center h-[252vh] max-md:h-fit" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Navbar />
            <Container>
                <div className="flex flex-col items-center justify-center w-fit h-screen ml-8  max-md:ml-0 max-md:text-center" style={{ height: "calc(100vh - 112px)" }}>
                    <h1 className="text-white font-normal max-w-[42rem]  text-7xl leading-tight mb-4 max-md:text-4xl max-sm:text-3xl">CREATION START BY MAKING A MESS.</h1>
                    <Button title='Sign Up' textColor='black' bgColor='white' />
                </div>
            </Container>
            <About />
        </section>
    )
}

export default Home