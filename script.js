const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toogle = body.querySelector(".toogle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toogle-switch"),
    modeText = body.querySelector(".mode-text");

    toogle.addEventListener("click", () => {
        sidebar.classList.toggle("close"); 
    });

    searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
    });

    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        } else {
            modeText.innerText = "Dark Mode"
        }
    });
