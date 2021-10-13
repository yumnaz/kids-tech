import react from 'react';
import './Section_2.css';


function Section_2() {
    return (
        <div>
            <div className="section">
                <h1>Learning That’s Tailored to Them</h1>                            
            </div>       
        <div style={{display:"flex", justifyContent:"center"}}>
            <div className="column">
                <img src = "https://static.outschool.com/master/public/images/explore-any-interest.f3f6e5e34935ea22159658bd77e0bf76.png" width="80%"/>
                <div>
                    <h2>Any Kid, Any Interest</h2>
                    <p>Outschool engages and inspires learning through a wide variety of classes and subjects so learners can dive deeper into their favorite interests.</p>
                </div>
            </div>
            <div className="column">
                <img src = "https://static.outschool.com/master/public/images/learn-with-peers.a1f3d0894b01282c784f8ca998fd5f93.png" width="80%"/>
                <div style={{textAlign:"center"}}>
                    <h2>Small and Social</h2>
                    <p>Our live, small-group format encourages social interactions and builds learner friendships.</p>
                </div>
            </div>
            <div className="column">
                <img src = "https://static.outschool.com/master/public/images/inspiring-teachers.4458a1c753b13da169c397d396dd866e.png" width="80%"/>
                <div>
                    <h2>Educators You Can Trust</h2>
                    <p>We’ve been providing online classes taught by safe, vetted, and experienced teachers since 2015</p>
                </div>
            </div>
        </div>

        </div>
    );
  }

  export default Section_2;