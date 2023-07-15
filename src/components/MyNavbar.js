import React from 'react';

const MyNavbar = () => {
    return ( 
        <div>
        <nav className="navbar navbar-dark navbar-expand-sm fixed-top" style= { {backgroundColor: "#bd5d38"}}>
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"> </span>
            </button>
         
           <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><a className="nav-link" href="/"><span className="fa fa-home fa-lg"></span> About </a></li>
                    <li className="nav-item"><a className="nav-link" href="/academics"><span className="fa fa-list fa-lg"></span> Academics</a></li>
                    <li className="nav-item"><a className="nav-link" href="/technicalskills"><span className="fa fa-list fa-lg"></span>Technical skills</a></li>
                    <li className="nav-item"><a className="nav-link" href="/projects"><span className="fa fa-info fa-lg"></span> Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="/achievements"><span className="fa fa-info fa-lg"></span> Achievements</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contactme"><span className="fa fa-address-card fa-lg"></span> Contact Me</a></li>
                 </ul>    
            </div> 
        </div>

    </nav>
    </div>
     );
}
 
export default MyNavbar;