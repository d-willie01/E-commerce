import React from 'react';
import './Home.css'
import Product from './Product';

function Home(props) {
    return (
        <div className='home'>
            
            <div className='home_container'>
            <img
            className='home_image'
            src="https://static.vecteezy.com/system/resources/previews/002/832/050/non_2x/light-blue-background-in-polygonal-style-colorful-illustration-with-gradient-rectangles-and-squares-best-design-for-your-ad-poster-banner-vector.jpg"
            />

            <div className="home_row">
                <Product 
                title="Puff Powder"
                price={39.99}
                image="https://i.ebayimg.com/images/g/bO4AAOSwNJBhSIoM/s-l300.jpg"
                rating={5}
                />
                <Product
                title ="Phoenix Bando, exclusive Louis Voiotton Version"
                price ={1256.99}
                rating ={2}
                image="https://i1.sndcdn.com/artworks-000624693934-bmwnot-t500x500.jpg"/>
                
                {/* Product */}
        

            </div>
            <div className="home_row">
            <Product
            title ="Candy straight from down South the legit way. No cheating here bro we go all out"
            price ={4.99}
            rating ={4}
            image="https://m.media-amazon.com/images/I/81Qo6s8gSpL.jpg"
            />
            <Product
            title ="THE Tickets, get the low low deal here yo"
            price ={400}
            rating ={5}
            image="https://cdn.vox-cdn.com/thumbor/UXxyKT2xnopHys7i-Xzk329PF7E=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13725806/usa_today_10587594.jpg"
            />
            <Product
            title ="Spider-Man lifesize costume. Limited Peter Parker edition (web shooter sold seperately)"
            price ={15.99}
            rating ={3}
            image="https://media.gamestop.com/i/gamestop/11203261_ALT03/Jazwares-Marvel-Spider-Man-Qualux-Adult-Costume-Standard"
            />

        

            </div>
            <div className="home_row">
                
            <Product
            title ="MJ's basketball, nuff said."
            price ={200000.00}
            rating ={5}
            image="https://cdn.vox-cdn.com/thumbor/TAsMWMOiGDMc1EkLtgmz2dnSyJg=/0x0:3180x2117/1200x800/filters:focal(1905x366:2413x874)/cdn.vox-cdn.com/uploads/chorus_image/image/69758714/usa_today_15517167.0.jpg"
            />
                
        

            </div>
            
            </div>
            
       
       
        </div>
    );
}

export default Home;