
    

    const projectRelease = document.getElementById("projrel")
    const hiddenContent = document.getElementsByClassName("hidden")

    const classSpecRelease = document.getElementsByClassName("RC")
    const researchSpecRelease = document.getElementsByClassName("R")



    function addShow(element, content){
        element.preventDefault();

        if(!content.classList.contains("show")){
            content.classList.add("show")
        }else{
            console.log("here")
            content.classList.remove("show")
        }
    }



    let count = 0;
    // console.log(hiddenContent)



    console.log(classSpecRelease);

    classSpecRelease[0].addEventListener("click", function(element){addShow(element, hiddenContent[0])});
    classSpecRelease[1].addEventListener("click", function(element){addShow(element, hiddenContent[1])});
    classSpecRelease[2].addEventListener("click", function(element){addShow(element, hiddenContent[2])});
    researchSpecRelease[0].addEventListener("click", function(element){addShow(element, hiddenContent[3])});


    // hiddenContent[3].classList.add("show")


    // projectRelease.addEventListener("click",function
    // (event){
    //     event.preventDefault();

    //     if (count % 2 == 0){
    //         projectRelease.innerHTML= "Classes/Research"
    //         hiddenContent[0].classList.add("show")
    //         hiddenContent[1].classList.add("show")
    //         hiddenContent[2].classList.add("show")
    //         hiddenContent[3].classList.add("show")
            
    //     }else{
    //         projectRelease.innerHTML= "Projects"
    //         hiddenContent[0].classList.remove("show")
    //         hiddenContent[1].classList.remove("show")
    //         hiddenContent[2].classList.remove("show")
    //         hiddenContent[3].classList.remove("show")

           
    //     }
        

        
    //     ++count;
    // });
