document.addEventListener("DOMContentLoaded", function(){
    renderImage();
    function renderImage(){
        return fetch("db.son/images/1")
         .then(res => res.json())
         .then((data) => {
            document.querySelector('#dish-image').src=data.image
            document.querySelector('#dish-name').innerHTML = data.title
         });

        } fetch("db.json/images/1")
        .then(res => res.json())
        .then((data) =>{
            addLikes(data)
        })


        reviewForm=document.querySelector('#review-form')
        reveiwForm.addEventListener('submit', (e)=>{
            e.preventDefault();
         reviewInput=document.querySelector('review')

        console.log(reviewInput);
         commentList=document.createElement('li');
        commentList.textContent=reviewInput.value;
        document.querySelector(".reviews").appendChild(commentList) 
        let newReview = {
            id: data.reviewss.length+1,
            imageId: 1,
            content: reviewInput.value
        } 

        data.reviews.push(newReview);

        fetch('db.json/description/1', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data => console.log(data))
    .catch(error => console.log(`Error: ${error}`));

    fetch('db.json', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newReview)
    })
    .then(res=> res.json())
    .then(data => console.log(data))
    .catch(error => console.log(`Error: ${error}`));

   // reviewForm.reset();

        })

         });
        

     const orderBtn = document.querySelector(".cardBtn") ;
     

     orderBtn.addEventListener("click", event => {
        event.target.style.backgroundColor = "yellow";
        event.target.textContent = "Done"
     })
    
    


    
