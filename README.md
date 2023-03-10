Лабораторна робота №1
Тема: Знайомство з середовищем Node.js

У даній лабораторній роботі ми:
- ознайомилися з середовищем Node.js
- ознайомилися з основами Javascript
- виконали n задач Easy/Medium на codewars.com та leetcode.com, використовуючи Node.js
- відповіли на контрольні запитання

ПОСТАНОВКА ЗАДАЧ
№1: https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript 
№2: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
№3: https://leetcode.com/problems/valid-sudoku/
№4: https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
№5: https://www.codewars.com/kata/57eae65a4321032ce000002d/train

КОНТРОЛЬНІ ПИТАННЯ
1. Чи є різниця між виконанням Javascript в браузері та в середовищі Node.js?
Що стосується загальної продуктивності фронту після завантаження, різниці немає. І node.js, і більш класичні HTTP -сервери обслуговують необхідні файли, а решта залежить від клієнта, тому загальна продуктивність після завантаження залежить від браузера. 
З точки зору продуктивності JavaScript, двигун JavaScript поєднується з браузером, тому його продуктивність варіюється від браузера до браузера, від версії до версії.
Що стосується швидкості навантаження, це залежить і від сторони сервера. Зазвичай це зводиться до того, наскільки складним є ваш веб -сайт. Якщо в ньому багато динамічності та багато обчислень, Node.js може бути повільнішим.

2. Назвіть основні типи в Javascript
1) Numbers (42, 35.8, 0x3F82)
2) Boolean (true, false)
3) Null (let pet = null)
4) Undefined (let drink   //undefined)
5) NaN (Not a Number)
6) BigInt (для великих чисел)
7) String (“To be or not to be?”)
8) Object ( let pet = {type: “cat”, age: 2} )
9) Array ([1,2,5])
10) Function  
        function square(number) {
           return number * number;
        }

3. Як працює замикання (closure) в Javascript?
        Замикання – це функція, яка запам’ятовує свої зовнішні змінні і може отримати до них доступ. Усі функції у Javascript є  замиканнями,  і вони автоматично запам’ятовують, де вони були створені за допомогою прихованої властивості [[Environment]], і всі вони можуть отримати доступ до зовнішніх змінних. 
У JavaScript у кожній виконуваній функції, блоку коду та скрипту є пов'язаний з ними внутрішній (прихований) об'єкт, який називається лексичним оточенням LexicalEnvironment.
Коли код хоче отримати доступ до змінної – спочатку відбувається пошук у внутрішньому лексичному оточенні, потім у зовнішньому, потім у наступному тощо, до глобального. Функція отримує поточне значення зовнішніх змінних, тобто їхнє останнє значення.

4. Назвіть основні стандартні бібліотеки Node.js
Основні модулі Node.js:
http – містить класи, методи та події для створення http серверу Node.js
url – містить методи для розпізнавання та аналізу URL-адрес
path – містить методи для обробки шляхів до файлів
fs – містить класи, методи та події для роботи з файловим введенням/виведенням 
util – містить утиліти, корисні для програмістів 

5. Які є способи імпортувати модулі в Node.js?
Для вбудованих модулей:
        const someModule = require(‘module-name’);
Для npm-модулей:
        npm install model-name
        const someModule = require(‘module-name’);
Для локальних модулей:
        const someModule = require(‘./module-name’);

6. Як пов’язані Google Chrome/Chromium та Node.js?
Серверна платформа Node.js побудована на рушію Google Chrome V8 Engine.

7. Як можна дозволити експортувати змінні з поточного модуля?
Some-module.js
 const num = 12;
 module.exports = {num};  //експорт змінної з поточного модуля

main.js
 const someModule = require(‘./some-module.js’);         //імпорт num з локального модуля
 console.log(someModule);       //12 
