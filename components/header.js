import Typed from 'react-typed'

export default function Header() {
  return (
    <>
      <div className='section started'>
        <div className='slide'></div>
        <div className='centrize-custom'>
          <div className='vertical-center'>
            <div className='st-title align-center'>
              <div className='typing-title'>
                {/* <p>Hey, I'm Klaven.</p>
                <p>I build things for the web.</p> */}
                <Typed
                  strings={["Hey, I'm Klaven.", 'I build things for the web.']}
                  typeSpeed={30}
                  backSpeed={30}
                  loop
                />
              </div>
              <span className='typed-title'></span>
            </div>
          </div>
        </div>
        <a href='#about-section' className='mouse-btn'>
          <ion-icon class='icon' name='chevron-down-outline'></ion-icon>
        </a>
      </div>
    </>
  )
}
