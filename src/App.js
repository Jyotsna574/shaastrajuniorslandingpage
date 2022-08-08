import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
     <body className='Body'>
    <div>
      <Header />
      <div className='firstpage'>
        <div className='firsttext'><h1>SHAASTRA <br></br>JUNIORS 2022</h1></div>
        <div className='datetext'><h3>- January 5-8 -  </h3></div>

          <div className='scrolldown'><p>scroll down kidss </p>
          </div>
      </div>
    
      <div className='stats'>
      <div className='statsimg'><img src='https://cdn3d.iconscout.com/3d/premium/thumb/3d-dimension-5360081-4492267.png'></img></div>
        <div className='textimg>'>
          <div className='statnum'>
          <p>10+ &nbsp; &nbsp; &nbsp; 250+ &nbsp; &nbsp; &nbsp;20+</p></div>
        <div className='statname'>
          <p>Events &nbsp; &nbsp; &nbsp; &nbsp;  Students &nbsp; &nbsp; &nbsp; &nbsp;  Schools</p></div>
          </div>
      </div>
      <div className='highlights'>
      <h1>EVENT HIGHLIGHTS</h1>
      <div className='event1'></div>
      <div className='event2'></div>
      <div className='event3'></div>
      <div className='event4'></div>
      </div>

      <div className='sponsors'>
      <div className='sponstitle'>
      <h1>SPONSORS</h1></div>
      <img src='./public./company-tata-motors-india-electric-blue.jpg'></img></div>
      </div>

      <div className='aboutus'>
      <div className='aboutheading'>
        <h1>ABOUT US</h1></div>
      <div className='aboutpara'>
      <p>lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit.  Enim pellentesque sit gravida enim sed.sit ipsum cum amet elementum facilisis dignissim vulputate est mollis. In ipsum et nam eleifend fames purus. Sapien venenatis, tortor pharetra, ipsum, venenatis, cras nulla. Enim, dapibus morbi quam duis lectus. Tincidunt purus iaculis nulla nec aliquet quis ligula sit orci. Tincidunt purus iaculis nulla nec aliquet quis ligula sit orci."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </div>
      </div>

      <div className='contactus'>
        <div className='contacttitle'>
        <h1>CONTACT US</h1></div>
        <div className='conimg'><img src='./img3d.png'></img></div>
        <div className='cards'>
        <div className='contact1'><h2>samay raina </h2> <br></br> <h2>9293949596</h2></div>
        <div className='contact2'><h2>suresh raina </h2> <br></br> <h2>9293949596</h2></div>
        </div>
        <Footer />

      </div>

     </body>
  );
}

export default App;
