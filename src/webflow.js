console.log("hi");

const clothingColorInput = document.querySelector("#clothing-color");
const lastFoodEatenInput = document.querySelector("#food");
const bandNameOutput = document.querySelector("#band-name-text");
const form = document.querySelector("#band-name-form");

function generateBandName(clothingColor, lastFoodEaten) {
    var bandName = "";

    function capitalizeFirstLetter(word) {
        if(typeof word === "number") {
        return word.toString();
        }
        if(typeof word !== "string" || word === null) {
        return "";
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    bandName = "The " + capitalizeFirstLetter(clothingColor) + " " + capitalizeFirstLetter(lastFoodEaten);
    return bandName;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    event.stopPropagation();
    const bandName = generateBandName(clothingColorInput.value, lastFoodEatenInput.value);

    bandNameOutput.textContent = bandName;
});