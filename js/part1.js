const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**
    try {
        let name = 0;
        let age = 0;
        let query = new URLSearchParams({q: query, page: pageNum});
        let response = await fetch('https://echo.zuplo.io/api?' + query.toString());
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data: " + error);
    }
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as JSON
    // The two input fields should be included in the request body as **JSON data**

    // TODO
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as form data
    // The two input fields should be included in the request body as **url-encoded data**

    // TODO
});
