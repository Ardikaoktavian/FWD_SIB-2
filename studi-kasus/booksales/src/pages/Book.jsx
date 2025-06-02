import React, { useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Book = () => {
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
  {
    id: 7,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    image: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/7-i-thiefi.jpg",
    description: "Buku ini menyajikan pendekatan holistik untuk menyelesaikan masalah pribadi dan profesional melalui tujuh kebiasaan yang transformatif.",
    price: "Rp 120.000",
    buyLink: "https://www.gramedia.com/products/the-7-habits-of-highly-effective-people",
    detailedDescription: "The 7 Habits of Highly Effective People adalah buku pengembangan diri yang ditulis oleh Stephen R. Covey. Buku ini menyajikan pendekatan holistik untuk menyelesaikan masalah pribadi dan profesional melalui tujuh kebiasaan yang transformatif: proaktif, mulai dengan tujuan akhir, dahulukan yang utama, berpikir menang-menang, berusaha memahami terlebih dahulu baru dipahami, sinergi, dan asah gergaji.",
    publishYear: "2015",
    pages: 480,
    language: "Indonesia"
  },
  {
    id: 8,
    title: "Educated",
    author: "Tara Westover",
    image: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/products/65decde8c5.jpg",
    description: "Memoir Tara Westover tentang perjalanannya dari keluarga survivalis di Idaho hingga meraih gelar PhD dari Cambridge, menunjukkan kekuatan pendidikan.",
    price: "Rp 260.000",
    buyLink: "https://www.gramedia.com/products/educated-3",
    detailedDescription: "Educated adalah memoir Tara Westover yang menceritakan perjalanan hidupnya dari tumbuh di keluarga survivalis Mormon di pegunungan Idaho, tanpa pendidikan formal, hingga akhirnya meraih gelar PhD dari Cambridge University. Buku ini mengeksplorasi tema-tema keluarga, identitas, dan kekuatan transformatif pendidikan.",
    publishYear: "2024",
    pages: 400,
    language: "English"
  },
  {
    id: 9,
    title: "1984",
    author: "George Orwell",
    image: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/3/5/zkppnzqigyqalgqftuzbpz.jpg",
    description: "Novel distopia klasik yang menggambarkan masyarakat totaliter di bawah pengawasan konstan, mengeksplorasi tema kebebasan dan kebenaran.",
    price: "Rp 129.000",
    buyLink: "https://www.gramedia.com/products/1984-1",
    detailedDescription: "1984 adalah novel distopia klasik karya George Orwell yang diterbitkan pada tahun 1949. Novel ini menggambarkan masyarakat totaliter di bawah pengawasan konstan oleh 'Big Brother', di mana kebebasan berpikir ditekan dan sejarah terus-menerus ditulis ulang. Buku ini mengeksplorasi tema-tema kebebasan, totalitarianisme, pengawasan massal, dan manipulasi kebenaran.",
    publishYear: "2023",
    pages: 468,
    language: "Indonesia"
  },
  {
    id: 10,
    title: "Positivity Power",
    author: "R.D. Asti",
    image: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/products/c05y2ttzyi.jpg",
    description: "Pikiran lebih dari sekadar hasil dari kegiatan berpikir. Pikiran adalah hal yang menuntun kita dalam menjalani hidup dan mendefinisikan diri kita.",
    price: "Rp 120.000",
    buyLink: "https://www.gramedia.com/products/positivity-power",
    detailedDescription: "Pikiran adalah alat yang ampuh untuk meraih kesuksesan. Jika kita percaya bahwa kita bisa sukses, kita seringnya akan berhasil. Sebaliknya, jika kita percaya bahwa kita tidak akan berhasil, maka kita seringnya gagal. Ini tidak berarti kita adalah makhluk yang bernubuat, ini hanya berarti bahwa kita mulai mempercayai apa yang berputar-putar di dalam kepala kita.",
    publishYear: "2025",
    pages: 200,
    language: "Indonesia"
  },
  {
    id: 11,
    title: "Secrets of Divine Love: Sebuah Perjalanan Spiritual yang Mendalam tentang Islam",
    author: "A. Helwa",
    image: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/WhatsApp_Image_2022-01-06_at_08.45.44.png",
    description: "Secrets of Divine Love: Sebuah Perjalanan Spiritual yang Mendalam tentang Islam ditulis untuk hati yang rindu, untuk orang yang mencari sesuatu yang belum bisa mereka temukan.",
    price: "Rp 120.000",
    buyLink: "https://www.gramedia.com/products/secrets-of-divine-love-sebuah-perjalanan-spiritual-yang-mendalam-tentang-islam-1",
    detailedDescription: "Apakah Anda berada di jalan Islam atau hanya mencari untuk mengenal Tuhan, Secrets of Divine Love: Sebuah Perjalanan Spiritual yang Mendalam tentang Islam menggunakan bahasa spiritualitas untuk mengubah hubungan Anda dengan Tuhan, diri sendiri, dan dunia di sekitar Anda. Selain menawarkan perspektif yang tulus tentang teologi Islam, buku ini akan menuntun Anda melalui latihan praktis yang mengilhami cinta, memperkuat iman, dan meningkatkan ketergantungan pada keintiman dengan Tuhan. Dengan memanfaatkan kata-kata inspiratif Al-Qur`an dan Nabi Muhammad, menggali puisi spiritual, dan belajar melalui kisah-kisah dari guru spiritual terbesar di dunia, buku ini berupaya menghubungkan hati pembaca dengan Tuhan.",
    publishYear: "2022",
    pages: 440,
    language: "Indonesia"
  },
  {
    id: 12,
    title: "Tenang, Kamu Cuma Cemas",
    author: "Adi Riyadi",
    image: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/product-metas/uzc11s7u9v.jpg",
    description: "Overthingking sering kali membuatmu merasa terjebak dan tidak berdaya. Buku ini hadir untuk menemani keseharianmu, membantu memahami dan mengendalikan pikiran menjadi lebih tenang dan positif.",
    price: "Rp 55.000",
    buyLink: "https://www.gramedia.com/products/tenang-kamu-cuma-cemas",
    detailedDescription: "Dari membaca sebelum tidur hingga menyempatkan waktu di pagi hari, kebiasaan membaca dapat dibentuk dengan konsistensi. Pilih buku sesuai minat dan level literasi. Mulailah dengan buku yang sesuai dengan keinginan dan kemampuan membaca. Temukan tempat yang tenang dan nyaman untuk membaca. Lampu yang cukup, kursi yang nyaman, dan sedikit musik pelataran bisa menciptakan pengalaman membaca yang lebih baik. Bergabunglah dalam kelompok membaca atau forum literasi. Diskusikan buku yang Anda baca dan dapatkan rekomendasi dari sesama pembaca. Buat catatan atau jurnal tentang buku yang telah Anda baca.",
    publishYear: "2025",
    pages: 248,
    language: "Indonesia"
  }
];

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">All Books 📚</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {books.map((book) => (
          <div key={book.id} className="col" data-aos="fade-up" data-aos-delay={book.id * 100} >
            <div className="card h-100 shadow-sm">
              <img
                src={book.image}
                className="card-img-top"
                alt={book.title}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text text-muted">by {book.author}</p>
                <p className="card-text fw-semibold text-primary">{book.price}</p>
                <button
                  className="btn btn-outline-primary mt-auto"
                  onClick={() => setSelectedBook(book)}
                >
                  <i className="fa-solid fa-eye me-2"></i>View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Pop-up */}
      {selectedBook && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedBook.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedBook(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-5">
                    <img
                      src={selectedBook.image}
                      alt={selectedBook.title}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-7">
                    <h6>Author: <span className="fw-normal">{selectedBook.author}</span></h6>
                    <h6>Year: <span className="fw-normal">{selectedBook.publishYear}</span></h6>
                    <h6>Pages: <span className="fw-normal">{selectedBook.pages}</span></h6>
                    <h6>Language: <span className="fw-normal">{selectedBook.language}</span></h6>
                    <h6 className="mt-3">Description:</h6>
                    <p>{selectedBook.detailedDescription}</p>
                    <a
                      href={selectedBook.buyLink}
                      className="btn btn-success"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-solid fa-cart-shopping me-2"></i>Beli Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Book;
