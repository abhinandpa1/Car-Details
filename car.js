

function AddDetails() {
    const carukal = {
        brand: carBrand.value,
        price: price.value,
        key: key.value
    }
     if (carukal.brand === "" || carukal.price === "" || carukal.key === "") {
        alert("Please fill the section.");
    } else {
        if (localStorage.getItem(carukal.key)) {
            alert("Car Details already exists.");
        } else {
            localStorage.setItem(carukal.key, JSON.stringify(carukal));
            alert("Car Details Added Successfully");
        }
    }
}


function retrive() {
    let retrivekeey = retrieveKey.value; 
    console.log(retrivekeey); 
    if (retrivekeey in localStorage) { 
        let ret = JSON.parse(localStorage.getItem(retrivekeey));
        console.log(ret); 
        let retData = `
            <div class="card bg-info mt-3" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Brand: ${ret.brand}</li>
                    <li class="list-group-item">Price: ${ret.price}</li>
                    <li class="list-group-item">Key: ${ret.key}</li>
                </ul>
            </div>`;
        document.getElementById('result').innerHTML = retData; 

    } else {
        alert("Car Details Not Found");
    }

    retrieveKey.value = "";
}


function deleteDetails() {
    let deleteKeyVal = deleteKey.value; 
    if (deleteKeyVal in localStorage) {
        localStorage.removeItem(deleteKeyVal); 
        alert("Car Details Deleted Successfully");
    } else {
        alert("Car Details not found.");
    }
    deleteKey.value = ""; 
}


function clearAllRecords() {
    if (confirm("Are you sure you want to clear all records?")) {
        localStorage.clear(); 
        alert("All Details have been cleared.");
    }
}
