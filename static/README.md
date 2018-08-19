
- GET => /books (回傳所有書籍)
```javascript
[
    {
        "id": 1,
        "ISBN": "9789864766826",
        "bookName": "重構 JavaScript",
        "imgSrc": "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/078/94/0010789427.jpg&v=5b1522bd&w=150&h=150",
        "author": "Evan Burchard",
        "translator": "蔡存哲",
        "desc": "描述, 簡介",
        "publishing_house": "歐萊禮",
        "publish_date": "2018/06/14",
        "create_at": "建立時間"
    },
    {
        "id": 2,
        "ISBN": "9789863796725",
        "bookName": "JavaScript再上一層樓：用新一代Node.js把後端也搞定",
        "imgSrc": "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/079/19/0010791908.jpg&w=150&h=150",
        "author": "李鍇",
        "translator": "",
        "desc": "描述, 簡介",
        "publishing_house": "佳魁資訊",
        "publish_date": "2018/07/05",
        "create_at": "建立時間"
    }
]
```

- GET => /comments (回傳所有評論)
```javascript
[
    {
        "id": 1,
        "book_id": 1,
        "ISBN": "9789864766826",
        "name": "匿名",
        "advantage": "優點內容",
        "disadvantage": "缺點內容",
        "evaluation": null,
        "anonymous": "匿名",
        "create_at": "建立時間"
    },
    ...
    {
        "ISBN": "9789864766826",
        "name": "匿名",
        "advantage": "asdas",
        "disadvantage": "dasdasdasdsad\n72725375\n557\n75\n7\n75\n57\n",
        "evaluation": null,
        "anonymous": null,
        "create_at": "2018/08/19, 02:04:28",
        "id": 16
    }
]
```

- POST => /comment (新增評論)
```javascript
// 參數 Body raw JSON (application/json)
{
    "book_id": 1,
    "ISBN": "9789864766826",
    "name": "匿名",
    "advantage": "優點內容",
    "disadvantage": "缺點內容",
    "evaluation": null,
    "anonymous": "匿名",
    "create_at": "建立時間"
}
```

- DELETE => /products/4 (刪除 id 為 4 的評論)
