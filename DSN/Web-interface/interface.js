// Loading screen scripting
const splash = document.querySelector('.splashScreen');
const splashHeading = document.querySelector('#splashHEading');
const circle = document.querySelectorAll('.circle');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

            circle.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.add('fadeup');
                }, (idx + 1)*190);
            });

        setTimeout(()=>{
            circle.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('fadeup');
                    span.classList.add('fadedown');
                }, (idx + 1)* 100);
            });
        }, 1000);


        setTimeout(()=>{
            circle.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('fadedown');
                    span.classList.add('fadeup');
                }, (idx + 1)* 100);
            });
        }, 1500);
        setTimeout(()=>{
            circle.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.add('fadedown');
                    span.classList.remove('fadeup');
                }, (idx + 1)* 100);
            });
        }, 2000);
        setTimeout(()=>{
            circle.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('fadeDown');
                    span.classList.add('endFade');
                }, (idx + 1)* 100);
            });
        }, 2500);
        

        setTimeout(()=>{
            splash.style.left = "-100vw";
        }, 3600);
    });
});



// DISPLAY SCRIPTING

// Selecting the page elements

let homePage = document.querySelector(".home");
let profilePage = document.querySelector(".Profile");
let settingsPage = document.querySelector(".settings");
let defaultPage = document.querySelector(".default");
let chatBoxPage1 = document.querySelector(".chatbox1");
let chatBoxPage2 = document.querySelector(".chatbox2");
let chatBoxPage3 = document.querySelector(".chatbox3");


// Selecting the icons and click function elements
let firstChat = document.getElementById("firstChat")
let secondChat = document.getElementById("secondChat")
let thirdChat = document.getElementById("thirdChat")
let homeIcon = document.getElementById("homeIcon");
let profileIcon = document.getElementById("profileIcon");
let settingsIcon = document.getElementById("settingsIcon");

// Adding functionalities

// Home Icon display
homeIcon.addEventListener('click', ()=>{
    homePage.classList.remove('displayNone');
    profilePage.classList.add('displayNone');
    settingsPage.classList.add('displayNone');
})
// Profile Icon display
profileIcon.addEventListener('click', ()=>{
    homePage.classList.add('displayNone');
    profilePage.classList.remove('displayNone');
    settingsPage.classList.add('displayNone');
})
// Settings Icon display
settingsIcon.addEventListener('click', ()=>{
    homePage.classList.add('displayNone');
    profilePage.classList.add('displayNone');
    settingsPage.classList.remove('displayNone');
})

// First Chat display
firstChat.addEventListener('click', ()=>{
    defaultPage.classList.add('displayNone');
    chatBoxPage1.classList.remove('displayNone');
    chatBoxPage2.classList.add('displayNone');
    chatBoxPage3.classList.add('displayNone');
})

// Second Chat display
secondChat.addEventListener('click', ()=>{
    defaultPage.classList.add('displayNone');
    chatBoxPage1.classList.add('displayNone');
    chatBoxPage2.classList.remove('displayNone');
    chatBoxPage3.classList.add('displayNone');
})

// THird Chat display
thirdChat.addEventListener('click', ()=>{
    defaultPage.classList.add('displayNone');
    chatBoxPage1.classList.add('displayNone');
    chatBoxPage2.classList.add('displayNone');
    chatBoxPage3.classList.remove('displayNone');
})


// TOGGLE DARK THEME SCRIPTING

// Declaring variables
let toggleButton = document.getElementById("moonIcon");
let moonIcon = document.querySelector(".moonIcon")
let mainBox = document.getElementById("mainBox");
let logoutIcon = document.getElementById("logoutIcon");
let body = document.getElementsByTagName("body")[0];
let middleBox = document.getElementsByClassName("middle-box")[0];
let names = document.querySelectorAll(".name");
let icons = document.querySelectorAll(".icons");
let navbar = document.querySelectorAll(".chatNav");
let leftChats = document.querySelectorAll(".left");
let rightChats = document.querySelectorAll(".right");
let textArea = document.querySelectorAll(".textArea");
let profileName = document.getElementById("profileName");
let whiteText = document.querySelectorAll(".whiteText")
let settingsInput = document.querySelectorAll(".settingsInput");
let saveBtn = document.getElementById("saveBtn");
let search = document.querySelector(".search");



