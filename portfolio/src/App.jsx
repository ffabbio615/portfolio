import { useState } from 'react'
import './App.scss'

function App() {

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
            <img className={contact === false ? 'personal-image' : 'personal-image fade-out'} src="/images/fotoPerfilAmbienteExterno.jpg" alt="Imagem de Perfil" />
            <div className='contact-text'>
              <p>E-mail: fabiomarques.ads@gmail.com</p>
              <p>Whatsapp: (21) 99889-9535</p>
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

        </section>


      </main>

      <footer></footer>
    </>
  )
}

export default App
