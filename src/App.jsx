import './App.css';
import logo from './images/logo-bookmark.svg'
import iconHambuger from './images/icon-hamburger.svg'
import iconClose from './images/icon-close.svg'
import iconArrow from './images/icon-arrow.svg'
import iconChrome from './images/logo-chrome.svg'
import iconFirefox from './images/logo-firefox.svg'
import iconOpera from './images/logo-opera.svg'
import iconFacebook from './images/icon-facebook.svg'
import iconTwitter from './images/icon-twitter.svg'
import iluHero from './images/illustration-hero.svg'
import featureTab1 from './images/illustration-features-tab-1.svg'
import featureTab2 from './images/illustration-features-tab-2.svg'
import featureTab3 from './images/illustration-features-tab-3.svg'
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    const primaryNav = document.querySelector('.primary-navigation')
    primaryNav.toggleAttribute('data-visible')
    setMenu(!menu)
  
  }
  return (
    <>
    <header className='primary-header'>
      <section className='padding-block-900'>
        <div className="container">
          <div className='nav-wrapper'>
            <a href="/">
              <img className='logo' src={logo} alt="" />
            </a>
            <button 
              aria-controls='primary-navigation'
              aria-expanded={menu}
              onClick={(e) => handleMenu()}
              className='menu-btn'>
                {!menu ? <img src={iconHambuger} alt="" /> :
                 <img src={iconClose} alt="" />}
            </button>
            <nav className='primary-navigation'>
              <ul role='list' className='nav-list'>
                <li><a className='hover-red' href="/">FEATURES</a></li>
                <li><a className='hover-red' href="/">PRICING</a></li>
                <li><a className='hover-red' href="/">CONTACT</a></li>
                <li><a className='hover-red' href="/"><button className="btn" datatype='bg-nav-red'>LOGIN</button></a></li>
              </ul>
              <div className='dekstop-hidden'>
                <a href=""><img className='hover-red-img' src={iconFacebook} alt="" /></a>
                <a href=""><img className='hover-red-img' src={iconTwitter} alt="" /></a>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </header>


    <main>
      <section className='padding-block-900'>
        <div className="container">
          <div className="even-columns">
            <div className='hero-section-text | spacer'>
              <h1 className='fs-primary-heading text-neutral-400 fw-medium'>A Simple Bookmark Manager</h1>
              <p className='text-neutral-300'>
                A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
              </p>
              <div>
                <button className='btn'>Get it on Chrome</button>
                <button className='btn' datatype='inverted'>Get it on Firefox</button>
              </div>
            </div>
            <div className='hero-section-img'>
              <img src={iluHero} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='padding-block-900'>
        <div className='content-center-container'>
          <div className='spacer'>
            <h2 className='fs-secondary-heading text-neutral-400 fw-medium'>Features</h2>
            <p className='text-neutral-300'>
              Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
            </p>
          </div>
          <div className='feature-links'>
            <ul role='list'>
              <li className='active'>
                <p className='hover-red'>Simple Bookmarking</p>
              </li>
              <li>
                <p className='hover-red'>Speedy Searching</p>
              </li>
              <li>
                <p className='hover-red'>Easy Sharing</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='padding-block-800'>
        <div className="container">
          <div className="even-columns spacer">
            <div className='bookmark-section-img'>
              <img src={featureTab1} alt="" />
            </div>
            <div className='bookmark-section-text'>
              <h2 className='fs-secondary-heading fw-medium text-neutral-400'>Bookmark in one click</h2>
              <p className='text-neutral-300'>
                Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourites sites.
              </p>
              <button className='btn'>
                More info
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='padding-block-900'>
        <div className='content-center-container'>
          <h2 className='fs-secondary-heading fs-medium text-neutral-400'>Download the extension</h2>
          <p className='text-neutral-300'>
            We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
          </p>
          <div className='cards'>
            <div className="card">
              <img src={iconChrome} alt="" />
              <h3 className='fw-medium text-neutral-400'>Add to Chrome</h3>
              <p className='text-neutral-300 fw-regular'>Minimum version 62</p>
              <button className='btn'>
                Add & Install Extension
              </button>
            </div>
            <div className="card">
              <img src={iconFirefox} alt="" />
              <h3 className='fw-medium text-neutral-400'>Add to Firefox</h3>
              <p className='text-neutral-300 fw-regular'>Minimum version 55</p>
              <button className='btn'>
                Add & Install Extension
              </button>
            </div>
            <div className="card">
              <img src={iconOpera} alt="" />
              <h3 className='fw-medium text-neutral-400'>Add to Opera</h3>
              <p className='text-neutral-300 fw-regular'>Minimum version 46</p>
              <button className='btn'>
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='padding-block-900'>
        <div className='faq | content-center-container'>
          <h2 className='fs-secondary-heading text-neutral-400 padding-block-700'>Frequently Asked Questions</h2>
          <p className='text-neutral-300 padding-bottom-700'>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
          <div className='faq-container'>
            <ul role='list' className='faq-list'>
              <li>
                <div className='faq-head'>
                  <h3 className='hover-red text-neutral-400 fw-regular fs-500'>What is Bookmark?</h3>
                  <img src={iconArrow} alt="" />
                </div>
                <p className='faq-body'>
                  infos
                </p>
              </li>
              <li>
                <div className='faq-head'>
                  <h3 className='hover-red text-neutral-400 fw-regular fs-500'>How can i request a new browser</h3>
                  <img src={iconArrow} alt="" />
                </div>
                <p className='faq-body'>
                  infos
                </p>
              </li>
              <li>
                <div className='faq-head'>
                  <h3 className='hover-red text-neutral-400 fw-regular fs-500'>Is there a mobile app?</h3>
                  <img src={iconArrow} alt="" />
                </div>
                <p className='faq-body'>
                  infos
                </p>
              </li>
              <li>
                <div className='faq-head'>
                  <h3 className='text-neutral-400 fw-regular fs-500 hover-red'>What about other Chromium browsers</h3>
                  <img src={iconArrow} alt="" />
                </div>
                <p className='faq-body'>
                  infos
                </p>
              </li>
            </ul>
            <button className="btn">
              More Info
            </button>
          </div>
        </div>
      </section>

      <section className='bg-primary-400 padding-block-900'>
        <div className="container">
          <div className="content-center-container">
            <div className='cat | spacer'>
              <p className='fs-500 letter-space-400 text-neutral-100'>35,000+ ALREADY JOINED</p>
              <h2 className='fs-secondary-heading text-neutral-100'>Stay uo-to-date with what we're doing</h2>
              <form className='cat-form'>
                <input type="email"
                placeholder='Enter your emial address' />
                <button className='btn' datatype='bg-red'>
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>

    <footer>
      <section className='bg-neutral-400 padding-block-600'>
        <div className="container">
          <div className="nav-wrapper-footer">
            <div className='footer-nav-links'>
              <a href=""><img src={logo} alt="" /></a>
              <nav className='secondary-navigation'>
                <ul role="list" className='footer-nav-list'>
                  <li><a className='hover-red' href="/">FEATURES</a></li>
                  <li><a className='hover-red' href="/">PRICING</a></li>
                  <li><a className='hover-red' href="/">CONTACT</a></li>
                </ul>
              </nav>
            </div>
            <div className='footer-nav-social-links'>
              <img className='hover-red-img' src={iconFacebook} alt="" />
              <img className='hover-red-img' src={iconTwitter} alt="" />
            </div>
          </div>
        </div>
      </section>
    </footer>

    </>
  );
}

export default App;
