import { Reveal } from 'react-reveal'


export default function footer() {
  return (
    <>
      <footer className='align-center'>
        <Reveal effect='fadeInUpSmall' cascade>
          <div className='copy'>© 2020 Klaven Jones. all rights reserved.</div>
          <div className='st-soc'>
            <a target='blank' href='https://www.linkedin.com/in/klaven-jones/'>
              <ion-icon class='icon' name='logo-linkedin'></ion-icon>
            </a>
            <a target='blank' href='https://github.com/klavenjones'>
              <ion-icon class='icon' name='logo-github'></ion-icon>
            </a>
            <a target='blank' href='https://twitter.com/KlavenJ'>
              <ion-icon class='icon' name='logo-twitter'></ion-icon>
            </a>
          </div>
        </Reveal>
      </footer>
    </>
  )
}
