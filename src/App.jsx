import './App.css';
import logo from './images/logo-bookmark.svg'
import logoWhite from './images/logo-bookmarik-white.svg'
import iconHambuger from './images/icon-hamburger.svg'
import iconClose from './images/icon-close.svg'
import iconArrow from './images/icon-arrow.svg'
import iconError from './images/icon-error.svg'
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
  const [feature, setfeature] = useState('f1')
  const [faq, setFaq] = useState('')
  const [c, setC] = useState(false)
  const [emailTerm, setEmailTerm] = useState('')

  const [email, setEmail] = useState(1)

  const handleEmail = (e) => {
    e.preventDefault()

      // don't remember from where i copied this code, but this works.
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
      if ( re.test(emailTerm) ) {
        // this is a valid email address
      // call setState({email: email}) to update the email
      // or update the data in redux store.
      console.log('wrokd')
      setEmail(true)
    }
    else {
      console.log('eror')
      // invalid email, maybe show an error to the user.
      setEmail(false)
    }
  }

  const DATA_ARRAY = [
    {
      id: 'f1',
      titleF: 'Bookmark in one click',
      textF: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourites sites.',
      imgIlu: featureTab1,
      faqId: 'faq1',
      title: 'What is Bookmark?',
      faqText: 'F1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda dicta suscipit magni quam. Itaque perferendis beatae deleniti vero necessitatibus esse vel dicta laborum repellat eaque at omnis, odio nulla.',
    },
    {
      id: 'f2',
      titleF: 'Intelligent search',
      textF: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks',
      imgIlu: featureTab2,
      faqId: 'faq2',
      title: 'How can i request a new browser',
      faqText: 'F2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda dicta suscipit magni quam. Itaque perferendis beatae deleniti vero necessitatibus esse vel dicta laborum repellat eaque at omnis, odio nulla.',
    },
    {
      id: 'f3',
      titleF: 'Share your bookmarks',
      textF: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
      imgIlu: featureTab3,
      faqId: 'faq3',
      title: 'Is there a mobile app?',
      faqText: 'F3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda dicta suscipit magni quam. Itaque perferendis beatae deleniti vero necessitatibus esse vel dicta laborum repellat eaque at omnis, odio nulla.',
    },
    {
      id: 'f4',
      faqId: 'faq4',
      imgIlu: 'N/A',
      title: 'What about other Chromium browsers',
      faqText: 'F4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda dicta suscipit magni quam. Itaque perferendis beatae deleniti vero necessitatibus esse vel dicta laborum repellat eaque at omnis, odio nulla.',
    },
  ]

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
              {!menu ? 
              <img className='logo' src={logo} alt="" />
              : 
              <img className='logo' src={logoWhite} alt="" />
              }
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


    <main style={{'overflow-x': 'hidden'}}>
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
              <li onClick={() => setfeature('f1')} className={feature === 'f1' ? 'active' : ''}>
                <p className='hover-red'>Simple Bookmarking</p>
              </li>
              <li onClick={() => setfeature('f2')} className={feature === 'f2' ? 'active' : ''}>
                <p className='hover-red'>Speedy Searching</p>
              </li>
              <li onClick={() => setfeature('f3')} className={feature === 'f3' ? 'active' : ''}>
                <p className='hover-red'>Easy Sharing</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='padding-block-800'>
        <div className="container">
          {DATA_ARRAY
          .map((item) => {
            return item.id === feature && (  
            <div key={item.id} className="even-columns spacer">
              <div className='bookmark-section-img'>
                <img src={item.imgIlu} alt="" />
              </div>
              <div className='bookmark-section-text'>
                <h2 className='fs-secondary-heading fw-medium text-neutral-400'>{item.titleF}</h2>
                <p className='text-neutral-300'>
                  {item.textF}
                </p>
                <button className='btn'>
                  More info
                </button>
              </div>
            </div>
            )
          })}
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
              {DATA_ARRAY
              .map((item) => {
                return (
                <li key={item.faqId} className={faq === item.faqId 
                  ? 'faq-open'
                  : 'faq-closed'}
                onClick={() => setC(!c)}>
                  <div className='faq-head'>
                    <h3 className='hover-red text-neutral-400 fw-regular fs-500'
                    onClick={(e) => setFaq(item.faqId)}>{item.title}</h3>
                    <img className='arrowImg' src={iconArrow} alt="" />
                  </div>
                  <p className='faq-body'>
                    {item.faqText}
                  </p>
                </li>
                )
              })}
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
              <form 
              onSubmit={(e) => handleEmail(e)}
              className='cat-form'>
                <div className={email ? 'email-works' : 'email-error'}>
                  <div className='input-section' 
                  style={{'--spacer': '0'}}>
                    <input
                    type="email"
                    placeholder='Enter your emial address'
                    value={emailTerm}
                    onChange={(e) => setEmailTerm(e.target.value)} />
                    <img src={iconError} alt="" />
                    
                    <span style={{'--spacer': '0'}}>Whoops, make sure it's an email</span>
                  </div>
                  <div  style={{'--spacer': '0'}}>
                    <button  style={{'--spacer': '0'}} className='btn' datatype='bg-red'>
                      Contact Us
                    </button>
                  </div>
                </div>
                
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
              <a href=""><img src={logoWhite} alt="" /></a>
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
