// 🔹 axios kutubxonasini import qilamiz
// axios — bu HTTP so‘rovlar yuborish uchun ishlatiladigan mashhur JavaScript kutubxonasi
// U orqali biz server (API) bilan bog‘lanib ma’lumot yuboramiz yoki olamiz
import axios from "axios";


// 🔹 axios.create() — bu axiosning alohida "instance"ini (nusxasini) yaratadi
// Bunda biz umumiy sozlamalarni oldindan berib qo'yamiz,
// shunda har bir so‘rovda ularni qayta yozish shart bo‘lmaydi
export const api = axios.create({

  // 🟢 baseURL — barcha so‘rovlar yuboriladigan asosiy URL manzili
  // Misol uchun, agar siz keyin `api.get("/users")` deb yozsangiz,
  // u avtomatik ravishda `https://api.example.com/users` manziliga so‘rov yuboradi
  baseURL: "https://api.example.com",

  // 🟢 headers — har bir so‘rovga biriktiriladigan sarlavhalar (HTTP headers)
  // "Content-Type": "application/json" — bu serverga yuborilayotgan ma’lumot
  // JSON formatida ekanini bildiradi
  headers: {
    "Content-Type": "application/json"
  },
});
