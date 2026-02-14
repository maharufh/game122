let item = {id:101,imgUrl:
    "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    name:"Double PattyBurger",price:90,qty:1,rating:4.2};

let htmlCode= `<div class="card">
            <div class="img">
                <img src=${item.imgUrl}alt="">

         
            <div class="card-content"> 
                <h2>${item.name}</h2>
                <h4> &#8377 99.00</h4>
                <h5>⭐️⭐️ 4.5</h5>
            </div>
            <div class="qty">

                <button onclick="dec()">➖</button>
                <span id="qty-cal">${item.qty}</span>
                <button onclick="inc()">➕</button>
            </div>
        </div>
        </div>`;


        document.getElementById('items-section').innerHTML = htmlCode;
        let spanTag = document.getElementById('qty-cal');
        // let qty = 1;
        // spanTag.innerText = qty;

        function inc(){
            item.qty++;
            spanTag.innerText = item.qty;

        }
        function dec(){
            (item.qty>1)? item.qty--: item.qty =1;
        }


