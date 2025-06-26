
function formatRupiah(input) {
  let nilai = input.value;
  nilai = nilai.replace(/[^0-9]/g, ''); // Hapus karakter non-angka
  nilai = nilai.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Tambahkan pemisah ribuan
  input.value = nilai;
}

function to_rupiah(angka){
    var rev     = parseInt(angka, 0).toString().split('').reverse().join('');
    var rev2    = '';
    for(var i = 0; i < rev.length; i++){
        rev2  += rev[i];
        if((i + 1) % 3 === 0 && i !== (rev.length - 1)){
            rev2 += '.';
        }
    }
    return rev2.split('').reverse().join('');
}

function check_int(evt) {

        var charCode = ( evt.which ) ? evt.which : event.keyCode;
       
        return ( charCode >= 48 && charCode <= 57 || charCode == 8 || charCode ==45);
    }

function buang_rupiah(angka) {
    x=angka.replaceAll(".","");
    return x;
}

function leadingzero(number, length) {
    return String(number).padStart(length, '0');
}
