/**
 * Перетворення типів: рядки
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

//* явне перетворення типів це використання спеціальних функцій, які перетворять один тип на інший, наприклад: String(), Number(), Boolean()

// console.log(String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"


//* неявне перетворення типів - це ситуації коли тип даних якогось значення в джс перетворюється на інший тип під капотом (ви це не контролюєте)

// неявне перетворення типів - не завжди класна штука. Чому? Відповідь проста - ви його не контролюєте

console.log("5" + 3); // "53"
// 1. string + number - я не вмію робити таку операцію з різними типами даних, тому я зроблю неявне перетворення і зведу всі значення до єдиного типу
// 2. "5" + String(3) 
// 3. "5" + "3" = "53"

console.log("5" + true); // "5true"
console.log("5" + false); // "5false"
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"
