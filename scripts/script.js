$(() => {
  // Loading list of products by means AJAX and add them on page
  $('.items-after__load').click(function () {
    const btn = $(this);
    const loader = btn.find('span');
    $.ajax({
      url: 'includes/items.html',
      type: 'GET',
      beforeSend() {
        btn.attr('disabled', true);
        loader.addClass('d-inline-block');
      },
      success(responce) {
        setTimeout(() => {
          loader.removeClass('d-inline-block');
          btn.attr('disabled', false);
          $('.items-after').before(responce);
        }, 1000);
      },
      error() {
        alert('Error!');
        loader.removeClass('d-inline-block');
        btn.attr('disabled', false);
      },
    });
  });
});

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
