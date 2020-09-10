

function generatePassword() {
    const fetch = document.getElementById("inputtxt");
    let fetchedValue = Number(fetch.value);
    //console.log(fetchedValue);
    var length = fetchedValue,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<=>?@[\]^_`{|}~",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));

    }
    
    document.getElementById("inputtxt2").value = retVal;
    document.getElementById("inputtxt").value = ""
    

    
}
