(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
    // Закриваємо модальне вікно за замовчуванням при завантаженні сторінки
    window.addEventListener('DOMContentLoaded', (event) => {
        refs.modal.classList.add("is-hidden");
    });
  
    // Перевіряємо, чи існує кнопка відкриття модального вікна
    if (refs.openModalBtn) {
        refs.openModalBtn.addEventListener("click", toggleModal);
    }

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();