import React from 'react';
import Product from './Product';
import "./Home.scss";

function Home() {
    return (
        <div className="home">
            <div className="home_container">

                {/* Jack Ryan image */}
                <img className="home_image" src="https://live.staticflickr.com/65535/51114347190_ea28a6dde8_k.jpg" alt="amazon-prime-banner" />
                
                {/* product cards */}
                <div className="home_row">

                    <Product className="product_card"
                        id="645787721"
                        title="Nike Pg 4 Pcg Mens Basketball Shoe Cz2240-900 Black"
                        image="https://live.staticflickr.com/65535/51112759012_bf569e1878_k.jpg"
                        price={184.99}
                        rating={5}
                     />

                    <Product
                        id="654783920"
                        title="Fujifilm X-T10 Body Black Mirrorless Digital Camera"
                        image="https://live.staticflickr.com/65535/51114112050_c9b2e5bc68_k.jpg"
                        price={799.99}
                        rating={4}
                     />

                    <Product
                        id="654783920"
                        title="Apple Watch Series 3 Space Gray Aluminum Case, Black Sport Band"
                        image="https://live.staticflickr.com/65535/51113136249_13ae53cca0_k.jpg"
                        price={209.99}
                        rating={4}
                     />

                    <Product
                        id="654783920"
                        title="Xbox Core Controller - Robot White"
                        image="https://live.staticflickr.com/65535/51113294153_2a17cfc6e9_k.jpg"
                        price={51.99}
                        rating={4}
                     />

                </div>
                
                {/* product cards */}
                <div className="home_row">

                    <Product
                        id="345654289"
                        title="NIKE Sportswear H86 Futura Cap"
                        image="https://live.staticflickr.com/65535/51113435386_3ee3d58456_z.jpg"
                        price={37.99}
                        rating={4}
                     />

                    <Product
                        id="845254267"
                        title="Oakley Men's Oo9340 Trillbe X Circular Sunglasses"
                        image="https://live.staticflickr.com/65535/51113355828_d7986d7185.jpg"
                        price={166.99}
                        rating={1}
                     />           
                     
                    <Product
                        id="345654289"
                        title="Prada Men's Croc-Embossed Leather Oxfords, Royal (Blue)"
                        image="https://live.staticflickr.com/65535/51114250575_8312af7f3f_z.jpg"
                        price={499.99}
                        rating={5}
                     />

                    <Product
                        id="345654289"
                        title="Kattee Leather Briefcase 15.6 Laptop Bag Messenger Bags"
                        image="https://live.staticflickr.com/65535/51112911292_f1fc7ab03e.jpg"
                        price={209.99}
                        rating={5}
                     />

                </div>
                
                {/* product cards */}
                <div className="home_row">
                    
                <Product
                        id="645787721"
                        title="King Will 8mm Men Black Tungsten Ring Matte Finish Beveled Polished"
                        image="https://live.staticflickr.com/65535/51114271285_4ac6f22f97_h.jpg"
                        price={39.99}
                        rating={3}
                     />

                    <Product
                        id="654783920"
                        title="2020 Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray"
                        image="https://live.staticflickr.com/65535/51114282195_abd58dfbc0.jpg"
                        price={1179.99}
                        rating={5}
                     />

                    <Product
                        id="654783920"
                        title="New Apple iPhone 12 Pro Max (512GB, Silver)"
                        image="https://live.staticflickr.com/65535/51113514291_6f311c1553_b.jpg"
                        price={999.99}
                        rating={4}
                     />

                    <Product
                        id="654783920"
                        title="PlayStation 5 Standard Edition - Blu-ray | Disk edition"
                        image="https://live.staticflickr.com/65535/51113531346_c65724d8ce.jpg"
                        price={499.99}
                        rating={4}
                     />

                </div>

            </div>
        </div>
    )
}

export default Home;
