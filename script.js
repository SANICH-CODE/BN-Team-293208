var messageBox = document.querySelector('.js-message');
  var btn = document.querySelector('.js-message-btn');
  var card = document.querySelector('.js-profile-card');
  var closeBtn = document.querySelectorAll('.js-message-close');
  var tg = document.querySelector('.js-tg');
  btn.addEventListener('click',function (e) {
      e.preventDefault();
      card.classList.add('active');
  });
  tg.addEventListener('click',function (e) {
   
    window.location.href = "https://t.me/oboldui_x2";
});
  closeBtn.forEach(function (element, index) {
     console.log(element);
      element.addEventListener('click',function (e) {
          e.preventDefault();
          card.classList.remove('active');
      });
  });