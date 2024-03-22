import Skill from "./Skill.jsx";

const image_l = require('../assets/img/things-dec-l.png')
const image_r = require('../assets/img/things-dec-r.png')
const image_1 = require('../assets/img/things-item-1.png')
const image_2 = require('../assets/img/things-item-2.png')
const image_3 = require('../assets/img/things-item-3.png')


const About = ({ isMobile }) => {
   return (<>
      {/* about me  */}
      <section id="about" className={`md:scale-125 translate-y-16 md:translate-y-0`} style={{ marginTop: 200 }} >
         <div className={`max-h-[3000px] mb-[200px] md:mb-[400px]`}>
            {/* dec  */}
            <div className="things__dec">
               <img className="mx-auto" src={image_l} alt="illustration of leaf" />
            </div>
            {/* heading  */}
            <h2 className="text-center" id="aboutme">About me</h2>
            {/* item 1  */}
            <div className={`things__item`} >
               {/* img  */}
               <img src={image_1} alt="illustratio" />
               {/* text  */}
               <div className="things__item--heading dot" >
                  <h3>EDUCATION</h3>
                  <p>
                     Graduated at HAUI
                  </p>
                  <p>
                     GPA: 2.95
                  </p>
               </div>
            </div>
            {/* item 2  */}
            <div className="things__item">
               {/* img  */}
               <img src={image_2} alt="illustratio" />
               {/* text  */}
               <div className="things__item--heading">
                  <h3>PROS</h3>
                  <div>
                     <ul>
                        <li>Good teamwork skills</li>
                        <li>Willing to learn new technology</li>
                        <li>Quickly apply, high initiative in work </li>
                     </ul>
                  </div>
               </div>
            </div>
            {/* item 3  */}
            <div className="things__item">
               {/* img  */}
               <img src={image_3} alt="illustratio" />
               {/* text  */}
               <div className="things__item--heading">
                  <h3>EXPERIENCES</h3>
                  <div>
                     <ul>
                        <li>Intern at Twinger.JSC </li>
                     </ul>
                  </div>
               </div>
            </div>
            {/* dec  */}
            <div className="things__dec">
               <img className="md:mx-auto" src={image_r} alt="illustration of leaf" />
            </div>
            <Skill />
         </div>
      </section>
   </>);
}

export default About;