import React from 'react'
import './ExecutiveDirector.css'
import PrincipalImg from '../images/mkceprincipalimg3.jpg';

function Principal() {
    return (
        <div>
            <br></br>
            <div>
                <img className='eximgp' src={PrincipalImg} alt="Principle" />

            </div>
            <br></br>
            <h1 className='head'>
                Dr.N.Ramesh Babu
            </h1>
            <br></br>
            <p className='principal'> Dr.N.Ramesh Babu has more than 17 years of teaching experience in various reputed institutions/universities.He has actively participated in all the academic and administrative activities at various levels and produced successful result in academia and research.He has completed his Bachelor's degree in Bannari Amman Institute of Technology (Bharathiyar University) and Master’s degree in Govt. Institute of Technology (Anna University). He completed his Ph. D degree from VIT University.<br></br> He has authored and coauthored more than 50 publications in reputed International Journals (SCI & Scopus Indexed Journals) like IEEE Transactions, Applied Energy, Renewable & Sustainable Energy Reviews, Energy Conversion & Management etc. and conferences.

            He is a member of IEEE, IAENG and CSI.He has served as Conference organizer, session chair, Technical Program Committee, reviewer of many reputed journals including IEEE/Elsevier/Springer etc.

            His research area includes Signal Processing, Control, Estimation & forecasting and Application of Soft Computing techniques in Electrical/Electronics/Instrumentation Engineering.</p></div>
    )


}


export default Principal