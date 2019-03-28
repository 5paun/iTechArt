$(() => {
  /* ====== ПОДГРУЗКА ТОВАРОВ ЧЕРЕЗ AJAX ============ */
  $('.load-more').click(function () {
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
          $('.after-posts').before(responce);
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

/* ====== CЛАЙДЕР ============ */
// $('.carousel').carousel();
