
class ArticleLoader {
    constructor(articles){
        this.articles = articles
        this.titleNode = document.getElementById("js-title")
        this.bodyNode = document.getElementById("js-body")
        this.imgNode = document.getElementById("js-img")
    }
    createImgSource = (title) => `public/images/${title}`
    getArticle(articleIndex){
        return this.articles[articleIndex]
    }
    load(articleIndex){
        const { title,body,img} = this.getArticle(articleIndex)
        this.titleNode.innerText = title 
        this.bodyNode.innerText = body 
        this.imgNode.src = this.createImgSource(img)
    }

    
}

const Slider = (function(){
    let counter = 0
    const maxCount = 2
    const minCount = 0
    const articles = [{
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
    const loader = new ArticleLoader(articles)
    
    const _incrementCounter = () => counter < maxCount ? counter++ : counter = 0;
    const _decrementCounter = () => counter > minCount ? counter-- : counter = maxCount;
    const _withLoad = (callback) => {
        callback()
        loader.load(counter)
    }
    return {
        nextArticle :() => _withLoad(_incrementCounter),
        previousArticle : () =>_withLoad(_decrementCounter),
        loadArticle: () => loader.load(counter)
    }
})()

window.onload = () => {
    Slider.loadArticle()
    document.getElementById("js-next").addEventListener("click",Slider.nextArticle)
    document.getElementById("js-previous").addEventListener("click",Slider.previousArticle)
}