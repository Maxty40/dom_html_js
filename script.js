// DOM Selector
const judulElemen = document.getElementById("judul");
const tombolElemen = document.getElementById("tombol");

console.log(judulElemen);
console.log(tombolElemen);

// DOM Event Listener
const tombol = document.getElementById("myBtn");
tombol.addEventListener("click", function () {
  alert("Tombol berhasil diklik!");
});

// DOM Manipulation
tombolElemen.addEventListener("click", function () {
  judulElemen.textContent = "Teks Berhasil Diubah!";
  judulElemen.style.color = "crimson";
});
