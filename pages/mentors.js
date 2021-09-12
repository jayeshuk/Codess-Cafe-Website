
import Card from '../components/card'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';

const Mentor=()=> {

    const mentors_r1 = [
        {
            name:"Aarnav Jindal",
            image:"https://codess.cafe/images/mentor/14.jpg",
            position:"SDE",
            company:"Cure.Fit",
            education:"Founder, Codess.Cafe"
        },
        {
            name:"Aditi Aggrawal",
            image:"https://codess.cafe/images/mentor/8.jpg",
            position:"SDE intern",
            company:"Goldman Sachs",
            education:"IT, Delhi Technological University"
        },
        {
            name:"Aeshna Jain",
            image:"https://codess.cafe/images/mentor/6.jpg",
            position:"SDE intern",
            company:"Microsoft",
            education:"IT, Indira Gandi Delhi Technological University for Women"
        },
        {
            name:"Aiman Siddiqua",
            image:"https://codess.cafe/images/mentor/0.jpg",
            position:"SDE Intern",
            company:"Amazon",
            education:"MCE, Delhi Technological University"
        },
        {
            name:"Akanksha Tanwar",
            image:"https://codess.cafe/images/mentor/2.jpg",
            position:"SDE intern",
            company:"Microsoft",
            education:"IT, Delhi Technological University"
        },
        {
            name:"Chitra Singla",
            image:"https://codess.cafe/images/mentor/1.jpg",
            position:"SDE intern",
            company:"Amazon",
            education:"CSE, Delhi Technological University"
        },
        {
            name:"Deepti Aggarwal",
            image:"https://codess.cafe/images/mentor/9.jpg",
            position:"SDE",
            company:"Microsoft",
             education:"CSE, Delhi Technological University"
        },
        {
            name:"Joshika",
            image:"https://codess.cafe/images/mentor/4.jpg",
            position:"SDE",
            company:"Morgan Stanley",
            education:"CSE, Indian Institute Of Technology, Patna"
        },
        {
            name:"Kirti Dabas",
            image:"https://codess.cafe/images/mentor/10.jpg",
            position:"SDE Intern",
            company:"Google",
            education:"CSE, Delhi Technological University"
        },
        {
            name:"Krati Garg",
            image:"https://codess.cafe/images/mentor/7.jpg",
            position:"SDE Intern",
            company:"Google",
            education:"CSE, Delhi Technological University"
        },
        {
            name:"Ojasvi Tyagi",
            image:"https://codess.cafe/images/mentor/11.jpg",
            position:"SDE intern",
            company:"Uber",
            education:"CSE, Indira Gandhi Delhi Technological University for Women"
        },
        {
            name:"Prachi Singhal",
            image:"https://codess.cafe/images/mentor/3.jpg",
            position:"SDE intern",
            company:"VMWare",
            education:"CSE, Mody University"
        },
        {
            name:"Radhika Patwari",
            image:"https://codess.cafe/images/mentor/12.jpg",
            position:"SDE Intern",
            company:"Google",
            education:"CSE, Indian Institute Of technology, Khadagpur"
        },
        {
            name:"Sangeeta Mishra",
            image:"https://codess.cafe/images/mentor/13.jpg",
            position:"SDE Intern",
            company:"Google",
            education:"Chemical, Indian Institute Of Technology-BHU"

        },
        {
            name:"Sanskriti Singhal",
                            image:"https://codess.cafe/images/mentor/5.jpg",
                            position:"SDE Intern",
                            company:"Google",
                            education:"SE, Delhi Technological University"
        }
    ]
return (

    <div>
        <div>
           <h1 className="text-center">Mentors</h1>
           <div id = "bb"></div>
            <div className="top-img">
                <Image 
                    src="/undraw_Dev_focus_re_6iwt.png"
                    height={400}
                    width={650}
                    alt="Women-logo"
                />
            </div>
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
                <div className="mentor-grid">
                   
                 
                    { mentors_r1.map(mentor => (
                         
                                <Card mentor={mentor}/>
                            
                    ))
                    }
                    
                </div>
        </div>
        <style jsx>{`
           h1{
           
               margin-bottom:0px;
               margin-block-start: 0;
    margin-block-end: 0;
    font-size:40px;
           }
           .mentor-grid{
               padding:50px;
               margin-bottom:7%;
               display: grid;
	grid-template-columns: 30% 30% 30%;
	grid-gap: 1% 5%;
           }
           #bb{
               border-bottom:7px solid #1E90FF;
               width: 90px;
             margin-left:47%;
               
           }
           .top-img{
               text-align:center;
           }
           .spinner {
               margin: 10px auto 0;
               width: 130px;
               text-align: center;
             }
             
             .spinner > div {
               width: 28px;
               height: 28px;
               background-color: #1E90FF;
             
               border-radius: 100%;
               display: inline-block;
               -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
               animation: sk-bouncedelay 1.4s infinite ease-in-out both;
             }
             
             .spinner .bounce1 {
               -webkit-animation-delay: -0.32s;
               animation-delay: -0.32s;
               margin-right:15px;
             }
             
             .spinner .bounce2 {
               -webkit-animation-delay: -0.16s;
               animation-delay: -0.16s;
               margin-right:15px;

             }
             
             @-webkit-keyframes sk-bouncedelay {
               0%, 80%, 100% { -webkit-transform: scale(0) }
               40% { -webkit-transform: scale(1.0) }
             }
             
             @keyframes sk-bouncedelay {
               0%, 80%, 100% { 
                 -webkit-transform: scale(0);
                 transform: scale(0);
               } 40% { 
                 -webkit-transform: scale(1.0);
                 transform: scale(1.0);
               }
             }
       `}</style>
    </div>
)}

export default Mentor;