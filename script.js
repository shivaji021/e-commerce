function addProduct() {
    var productName = document.getElementById("productName").value;
    var category = document.getElementById("category").value;
    var sellingPrice = document.getElementById("sellingPrice").value;
  
    var newRow = "<tr><td>" + productName + "</td><td>" + category + "</td><td>" + sellingPrice + "</td><td><button onclick='deleteProduct(this)'>Delete</button></td></tr>";
  
    document.getElementById("productList").innerHTML += newRow;
  
    // Clear form fields after adding a product
    document.getElementById("productName").value = "";
    document.getElementById("category").value = "electronics";
    document.getElementById("sellingPrice").value = "";
  }
  
  function deleteProduct(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
