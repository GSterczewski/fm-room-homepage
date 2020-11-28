

const articlesCollection = [{
    title : "Discover innovative ways to decorate",
    body : "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img : "image-hero-1.jpg",
    img : {
        src : "image-hero-1.jpg",
        alt: "table with four white chairs"
    }
},
{
    title : "We are available all across the globe",
    body : "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    
    img : {
        src : "image-hero-2.jpg",
        alt: "three simple chairs: yellow, white,pink"
    }
},
{
    title : "Manufactured with the best materials",
    body : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office",
    
    img : {
        src : "image-hero-3.jpg",
        alt: "black chair"
    }
}
]

const IDCollection = {
    navigation : 'js-header',
    hamburger : 'js-hamburger',
    closeBtn : 'js-close-nav',
    overlay : 'js-overlay',
    title : 'js-title',
    body : 'js-body',
    img : 'js-img',
    sourceMobile : "js-source-mobile",
    sourceDesktop : "js-source-desktop",
    sourceDefault : "js-source-default",
    nextArrow : 'js-next',
    nextArrowMobile : 'js-next-mobile',
    previousArrow : 'js-previous',
    previousArrowMobile : 'js-previous-mobile'
}


const hookNodes = collection => {
    let hookedNodes = {}
    for(let element in collection){
        hookedNodes[element] = document.getElementById(collection[element])
    }
    return hookedNodes
}

const Slider = (nodes,articles) => {
    let count = 0;
    const max = articles.length - 1;
    const imgDir = "assets/images"
    const incrementCount = () => count < max ? count++ : count = 0;
    const decrementCount = () => count > 0 ? count-- : count = max;
    const getArticle = () => articles[count];
    
    const createImgSource = title => ({
        mobile : `${imgDir}/mobile-${title}`,
        desktop : `${imgDir}/desktop-${title}`
        
    })

    
    const loadArticle = () => {
        const {title,body,img} = getArticle()
        const { mobile, desktop} = createImgSource(img.src)
        
        nodes.title.innerText = title 
        nodes.body.innerText = body 
        nodes.sourceMobile.srcset= mobile;
       
        nodes.sourceDesktop.srcset = desktop;
        nodes.sourceDefault.src = desktop;
        nodes.sourceDefault.alt = img.alt;
    }
    const nextArticle = () => {
        incrementCount()
        loadArticle()
       
    }
    const previousArticle = () => {
        decrementCount()
        loadArticle()
    } 
    return {
    loadArticle,
    nextArticle,
    previousArticle
}}


const Navigation = nodes => {
    const activeClasses = {
        navigation : "mobile-header--active",
        overlay : "overlay--active"
    }
    
    const show = () => {
        nodes.navigation.classList.add(activeClasses.navigation)
        nodes.overlay.classList.add(activeClasses.overlay)
    }
    const hide = () => {
        nodes.navigation.classList.remove(activeClasses.navigation)
        nodes.overlay.classList.remove(activeClasses.overlay)
    }
    return {
        show,
        hide       
    }
}


window.onload = () => {
    const nodes = hookNodes(IDCollection)
    const navigation = Navigation(nodes)
    const slider = Slider(nodes,articlesCollection)
    slider.loadArticle()
    nodes.hamburger.addEventListener("click",navigation.show)    
    nodes.closeBtn.addEventListener("click",navigation.hide)
    nodes.nextArrow.addEventListener("click",slider.nextArticle)    
    nodes.previousArrow.addEventListener("click",slider.previousArticle)
    nodes.nextArrowMobile.addEventListener("click",slider.nextArticle)    
    nodes.previousArrowMobile.addEventListener("click",slider.previousArticle)    
}