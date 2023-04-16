const text = "Пример текста для анимации";
const textContainer = document.getElementById("animated-text");
let index = 0;

function type() {
  textContainer.textContent += text[index];
  index++;
  
  if (index === text.length) {
    clearInterval(typingInterval);
  }
}

const typingInterval = setInterval(type, 100);





// Получаем элементы DOM
const amountInput = document.getElementById('Aamount-input');
const periodSelect = document.getElementById('Aperiod-select');
const calculateBtn = document.getElementById('Acalculate-btn');
const totalAmount = document.getElementById('Atotal-amount');
const totalProfit = document.getElementById('Atotal-profit');
const monthlyProfit = document.getElementById('Amonthly-profit');

// Функция для расчета прибыли
function calculateProfit() {
    // Получаем значение суммы вклада и периода
    const amount = Number(amountInput.value);
    const period = Number(periodSelect.value);
	 

    // Проверяем, что сумма вклада и период больше 0
    if (amount > 0 && period > 0) {
        // Выбираем процент в зависимости от периода
        let percent;
        if (period <= 30) {
            percent = 0.08;
        } else if (period <= 90) {
            percent = 0.1;
        } else if (period <= 180) {
            percent = 0.12;
        } else {
            percent = 0.15;
        }

        // Вычисляем прибыль за весь период и в месяц
        const profit = amount * percent * period / 365;
        const monthly = profit / (period / 30);

        // Вычисляем общую сумму с телом вклада
        const total = amount + profit;

        // Выводим результаты
        totalAmount.textContent = total.toFixed(2);
        totalProfit.textContent = profit.toFixed(2);
        monthlyProfit.textContent = monthly.toFixed(2);
    }
}

// Обработчик события нажатия на кнопку
calculateBtn.addEventListener('click', calculateProfit);


















// Связываем слайдер и селектор
const slider = document.getElementById('Aperiod-slider');
const select = document.getElementById('Aperiod-select');

// Функция для обновления значения селектора на основе значения слайдера
function updateSelect() {
  const value = slider.value;
  select.selectedIndex = value - 1;
}

// Функция для обновления значения слайдера на основе значения селектора
function updateSlider() {
  const value = select.value;
  slider.value = value;
}

// Инициализируем обновление значений при загрузке страницы
updateSelect();
slider.addEventListener('input', updateSelect);
select.addEventListener('change', updateSlider);




































