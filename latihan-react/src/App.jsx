import './App.css'

/**
 * Membuat component Header
 * Component Header menampilkan navigasi
 */
function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}


/**
 * Membuat component Content
 * Component Content menampung konten utama
 */
function Content() {
  return (
    <>
      <h1>Ini adalah konten utama</h1>
    </>
  )
}


/**
 * Membuat component Footer
 * Component Footer menampilkan informasi footer
 */
function Footer() {
  return (
    <>
      <h2>NF Academy</h2>
      <p>Created by React JS</p>
    </>
  )
}


/**
 * Contoh penggunaaan JSX
 *  Menggunakan kurung kurawal {}
 */
function Hello() {
  const nama = "Fikri"
  const umur = 22
  return (
    <>
      <h2>Hello React</h2>
      <p>Saya {nama} seorang Frontend Developer yang berusia {umur}</p>
    </>
  )
}


/**
 * Contoh penggunaaan props
 *  Menggunakan Greeting
 */
function Greeting(props) {
  return ( <p>Hello, {props.name}</p>  // Karena hanya satu tag p maka bisa dijadikan satu baris
  )
}


/**
 * Contoh penggunaaan props
 *  Menggunakan beberapa tag untuk profile
 */
function Profile(props) {
  return ( 
    <>  
    <h4>Hai, Saya {props.name}</h4>
    <p>Umur saya {props.age}</p>
    <p>Saya dari {props.country}</p>
    </>
  )
}

function App() {

  return (
    <>
      <Header />
      <Content />
      <Hello />
      <Greeting name="Choco" />
      <Profile name="Joya" age={22} country="Indonesia" />
      <Footer />
    </>
  )
}

export default App
