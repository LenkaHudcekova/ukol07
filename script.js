/* Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. 
Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například

Catering od Flavour Haven pro 100 lidí za 300000 Kč

Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. 
Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu

Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč */

const cheapFood = (count) => {
    return `
    catering od Just Food pro ${count} lidí za ${count*150} Kč
    `
}

const mediumFood = (count) => {
    return `
    catering od Your Mama pro ${count} lidí za ${count*300} Kč
    `
}

const expensiveFood = (count) => {
    return `
    catering od Flavour Haven pro ${count} lidí za ${count*500} Kč
    `
}

console.log(cheapFood(100))
console.log(mediumFood(100))
console.log(expensiveFood(100))

const createEvent = (event, count, foodFunction) => {
    return document.body.innerHTML += `
    <p>Událost ${event} s ${foodFunction(count)} </p>
    `
}

createEvent("Narozeninová oslava", 35, cheapFood)
createEvent("Narozeninová oslava", 35, mediumFood)
createEvent("Narozeninová oslava", 35, expensiveFood)

