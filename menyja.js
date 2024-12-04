//Funskioni per Gallery image

var slideIndex= 1;

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    if(n > slides.length) {
        slideIndex=1;
    }

    if(n<1){
        slideIndex = slides.length;
    }

    slides[slideIndex-1].style.display = "block";
}

showSlides(1);






//javascript objektet me meny kryesore


const menuItems=[
{
category: 'mengjesi',
name: 'onabortmlet me vez',
image: 'src prej internetit',
description:'vez, sallat, djath sharrri g qaj',
price:'4.5  eur'


},

{
category:'mengjesi',
name: 'makarona boloneze',
image: '#img src',
description:'makarona, djathe',
price:'3.5 eur'
},

{

category:'desert',
name:'trileqe',
image:'',
description: 'te knaq krejt',
price:'1.5eur'

}

{

category:'pijefreskuese',
name:'Golden Eagle',
image:'prej internetit',
description:'250ml , pije energjike',
price:'0.50cent'

}

];

//shfaqja e menys sipas kategoris


function filterMenu(){

    //thirrja e id qe jan ne pjesen e html
    const selectedCategory = document.getElementById('categorySelect').value;
    const menuGallery = document.getElementById('menuGallery');

    //fshirja e menys
    menuGallery.innerHTML ='';

    //filtrimi i menyse ne baz te kategorise ushqimore &pijeve
    const filteredItems = menuItems.filter(item => {
        return selectedCategory ==='all' || item.category === selectedCategory;
    });

}



