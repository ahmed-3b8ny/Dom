/*
=====3 parts=============
-Part1
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.getElementsByName()
document.querySelectorAll('.demo .test h1')//10h1
document.querySelector('.demo .test h1')//h1
-Part2
elm,event,action
i====click==
elm.style.property
elm.style.cssText
elm.classList.add('test'),remove,replace
-part3
addEventListener
*/


// var Close = document.getElementById('close')
// var boxContainer = document.getElementById('boxContainer')
// var img = Array.from(document.querySelectorAll('.item img'))
// var boxItem = document.getElementById('boxItem')
// var next = document.getElementById('next')
// var prev = document.getElementById('prev')



// Close.addEventListener('click', function() {
//     boxContainer.style.display = 'none'
// })
// var imgIndex = 0

// for (var i = 0; i < img.length; i++) {
//     img[i].addEventListener('click', function(e) {
//         imgIndex = img.indexOf(e.target)
//         boxContainer.style.display = 'flex'
//         boxItem.style.backgroundImage = `url(${e.target.src})`
//     })

// }

// next.addEventListener('click', nextImg)

// function nextImg() {
//     imgIndex++
//     if (imgIndex == img.length) {
//         imgIndex = 0
//     }
//     boxItem.style.backgroundImage = `url(${img[imgIndex].src})`

// }

// prev.addEventListener('click', prevImg)

// function prevImg() {
//     imgIndex--
//     if (imgIndex == 0) {
//         imgIndex = img.length - 1
//     }
//     boxItem.style.backgroundImage = `url(${img[imgIndex].src})`

// }

// document.addEventListener('keyup', function(e) {
//     if (e.key == "ArrowRight") {
//         nextImg()
//     } else if (e.key == "ArrowLeft") {
//         prevImg()
//     } else if (e.key == "Escape") {
//         boxContainer.style.display = 'none'

//     }
// })


// boxContainer.addEventListener('click', function(e) {
//     boxContainer.style.display = 'none'
//     boxItem.addEventListener('click', function(e) {
//         e.stopPropagation()
//     })

// })



// class person {
//     constructor(pname, page, pdepart) {
//         this.name = pname;
//         this.age = page;
//         this.department = pdepart
//     }
// }

// let p1 = new person('ahmed', 23, 'front')


// class engineer extends person {
//     constructor(pname, page, pdepart, gender) {
//         super(pname, page, pdepart)
//         this.gender = gender
//     }
// }
// let eng1 = new engineer()



// // ===================

// new WOW().init();
// // ////////////
// $(document).ready(function() {
//     $('#spinner').fadeOut(50)

// })





var Close = document.getElementById("close")
var boxContainer = document.getElementById('boxContainer')
var itemImage = Array.from(document.querySelectorAll('.item img'))
var boxItem = document.getElementById('boxItem')
var next = document.getElementById('next')
var prev = document.getElementById('prev')


var imgIndex=0

Close.addEventListener('click', function () {
    boxContainer.style.display = 'none'
})

 
for (let i = 0; i < itemImage.length; i++) {
    itemImage[i].addEventListener('click', function (e) {
        boxContainer.style.display = 'flex'
        boxItem.style.backgroundImage = `url(${e.target.src})`
        imgIndex=itemImage.indexOf(e.target)
        


    })

}

next.addEventListener('click', nextImage)

function nextImage() {

    imgIndex++
    if (imgIndex==itemImage.length) {
        imgIndex=0
    }
    boxItem.style.backgroundImage = `url(${itemImage[imgIndex].src})`

}

prev.addEventListener('click', prevImage)

function prevImage() {

    imgIndex--
    if (imgIndex<0) {
        imgIndex=itemImage.length-1
    }
    boxItem.style.backgroundImage = `url(${itemImage[imgIndex].src})`

}

document.addEventListener('keyup',function(e){
    
    if (e.key=='ArrowRight') {
        nextImage()
    } else if(e.key=='ArrowLeft') {
        prevImage()
    }else if(e.key=='Escape'){
        boxContainer.style.display = 'none'

    }
})
boxContainer.addEventListener('click',function(e){
    boxContainer.style.display = 'none'

})
boxItem.addEventListener('click',function(e){
    e.stopPropagation()
})
