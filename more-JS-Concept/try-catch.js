function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');

    try {
        const age = parseInt(ageText);
        if (isNaN(age)) {
            throw "Please enter a number";
        }
        else if(age < 18){
            throw "baccha kaccha not allowed"
        }
        else if(age > 30){
            throw `bibahitara  not allowed`;
        }
        errorTag.innerText = ' ';
    } catch (error) {
        console.log('ERROR', error);
        errorTag.innerHTML = `Error ${error}`;
    }
    finally {
        console.log('All Done inside try-catch');
    }
    console.log(11111111111);
}