import { index, store, destroy } from "./controller.js";

const main = () => {
    // Tambah dua data baru
    store({ nama: "Data 11", umur: 30, alamat: "Jl. Data 11", email: "data11@example.com" });
    store({ nama: "Data 12", umur: 31, alamat: "Jl. Data 12", email: "data12@example.com" });

    // Tampilkan semua data
    index();

    // Hapus data pertama (index 0)
    destroy(0);

    // Tampilkan data setelah penghapusan
    index();
};

main();
