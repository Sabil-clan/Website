  let cartItems = [];
  let totalHarga = 0;

  function updateCartUI() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    totalHarga = 0;

    cartItems.forEach((item, index) => {
      totalHarga += item.harga;

      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";

      li.innerHTML = `
        ${item.nama}
        <span>
          <span class="badge rounded-pill bg-success me-2">Rp${item.harga.toLocaleString("id-ID")}</span>
          <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">
            <i class="fas fa-trash-alt"></i>
          </button>
        </span>
      `;

      cartList.appendChild(li);
    });

    document.getElementById("total").textContent = totalHarga.toLocaleString("id-ID");
  }

  function addToCart(namaProduk, harga) {
    cartItems.push({ nama: namaProduk, harga });
    updateCartUI();
  }

  function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartUI();
  }

  function showImage(imgElement) {
    const modalImg = document.getElementById("modalImage");
    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;
    document.getElementById("imageModalLabel").textContent = imgElement.alt;
  }

  function submitOrder(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const alamat = document.getElementById("alamat").value;
    const metode = document.getElementById("pembayaran").value;

    if (cartItems.length === 0) {
      alert("Keranjang kosong. Silakan tambahkan produk terlebih dahulu.");
      return false;
    }

    const ringkasan = `
🧾 Rincian Pesanan:
Nama: ${nama}
Alamat: ${alamat}
Metode: ${metode}
Total: Rp${totalHarga.toLocaleString("id-ID")}

Produk:
${cartItems.map(i => "- " + i.nama + " (Rp" + i.harga.toLocaleString("id-ID") + ")").join("\n")}
    `;
    alert("✅ Pesanan Anda berhasil!\n\n" + ringkasan);

    cartItems = [];
    totalHarga = 0;
    updateCartUI();
    document.querySelector("#checkout form").reset();
    return false;
  }


      function showImage(imgElement) {
    const modalImg = document.getElementById("modalImage");
    modalImg.src = imgElement.src;
    modalImg.alt = imgElement.alt;
    document.getElementById("imageModalLabel").textContent = imgElement.alt;
  }  