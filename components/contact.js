import { Reveal } from 'react-reveal'

export default function Contact() {
  return (
    <div className='section contacts align-left gray' id='contact-section'>
      <div className='fw'>
        <div className='fw'>
          <div className='text-box'>
            <Reveal effect='fadeInLeftSmall'>
              <div className='titles animated'>
                <div className='title'>
                  <h3 className="sub-title">
                  Get In Touch
                  </h3>
                </div>
              </div>
            </Reveal>
            <Reveal effect='fadeIn' cascade>
              <h1 className='contact-title'>
                I'm currently accepting freelance <br /> and full-time
                opportunities.
              </h1>
              <p className='animated'>
                If you are a business seeking an app and/or website, or an
                employer looking to hire. Feel free to connect with me.
              </p>
            </Reveal>
          </div>
          <div className='bts'>
            <Reveal effect='fadeInUp' cascade>
              <a href='mailto:hey@klavenjones.com' className='btn extra '>
                Email
              </a>
              <a href='https://twitter.com/KlavenJ' className='btn extra '>
                Twitter
              </a>
              <a
                href='https://www.linkedin.com/in/klaven-jones'
                className='btn extra '
              >
                Linkedin
              </a>
              <a href='https://github.com/klavenjones' className='btn extra '>
                Github
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
