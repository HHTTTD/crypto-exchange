# Crypto Exchange 

## รายละเอียดโปรเจค

โปรเจคนี้เป็น **Crypto Exchange API** ที่พัฒนาด้วย **Node.js และ Express** โดยใช้ **Sequelize** เป็น ORM และจัดการฐานข้อมูลด้วย **SQLite/MySQL** ระบบถูกออกแบบตามโจทย์ที่กำหนดไว้เกี่ยวกับ **แพลตฟอร์มซื้อขายแลกเปลี่ยน Cryptocurrencies** โดยมีฟีเจอร์หลักดังนี้:
![Crypto Exchange Preview](https://cdn.discordapp.com/attachments/1127802967274303498/1345328161730199616/crypto-exchange.drawio1.png?ex=67c425fc&is=67c2d47c&hm=9d189c4e710ed5dcf5ba74f7a71064508fa7d2487421e42b6ae6dcdda833332c&)
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

## การติดตั้งและรันโปรเจค

### 1. ติดตั้ง Dependencies
```sh
npm install
```

### 2. ตั้งค่าฐานข้อมูล

- หากใช้ SQLite ไม่ต้องตั้งค่าเพิ่มเติม
- หากใช้ MySQL ให้สร้างฐานข้อมูลและแก้ไขไฟล์ `.env` ให้ถูกต้อง

### 3. รัน Migration และ Seed ข้อมูลตัวอย่าง
```sh
npx sequelize-cli db:migrate    # รัน Migration เพื่อสร้างตาราง
npx sequelize-cli db:seed:all   # Seed ข้อมูลทดสอบ
```

### 4. รันเซิร์ฟเวอร์
```sh
npm start
```

API จะรันที่ `http://localhost:3000`

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

## ตัวอย่าง Seed Data

ไฟล์ตัวอย่างสำหรับ Seed ข้อมูล (`seeders/xxxx-user-seeder.js`):
```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Wick',
        email: 'john@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jon Snow',
        email: 'Jon@example.com',
        password: 'password456',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
```

---

โปรเจคนี้เป็นส่วนหนึ่งของ **โจทย์ข้อสอบ Backend** โดยอิงตามโจทย์ข้อที่ 1 และข้อที่ 2 ซึ่งครอบคลุมถึง:
- การออกแบบฐานข้อมูลสำหรับระบบแลกเปลี่ยน Cryptocurrency ตาม ER Diagram
- การพัฒนา API ด้วย Node.js หรือ PHP ที่รองรับ CRUD และความสัมพันธ์ของ Model
- การเขียน Controller และ Routing สำหรับฟังก์ชันหลัก
- การสร้างไฟล์ Seed ข้อมูลเพื่อใช้ในการทดสอบ

หากมีข้อสงสัยหรือพบปัญหา สามารถแก้ไขโค้ดหรือสอบถามเพิ่มเติมได้!

