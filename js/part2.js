const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    try {
        let response = await fetch("https://reqres.in/api/users?page=1");
        if (!response.ok) {
            throw new Error("Error fetching users");
        }
        let data = await response.json();
        let users = data.data;

        users.forEach(user => {
            let card = document.createElement("div");
            card.className = "card";

            let userName = document.createElement("h2");
            userName.textContent = user.first_name + " " + user.last_name;;

            let userImage = document.createElement("img");
            userImage.src = user.avatar;
            userImage.alt = user.first_name + " " + user.last_name;

            card.appendChild(userName);
            card.appendChild(userImage);
            userList.appendChild(card);
        });
    } catch (error) {
        console.error("Error: " + error);
    }
});
