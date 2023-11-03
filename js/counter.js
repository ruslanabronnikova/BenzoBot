const contentNumberElements = document.querySelectorAll(".content-number");
let counter = 0.0;

function updateCounter() {
  counter += 0.01; // Увеличиваем счетчик
  contentNumberElements.forEach((element) => {
    element.textContent = counter.toFixed(2); // Округляем счетчик до двух десятичных знаков
  });

  if (counter >= 100.0) {
    counter = 0.0;
  }
}

setInterval(updateCounter, 20); // Обновляем счетчик каждые 100 миллисекунд
