import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      image: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/9780593189641.jpg",
      description: "Buku karya James Clear yang mengajarkan bagaimana perubahan kecil dalam kebiasaan sehari-hari dapat memberikan hasil luar biasa dalam jangka panjang.",
      price: "Rp 335.000",
      buyLink: "https://www.gramedia.com/products/atomic-habits",
      detailedDescription: "Atomic Habits adalah panduan praktis untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk. James Clear mengungkapkan strategi sederhana namun efektif yang akan mengajarkan Anda bagaimana membentuk kebiasaan baik, menghilangkan kebiasaan buruk, menguasai perilaku kecil yang mengarah pada hasil luar biasa. Buku ini menjelaskan bagaimana perubahan kecil 1% setiap hari dapat menghasilkan transformasi besar dalam jangka panjang.",
      publishYear: "2020",
      pages: 320,
      language: "English"
    },
    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      image: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/coee2x-4-4.jpg",
      description: "Morgan Housel mengajarkan tentang bagaimana orang berpikir tentang uang dan bagaimana perilaku keuangan yang baik lebih penting daripada matematika keuangan.",
      price: "Rp 346.000",
      buyLink: "https://www.gramedia.com/products/the-psychology-of-money",
      detailedDescription: "The Psychology of Money mengeksplorasi bagaimana uang bekerja tidak hanya dalam spreadsheet dan buku teks, tetapi juga di pikiran manusia. Morgan Housel menyajikan 19 cerita pendek yang mengeksplorasi cara-cara aneh orang berpikir tentang uang dan mengajarkan Anda cara memahami salah satu topik terpenting dalam hidup dengan lebih baik.",
      publishYear: "2025",
      pages: 256,
      language: "English"
    },
    {
      id: 3,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      image: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/9786020637181_THINKING_FAST_AND_SLOW_C_1_4-1.jpg",
      description: "Buku ini menyajikan pemahaman penulis mengenai pertimbangan dan pengambilan keputusan, yang telah dibentuk oleh penemuan-penemuan di bidang psikologi selama puluhan tahun terakhir.",
      price: "Rp 111.000",
      buyLink: "https://www.gramedia.com/products/thinking-fast-and-slow-cover-baru",
      detailedDescription: "Dalam buku ini, Daniel Kahneman, pemenang Nobel Ekonomi, menjelaskan dua sistem yang mendorong cara kita berpikir. Sistem 1 bersifat cepat, intuitif, dan emosional; Sistem 2 lebih lambat, lebih deliberatif, dan lebih logis. Kahneman mengungkapkan kemampuan dan kelemahan berpikir cepat, serta pengaruh intuisi pada keputusan kita.",
      publishYear: "2019",
      pages: 652,
      language: "Indoonesia"
    },
    {
      id: 4,
      title: "Jika Tidak Denganmu, Tidak dengan Siapapun",
      author: "Nila Sintia ",
      image: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/k4-k4n90pv.jpg",
      description: "Buku ini menggambarkan perasaan sedih dan putus asa ketika kisah cinta harus berakhir dan berpisah dengan satu orang yang dikiranya sebagai orang yang tepat untuk dicintai seumur hidup.",
      price: "Rp 72.000",
      buyLink: "https://www.gramedia.com/products/jika-tidak-denganmu-tidak-dengan-siapapun",
      detailedDescription: "Buku ini berisi kumpulan tulisan patah hati dan perasaan sulit melupakan seseorang. Tulisan-tulisan di dalamnya menggambarkan perasaan sedih dan putus asa ketika kisah cinta harus berakhir dan berpisah dengan satu orang yang dikiranya sebagai orang yang tepat untuk dicintai seumur hidup.",
      publishYear: "2025",
      pages: 136,
      language: "Indonesia"
    },
    {
      id: 5,
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      image: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/9786020333175_rich-dad-poor-dad-_edisi-revisi_.jpg",
      description: "Dengan perspektif yang kerap bertentangan dengan kebijaksanaan umum, Robert memiliki reputasi sebagai orang yang bicara secara apa adanya, tidak menganggap penting hal-hal yang umumnya dianggap serius, dan berani.",
      price: "Rp 51.000",
      buyLink: "https://www.gramedia.com/products/rich-dad-poor-dad-edisi-revisi",
      detailedDescription: "Rich Dad Poor Dad adalah buku keuangan pribadi yang ditulis oleh Robert T. Kiyosaki dan Sharon Lechter. Buku ini mengajarkan pentingnya kecerdasan finansial melalui perbandingan dua figur ayah dalam hidup Kiyosaki: ayah biologisnya (poor dad) dan ayah dari sahabatnya (rich dad). Buku ini menekankan pentingnya membangun aset yang menghasilkan pendapatan pasif.",
      publishYear: "2016",
      pages: 244,
      language: "Indonesia"
    },
    {
      id: 6,
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/products/i-x2529hct.jpeg",
      description: "The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. The story follows the shepherd boy Santiago in his journey across North Africa to the Egyptian pyramids after he dreams of finding a treasure there.",
      price: "Rp 216.000",
      buyLink: "https://www.gramedia.com/products/the-alchemist-2",
      detailedDescription: "The Alchemist mengikuti perjalanan seorang gembala muda bernama Santiago yang bermimpi tentang harta karun di Piramida Mesir. Dia memutuskan untuk mengikuti mimpinya dan dalam perjalanannya, dia belajar untuk mendengarkan hatinya, mengenali peluang, dan mengikuti tanda-tanda yang diberikan alam semesta. Buku ini adalah kisah tentang menemukan takdir pribadi dan pentingnya mendengarkan hati.",
      publishYear: "2024",
      pages: 182,
      language: "English"
    },
  ];

  const openModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
  <div className="container">

      {/* Heroes/ Content */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Atomic Habits: Perubahan kecil yang memberikan hasil luar biasa.</h1>
            <p className="lead">Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a href="https://www.gramedia.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</a>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={() => openModal(books[0])}>Detail</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img className="rounded-lg-3" src={books[0].image} alt={books[0].title} width="720"/>
          </div>
        </div>
      </div>

      {/* Product List */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">Koleksi buku terlaris kami dengan berbagai genre yang akan menginspirasi, menghibur, dan memperluas wawasan Anda. Temukan buku favorit Anda sekarang!</p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">Views</a>
              <a href="#" className="btn btn-secondary my-2">Other Books</a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm">
                  <img src={book.image} className="bd-placeholder-img card-img-top" width="100%" height="500" alt={book.title}/>
                  <div className="card-body">
                    <h5>{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href={book.buyLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">Buy</a>
                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => openModal(book)}>Detail</button>
                      </div>
                      <small className="text-body-secondary">{book.price}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book Detail Modal */}
      {showModal && selectedBook && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedBook.title}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <img src={selectedBook.image} className="img-fluid" alt={selectedBook.title} />
                  </div>
                  <div className="col-md-8">
                    <h6>Penulis: {selectedBook.author}</h6>
                    <p>{selectedBook.detailedDescription}</p>
                    <div className="row mt-3">
                      <div className="col-md-4">
                        <p><strong>Tahun Terbit:</strong> {selectedBook.publishYear}</p>
                      </div>
                      <div className="col-md-4">
                        <p><strong>Halaman:</strong> {selectedBook.pages}</p>
                      </div>
                      <div className="col-md-4">
                        <p><strong>Bahasa:</strong> {selectedBook.language}</p>
                      </div>
                    </div>
                    <p className="mt-3"><strong>Harga:</strong> {selectedBook.price}</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Tutup</button>
                <a href={selectedBook.buyLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Beli Sekarang</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default App
