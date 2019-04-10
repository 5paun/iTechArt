function showPhones(laptops) {
  laptops.forEach((laptop) => {
    const container = document.getElementsByClassName('items');

    return container.insertAdjacentHTML(
      'beforeend',
      `<div class="item">
      <img
        src="${laptop.src}"
        alt="laptop"
      />
      <div class="item-content">
        <p class="item-content__text">
          ${laptop.description}
        </p>
        <div class="item-rating" data-product-id="${laptop.id}">
          <div class="zero item-rating__stars" data-rat-val="0">&#9733;</div>
          <div class="item-rating__stars" data-rat-val="1">&#9733;</div>
          <div class="item-rating__stars" data-rat-val="2">&#9733;</div>
          <div class="item-rating__stars" data-rat-val="3">&#9733;</div>
          <div class="item-rating__stars" data-rat-val="4">&#9733;</div>
          <div class="item-rating__stars" data-rat-val="5">&#9733;</div>
        </div>
        <span class="item-content__price">${laptop.price} p.</span>
        <button class="button item-content__button">
          +<i class="fa fa-shopping-cart"></i>Добавить в корзину
        </button>
      </div>
    </div>`,
    );
  });
}

function loadPhones() {
  const xhr = new XMLHttpRequest();
  const button = document.getElementById('button');

  xhr.open('GET', 'includes/items.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status !== 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      const laptops = JSON.parse(xhr.responseText);
      showPhones(laptops);
    }
  };
  xhr.send();
  button.innerHTML = 'Загружаю...';
  button.disabled = true;
}

document.getElementById('button').addEventListener('click', (e) => {
  loadPhones(e);
});

// $(() => {
//   // Loading list of products by means AJAX and add them on page
//   $('.items-after__load').click(function () {
//     const btn = $(this);
//     const loader = btn.find('span');
//     $.ajax({
//       url: 'includes/items.html',
//       type: 'GET',
//       beforeSend() {
//         btn.attr('disabled', true);
//         loader.addClass('d-inline-block');
//       },
//       success(responce) {
//         setTimeout(() => {
//           loader.removeClass('d-inline-block');
//           btn.attr('disabled', false);
//           $('.items-after').before(responce);
//         }, 1000);
//       },
//       error() {
//         alert('Error!');
//         loader.removeClass('d-inline-block');
//         btn.attr('disabled', false);
//       },
//     });
//   });
// });

// Add and remove estimate of products by users
function dravStars(elements) {
  const storedItem = localStorage.getItem('arrRat');
  const arrRat = storedItem ? JSON.parse(storedItem) : {};
  const starCount = arrRat[elements.getAttribute('data-product-id')];

  elements.querySelectorAll('div').forEach((element) => {
    const currentRate = element.getAttribute('data-rat-val');
    if (currentRate > 0 && currentRate <= starCount) {
      element.classList.add('star');
    } else {
      element.classList.remove('star');
    }
  });
}

document.querySelectorAll('.item-rating').forEach((element) => {
  const productId = element.getAttribute('data-product-id');

  element.addEventListener('click', (e) => {
    const ratVal = e.target.getAttribute('data-rat-val');
    const storedItem = localStorage.getItem('arrRat');
    const arrRat = storedItem ? JSON.parse(storedItem) : {};

    if (productId && ratVal) {
      arrRat[productId] = ratVal;
    }
    localStorage.setItem('arrRat', JSON.stringify(arrRat));
    dravStars(element);
  });

  dravStars(element);
});
