import Reveal from 'react-reveal'
import IosLaptop from 'react-ionicons/lib/IosLaptop'
import IosBrowsersOutline from 'react-ionicons/lib/IosBrowsersOutline'
import IosCode from 'react-ionicons/lib/IosCode'
import IosBrushOutline from 'react-ionicons/lib/IosBrushOutline'

export default function Skills() {
  return (
    <div className='section services gray align-left' id='services-section'>
      <div className='fw'>
        <Reveal effect='fadeInLeftSmall'>
          <div className='titles'>
            <div className='title'>My Skills</div>
          </div>
        </Reveal>
        <div className='row'>
          <div className='col col-m-12 col-t-6 col-d-3'>
            <Reveal effect='fadeInUpSmall'>
              <div className='service-item animated'>
                <div className='circle'>
                  <IosCode
                    size='large'
                    fontSize='45px'
                    className='icon custom-icon'
                  />
                </div>
                <div className='name'>Languages</div>
                <ul className='service-list'>
                  <li>HTML5</li>
                  <li>CSS3 (SASS)</li>
                  <li>JavaScript (ES6)</li>
                  <li>TypeScript*</li>
                  <li>Java*</li>
                  <li>Python*</li>
                </ul>
              </div>
            </Reveal>
          </div>
          <div className='col col-m-12 col-t-6 col-d-3'>
            <Reveal effect='fadeInUpSmall'>
              <div className='service-item '>
                <div className='circle'>
                  <IosBrowsersOutline
                    size='large'
                    fontSize='45px'
                    className='icon custom-icon'
                  />
                </div>
                <div className='name'>Frameworks & Libs</div>
                <ul className='service-list'>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Node.js</li>
                  <li>Bootstrap</li>
                  <li>jQuery*</li>
                  <li>Angular*</li>
                </ul>
              </div>
            </Reveal>
          </div>
          <div className='col col-m-12 col-t-6 col-d-3'>
            <Reveal effect='fadeInUpSmall'>
              <div className='service-item '>
                <div className='circle'>
                  <IosLaptop
                    size='large'
                    fontSize='45px'
                    className='icon custom-icon'
                  />
                  {/* <ion-icon size='large' className='icon' name='laptop-outline'></ion-icon> */}
                </div>
                <div className='name'>Dev Tools</div>
                <ul className='service-list'>
                  <li>Package Managers (NPM, Yarn)</li>
                  <li>Version Control (Git, Github, Bitbucket)</li>
                  <li>Visual Studio Code</li>
                  <li>Command Line</li>
                </ul>
              </div>
            </Reveal>
          </div>
          <div className='col col-m-12 col-t-6 col-d-3'>
            <Reveal effect='fadeInUpSmall'>
              <div className='service-item animated'>
                <div className='circle'>
                  <IosBrushOutline
                    size='large'
                    fontSize='45px'
                    className='icon custom-icon'
                  />
                </div>
                <div className='name'>Design Tools</div>
                <ul className='service-list'>
                  <li>Sketch</li>
                  <li>Invision</li>
                  <li>Adobe XD</li>
                  <li>Adobe Photshop</li>
                </ul>
              </div>
            </Reveal>
          </div>
          <div className='col col-m-12 col-t-12 col-d-12'>
            <Reveal effect='fadeInRightSmall'>
              <div className='service-item animated'>
                <p className='disclaimer'>
                  * I only worked with these technologies a few times, I am
                  familiar with it, but I am still learning them and may need to
                  brush up.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
