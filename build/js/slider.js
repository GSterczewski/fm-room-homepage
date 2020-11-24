
const atricles = [{
    title : "Discover innovative ways to decorate",
    body : "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img : "mobile-image-hero-1.jpg"
},
{
    title : "We are available all across the globe",
    body : "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img : "mobile-image-hero-2.jpg"
},
{
    title : "Manufactured with the best materials",
    body : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office",
    img : "mobile-image-hero-3.jpg"
}
]

const createImgSource = title => `public/images/${title}`
let currentArticle = 0

const nodes = {
    title : document.getElementById("js-title"),
    body : document.getElementById("js-body"),
    img : document.getElementById("js-img"),
    nextArrow : document.getElementById("js-next"),
    previousArrow : document.getElementById("js-previous")
}


const getArticle = () => atricles[currentArticle]
const incrementArticleCount = () => currentArticle === atricles.length -1 ?  currentArticle = 0 : currentArticle++;
const decrementArticleCount = () => currentArticle > 0 ? currentArticle-- : currentArticle = atricles.length -1;

const loadArticle = () => {
    const {title,body,img} = getArticle()
    nodes.title.innerText = title   
    nodes.body.innerText = body   
    nodes.img.src = createImgSource(img)   
} 

const nextArticle = () => {
    incrementArticleCount()
    loadArticle()
}
const previousArticle = () => {
    decrementArticleCount()
    loadArticle()
}

window.onload = function(){
    loadArticle()
    nodes.nextArrow.addEventListener("click",nextArticle)
    nodes.previousArrow.addEventListener("click",previousArticle)

}