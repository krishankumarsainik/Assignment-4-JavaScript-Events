var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
        1,
        1,
        0,
        1,
        0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}


console.log(productData)

// var leftBox = document.getElementById("leftBox")
var container = document.createElement("div");
container.classList.add("container");

var leftBox = document.createElement("div");
leftBox.classList.add("left-box");
var rightBox = document.createElement("div");
rightBox.classList.add("right-box");


var img = document.createElement("img")
img.src = productData.photos[0]
img.classList.add("product-image");

var pname = document.createElement("h4")
pname.innerHTML = productData.name
pname.classList.add("product-name")

var brand = document.createElement("p")
brand.innerHTML = productData.brand

var price = document.createElement("p")
price.innerHTML = `PRICE:Rs ${productData.price}`

var description = document.createElement("p")
description.innerHTML = 'Description'

var descriptionDetails = document.createElement("p")
descriptionDetails.innerHTML = productData.description
descriptionDetails.classList.add("description")

var productPreview = document.createElement("p")
productPreview.innerHTML = 'Product Preview'
productPreview.classList.add("productPreview")

var otherImage = document.createElement("div")
otherImage.classList.add("otherImage")
otherImage.src = productData.photos[1]
// console.log(otherImage)
let image2 = document.createElement("img")
image2.classList.add("image2")

for (let i = 1; i < productData.photos.length; i++) {
    totalimg = document.createElement("img")

    totalimg.src = image2.src = productData.photos[i]
    otherImage.append(totalimg);
    totalimg.classList.add("image2")


}


leftBox.append(img);
rightBox.append(pname, brand, price, description, descriptionDetails, productPreview, otherImage);
container.append(leftBox, rightBox);
document.body.appendChild(container)
