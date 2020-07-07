import React, { useEffect } from 'react'
import './layout.scss'
import './header.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'gatsby'

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const Header = () => { 
    useEffect(() => {
        window.onscroll = function() {myFunction()};
        // Get the header
        var header = document.getElementById("myHeader");
        // Get the offset position of the navbar
        var sticky = header.offsetTop;
        // Get the offset for Y position
        var prevScrollpos = window.pageYOffset;
        
        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        // While scrolling down, hide header, when scroll up, show header.
        function myFunction() {
            var currentScrollPos = window.pageYOffset;
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("myHeader").style.top = "0";
            } else {
                document.getElementById("myHeader").style.top = "-50px";
            }
            prevScrollpos = currentScrollPos;
        }
    });
    
    return (
        <div className = "headerSection">
            <header class = "SiteHeader" id = "myHeader" style = {{
                background: 'rgb(74, 78, 102)',
                padding: `0.2rem`,
            }}>
                <div class="InsideLinks">

                    <div>
                        <mark class="number"> I. </mark> <Link to = "/#indexID"> Home </Link>
                    </div>

                    <div>
                        <mark class="number"> II.  </mark> <Link to = "/#aboutID"> About </Link>
                    </div>

                    <div>
                        <mark class="number"> III. </mark>  <Link to = "/#portfolioID"> Portfolio </Link>
                    </div>

                    <div>
                        <mark class="number"> IV. </mark> <Link to = "/#contactID"> Contact </Link>
                    </div>

                    <div>
                        <button class="Resume_Button">
                            <a class = "Resume_Button" href = "Resume.pdf" target = "_blank" rel = "noopener noreferrer"> Resume </a>
                        </button>
                    </div>
                </div>

                <div class="OutsideLinks">     

                    <div>
                        <a href="https://github.com/anirudhahuja" target = "_blank" rel = "noopener noreferrer"> 
                            <FaGithub color = 'white' size = '1em'/> 
                        </a>
                    </div>

                    <div>
                        <a href="https://www.linkedin.com/in/anirudhahuja/" target = "_blank" rel = "noopener noreferrer"> 
                            <FaLinkedin color = 'white' size = '1em'/> 
                        </a>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header