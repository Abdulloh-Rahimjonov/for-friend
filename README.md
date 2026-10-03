# 🦍 Muhab Gorilla Web App

Zamonaviy, zamonaviy dizayndagi (Glassmorphism, Dark UI, Glow effektlari) va to'liq moslashuvchan (responsive) web ilova.
Ichida **Gorilla surati**, **QR Kod generatori (PNG yuklab olish imkoniyati bilan)** va **PWA (mobil ilova qilib o'rnatish)** funksiyalari mavjud.

---

## 📁 Loyiha tarkibi:
- **`index.html`** — Asosiy HTML tuzilishi, SEO meta teglar va PWA integratsiyasi
- **`style.css`** — Glassmorphism, neon yorug'liklar, zamonaviy shriftlar va animatsiyalar
- **`app.js`** — 3D interaktiv effekt, QR kod yaratish, PNG yuklab olish va havolani ulashish logikasi
- **`manifest.json`** — Saytni telefonga mustaqil Web Ilova (PWA) sifatida o'rnatish konfiguratsiyasi
- **`assets/gorilla.jpg`** — Gorilla surati

---

## 🚀 Qadamma-qadam qo'llanma: GitHub, Vercel va QR Kod

### 1-qadam: Loyihani GitHub-ga yuklash

Terminalda loyiha papkasi (`/Users/macbook/Desktop/orto`) ichida quyidagi buyruqlarni bajaring:

```bash
# 1. Git omborini ishga tushirish
git init

# 2. Barcha fayllarni tayyorlash
git add .

# 3. Birinchi commit qilish
git commit -m "feat: initial release of muhab gorilla web app"

# 4. Asosiy tarmoqni main ga o'tkazish
git branch -M main

# 5. GitHub-da yangi bo'sh repozitoriya oching (masalan: muhab-app)
# Keyin uning manzilini ulang (o'zingizning GitHub username'ingizni yozing):
git remote add origin https://github.com/USERNAME/muhab-app.git

# 6. GitHub-ga yuklash
git push -u origin main
```

---

### 2-qadam: Vercel-ga bepul ulash va domen olish

1. [vercel.com](https://vercel.com) saytiga kiring va GitHub akkauntingiz orqali **Log In** qiling.
2. Yuqori o'ng burchakdagi **"Add New..."** tugmasini bosib, **"Project"** ni tanlang.
3. Yangi ochilgan ro'yxatdan GitHub-ga yuklagan **`muhab-app`** repozitoriyangiz yonidagi **"Import"** tugmasini bosing.
4. Hech qanday sozlamani o'zgartirish shart emas — to'g'ridan-to'g'ri **"Deploy"** tugmasini bosing.
5. 15-30 soniyada saytingiz tayyor bo'ladi va Vercel sizga bepul HTTPS domen beradi:
   👉 Masalan: `https://muhab-app.vercel.app`

---

### 3-qadam: Shaxsiy bepul yoki o'z domeningizni ulash (Ixtiyoriy)

Agar o'zingizning shaxsiy domeningiz bo'lsa:
1. Vercel loyihangiz boshqaruv paneliga kiring (`Settings` -> `Domains`).
2. Domen nomini kiriting va **Add** tugmasini bosing.
3. Vercel ko'rsatgan DNS CNAME yoki A yozuvlarini domen provayderingizga kiriting.

---

### 4-qadam: QR Kod chiqarish va Yuklab olish

1. Saytingizga (masalan: `https://muhab-app.vercel.app`) kiring.
2. Sahifadagi **"QR Kod Chiqarish"** tugmasini bosing.
3. Sayt o'zining havolasini avtomatik taniydi va unga mos chiroyli QR kod chizib beradi.
4. **"QR Kodni Yuklab Olish (PNG)"** tugmasini bosib, QR kodni rasm sifatida kompyuter yoki telefoningizga saqlab oling.
5. Bu QR kodni do'stlaringizga yuborishingiz yoki banner, flayer, stikerlarga chiqarishingiz mumkin!

---

### 5-qadam: Telefonga ilova qilib o'rnatish (PWA)

- **Android (Chrome):** Saytga kirganda ekranning pastida *"Ilovani o'rnatish"* chiqadi yoki 3 nuqta menyusidan *"Bosh ekranga qo'shish"* (Install app) ni tanlang.
- **iPhone (Safari):** Pastdagi *"Ulashish"* (Share) tugmasini bosing va *"Bosh ekranga qo'shish"* (Add to Home Screen) ni bosing.
Sayt telefonda xuddi alohida ilova kabi ochiladi!
