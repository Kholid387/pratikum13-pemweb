function validateLogin() {
    // Mendapatkan nilai input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Memeriksa apakah username dan password sesuai dengan kriteria tertentu
    if (username === 'oranganteng' && password === 'ganteng12') {
        window.location.href = "loginberhasil.html"
      alert('Login Sukses');
    } else {
      alert('Login gagal');
    }
  }