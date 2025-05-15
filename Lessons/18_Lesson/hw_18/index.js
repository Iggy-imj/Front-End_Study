fetch("https://iggy-imj.github.io/my-favorite-book/book.json")
  .then((res) => {
    if (!res.ok) throw new Error("Failed to fetch JSON");
    return res.json();
  })
  .then((data) => {
    document.getElementById("title").innerText = data.title;
    document.getElementById("author").innerText = data.author;
    document.getElementById("year").innerText = data.year;
  })
  .catch((err) => {
    console.log(err.message);
    document.getElementById("book-info").innerText = "Error!!!";
  });
