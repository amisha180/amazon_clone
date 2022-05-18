import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img className = "home__image" src="https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_.jpeg" alt="banner" />
    
    {/* Product- id,title,rating,price,image */}

    <div className="home__row">
    <Product
        id="123451"
        title = "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover"
        price={15}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
    
    
    />
     <Product
        id="123452"
        title = "Lifelong LLMG45 Power Pro 500-Watt Mixer Grinder with 3 Jars (Liquidizing, Wet Grinding and Chutney Jar), Stainless Steel blades, 1 Year Warranty"
        price={39}
        rating={4}
        image="https://cdn.shopify.com/s/files/1/0569/6883/9344/products/MixerGrindersJuicersSA4030PLUS_1200x1200.jpg?v=1631782584"
    
    
    />
     <Product
        id="123453"
        title = "Insignia 42-inch Class F20 Series Smart Full HD 1080p Fire TV (NS-42F201NA22, 2021 Model)"
        price={215}
        rating={3}
        image="https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$2160_1728_PNG$"
    
    
    />
    </div>
    
    <div className="home__row">
    <Product
        id="123454"
        title = "Fossil Men's Nate Stainless Steel Quartz Chronograph Watch"
        price={69}
        rating={5}
        image="https://m.media-amazon.com/images/I/71UXbfMHImS._UY445_.jpg"
    
    
    />
     <Product
        id="123455"
        title = "Ortizan Portable Bluetooth Speaker, IPX7 Waterproof Wireless Speaker with 24W Loud Stereo Sound, Outdoor Speakers with Bluetooth 5.0, 30H Playtime,66ft Bluetooth Range, Dual Pairing for Home"
        price={320}
        rating={4}
        image="https://www.reliancedigital.in/medias/Amazon-B07P9B3W1G-Computer-Speakers-491600506-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzk0Njd8aW1hZ2UvanBlZ3xpbWFnZXMvaDYxL2hhMi85MjE2NjYzOTc4MDE0LmpwZ3xjN2UyOTIyOTA0ZjAyZGEyYmMxMjcwNzIxNGNhMDUwN2E3MzU3ODg5YmRhN2M0NGU3YjQ5ZjRmNDA1NjZiZWZj"
    
    
    />
     <Product
        id="123456"
        title = "Samsung Electronics Galaxy Tab S7+ Wi-Fi, Mystic Navy - 256 GB"
        price={800}
        rating={4}
        image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126635000"
    
    
    />
    </div>
    {/* Product */}
    <div className="home__row">
    <Product
        id="123457"
        title = "BLACK+DECKER 14,000 BTU Portable Air Conditioner with Heat and Remote Control, White"
        price={670}
        rating={5}
        image="https://images.indianexpress.com/2014/05/energia-grey-dynamic-1.jpg"
    
    
    />
    </div>
    </div>


    
  )
}

export default Home
