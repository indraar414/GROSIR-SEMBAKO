// Data Barang
let items = [];

// Tampilkan Data Barang
function displayItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';
  
  items.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `<p>${item.name} - ${item.quantity} x Rp${item.price}</p>
                         <button onclick="editItem(${index})">Edit</button>
                         <button onclick="deleteItem(${index})">Hapus</button>`;
    itemList.appendChild(itemDiv);
  });
}

// Tampilkan Form Tambah Barang
function showAddForm() {
  document.getElementById('addItemModal').style.display = 'block';
}

// Simpan Barang Baru
function addItem() {
  const itemName = document.getElementById('itemName').value;
  const itemPrice = parseFloat(document.getElementById('itemPrice').value);
  const itemQuantity = parseInt(document.getElementById('itemQuantity').value);

  if (itemName && !isNaN(itemPrice) && !isNaN(itemQuantity)) {
    const newItem = {
      name: itemName,
      price: itemPrice,
      quantity: itemQuantity
    };
    items.push(newItem);
    displayItems();
    closeModal();
  } else {
    alert('Mohon isi semua informasi barang dengan benar.');
  }
}

// Edit Barang
function editItem(index) {
  const newName = prompt('Masukkan nama baru:');
  const newPrice = parseFloat(prompt('Masukkan harga baru:'));
  const newQuantity = parseInt(prompt('Masukkan jumlah baru:'));

  if (newName && !isNaN(newPrice) && !isNaN(newQuantity)) {
    items[index].name = newName;
    items[index].price = newPrice;
    items[index].quantity = newQuantity;
    displayItems();
  } else {
    alert('Mohon isi semua informasi barang dengan benar.');
  }
}

// Hapus Barang
function deleteItem(index) {
  items.splice(index, 1);
  displayItems();
}

// Tutup Modal
function closeModal() {
  document.getElementById('addItemModal').style.display = 'none';
}

// Tampilkan Data Awal (Dummy Data)
items.push({ name: 'Beras', price: 12000, quantity: 10 });
items.push({ name: 'Gula', price: 10000, quantity: 5 });
displayItems();
