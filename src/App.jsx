import './App.css';
import logo from './images/logo-bookmark.svg'
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

function App() {
  return (
    <>

    <header className='primary-header'>
      <section>
        <div className="container">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <nav className='primary-navigation'>
            <ul role='list' className='nav-list'>
              <li><a href="/">FEATURES</a></li>
              <li><a href="/">PRICING</a></li>
              <li><a href="/">CONTACT</a></li>
              <li><a href="/"><button className="btn" datatype='bg-red'>LOGIN</button></a></li>
            </ul>
          </nav>
        </div>
      </section>
    </header>


    <main>
      <section>
        <div className="container">
          <div className="even-columns">
            <div>
              <h1>A Simple Bookmark Manager</h1>
              <p>
                A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
              </p>
              <button>Get it on Chrome</button>
              <button>Get it on Firefox</button>
            </div>
            <div>
              <img src={iluHero} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="even-columns">
            <div>
              <h2>Features</h2>
              <p>
                Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
              </p>
              <ul>
                <li>
                  <p>Simple Bookmarking</p>
                </li>
                <li>
                  <p>Speedy Searching</p>
                </li>
                <li>
                  <p>Easy Sharing</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="even-columns">
            <div><img src={featureTab1} alt="" /></div>
            <div>
              <h2>Bookmark in one click</h2>
              <p>
                Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourites sites.
              </p>
              <button className='btn'>
                More info
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="even-columns">
            <div>
              <h2>Download the extension</h2>
              <p>
                We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
              </p>
            </div>
          </div>
          <div className="even-columns">
            <div>
              <div className="card">
                <div>
                  <img src="" alt="" />
                  <h3>Add to Chrome</h3>
                  <p>Minimum version 62</p>
                  <button className='btn'>
                    Add & Install Extension
                  </button>
                </div>
              </div>
              <div className="card">
                <img src="" alt="" />
                <h3>Add to Firefox</h3>
                <p>Minimum version 55</p>
                <button className='btn'>
                  Add & Install Extension
                </button>
              </div>
              <div className="card">
                <img src="" alt="" />
                <h3>Add to Opera</h3>
                <p>Minimum version 46</p>
                <button className='btn'>
                  Add & Install Extension
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="even-columns">
            <div className='faq'>
              <h2>Frequently Asked Questions</h2>
              <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
              <div>
                <ul role='list' className='faq-list'>
                  <li>
                    <div>
                      <h3>What is Bookmark?</h3>
                      <img src={iconArrow} alt="" />
                    </div>
                    <p>
                      infos
                    </p>
                  </li>
                  <li>
                    <div>
                      <h3>How can i request a new browser</h3>
                      <img src={iconArrow} alt="" />
                    </div>
                    <p>
                      infos
                    </p>
                  </li>
                  <li>
                    <div>
                      <h3>Is there a mobile app?</h3>
                      <img src={iconArrow} alt="" />
                    </div>
                    <p>
                      infos
                    </p>
                  </li>
                  <li>
                    <div>
                      <h3>What about other Chromium browsers</h3>
                      <img src={iconArrow} alt="" />
                    </div>
                    <p>
                      infos
                    </p>
                  </li>
                </ul>
                <button className="btn">
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="even-columns">
            <div className='cat'>
              <p>35,000+ ALREADY JOINED</p>
              <h2>Stay uo-to-date with what we're doing</h2>
              <form>
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
      <section>
        <div className="container">
          <div className="even-columns">
            <div>
              <img src={logo} alt="" />
              <nav className='secondary-navigation'>
                <ul role="list">
                  <li><a href="/">FEATURES</a></li>
                  <li><a href="/">PRICING</a></li>
                  <li><a href="/">CONTACT</a></li>
                </ul>
              </nav>
            </div>
            <div>
              <img src={iconFacebook} alt="" />
              <img src={iconTwitter} alt="" />
            </div>
          </div>
        </div>
      </section>
    </footer>

    </>
  );
}

export default App;
