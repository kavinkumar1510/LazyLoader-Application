import React from 'react'
import './ExecutiveDirector.css'
import ExecutiveDirectorImg from '../images/mkcechairmanimg.jpg';
function ExecutiveDirector() {
    return (
        <div>
            <br></br>
            <div>
                <img className='eximg' src={ExecutiveDirectorImg} alt="ExecutiveDirector" />
            </div>
            <h1 className='head'>Thiru.M.Kumarasamy</h1>
            <br></br>
            <p className='executivedirector'>Thiru.M.Kumarasamy, an illustrious septuagenarian, Chairman of M.Kumarasamy College of Engineering is a philanthropist, popularly known to the people of this region as Maniyakar was a Munisif of Thalavapalayam Village, for more than a score of years. During his tenure as Munisif of this village several community projects were programmed and implemented by him successfully.
                <br></br>
                MKCE which got materialised in year 2000 is a dream project of Thiru.M.Kumarasamy, Chairman. His love and devotion for the college is next only to agriculture, transport operation and poultry farming. His philanthropic mind is exemplified by putting up a technical institution to help the rural student in getting Engineering education at an affordable expense and augment the employability among the rural students.The Chairman Thiru.M.Kumarasamy is the kingpin of the institution striving hard for the growth and stupendous development.</p>
        </div>
    )
}

export default ExecutiveDirector