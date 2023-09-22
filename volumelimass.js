function hitungVolume() {
    const inputPanjangSisiElement = document.getElementById("inputPanjangSisi");
    const inputTinggiElement = document.getElementById("inputTinggi");
    const hasilPerhitunganElement = document.getElementById("hasilPerhitungan");

    const panjangSisi = parseFloat(inputPanjangSisiElement.value);
    const tinggi = parseFloat(inputTinggiElement.value);

    if (isNaN(panjangSisi) || isNaN(tinggi) || panjangSisi <= 0 || tinggi <= 0) {
        hasilPerhitunganElement.innerText = "Masukkan panjang sisi alas dan tinggi yang valid (bilangan positif).";
    } else {
        const volume = (panjangSisi * panjangSisi * tinggi) / 3; // Rumus volume limas
        hasilPerhitunganElement.innerText = `Volume limas dengan panjang sisi alas ${panjangSisi} dan tinggi ${tinggi} adalah ${volume}`;
    }

    if (panjangSisi < 0 || tinggi < 0) {
        alert("Tidak dapat melakukan perhitungan dengan angka negatif.");
    }
}
