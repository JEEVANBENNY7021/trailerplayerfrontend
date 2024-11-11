import React from 'react';
import { Link } from 'react-router-dom';


const plans = [
  {
    title: "1-month plan",
    price: "$8.99",
    perMonth: "Per month",
    guarantee: "45-days money-back guarantee",
    imageUrl: "https://storage.googleapis.com/a1aa/image/2vdygXbM4SLKHFA2HTLCvm3hli1mlWZidfVOC0YVLcWXr93JA.jpg",
    buttonText: "GET THE DEAL"
  },
  {
    title: "12-month plan",
    price: "$4.99",
    perMonth: "Per month",
    save: "Save 63%",
    originalPrice: "$236.80",
    discountedPrice: "$83.00 for the first 2 years",
    guarantee: "45-days money-back guarantee",
    imageUrl: "https://storage.googleapis.com/a1aa/image/2vdygXbM4SLKHFA2HTLCvm3hli1mlWZidfVOC0YVLcWXr93JA.jpg",
    buttonText: "GET THE DEAL"
  },
  {
    title: "6-month plan",
    price: "$6.99",
    perMonth: "Per month",
    guarantee: "45-days money-back guarantee",
    imageUrl: "https://storage.googleapis.com/a1aa/image/2vdygXbM4SLKHFA2HTLCvm3hli1mlWZidfVOC0YVLcWXr93JA.jpg",
    buttonText: "GET THE DEAL"
  }
];

