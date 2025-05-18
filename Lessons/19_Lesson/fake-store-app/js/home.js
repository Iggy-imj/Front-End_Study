const productsList = document.getElementById("products-list");

async function fetchProducts() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");

    if (!res.ok) throw new Error("Failed!");

    const products = await res.json();

    products.forEach((product) => {
      const li = document.createElement("li");

      const title = document.createElement("p");
      title.textContent = product.title;

      const img = document.createElement("img");
      img.src = product.images[0];
      img.alt = product.title;
      img.width = 100;

      const price = document.createElement("p");
      price.textContent = `$${product.price}`;

      li.appendChild(title);
      li.appendChild(img);
      li.appendChild(price);

      productsList.appendChild(li);
    });
  } catch (err) {
    console.error("Error loading products:", err.message);
    productsList.textContent = "Error loading products";
  }
}

fetchProducts();
