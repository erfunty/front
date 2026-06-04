'strict mode'

const { createElement } = require("react")

const createImage=function(imgPath){
    return new Promise(function(resolve,reject){
        const img=document.createElement('img')
        img.src=imgPath
        img.addEventListener('load',resolve)
    }

    )

}
createElement('.\img\img-1.jpg')