const LandingPage = () => (
  <div>
   <section 
  id="main1" 
  style={{ 
    margin: 0, 
    backgroundImage: 'url("https://preview.redd.it/new-fighter-poster-the-film-releases-in-one-month-set-to-be-v0-1694oij8hd8c1.jpeg?auto=webp&s=475385f31cefefe1905bb0cf25197f028b7ea899")', 
    backgroundSize: 'cover', 
    marginTop:"20px",
    paddingTop:"70px",
    backgroundPosition: 'center center' 
  }}
>
  <div className="content" style={{ textAlign: 'left', padding: '200px 50px' }}>
    <div className="new-releases" style={{ color: 'white', fontSize: '44px', fontWeight: 'bold', marginBottom: '10px' }}>
      NEW RELEASES
    </div>
    <div className="title" style={{ fontSize: '88px', fontWeight: 'bold', margin: 0 ,color:"black"}}>
    FIGHTER 
    </div>
    <Link to={'./home'}>
    <button 
      style={{
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Get Started
    </button></Link>
  </div>
</section>



    <section id="main2" style={{ width: '90%', margin: '0 auto', padding: '20px 0' }}>
      <div className="header" style={{ textAlign: 'left', marginBottom: '20px' }}>
        <div className="sub-title" style={{ color: 'red', fontSize: '14px', fontWeight: 'bold', marginBottom: '10px' }}>ONLINE STREAMING</div>
        <h1 style={{ fontSize: '36px', color: 'white', margin: 0 }}>Watch Trailer Shows Online</h1>
      </div>
      <div className="shows" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="show" style={{ width: '23%', position: 'relative' }}>
          <img src="https://cdn.cinematerial.com/p/297x/odhbdc65/the-last-breath-movie-poster-md.jpg?v=1719589994" alt="A couple dancing closely in a romantic scene" width="400" height="600" style={{ width: '100%', height: 'auto' }} />
          <div className="info" style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#fff' }}>
            <div className="genre" style={{ color: 'red', fontSize: '14px', fontWeight: 'bold' }}>ROMANCE, DRAMA</div>
            <div className="title" style={{ fontSize: '18px', fontWeight: 'bold', margin: '5px 0' }}>Thinking You</div>
            <div className="details" style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-play-circle" style={{ marginRight: '5px' }}></i>
              <span style={{ fontSize: '14px' }}>SEASON 1 - 2020</span>
            </div>
          </div>
        </div>
        <div className="show" style={{ width: '23%', position: 'relative' }}>
          <img src="https://m.media-amazon.com/images/I/91GIFwkdlvL.jpg" alt="A woman singing passionately on stage" width="400" height="600" style={{ width: '100%', height: 'auto' }} />
          <div className="info" style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#fff' }}>
            <div className="genre" style={{ color: 'red', fontSize: '14px', fontWeight: 'bold' }}>ROMANCE, DRAMA</div>
            <div className="title" style={{ fontSize: '18px', fontWeight: 'bold', margin: '5px 0' }}>Civil War</div>
            <div className="details" style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-play-circle" style={{ marginRight: '5px' }}></i>
              <span style={{ fontSize: '14px' }}>SEASON 1 - 2020</span>
            </div>
          </div>
        </div>
        <div className="show" style={{ width: '23%', position: 'relative' }}>
          <img src="https://posters.movieposterdb.com/24_07/2024/6263850/l_deadpool-wolverine-movie-poster_6befe4de.jpg" alt="Two women smiling and talking into a microphone" width="400" height="600" style={{ width: '100%', height: 'auto' }} />
          <div className="info" style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#fff' }}>
            <div className="genre" style={{ color: 'red', fontSize: '14px', fontWeight: 'bold' }}>ROMANCE, DRAMA</div>
            <div className="title" style={{ fontSize: '18px', fontWeight: 'bold', margin: '5px 0' }}>Popular Movie</div>
            <div className="details" style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-play-circle" style={{ marginRight: '5px' }}></i>
              <span style={{ fontSize: '14px' }}>SEASON 1 - 2020</span>
            </div>
          </div>
        </div>
        <div className="show" style={{ width: '23%', position: 'relative' }}>
          <img src="https://xl.movieposterdb.com/22_12/2022/15838850/xl_the-roundup-movie-poster_efc87135.jpg" alt="A man performing on stage with a microphone" width="400" height="600" style={{ width: '100%', height: 'auto' }} />
          <div className="info" style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#fff' }}>
            <div className="genre" style={{ color: 'red', fontSize: '14px', fontWeight: 'bold' }}>ROMANCE, DRAMA</div>
            <div className="title" style={{ fontSize: '18px', fontWeight: 'bold', margin: '5px 0' }}>Best Game</div>
            <div className="details" style={{ display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-play-circle" style={{ marginRight: '5px' }}></i>
              <span style={{ fontSize: '14px' }}>SEASON 1 - 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Main Section 3 */}
<section id="main3" style={{ textAlign: 'center', padding: '20px' }}>
  <div className="header" style={{ fontSize: '14px', color: '#888' }}>FIND ANYWHERE ELSE</div>
  <div className="title" style={{ fontSize: '36px', margin: '10px 0' }}>Web Series Shows For You</div>
  <div className="shows" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
    {/* Array of different images */}
    {[
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrByQUVn8kDM6d0kxsLVxeX_ACz7pbfC8-2Q&s",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd/2c7d21112473239.601502d49ff6e.jpg",
      "https://rukminim2.flixcart.com/image/850/1000/l0h1g280/poster/e/p/v/small-mirzapur-web-series-poster-multicolor-photopaper-print-12-original-imagc95deggdcjgd.jpeg?q=20&crop=false",
      "https://cdn.shopify.com/s/files/1/0760/9378/4381/files/undekhi--best-indian-crime-thriller-web-series-624454_480x480.jpg?v=1703676292",
      "https://m.media-amazon.com/images/M/MV5BMzllMWE4YTgtODM3OS00MGEyLWEwMjktNWQzZjFjNWNhMGNmXkEyXkFqcGc@._V1_.jpg",
      "https://image-resizer-cloud-cdn.api.aha.firstlight.ai/image/AF2AE020-DF31-4F7D-BD23-593BA91CFA6F/0-2x3.jpg?width=720"
    ].map((imageUrl, index) => (
      <div key={index} className="show" style={{ backgroundColor: '#222', borderRadius: '10px', overflow: 'hidden', width: '200px', margin: '10px', position: 'relative' }}>
        <img src={imageUrl} alt={`Show ${index + 1}`} width="200" height="300" style={{ width: '100%', height: 'auto' }} />
        <div className="overlay" style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '5px' }}>
          <span style={{ backgroundColor: '#000', color: '#fff', padding: '2px 5px', borderRadius: '3px' }}>1080</span>
          <span style={{ backgroundColor: '#000', color: '#fff', padding: '2px 5px', borderRadius: '3px' }}>HD</span>
        </div>
        <div className="score-circle" style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#0f0', padding: '5px', borderRadius: '50%', fontWeight: 'bold' }}>6.1</div>
        <div className="show-info" style={{ padding: '10px', textAlign: 'left' }}>
          <p className="duration" style={{ margin: '5px 0', color: '#888' }}>180 min, <span className="genre" style={{ fontWeight: 'bold', color: 'red' }}>DRAMA</span></p>
          <div className="title" style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>World Web series  Story</div>
          <div className="details" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <i className="fas fa-play-circle" style={{ color: 'white' }}></i>
            <span style={{ color: 'white' }}>SEASON 1 - 2022</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


    {/* Main Section 4 */}
    <section id='main4'>
      <div style={{textAlign:"center"}} className="container">
        <div className="heading" style={{ fontSize: '36px', margin: '20px 0' }}>Ready to Grab the deal?</div>
        <div className="plans" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {plans.map((plan, index) => (
            <div className="plan" key={index} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', width: '300px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <i className="fab fa-youtube" style={{ fontSize: '64px', color: 'red', marginRight: '10px' }}></i>
              <h2 style={{ fontSize: '24px', margin: '10px 0' }}>{plan.title}</h2>
              <div className="price" style={{ fontSize: '36px', margin: '10px 0',color:"black" }}>{plan.price}</div>
              <div className="per-month" style={{ fontSize: '18px', marginBottom: '20px' }}>{plan.perMonth}</div>
              {plan.save && <div className="save" style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '5px 10px', borderRadius: '5px', fontSize: '14px', marginBottom: '10px' }}>{plan.save}</div>}
              {plan.originalPrice && (
                <div className="original-price" style={{ textDecoration: 'line-through', color: 'black', fontSize: '14px' }}>{plan.originalPrice}</div>
              )}
              {plan.discountedPrice && (
                <div className="discounted-price" style={{ fontSize: '14px', color: 'black' }}>{plan.discountedPrice}</div>
              )}
              <button className="deal-button" style={{ background: 'red', color: 'white', padding: '15px', border: 'none', borderRadius: '5px', fontSize: '18px', cursor: 'pointer', marginBottom: '20px' }}>
                {plan.buttonText}
              </button>
              <div className="guarantee" style={{ fontSize: '14px', color: 'green' }}>
                <i className="fas fa-lock"></i> {plan.guarantee}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section id='main5'>
  <div className="header" style={{ textAlign: 'center', padding: '50px 0' }}>
    <h1 style={{ fontSize: '36px', margin: '0' }}>Start for your first 30 days.</h1>
    <p style={{ fontSize: '18px', margin: '10px 0 20px' }}>Ready to watch? Enter your email to create or restart your membership.</p>
    <div className="email-input" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
      <input type="email" placeholder="Type your e-mail address" style={{ padding: '10px', fontSize: '16px', border: 'none', borderRadius: '5px', width: '300px', marginRight: '10px' }} />
      <button style={{ padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#e50914', color: '#fff', cursor: 'pointer' }}>GET STARTED</button>
    </div>
  </div>

  <div className="footer" style={{ backgroundColor: '#111', padding: '20px 0' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <div className="column" style={{ flex: 1, minWidth: '200px', margin: '10px' }}>
        <h3 style={{ color: '#e50914', fontSize: '18px', marginBottom: '10px' }}>Questions? Call 0850-380-6444</h3>
        <p style={{ fontSize: '14px' }}>Format for custom post types that are not book or you can use else if to specify a second post type the same way as above.</p>
      </div>
      <div className="column" style={{ flex: 1, minWidth: '200px', margin: '10px' }}>
        <h3 style={{ color: '#e50914', fontSize: '18px', marginBottom: '10px' }}>PLAY SHOW</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Play Show</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Devices</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Tips</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Legal Notices</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Our Terms</a></li>
        </ul>
      </div>
      <div className="column" style={{ flex: 1, minWidth: '200px', margin: '10px' }}>
        <h3 style={{ color: '#e50914', fontSize: '18px', marginBottom: '10px' }}>SUPPORT</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Help Center</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>FAQ</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Account</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Media Center</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Support</a></li>
        </ul>
      </div>
      <div className="column newsletter" style={{ flex: 1, minWidth: '200px', margin: '10px' }}>
        <h3 style={{ color: '#e50914', fontSize: '18px', marginBottom: '10px' }}>NEWSLETTER</h3>
        <p style={{ fontSize: '14px' }}>Format for custom post types that are not book or you can use else if to specify a second post type the same way as above.</p>
        <input type="email" placeholder="Enter Your Email" style={{ padding: '10px', fontSize: '16px', border: 'none', borderRadius: '5px', width: '200px', marginRight: '10px' }} />
        <button style={{ padding: '10px 20px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#e50914', color: '#fff', cursor: 'pointer' }}>SUBMIT NOW</button>
      </div>
    </div>
    <div className="language-selector" style={{ textAlign: 'center', marginTop: '20px' }}>
      <select style={{ padding: '10px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: '#333', color: '#fff' }}>
        <option>English</option>
        {/* Add other languages as needed */}
      </select>
    </div>
  </div>
</section>
  </div>

  
);

export default LandingPage;
