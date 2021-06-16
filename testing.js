var countDownDate = new Date().getTime() + (45 * 60 * 1000);
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
  console.log(countDownDate)
}, 1000);

let part1 = `
Q. На данной схеме +Z )<small>2</small>)<small>2</small> изображено электронное строение атома:
1) гелия
2) натрия
3) бериллия
4) углерода

Q. В ряду химических элементов усиливаются металлические свойства соответствующих им простых веществ:
1) Na, Mg, Al
2) K, Na, Li
3) Li, Be, B
4) Al, Mg, Na

Q. В хлориде натрия химическая связь:
1) ионная
2) ковалентная полярная
3) ковалентная неполярная
4) металлическая

Q. В соединении степень окисления серы равна +4
1) SO<small>3</small>
2) Na<small>2</small>SO<small>3</small>
3) Na<small>2</small>SO<small>4</small>
4) Na<small>2</small>S

Q. Вещества, формулы которых – N<small>2</small>O<small>5</small> и H<small>3</small>PO<small>4</small>, являются соответственно:
1) основным оксидом и кислотой
2) кислотным оксидом и солью
3) амфотерным оксидом и основанием
4) кислотным оксидом и кислотой

Q. Признаком протекания химической реакции между хлоридом бария и сульфатом натрия является:
1) образование газа
2) изменение цвета раствора
3) выпадение белого осадка
4) растворение осадка

Q. Число молей катионов в 2 раза больше, чем число молей анионов, образуется при полной диссоциации в водном растворе 1 моль:
1) MgCL<small>2</small>
2) Na<small>2</small>CO<small>3</small>
3) MgSO<small>4</small>
4) Al(NO<small>3</small>)<small>3</small>

Q. Газ выделяется при взаимодействии:
1) FeS + HCl
2) CuCL<small>2</small> + H<small>2</small>S
3) NaCl + H<small>2</small>SO<small>4</small>
4) FeSO<small>4</small> + NaOH

Q. Между собой не реагируют:
1) алюминий и сера
2) кислород и хлор
3) водород и азот
4) кислород и литий

Q. Оксид алюминия реагирует с каждым из двух веществ:
1) KOH и HNO<small>3</small>
2) H<small>2</small>O и HCl
3) NaOH и Cu
4) Na<small>2</small>O и O<small>2</small>

Q. В реакцию с раствором серной кислоты вступает:
1) хлорид магния
2) нитрат калия
3) карбонат натрия
4) медь

Q. Среди веществ: K<small>2</small>SO<small>4</small>, KCl, K<small>2</small>S – в реакцию с раствором Zn(NO<small>3</small>)<small>2</small> вступает (-ют)
1) Только K2S
2) Только K2SO4
3) K2SO4 и KCl
4) KCl и K2S

Q. Верны ли суждения о безопасном обращении с химическими веществами? А) Работу с галогенами следует проводить под вытяжным шкафом; Б) Вещества в лаборатории можно пробовать на вкус:
1) Верно только А
2) Верно только Б
3) Верны оба утверждения
4) Оба утверждения неверны

Q. Азот является окислителем в реакции:
1) NH<small>3</small> + HCl = NH<small>4</small>Cl
2) N<small>2</small>O<small>5</small> + 2NaOH = 2NaNO<small>3</small> + H<small>2</small>O
3) N<small>2</small> + O<small>2</small> = 2NO
4) 2NO<small>2</small> + 4Mg = 4MgO + N<small>2</small>

Q. Массовые доли элементов в нитрате железа (III):
1) Fe – 23,14%, N – 5,79%
2) O – 59,5% , N – 17,36%
3) Fe – 31,11% , N – 15,56%
4) O – 19,84% , N – 5,79%

При выполнении заданий №16, 17 из предложенного перечня ответов выберите два правильных
Q. Общим для азота и фосфора является:
1) наличие двух энергетических уровней в их атомах
2) число электронов на внешнем энергетическом уровне их атомов
3) одинаковый радиус их атомов
4) одинаковое агрегатное состояние простых веществ, образованных этими элементами
5) образование ими летучих водородных соединений с общей формулой H<small>3</small>Э

Q. Для аммиака верны следующие утверждения:
1) при нормальных условиях является газом
2) в воде образует кислую среду
3) вещество не ядовито
4) плохо растворим в воде
5) обладает резким запахом

Q. Общим для азота и фосфора является:
1) наличие двух энергетических уровней в их атомах
2) число электронов на внешнем энергетическом уровне их атомов
3) одинаковый радиус их атомов
4) одинаковое агрегатное состояние простых веществ, образованных этими элементами
5) образование ими летучих водородных соединений с общей формулой H3Э

Q. Для аммиака верны следующие утверждения:
1) при нормальных условиях является газом
2) в воде образует кислую среду
3) вещество не ядовито
4) плохо растворим в воде
5) обладает резким запахом
`
let fullAns = `Q. Используя метод электронного баланса, расставьте коэффициенты в уравнении реакции, схема которой H<small>2</small>S + HNO<small>3</small> = H<small>2</small>SO<small>4</small> + NO<small>2</small> + H<small>2</small>O. Определите окислитель и восстановитель. 
Q. При прокаливании 1 кг природного известняка было получено 201,6 л углекислого газа. Определите массовую долю примесей в природном известняке. 
Q. Даны вещества NH<small>3</small>, O<small>2</small>, NO<small>2</small>, Na<small>2</small>CO<small>3</small>, Na<small>2</small>SO<small>4</small>. Используя воду и необходимые вещества только из этого списка, получите в две стадии нитрат натрия. Для реакции ионного обмена напишите сокращенное ионное уравнение.`

