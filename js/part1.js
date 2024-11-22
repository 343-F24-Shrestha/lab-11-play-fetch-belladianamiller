const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
    try {
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;

        let query = new URLSearchParams({ name, age });
        let url = 'https://echo.zuplo.io/api?' + query.toString();

        let response = await fetch(url);
        console.log(response);

        let data = await response.json();
        output.textContent = JSON.stringify(data, null, 2);

    } catch (error) {
        console.error("Error: " + error);
    }
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    try {
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;

        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, age }),
        };
        let response = await fetch("https://echo.zuplo.io/api", options);
        let data = await response.json();

        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = "Error: " + error;
    }
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    try {
        let name = document.getElementById('name').value;
        let age = document.getElementById('age').value;

        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({name, age}).toString(),
        };
        let response = await fetch("https://echo.zuplo.io/api", options);
        let data = await response.json();

        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = "Error: " + error;
    }
});
