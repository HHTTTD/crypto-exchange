# Crypto Exchange 

## ER Diagram
![Crypto Exchange Preview](https://cdn.discordapp.com/attachments/1127802967274303498/1345328161730199616/crypto-exchange.drawio1.png?ex=67c425fc&is=67c2d47c&hm=9d189c4e710ed5dcf5ba74f7a71064508fa7d2487421e42b6ae6dcdda833332c&)

## รายละเอียดโปรเจค

โปรเจคนี้เป็น **Crypto Exchange API** ที่พัฒนาด้วย **Node.js และ Express** โดยใช้ **Sequelize** เป็น ORM และจัดการฐานข้อมูลด้วย **SQLite/MySQL** ระบบถูกออกแบบตามโจทย์ที่กำหนดไว้เกี่ยวกับ **แพลตฟอร์มซื้อขายแลกเปลี่ยน Cryptocurrencies** โดยมีฟีเจอร์หลักดังนี้:
- **การสร้างบัญชีผู้ใช้ (User Account Management)**
- **การตั้งคำสั่งซื้อ-ขาย (Order Management) สำหรับ Cryptocurrencies เช่น BTC, ETH, XRP, DOGE**
- **การจัดการกระเป๋าเงิน (Wallet) รองรับทั้งเงิน Fiat (THB, USD) และ Crypto**
- **การบันทึกการทำธุรกรรม (Transaction Management) ทั้งการซื้อ-ขายและโอนเหรียญ**
- **การโอนเหรียญภายในระบบ (Internal Transfer) และการโอนออกไปยังผู้ใช้นอกระบบ (External Transfer)**

## เทคโนโลยีที่ใช้
- **Node.js + Express.js** (Backend Framework)
- **Sequelize (ORM)** สำหรับจัดการฐานข้อมูล
- **SQLite หรือ MySQL** สำหรับจัดเก็บข้อมูล
- **dotenv** สำหรับการจัดการ environment variables

## วิธีการติดตั้งและรันโปรเจค
### 1. Clone Repository
```bash
git clone https://github.com/HHTTTD/crypto-exchange.git
cd crypto-exchange
```
### 2. ติดตั้ง Dependencies
```bash
npm install
```
### 3. ตั้งค่าฐานข้อมูลและ Seed ข้อมูล
```bash
npx sequelize-cli db:migrate   # สร้างตารางฐานข้อมูล
npx sequelize-cli db:seed:all  # เพิ่มข้อมูลทดสอบ
```
### 4. รันเซิร์ฟเวอร์
```bash
npm start
```
API Server จะรันที่ `http://localhost:3000`

---
## API Routes

| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | /api/users      | ดึงข้อมูลผู้ใช้ทั้งหมด |
| POST   | /api/users      | เพิ่มผู้ใช้ใหม่ |
| PUT    | /api/users/:id  | แก้ไขข้อมูลผู้ใช้ |
| DELETE | /api/users/:id  | ลบผู้ใช้ |
| GET    | /api/wallets    | ดึงข้อมูลกระเป๋าเงิน |
| POST   | /api/wallets    | เพิ่มกระเป๋าเงิน |
| GET    | /api/orders     | ดึงข้อมูลคำสั่งซื้อ |
| POST   | /api/orders     | สร้างคำสั่งซื้อ |
| GET    | /api/transactions | ดึงข้อมูลธุรกรรม |

## โครงสร้างโฟลเดอร์
```
crypto-exchange/
│── config/          # ไฟล์ตั้งค่าต่าง ๆ
│── migrations/      # ไฟล์ Migration สำหรับจัดการฐานข้อมูล
│── models/          # โมเดลของฐานข้อมูล
│── routes/          # Routing API
│── controllers/     # Controller จัดการโลจิก
│── seeders/         # ข้อมูลตัวอย่างสำหรับทดสอบ
│── server.js        # ไฟล์เริ่มต้นเซิร์ฟเวอร์
│── package.json     # Dependencies และสคริปต์
│── database.sqlite  # ไฟล์ฐานข้อมูล SQLite (ถ้าใช้ SQLite)
```

## คำสั่งที่เกี่ยวข้องกับฐานข้อมูล
```sh
npx sequelize-cli db:migrate         # รัน Migration
npx sequelize-cli db:migrate:undo    # ย้อนกลับ Migration ล่าสุด
npx sequelize-cli db:seed:all        # Seed ข้อมูลทดสอบ
npx sequelize-cli db:seed:undo:all   # ลบข้อมูลที่ Seed ไปทั้งหมด
```

## ตัวอย่าง API Endpoint
### 1. สร้างบัญชีผู้ใช้
**POST** `/api/users`
```json
{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "securepassword"
}
```

### 2. รับข้อมูล Cryptocurrencies
**GET** `/api/cryptocurrencies`

### 3. สร้างคำสั่งซื้อขาย
**POST** `/api/orders`
```json
{
  "userId": 1,
  "cryptocurrencyId": 1,
  "orderType": "buy",
  "amount": 0.5,
  "price": 49000
}
```

### 4. โอนเหรียญไปยังภายนอกระบบ
**POST** `/api/externalTransfers`
```json
{
  "userId": 1,
  "walletId": 1,
  "amount": 0.1,
  "destinationAddress": "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5"
}
```

---

