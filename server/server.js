const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

const sandTo = "alya.shatova.01@mail.ru";
const sandFrom = "sokolovtimur52@gmail.com";

// Настройка парсера для чтения данных формы
app.use(bodyParser.urlencoded({ extended: true }));

// Маршрут для обработки POST-запроса от формы
app.post("/invite/accept/", (req, res) => {
  // Получение данных из формы
  const { persons, stay_overnight, comment } = req.body.guest;

  // Создание транспортера для отправки сообщений через SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: sandFrom,
      pass: "",
    },
  });

  // Настройка письма
  const mailOptions = {
    from: sandFrom,
    to: sandTo,
    subject: "Подтверждение принятия приглашения",
    text: `Количество персон: ${persons}\n\nОстанутся с ночевкой:${stay_overnight}\n\nСообщение:\n${comment}`,
  };

  // Отправка письма
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Ошибка отправки письма:", error);
      res.status(500).send("Ошибка отправки письма");
    } else {
      console.log("Письмо успешно отправлено:", info.response);
      res.send("Письмо успешно отправлено");
    }
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
