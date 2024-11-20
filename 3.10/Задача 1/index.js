let isThereCardInATM = true;

if (!isThereCardInATM) {
    console.log("Вставте карту в банкомат")
} else {
    let openSumInCard = 500;
    let sumOper = prompt("Введите сумму, которую хотите получить");
    console.log(`Ввод: ${sumOper}`)
    if (sumOper <= openSumInCard) {
        console.log("Вывод: Операция выполняется");
    } else {
        console.log("Вывод: Операция отклонена")
    }
}