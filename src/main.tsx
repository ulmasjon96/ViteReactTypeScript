// 🔹 React kutubxonasini import qilamiz
// Bu React komponentlarini yaratish va ishlatish uchun kerak
import React from 'react';

// 🔹 ReactDOM — bu React komponentlarini brauzer sahifasiga joylashtirish (render qilish) uchun ishlatiladi
import ReactDOM from 'react-dom/client';

// 🔹 BrowserRouter — react-router-dom dan olinadi
// Bu butun ilova uchun yo‘nalish (routing) tizimini ta’minlaydi
// Masalan, /about yoki /contact sahifalarini boshqarish uchun kerak
import { BrowserRouter } from 'react-router-dom';

// 🔹 QueryClient va QueryClientProvider — React Query kutubxonasidan
// React Query — API so‘rovlarini (fetch), kechirish (cache), yangilash va boshqarishni soddalashtiradi
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 🔹 Asosiy App komponentini import qilamiz
// Bu butun ilovaning markaziy komponenti
import App from './App';

// 🔹 Global uslublarni (CSS) import qilamiz
// Bu barcha sahifalarga bir xil asosiy dizayn berish uchun ishlatiladi
import './assets/styles/global.css';

// 🔹 Yangi React Query klientini yaratamiz
// Bu obyekt React Query’ga ma’lumotlarni kechirish (cache) va boshqarish uchun kerak
const queryClient = new QueryClient();

// 🔹 React ilovasini brauzer sahifasiga joylashtiramiz (render qilamiz)
ReactDOM.createRoot(document.getElementById('root')!).render(
	// 🔸 React.StrictMode — bu faqat ishlab chiqish (development) rejimida ishlaydi.
	// U koddagi muammolarni oldindan aniqlash uchun yordam beradi.
	<React.StrictMode>
		{/* 🔸 QueryClientProvider — React Query’ni butun ilovaga ulaydi */}
		{/* Har bir komponent endi React Query funksiyalaridan foydalana oladi */}
		<QueryClientProvider client={queryClient}>
			{/* 🔸 BrowserRouter — routing (sahifalar o‘rtasida o‘tish) imkonini beradi */}
			{/* Misol uchun: <Route path="/about" element={<AboutPage />} /> */}
			<BrowserRouter>
				{/* 🔸 Bizning asosiy ilovamiz (App) shu yerda ishlaydi */}
				<App />
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>,
);
