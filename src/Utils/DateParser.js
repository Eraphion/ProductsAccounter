const month = [];
month.push("Январь");
month.push("Февраль");
month.push("Март");
month.push("Апрель");
month.push("Май");
month.push("Июнь");
month.push("Июль");
month.push("Август");
month.push("Сентябрь");
month.push("Октябрь");
month.push("Ноябрь");
month.push("Декабрь");

export const getDate = () => {
    const date = new Date();
    const m = month[date.getMonth()];
    const d = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return m + " " + d + ", " + hour + ":" + minute + ":" + second;
}