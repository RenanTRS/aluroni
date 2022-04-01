import styleTema from 'style/Tema.module.scss'
import style from './Sobre.module.scss'

import casa from 'assets/img/casa.png'
import massa1 from 'assets/img/massa1.png'
import massa2 from 'assets/img/massa2.png'

const imagens = [massa1, massa2]

export const Sobre = () => {

  return (
    <section>
      <h3 className={styleTema.titulo}>Sobre</h3>
      <div className={style.sobreNos}>
        <img src={casa} alt="Casa do Aluroni" />
        <div className={style.sobreNos__texto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className={style.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={style.imagens__imagem}>
            <img src={imagem} alt="Imagem de massa" />
          </div>
        ))
        }
      </div>
    </section>
  )
}