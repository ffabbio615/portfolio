import { useState } from 'react'
import './App.scss'

function App() {
  
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.matchMedia("(orientation: portrait)").addEventListener("change", (event) => {
    if (event.matches) {
      console.log("Modo Retrato");
    } else {
      console.log("Modo Paisagem");
    }
    window.location.reload();
  });

  const [mode, setMode] = useState('portfolio');
  const [contact, setContact] = useState(false);

  function changeMode(){
    if(mode === 'portfolio'){
      setMode('projetos');
    }else{
      setMode('portfolio');
    }
  }

  function changeContact(){
    if(!contact){
      setContact(true);
    }else{
      setContact(false);
    }
  }

  return (
    <>
      <header>
        <div className='header-container'>
          <p className='portfolio-text'>{mode === 'portfolio' ? 'Meu Portfolio' : 'Projetos'}</p>
          <button onClick={changeMode} className='btn-page'>{mode === 'portfolio' ? 'Projetos' : 'Portfolio'}</button>
        </div>
      </header>

      <main>
        <section className={mode === 'portfolio' ? 'portfolio-section turn-right fade-in' : 'portfolio-section turn-left fade-out'}>
          <div className='image-container'>
            <img className={contact === false ? 'personal-image flip-reverse' : 'personal-image flip'} src="/images/fotoPerfilAmbienteExterno.jpg" alt="Imagem de Perfil" />
            <div className={contact === false ? 'contact-text fade-out' : 'contact-text fade-in'}>
              <div>
                <img className='email-icon' src="/images/emailIcon.svg" alt="Ícone de E-mail" />
                <p>E-mail: fabiomarques.ads@gmail.com</p>
              </div>
              <div>
              <a className='whatsapp-link'  target='_blank' href='https://api.whatsapp.com/send?phone=5521998899535'>
                <img className='whatsapp-icon' src="/images/whatsappIcon.svg" alt="Ícone do Whatsapp" /> </a>
                <div>
                  <p>Whatsapp: (21) 99889-9535</p>
                  <p>Ou clicando direto no ícone</p>
                </div>
              </div>
            </div>
          </div>

          <div className='personal-informations-container'>

            <div className='text-presentation-container'>
              <p className='welcome-text-line'>Olá, eu sou</p>
              <p className='name-text-line'>Fábio Marques</p>
              <p className='role-text-line'>Front-end Developer</p>
            </div>

            <div className='links-container'>
              <a className='download-link' download href='/documents/Curriculo-Fabio-Marques-Melo.pdf'>Download CV</a>
              <a className='contact-link' onClick={changeContact}>Contato</a>
            </div>

            <div className='social-media-container'>
              <a href='https://www.linkedin.com/in/fabiomarquesme/'><img src="/images/linkedInIcon.svg" alt="Ícone do LinkedIn" /></a>
              <a href='https://github.com/ffabbio615'><img src="/images/gitHubIcon.svg" alt="Ícone do GitHub" /></a>
            </div>

          </div>
        </section>

        <section className={mode === 'portfolio' ? 'projects-section turn-right fade-out' : 'projects-section turn-left fade-in'}>
        <div className='project-container'>
          <img className='project-image-group' src="/images/primeMockup.png" alt="Mockup de projeto" />
          <div className='project-informations-container'>
            <p className='project-title'>PRIME</p>
            <p className='project-subtitle'>Tecnologias utilizadas:</p>
            <div className='tecnologies-icons'>
              <img src="/images/viteIcon.png" alt="Ícone do GitHub" />
              <img src="/images/javascriptIcon.svg" alt="Ícone do GitHub" />
              <img src="/images/reactIcon.svg" alt="Ícone do GitHub" />
              <img src="/images/cssIcon.png" alt="Ícone do GitHub" />
              <img src="/images/sassIcon.svg" alt="Ícone do GitHub" />
              <img src="/images/firebaseIcon.svg" alt="Ícone do GitHub" />
            </div>
            <a className='project-link'  target='_blank' href='https://prime-rust-psi.vercel.app/'>Acessar</a> 
            <a className='github-link' target='_blank' href='https://github.com/ffabbio615/primeLanguageSchool'><img src="/images/gitHubIcon.svg" alt="Ícone do GitHub" /></a>
          </div>
        </div>

        <div className='project-container'>
          <img className='project-image-group' src="/images/capiwarasMockup.png" alt="Mockup de projeto" />
          <div className='project-informations-container'>
            <p className='project-title'>Capiwaras</p>
            <p className='project-subtitle'>Tecnologias utilizadas:</p>
            <div className='tecnologies-icons'>
              <img src="/images/viteIcon.png" alt="Ícone do GitHub" />
              <img src="/images/javascriptIcon.svg" alt="Ícone do GitHub" />
              <img src="/images/reactIcon.svg" alt="Ícone do GitHub" />
              <img src="/images/cssIcon.png" alt="Ícone do GitHub" />
              <img src="/images/sassIcon.svg" alt="Ícone do GitHub" />
            </div>
            <a className='project-link' target='_blank' href='https://capiwaras.vercel.app/'>Acessar</a> 
            <a className='github-link' target='_blank' href='https://github.com/ffabbio615/capiwaras'><img src="/images/gitHubIcon.svg" alt="Ícone do GitHub" /></a>
          </div>
        </div>

        <div className='project-container'>
          <img className='project-image-group' src="/images/russelMockup.png" alt="Mockup de projeto" />
          <div className='project-informations-container'>
            <p className='project-title'>Russel Shop</p>
            <p className='project-subtitle'>Tecnologias utilizadas:</p>
            <div className='tecnologies-icons'>
              <img src="/images/viteIcon.png" alt="Ícone do GitHub" />
              <img src="/images/javascriptIcon.svg" alt="Ícone do GitHub" />
              <img src="/images/reactIcon.svg" alt="Ícone do GitHub" />
              <img src="/images/cssIcon.png" alt="Ícone do GitHub" />
              <img src="/images/sassIcon.svg" alt="Ícone do GitHub" />
            </div>
            <a className='project-link' target='_blank' href='https://russelshop.vercel.app/'>Acessar</a> 
            <a className='github-link' target='_blank' href='https://github.com/ffabbio615/RusselShop'><img src="/images/gitHubIcon.svg" alt="Ícone do GitHub" /></a>
          </div>
        </div>

        <div className='project-container'>
          <div className='soon-container'>
            <div>Em breve!</div>
          </div>
          <img className='project-image-group' src="/images/vocabaryMockup.png" alt="Mockup de projeto" />
          <div className='project-informations-container'>
            <p className='project-title'>Vocabary</p>
            <p className='project-subtitle'>Tecnologias utilizadas:</p>
            <div className='tecnologies-icons'>
              <img src="/images/viteIcon.png" alt="Ícone do GitHub" />
              <img src="/images/javascriptIcon.svg" alt="Ícone do GitHub" />
              <img src="/images/typescriptIcon.svg" alt="Ícone do GitHub" />
              <img src="/images/reactIcon.svg" alt="Ícone do GitHub" />
              <img src="/images/cssIcon.png" alt="Ícone do GitHub" />
              <img src="/images/sassIcon.svg" alt="Ícone do GitHub" />
              <img src="/images/firebaseIcon.svg" alt="Ícone do GitHub" />
            </div>
            <a className='project-link' target='_blank' href='https://vocabary.vercel.app/'>Acessar</a> 
            <a className='github-link' target='_blank' href='https://github.com/ffabbio615/vocabary'><img src="/images/gitHubIcon.svg" alt="Ícone do GitHub" /></a>
          </div>
        </div>
        
        </section>


      </main>

      <footer></footer>
    </>
  )
}

export default App
