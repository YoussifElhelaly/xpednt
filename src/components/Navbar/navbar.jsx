import { Link } from "react-router-dom";

// import headerImg from '../../assets/media/b2jjln5g/2024-01-loupes-lights-page-header.jpg'
import logo from '../../img/landing/logo.png'
import PDImg from '../../assets/media/onwft3k0/dental_header_010eb1.jpg'
import { useEffect, useRef } from "react";

export default function Navbar() {

    const navRef = useRef() 

    useEffect(()=>{
        let lastScrollTop = document.documentElement.scrollTop;
        window.addEventListener('scroll', (e)=> {
            let scrollTop = document.documentElement.scrollTop;
            if(scrollTop < 150) {
                navRef.current.classList.remove("nav--sticky")

            }
            if (scrollTop > 150) {
                navRef.current.classList.add("nav--sticky")
            }
            if (scrollTop > lastScrollTop) {
                navRef.current.classList.add("nav--sticky")
                navRef.current.classList.remove("going-up")
            } else if (scrollTop < lastScrollTop) {
                navRef.current.classList.add("going-up")
                
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        });
        window.addEventListener('resize' , (e)=>{
            if(e.target.innerWidth > 1240) {
                navRef.current.classList.remove("nav--open")
            } 
        })
    },[])

    return(
        <>      
        <nav class="nav" ref={navRef}>
            <Link to="/" class="logo nav__logo">
                    {/* <svg width="249" height="187" viewBox="0 0 249 187" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M142.38 54.49C137.78 105.71 133.84 135.03 128.35 186.03H122.87C117.61 135.03 113.22 103.3 109.49 54.28C107.73 33.27 107.73 21 106.86 0H116.94C117.82 19.7 118.26 31.3 119.37 51C121.12 81.19 124.19 102.87 127.26 135.68C130.34 102.86 132.3 83.6 134.94 50.77C136.69 31.07 136.92 19.7 138.23 0H146.35C144.8 21 144.36 33.48 142.38 54.49Z" fill="#991B1E"/>
            <path d="M0 131.83V94.63H14.47V96.04H4.93V111.22H13.59V112.75H4.93V130.31H14.59V131.83H0Z" fill="#DCDDDE"/>
            <path d="M37.18 131.83C36.42 128.47 35.86 126.53 34.66 123.22C33.67 120.55 33.01 119.01 31.8 116.39C30.37 119.19 29.61 120.85 28.5 123.69C27.3 126.84 26.76 128.68 25.88 131.83H22.26C23.57 128.29 24.12 126.23 25.66 122.73C27.08 119.35 27.96 117.39 29.38 114.02C27.51 108.98 26.31 106.09 24.56 101.06C23.57 98.56 23.02 97.08 22.26 94.62H27.18C27.73 96.86 28.17 98.17 28.94 100.36C30.03 103.59 30.91 105.47 32.56 108.68C33.76 105.3 34.53 103.33 35.74 100.01C36.4 97.91 36.73 96.68 37.49 94.62H41.32C40.45 96.86 39.9 98.12 39.13 100.36C37.38 104.87 36.39 107.5 34.74 112.01C36.39 116.11 37.71 118.53 39.13 122.64C40.45 126.19 41.22 128.28 42.42 131.82H37.18V131.83Z" fill="#DCDDDE"/>
            <path d="M64.92 131.83V112.75H56.24V131.83H51.32V98.92C51.32 96.69 51.98 94.41 60.75 94.41C69.31 94.46 69.85 96.69 69.85 98.88V131.84H64.92V131.83ZM64.92 97.73C64.92 96.65 64.69 95.33 60.64 95.28C56.92 95.28 56.24 96.56 56.24 97.73V111.27H64.92V97.73Z" fill="#DCDDDE"/>
            <path d="M100.12 131.83V106.97L92 127.5L83.99 106.97V131.83H79.06V94.63H83.45L92 119.54L100.66 94.62H104.83V131.82H100.12V131.83Z" fill="#DCDDDE"/>
            <path d="M149.62 131.83V64.82H154.36V131.83H149.62Z" fill="#DCDDDE"/>
            <path d="M176.89 81.31V72.27C176.89 69.54 176.36 66.49 172.78 66.49C168.89 66.49 168.46 69.65 168.46 72.27V82.89C168.46 83.52 168.25 86.03 169.2 88.77C171.41 95.7 177.72 98.64 179.83 106.2C180.77 109.88 181.1 111.45 181.1 116.08V121.76C181.1 127.12 180.57 132.47 172.46 132.47C164.04 132.58 163.3 127.23 163.3 121.65V114.92H168.04V124.59C168.04 127.31 168.78 130.48 172.37 130.38C176.26 130.38 176.47 127.23 176.47 124.59V116.29C176.47 113.56 176.26 111.87 175.74 109.15C174.05 100.43 165.85 96.65 164.48 89.29C163.53 84.88 163.74 81.83 163.74 81.32V75.01C163.74 69.66 164.48 64.41 172.69 64.3C181.11 64.3 181.63 69.77 181.63 75.22V81.32H176.89V81.31Z" fill="#DCDDDE"/>
            <path d="M213.41 132.46C206.77 132.46 204.36 128.58 204.36 123.73V74.99C204.36 70.48 204.98 64.18 213.41 64.18C221.62 64.29 222.15 70.69 222.15 74.9V123.43C222.15 128.36 219.94 132.57 213.41 132.46ZM217.41 72.17C217.41 69.54 217.19 66.38 213.3 66.29C209.72 66.29 209.09 69.33 209.09 72.17V125.74C209.09 128.05 210.78 130.15 213.3 130.15C216.14 130.04 217.41 128.15 217.41 125.84V72.17Z" fill="#DCDDDE"/>
            <path d="M243.52 131.83V107.05L235.09 79.83V131.83H230.35V64.81H234.67L243.51 96.54V64.81H248.14V131.83H243.52Z" fill="#DCDDDE"/>
            <path d="M191.16 131.83V64.82H195.9V131.83H191.16Z" fill="#DCDDDE"/>
            </svg> */}
                <img src={logo} alt="logo Xpend"/>
            </Link>

            <div class="nav__bg">
                <div class="nav__bg__front"></div>
            </div>

            <ul class="nav__grid">
                <li class="nav__grid__block">
                    <div class="nav__grid__link-list">
                        <Link to="#" role="button">
                            <small>01.</small>
                            <span>Profession</span>
                        </Link>

                        <ul data-bg="media/mezjrlwy/profession-panto-sport-v2-header9769.jpg?crop=0,0.14791666666666667,0,0.10208333333333333&amp;cropmode=percentage&amp;width=1920&amp;height=1080&amp;quality=76&amp;rnd=132467135091100000">
                            <li><Link to="/profession/" title="Profession">Profession</Link></li>
                                <li><Link to="/profession/dental" title="Dental">Dental</Link></li>
                                <li><Link to="/profession/hygienist" title="Hygienist">Hygienist</Link></li>
                                <li><Link to="/profession/surgical" title="Surgical">Surgical</Link></li>
                                <li><Link to="/profession/student" title="Student">Student</Link></li>
                                <li><Link to="/profession/others" title="Others">Others</Link></li>
                        </ul>
                    </div>
                </li>
                <li class="nav__grid__block">
                    <div class="nav__grid__link-list">
                            <Link to="#" role="button">
                                <small>02.</small>
                                <span>Loupes &amp; Lights</span>
                            </Link>

                            <ul data-bg="media/1vqll1pr/2024-01-homepage-kr-headera2e3.jpg?center=0.50464327888045457,0.76956557392560443&amp;mode=crop&amp;width=1920&amp;height=1080&amp;quality=76&amp;rnd=133518320659930000">
                                <li><Link to="/loupes-lights" title="Loupes &amp; Lights">Loupes &amp; Lights</Link></li>
                                    <li><Link to="/loupes-lights/loupes" title="Loupes">Loupes</Link></li>
                                    <li><Link to="/loupes-lights/magnifications" title="Magnifications">Magnifications</Link></li>
                                    <li><Link to="/loupes-lights/frames" title="Frames">Frames</Link></li>
                                    <li><Link to="/loupes-lights/optics-safety" title="Optics &amp; safety">Optics &amp; safety</Link></li>
                                    <li><Link to="/loupes-lights/lights" title="Lights">Lights</Link></li>
                                    <li><Link to="/loupes-lights/accessories" title="Accessories">Accessories</Link></li>
                                    <li><Link to="/loupes-lights/warranty" title="Warranty">Warranty</Link></li>
                                                            </ul>
                    </div>
                </li>
                <li class="nav__grid__block">
                    <div class="nav__grid__link-list">
                            <Link to="/ergonomics" title="Ergonomics">
                                <small>03.</small>
                                <span>Ergonomics</span>
                            </Link>

                    </div>
                </li>
                <li class="nav__grid__block">
                    <div class="nav__grid__link-list">
                            <Link to="#" role="button">
                                <small>04.</small>
                                <span>About Us</span>
                            </Link>

                            <ul data-bg="media/tvdbwr13/about_header_01578e.jpg?anchor=center&amp;mode=crop&amp;width=1920&amp;height=1080&amp;quality=76&amp;rnd=132467162225470000">
                                <li><Link to="/about-us" title="About Us">About Us</Link></li>
                                                                        <li><Link to="/career" title="Career">Career</Link></li>
                                        <li><Link to="/testimonials" title="Testimonials">Testimonials</Link></li>
                                        <li><Link to="/news-events" title="News &amp; Events">News &amp; Events</Link></li>
                            </ul>
                    </div>
                </li>
                <li class="nav__grid__block">
                    <div class="nav__grid__link-list">
                            <Link to="/contact" title="Contact">
                                <small>05.</small>
                                <span>Contact</span>
                            </Link>

                    </div>
                </li>
                <li class="nav__grid__block">
                    <div class="nav__grid__link-list">
                            <Link to="/support" title="Support">
                                <small>06.</small>
                                <span>Support</span>
                            </Link>

                    </div>
                </li>
            </ul>
            <div class="grid-wrap">
                    <button class="nav__btn" onClick={()=>{
     
                        navRef.current.classList.toggle("nav--open")
                    }} aria-label="Menu"><span></span></button>
                    <ul class="nav__topmenu">
                            <li>
                                <Link to="/profession" title="Profession">Profession</Link>
                                    <ul class="nav__topmenu__sub">
                                            <li><Link to="/profession/dental" title="Dental">Dental</Link> <span class="nav__topmenu__sub-image" style={{backgroundImage : `${PDImg})`}}></span></li>
                                            <li><Link to="/profession/hygienist" title="Hygienist">Hygienist</Link> <span class="nav__topmenu__sub-image"></span></li>
                                            <li><Link to="/profession/surgical" title="Surgical">Surgical</Link> <span class="nav__topmenu__sub-image" ></span></li>
                                            <li><Link to="/profession/student" title="Student">Student</Link> <span class="nav__topmenu__sub-image" ></span></li>
                                            <li><Link to="/profession/others" title="Others">Others</Link> <span class="nav__topmenu__sub-image" ></span></li>

                                    </ul>
                            </li>
                            <li>
                                <Link to="/loupes-lights" title="Loupes &amp; Lights">Loupes &amp; Lights</Link>
                                    <ul class="nav__topmenu__sub">
                                            <li><Link to="/loupes-lights/loupes" title="Loupes">Loupes</Link> <span class="nav__topmenu__sub-image"></span></li>
                                            <li><Link to="/loupes-lights/magnifications" title="Magnifications">Magnifications</Link> <span class="nav__topmenu__sub-image"></span></li>
                                            <li><Link to="/loupes-lights/frames" title="Frames">Frames</Link> <span class="nav__topmenu__sub-image" ></span></li>
                                            <li><Link to="/loupes-lights/optics-safety" title="Optics &amp; safety">Optics &amp; safety</Link> <span class="nav__topmenu__sub-image"></span></li>
                                            <li><Link to="/loupes-lights/lights" title="Lights">Lights</Link> <span class="nav__topmenu__sub-image"></span></li>
                                            <li><Link to="/loupes-lights/accessories" title="Accessories">Accessories</Link> <span class="nav__topmenu__sub-image"></span></li>
                                            <li><Link to="/loupes-lights/warranty" title="Warranty">Warranty</Link> <span class="nav__topmenu__sub-image"></span></li>

                                    </ul>
                            </li>
                            <li>
                                <Link to="/ergonomics" title="Ergonomics">Ergonomics</Link>
                            </li>
                            <li>
                                <Link to="/about-us" title="About Us">About Us</Link>
                                    <ul class="nav__topmenu__sub">

                                                <li><Link to="/career" title="Career">Career</Link> <span class="nav__topmenu__sub-image" ></span></li>
                                                <li><Link to="/testimonials" title="Testimonials">Testimonials</Link> <span class="nav__topmenu__sub-image" ></span></li>
                                                <li><Link to="/news-events" title="News &amp; Events">News &amp; Events</Link> <span class="nav__topmenu__sub-image" ></span></li>
                                    </ul>
                            </li>
                            <li>
                                <Link to="/contact" title="Contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="support" title="Support">Support</Link>
                            </li>
                    </ul>
                <div class="nav__tools">
                                    <form class="nav__tool nav__tool__search" id="formsearch" action="https://xpedent.com/search/" method="GET">
                            <input type="text" name="query" tabindex="-1" id="searchQuery" aria-label="Search" placeholder="What are you looking for?"/>
                            <button aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21.37" viewBox="0 0 21 21.37">
                                    <g transform="translate(-0.299)">
                                        <path d="M19.855,21.37a1.151,1.151,0,0,1-.826-.345l-5.215-5.331a8.814,8.814,0,0,1-5.032,1.562A8.716,8.716,0,0,1,0,8.628,8.716,8.716,0,0,1,8.782,0a8.716,8.716,0,0,1,8.782,8.628,8.542,8.542,0,0,1-2.06,5.547l5.177,5.29a1.112,1.112,0,0,1-.032,1.59A1.149,1.149,0,0,1,19.855,21.37ZM8.782,2.25A6.442,6.442,0,0,0,2.291,8.628,6.442,6.442,0,0,0,8.782,15a6.442,6.442,0,0,0,6.491-6.377A6.442,6.442,0,0,0,8.782,2.25Z" transform="translate(0.299 0)" fill="#fff" />
                                    </g>
                                </svg>
                            </button>
                        </form>
                </div>
            </div>
        </nav>
        </>
    )
}