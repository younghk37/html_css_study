window.onload = () => {
    loadBookList();
}

const bookList = new Array();

bookList.push({
    bookName: "동화책",
    author: "김동화",
    publisher: "꿈동산"
});
bookList.push({
    bookName: "사전",
    author: "김사전",
    publisher: "사전회사"
});
bookList.push({
    bookName: "시",
    author: "이시",
    publisher: "시나라"
});
bookList.push({
    bookName: "영어풀이",
    author: "박영어",
    publisher: "영어회사"
});
bookList.push({
    bookName: "나무",
    author: "김나무",
    publisher: "나무회사"
});

const loadBookList = () => {
    const bookListObj = document.querySelector(".book-list");

    bookListObj.innerHTML = bookList.map((book) => {
        return `
            <li>
                <span>${book.bookName}</span> |
                <span>${book.author}</span> |
                <span>${book.publisher}</span>
            </li>
        `;
    }).join("");
}

const addBookOnClickHandle = () => {
    const book = {
        bookName: document.querySelector(".book-name").value,
        author: document.querySelector(".book-author").value,
        publisher: document.querySelector(".book-publisher").value
    }

    bookList.push(book);
    loadBookList();
};

// const appendBookToBookList = () => {
//     const bookNameObj = document.querySelector(".book-name");
//     const bookAuthorObj = document.querySelector(".book-author");
//     const bookPublisherObj = document.querySelector(".book-publisher");

//     bookList.push({
//         bookName: bookNameObj.value,
//         author: bookAuthorObj.value,
//         publisher: bookPublisherObj.value
//     });
    
//     bookNameObj.value = "";
//     bookAuthorObj.value = "";
//     bookPublisherObj.value = "";

//     loadBookList();
// };