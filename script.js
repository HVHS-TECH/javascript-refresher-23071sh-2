function updateHeading() {
    const name = document.getElementById("i_name").value;
    const heading = document.getElementById("welcomeMessage");

    heading.textContent = "Welcome" + name ;
}