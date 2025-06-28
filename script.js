    const form = document.getElementById('registrationForm');

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    document.getElementById('date').min = `${yyyy}-${mm}-${dd}`;

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let valid = true;

      const fio = document.getElementById('fio');
      const birth = document.getElementById('birth');
      const phone = document.getElementById('phone');
      const date = document.getElementById('date');
      const time = document.getElementById('time');

      // Очистка предыдущих ошибок
      document.querySelectorAll('.error').forEach(el => el.textContent = '');

      // ФИО
      if (!fio.value.trim()) {
        document.getElementById('errorFio').textContent = 'Поле обязательно для заполнения';
        valid = false;
      } else if (!/^[А-Яа-яЁё\s]+$/.test(fio.value)) {
        document.getElementById('errorFio').textContent = 'ФИО должно содержать только кириллицу и пробелы';
        valid = false;
      }

      // Дата рождения
      if (!birth.value) {
        document.getElementById('errorBirth').textContent = 'Поле обязательно для заполнения';
        valid = false;
      } else if (new Date(birth.value) > new Date('2005-12-31')) {
        document.getElementById('errorBirth').textContent = 'Дата рождения должна быть до 2006 года';
        valid = false;
      }

      // Телефон
      if (!phone.value.trim()) {
        document.getElementById('errorPhone').textContent = 'Поле обязательно для заполнения';
        valid = false;
      } else if (!/^\d{11}$/.test(phone.value)) {
        document.getElementById('errorPhone').textContent = 'Номер должен содержать ровно 11 цифр';
        valid = false;
      }

      // Дата приёма
      const inputDate = new Date(date.value);
      if (!date.value) {
        document.getElementById('errorDate').textContent = 'Поле обязательно для заполнения';
        valid = false;
      } else if (inputDate < tomorrow) {
        document.getElementById('errorDate').textContent = 'Дата должна быть не раньше завтрашней';
        valid = false;
      }

      // Время
      if (!time.value) {
        document.getElementById('errorTime').textContent = 'Поле обязательно для заполнения';
        valid = false;
      } else if (time.value < "08:00" || time.value > "22:00") {
        document.getElementById('errorTime').textContent = 'Время должно быть с 08:00 до 22:00';
        valid = false;
      }

      // Если всё подходит
      if (valid) {
        alert("Форма успешно отправлена!");
        form.reset();
      }
    });