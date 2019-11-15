export const InputNotNegative = (e, onSuccess) => {
    const valueAsString = e.target.value;
    const value = parseInt(valueAsString);
    if (value < 0 || valueAsString.includes('-') || valueAsString === '')
        alert("Недопустимое значение!");
    else
        onSuccess(value);
}

export const InputPositiveOnly = (e, onSuccess) => {
    const valueAsString = e.target.value;
    const value = parseInt(valueAsString);
    if (value <= 0 || valueAsString.includes('-') || valueAsString === '')
        alert("Недопустимое значение!");
    else
        onSuccess(value);
}

export const InputNotEmpty = (e, onSuccess) => {
    const value = e.target.value;
    if (value === '')
        alert("Поле должно быть заполнено!");
    else
        onSuccess(value);
}