// welcome message

  var user = 'Aaron';
  var salutation = 'Hello, ';
  var greeting = salutation + user + '! Here are the latest Melitta Single Cup Coffee Pods reviews.';
  var greetingEl = document.getElementByID('greeting');

  greetingEl.textContent = greeting;

//product price

  var price = 33.99
      studentDiscount = 0.10,
      studentPrice = price - (price * studentDiscount),
      priceEl = document.getElementByID('price'),
      studentPriceEl = document.getElementByID('student-price');

  priceEl.textContent = price.toFixed(2);
  studentPriceEl.textContent = studentPrice.toFixed(2);