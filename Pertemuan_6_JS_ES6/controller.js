import users from "./data.js";

// Menampilkan data
const index = () => {
    console.log("Daftar Users:");
    users.map((user, index) => {
        console.log(`${index + 1}. ${user.nama}, ${user.umur} tahun, ${user.alamat}, ${user.email}`);
    });
};

// Menambahkan data
const store = (user) => {
    users.push(user);
    console.log(`User ${user.nama} berhasil ditambahkan!`);
};

// Menghapus data berdasarkan index
const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        console.log(`User ${users[index].nama} berhasil dihapus!`);
        users.splice(index, 1);
    } else {
        console.log("Index tidak valid!");
    }
};

export { index, store, destroy };
