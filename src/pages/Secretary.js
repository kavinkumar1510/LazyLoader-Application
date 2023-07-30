import React from 'react'
import './ExecutiveDirector.css'
import SecretaryImg from '../images/mkcesecretaryimg.jpg';
function Secretary() {
    return (
        <div>
            <div>
                <br></br>
                <img className='eximg' src={SecretaryImg} alt="Secretary" />
                
            </div>
            <h1 className='head'>Dr.K.Ramakrishnan
                </h1>
                <br></br>
            <p className='executivedirector'>Dr.K.Ramakrishnan, son of Chairman M.Kumarasamy, a vibrant person filled with dynamism, is a shining and definite role model for the budding engineers of this institution. A Production Engineer with B.E degree from Annamalai University,Tamil Nadu. He was brought up with a vision to make this rural pocket, as a hub of technocrats. His ardent faith in discipline and hard work has been winning him success one after the other in all his ventures. 
                <br></br>
                As an accomplisher, he is a role model not only to his administrative staff and faculty members but also to his students as well. Being a sports person, he wanted to hone the interest of the students in sports by providing state of the art infrastructure facilities in the campus.
                <br></br>
                The college, under his administration has also signed two other MOUs with prominent local industrial establishments. His matchless interest in imparting quality-engineering education elevated the college to a prominent position among the several engineering colleges in Tamilnadu..</p>


        </div>


    )
}
export default Secretary