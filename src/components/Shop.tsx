import backgroundImage from '../assets/background.png'
import shop1 from '../assets/shop1.png'
import shop2 from '../assets/shop2.png'
import shop3 from '../assets/shop3.png'
import shop4 from '../assets/shop4.png'
import shop5 from '../assets/shop5.png'
import shop6 from '../assets/shop6.png'
import Container from './Container'

const Shop = () => {
    const shopImage = [shop1, shop2, shop3, shop4, shop5, shop6]

    return (
        <section style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Container>
                <div className="className='bg-cover bg-center w-full flex gap-32 max-md:gap-6 flex-wrap justify-center py-10">
                    {shopImage.map((image) => (
                        <img key={image} src={image} alt='image' className='max-md:w-[8rem]' />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Shop