var separators = ['.', ':'];
var tokens1 = part1.split('Q.');
let $questions = document.querySelector('.questions')
let i = 0;

tokens1.forEach((token) => {
    if (token.length > 1){
        let [question, answers] = token.split(':\n')
        if (typeof question !== "undefined" && typeof answers !== "undefined"){
        let answerArr = answers.split('\n')
        if (i == 15){
            $questions.insertAdjacentHTML('beforeend', `<h3>При выполнении заданий №16, 17 из предложенного перечня ответов выберите два правильных</h3>
            `)
        }
        if (i > 14 && i < 18){
            $questions.insertAdjacentHTML('beforeend', `<div class="question">${++i}.${question}</div>
            <div class="answers">
            <label>
            <input type="checkbox" class="radio" value="1" name="fooby[1][]" />${answerArr[0]}</label>
            <label>
            <input type="checkbox" class="radio" value="1" name="fooby[1][]" />${answerArr[1]}</label>
            <label>
            <input type="checkbox" class="radio" value="1" name="fooby[1][]" />${answerArr[2]}</label>
            <label>
            <input type="checkbox" class="radio" value="1" name="fooby[1][]" />${answerArr[3]}</label>
            <label>
            <input type="checkbox" class="radio" value="1" name="fooby[1][]" />${answerArr[4]}</label>
            <div/>`)
        }
        else {
        $questions.insertAdjacentHTML('beforeend', `<div class="question">${++i}.${question}</div>
        <div class="answers">
        <label>
        <input type="checkbox" class="radio" value="1" name="fooby[1][]" />${answerArr[0]}</label>
        <label>
        <input type="checkbox" class="radio" value="1" name="fooby[1][]" />${answerArr[1]}</label>
        <label>
        <input type="checkbox" class="radio" value="1" name="fooby[1][]" />${answerArr[2]}</label>
        <label>
        <input type="checkbox" class="radio" value="1" name="fooby[1][]" />${answerArr[3]}</label>
        <div/>`)
        }}
    }
})
if (i == 17){
    $questions.insertAdjacentHTML('beforeend', `<h3>При выполнении заданий №18 и 19 к каждому элементу первого столбца подберите соответствующий элемент из второго столбца. Запишите выбранные цифры под соответствующими буквами. Цифры в ответах могут повторяться
    </h3>`)
}
$questions.insertAdjacentHTML('beforeend',`
<div class="question">${++i}.Установите соответствие между двумя веществами и реактивом, с помощью которого можно различить эти вещества</div>
<div class="conform">
<div class="conf">А) NaNO<small>3</small> и Na<small>2</small>SO<small>4</small><br>Б) NaCl и Na<small>3</small>PO<small>4</small><br>В) CaCO<small>3</small> и CaSO<small>4</small><br></div>
<div class="conf">1) HCl<br>2) K<small>2</small>SO<small>3</small><br>3) BaCL<small>2</small><br>4) NaOH<br></div>
</div>
<input class="text-input" type="text"/>`)

$questions.insertAdjacentHTML('beforeend',`
<div class="question">${++i}.Установите соответствие между названием вещества и реагентами, с которыми это вещество может взаимодействовать</div>
<div class="conform">
<div class="conf">А) Оксид кальция <br>Б) Соляная кислота<br>В) Фосфор<br></div>
<div class="conf">1) O<small>2</small>, Na<br>2) H<small>2</small>SO<small>4</small> , CO<small>2</small><br>3) Na<small>2</small>SO<small>4</small> , NaOH<br>4) Fe, Na<small>2</small>CO<small>3</small><br></div>
</div>
<input class="text-input" type="text"/>`)

$questions.insertAdjacentHTML('beforeend', '<h3>Для заданий 20-22 дайте развернутый ответ</h3>')
var tokens2 = fullAns.split('Q.')
tokens2.forEach(token => {
    if (typeof token !== "undefined" && token.length != 0){
    $questions.insertAdjacentHTML('beforeend', `<div class="question">${++i}.${token}</div>
    <input class="text-input" type="text"/>
    <input class="file-input" type="file"/>
    `)}
})

var fs = require('fs');
fs.writeFile("DEMO.TXT", "Foo bar!"); 