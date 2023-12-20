let VIP = parseFloat(prompt("masukkan total tiket VIP"))
let Eks = parseFloat(prompt("masukkan total tiket eksekutif"))
let Eko = parseFloat(prompt("masukkan total tiket ekonomi"))

// VIP
if(VIP >= 35) {
    keuntungan = 25
} else if(VIP >= 20 && VIP < 35) {
    keuntungan = 15
} else {
    keuntungan = 5
}

// Eks
if(Eks >= 40) {
    keuntungan2 = 20
} else if(Eks => 20 && Eks < 40) {
    keuntungan2 = 10
} else {
    keuntungan2 = 2
}

// Eko
if (Eko >= 0) {
    keuntungan3 = 7
}

let kelasVIP = VIP * keuntungan
let kelasEks = Eks * keuntungan2
let kelasEko = Eko * keuntungan3
let jumlahkeuntungan = kelasEko + kelasEks + kelasVIP
let jumlahtiket = VIP + Eks + Eko

document.write(`Jadi keuntungan per kelas adalah ${kelasVIP}% untuk kelas VIP, ${kelasEks}% untuk kelas eksekutif dan ${kelasEko}% untuk kelas ekonomi`)
document.write('<br>')
document.write('<br>')
document.write(`Jadi keuntungan secara keseluruhan adalah ${jumlahkeuntungan}%`)
document.write('<br>')
document.write('<br>')
document.write(`Jadi jumlah tiket per-kelas adalah ${VIP} tiket VIP, ${Eks} tiket eksekutif, dan ${Eko} tiket ekonomi.`)
document.write('<br>')
document.write('<br>')
document.write(`Jadi total tiket dari setiap kelas adalah ${jumlahtiket}`)

console.log(`Jadi keuntungan per kelas adalah ${kelasVIP}% untuk kelas VIP, ${kelasEks}% untuk kelas eksekutif dan ${kelasEko}% untuk kelas ekonomi`)
console.log(`Jadi keuntungan secara keseluruhan adalah ${jumlahkeuntungan}%`)
console.log(`Jadi jumlah tiket per-kelas adalah ${VIP} tiket VIP, ${Eks} tiket eksekutif, dan ${Eko} tiket ekonomi.`)
console.log(`Jadi total tiket dari setiap kelas adalah ${jumlahtiket}`)