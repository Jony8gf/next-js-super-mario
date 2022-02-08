import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {

  const abrirMenu = (e) => {
    const menu = document.querySelector('.mobile-links');
    menu.classList.toggle('hidden')
  }

  return (
    <div>
      <Head>
        <title>Super Mario</title>
        <meta name="supermario" content="Pagina web super mario" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* //w-[1980px] */}
      <div className='xsm:w-full mx-auto'>

        {/* //NAV */}
        <nav className='bg-gray-800 flex justify-between lg:justify-start items-center'>
          <div className='logo p-2 w-1/6'>
            <Image src='/img/logo.png' alt='logo' width="100" height="100" />
            {/* <img src='/img/logo.png' alt="logo" width="100%" /> */}
          </div>
          <div className='links lg:block hidden w-1/6 md:w-4/6'>
            <ul className='menu flex items-center justify-center gap-5'>
              <li>
                <Link href="#" >
                  <a className='link'>Inico</a>
                </Link>
              </li>
              <li>
                <Link href="#" >
                  <a className='link'>Jugar juntos</a>
                </Link>
              </li>
              <li>
                <Link href="#" >
                  <a className='link'>Explorar</a>
                </Link>
              </li>
              <li>
                <Link href="#" >
                  <a className='link-bowser'>Bowser´s fury</a>
                </Link>
              </li>
              <li>
                <Link href="#" >
                  <a className='link-buy'>Comprar ahora</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className='block lg:hidden w-1/6 lg:w-4/6'>
            <a href='#' className='link' id='mobile-menu' onClick={abrirMenu}>
              <svg className='bg-white' viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </a>
            <ul className='mobile-links hidden w-full absolute z-50 left-0 text-center bg-gray-800'>
              <li>
                <Link href="#" >
                  <a className='link'>Inico</a>
                </Link>
              </li>
              <li>
                <Link href="#" >
                  <a className='link'>Jugar juntos</a>
                </Link>
              </li>
              <li>
                <Link href="#" >
                  <a className='link'>Explorar</a>
                </Link>
              </li>
              <li>
                <Link href="#" >
                  <a className='my-4 inline-block link-bowser'>Bowser´s fury</a>
                </Link>
              </li>
              <li>
                <Link href="#" >
                  <a className='my-4 inline-block link-buy'>Comprar ahora</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* //Header */}
        <section className='header'>
          <Image src='/img/hero.jpg' alt='header' width="1000" height="300" layout="responsive" />
        </section>

        <section>
          <div className='bg-wave-pattern h-6 bg-repeat-x relative -top-2'></div>
          <div className='bg-wave-pattern-dots text-center p-4 flex md:flex-row flex-col gap-3 justify-center'>
            <Link href="#" >
              <a className='inline-block py-3 px-16 bg-black text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black trasition duration-200'>Comprar ahora</a>
            </Link>
            <Link href="#" >
              <a className='inline-block py-3 px-16 bg-red-500 text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black trasition duration-200'>Ver el Trailer</a>
            </Link>
          </div>
          <div className='bg-wave-pattern h-6 bg-repeat-x relative top-2'></div>
        </section>


        <section className='bg-pattern-characters-red py-28'>
          <div className='lg:container 2xl:w-3/5 mx-auto md:flex gap-5 md:w-full p-3'>
            {/* //CARD LEFT */}
            <div className='left bg-character-mario bg-no-repeat bg-contain bg-top w-5/6 md:w-1/2 pt-52 mx-auto'>
              {/* //CARD */}
              <div className='card text-center bg-white 2xl:w-5/6 mx-auto mt-72 rounded-2xl overflow-hidden xl:w-4/5'>
                <div className='cover bg-black'>
                  <video src="/videos/video01.mp4" autoPlay loop muted ></video>
                </div>
                <div className=' bg-repeat-x relative -top-3'>
                  <h3 className='font-black text-4xl py-10'>
                    Jugar juntos
                  </h3>
                  <p className='text-xl'>
                    Trabaja con (o contra) tus amigos y familiares *
                  </p>

                  <Link href="#" >
                    <a className='xl:text-2xl my-4 inline-block py-2 px-16 bg-red-500 text-white font-black border-transparent border-8 rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 group'>
                      Ver Trailer
                      <span className='w-4 h-4 inline-block border-yellow-300 border-solid border-t-[5px] border-r-[5px] transition-all transform rotate-45 group-hover:border-red-500 xl:group-hover:ml-4'></span>
                    </a>
                  </Link>


                </div>
                <div className="dots flex justify-between p-4">
                  <div className='dot h-3 w-3 bg-blue-600 rounded-full'></div>
                  <div className='dot h-3 w-3 bg-blue-600 rounded-full'></div>
                </div>
              </div>
            </div>

            {/* //CARD RIGHT */}
            <div className='right w-5/6 md:w-1/2 text-center mx-auto mt-10'>
              {/* //CARD */}
              <h2 className='font-black text-white text-6xl py-8'>Disponible ahora</h2>

              <p className='font-bold text-white text-2xl mx-auto py-10 w-4/5'>Uno de los mejores juegos de Mario de la historia...</p>

              <p className='font-bold text-white text-2xl mx-auto py-10 w-4/5 '>
                ¡Forma un equipo para una aventura maravillosamente increíble!
              </p>

              <p className='text-white mx-auto w-4/5 '>
                ¡Bowser vuelve a hacer sus viejos trucos y solo Mario y sus amigos pueden salvar el día! Usa potenciadores como Super Bell, que otorga habilidades felinas como trepar y rascar, para vencer a Bowser y sus secuaces.
              </p>

              {/* //CARD 2 */}
              <div className='card text-center bg-white 2xl:w-5/6 mx-auto mt-36 rounded-2xl overflow-hidden xl:w-4/5'>
                <div className='cover bg-black'>
                  <video src="/videos/video02.mp4" autoPlay loop muted ></video>
                </div>
                <div className=' bg-repeat-x relative -top-3'>
                  <h3 className='font-black text-4xl py-10'>
                    Explorar
                  </h3>
                  <p className='text-xl'>
                    Merodea por algunos lugares populares.
                  </p>

                  <Link href="#" >
                    <a className='xl:text-2xl my-4 inline-block py-2 px-16 bg-red-500 text-white font-black border-transparent border-8 rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 group'>
                      ¡Echar un vistazo!
                      <span className='w-4 h-4 inline-block border-yellow-300 border-solid border-t-[5px] border-r-[5px] transition-all transform rotate-45 group-hover:border-red-500 xl:group-hover:ml-4'></span>
                    </a>
                  </Link>

                </div>
                <div className="dots flex justify-between p-4">
                  <div className='dot h-3 w-3 bg-blue-600 rounded-full'></div>
                  <div className='dot h-3 w-3 bg-blue-600 rounded-full'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='footer text-center flex justify-center gap-9 pt-10'>
            <Image src='/img/coin.gif' alt='coin' width="100" height="100" />
            <Image src='/img/coin.gif' alt='coin' width="100" height="100" />
            <Image src='/img/coin.gif' alt='coin' width="100" height="100" />
            <Image src='/img/coin.gif' alt='coin' width="100" height="100" />
            <Image src='/img/coin.gif' alt='coin' width="100" height="100" />
            <Image src='/img/coin.gif' alt='coin' width="100" height="100" />
          </div>

        </section>

        <section className='bg-yellow-dots'>
          <div className='bg-wave-pink bg-repeat-x h-6 relative -top4'></div>
          <div className='sm:container xsm:w-full w-2/3 mx-auto md:flex justify-center items-center text-center py-6'>
            <div className='left-back xl:w-1/3 lg:w-1/2 p-5'>
              <h3 className='text-yellow-900 font-black xsm:text-3xl sm:text-4xl'>Cat Trasformation Center</h3>
              <p className='py-4 text-xl'>
                No somos gatitos, ¡transformate en un nuevo gato tástico!
              </p>
              <p>
                <Link href="#" >
                  <a className='xl:text-2xl my-4 inline-block py-2 px-16 bg-red-500 text-white font-black border-transparent border-8 rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 group'>
                    Meow!
                    <span className='w-4 h-4 inline-block border-yellow-300 border-solid border-t-[5px] border-r-[5px] transition-all transform rotate-45 group-hover:border-red-500 xl:group-hover:ml-4'></span>
                  </a>
                </Link>
              </p>
            </div>
            <div className='right-back xl:2/3 lg:w-1/2'>
              <Image src='/img/activity_img3.png' alt='activity' width="350" height="350" />
            </div>
          </div>
        </section>

        <section className='bg-black'>
          <div className='bg-wave-pattern bg-repeat-x h-6 relative -top-4'></div>

          <div className='container mx-auto text-center py-10 w-2/3'>
            <div className='pb-5'>
              <Link href="#" >
                <a className='xl:text-2xl my-4 inline-block py-2 px-16 bg-red-500 text-white font-black border-transparent border-8 rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 group'>
                  Atención al cliente
                  <span className='w-4 h-4 inline-block border-yellow-300 border-solid border-t-[5px] border-r-[5px] transition-all transform rotate-45 group-hover:border-red-500 xl:group-hover:ml-4'></span>
                </a>
              </Link>

            </div>

            <div className="text-white">
              <p className="py-2">*Es posible que se requieran juegos, sistemas y/o accesorios adicionales para el modo multijugador</p>

              <p className="py-2">** Se requiere una membresía de Nintendo Switch Online (se vende por separado) y una cuenta de Nintendo para las funciones en línea. No disponible en todos los paises. Se requiere acceso a Internet para las funciones en línea. Se requiere una cuenta Nintendo para recibir y canjear puntos de My Nintendo. Se aplican términos. nintendo.com/switch-online. </p>

              <p className="py-2">El juego, los sistemas, algunos accesorios y amiibo se venden por separado. Visite amiibo.com para obtener detalles sobre la funcionalidad de amiibo.</p>

              <p className="py-2">Nintendo Switch Lite reproduce todos los juegos compatibles con el modo portátil.</p>

              <p className="py-2">©2013-2022 Nintendo. Super Mario y Nintendo Switch son marcas comerciales de Nintendo.</p>
            </div>
          </div>

        </section>

      </div>
    </div>
  )
}
