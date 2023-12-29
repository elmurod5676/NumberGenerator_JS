

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generate = () => {
    const minEl = document.getElementById(`min`);
    const maxEl = document.getElementById(`max`);
    const min = Number(minEl.value);
    const max = Number(maxEl.value);

    if(minEl.value === `` || maxEl.value === ``){
        alert("ERROR: Enter max or min value")
        return;
    }
    if(min > max){
        alert("min is big than max")
    }

    const placeholderEl = document.getElementById(`placeholder`);
    placeholderEl.textContent = getRandomNumber(min, max);
}

const genBtn = document.getElementById(`generate`);
genBtn.addEventListener(`click`, generate)