// Creating function for changing multiple elemtns at once
let changeNameColor = ()=>{
    for( i=0 ; i < names.length; i++){
            names[i].style.color = "white";
    }
}

let changeNameColorBack = ()=>{
    for( i=0 ; i < names.length; i++){
        names[i].style.color = "black";
    }
}

let changeIconColor = ()=>{
    for( i=0 ; i < icons.length; i++){
        icons[i].style.color = "white";
    }
}

let changeIconColorBack = ()=>{
    for( i=0 ; i < icons.length; i++){
        icons[i].style.color = "black";
    }
}

let changeNavcolor = ()=>{
    for( i=0 ; i < navbar.length; i++){
        navbar[i].style.backgroundColor = "#1e2026";
    }
}

let changeNavcolorBack = ()=>{
    for( i=0 ; i < navbar.length; i++){
        navbar[i].style.backgroundColor = "aliceblue";
    }
}
let changeSettingsInput = ()=>{
    for( i=0 ; i < settingsInput.length; i++){
        settingsInput[i].style.backgroundColor = "#d8d8d8";
    }
}
let changeSettingsInputBack = ()=>{
    for( i=0 ; i < settingsInput.length; i++){
        settingsInput[i].style.backgroundColor = "white";
    }
}

let changeTextAreaColor = ()=>{
    for( i=0 ; i < textArea.length; i++){
        textArea[i].style.backgroundColor = "#1d1d1d";
        textArea[i].style.color = "white";
    }
}

let changeTextAreaColorBack = ()=>{
    for( i=0 ; i < textArea.length; i++){
        textArea[i].style.backgroundColor = "white";
        textArea[i].style.color = "black";
        
    }
}

let changeWhiteText = ()=>{
    for( i=0 ; i < whiteText.length; i++){
        whiteText[i].style.color = "white";
    }
}
let changeWhiteTextBack = ()=>{
    for( i=0 ; i < whiteText.length; i++){
        whiteText[i].style.color = "black";
    }
}
// let changeTextBackground = ()=>{
//     for( i=0 ; i < left.length; i++){
//         left[i].style.backgroundColor = "aliceblue";
//     }
// }




toggleButton.addEventListener('click', ()=>{
    if(mainBox.style.backgroundColor === "aliceblue"){
        body.style.backgroundColor = "#52057bb5";
        mainBox.style.backgroundColor = "#151515";
        middleBox.style.backgroundColor = "#1a181e";
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-lightbulb');
        profileName.style.color = "white";
        saveBtn.style.backgroundColor = "#c95480"
        changeNameColor();
        changeIconColor();
        changeNavcolor();
        changeTextAreaColor();
        changeWhiteText();
        changeSettingsInput();

        saveBtn.addEventListener('mouseover', ()=>{
            saveBtn.style.backgroundColor = "#9f4064"
        });
        
        saveBtn.addEventListener('mouseout', ()=>{
            saveBtn.style.backgroundColor = "#c95480"
        })
    }
    else{
        body.style.backgroundColor = "rgb(195, 137, 179)";
        mainBox.style.backgroundColor = "aliceblue";
        middleBox.style.backgroundColor = "#e6eaf8bc";
        moonIcon.classList.add('fa-moon')
        moonIcon.classList.remove('fa-lightbulb')
        profileName.style.color = "black";
        saveBtn.style.backgroundColor = "#e295a2e1"
        search.style.backgroundColor = "white";
        changeNameColorBack();
        changeIconColorBack();
        changeNavcolorBack();
        changeTextAreaColorBack();
        changeWhiteTextBack();
        changeSettingsInputBack();
    }
})