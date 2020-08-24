
    

    const projectRelease = document.getElementById("projrel")
    const hiddenContent = document.getElementsByClassName("hidden")

    let count = 0;
    console.log(hiddenContent)
    projectRelease.addEventListener("click",function
    (event){
        event.preventDefault();

        if (count % 2 == 0){
            projectRelease.innerHTML= "Classes/Research"
            hiddenContent[0].classList.add("show")
            hiddenContent[1].classList.add("show")
            hiddenContent[2].classList.add("show")
            hiddenContent[3].classList.add("show")
            
        }else{
            projectRelease.innerHTML= "Projects"
            hiddenContent[0].classList.remove("show")
            hiddenContent[1].classList.remove("show")
            hiddenContent[2].classList.remove("show")
            hiddenContent[3].classList.remove("show")
        }
        

        
        ++count;
    });


    // var allHidden = document.getElementsByClassName('hidden');

    // console.log(allHidden);
    
    
    // var projectRelease2 = document.getElementsByTagName('li')
    
    // console.log(projectRelease2)
    
    // projectRelease2.forEach(element => {
    //     console.log("hey");
    // });





// const projectRelease = document.querySelector('#projrel');
// console.log(projectRelease2[17].innerHTML)

// projectRelease.addEventListener('click', (event) => {
//     console.log("this is working");
// })