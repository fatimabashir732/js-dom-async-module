function fetchDataWithCallback(callback) {
    setTimeout(() => {
        let error = false; 

        try {

            if (error) {
                throw new Error("Fetch failed");
            }

            callback("Data fetched");

        } catch (err) {

            console.error("Error: " + err.message);

        }
    }, 2000);
}

fetchDataWithCallback((result) => {
    console.log(result);
});