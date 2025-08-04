# 香味不是品味，而是污染 - 專案

這是一個揭露香氛產業真相的 React 網站專案。

## 專案結構

```
fragrance-truth-project/
├── public/                 # 靜態資源目錄
├── src/                   # 原始碼目錄
│   ├── assets/           # 圖片等資源
│   ├── App.jsx           # 主要應用程式組件
│   ├── App_clean.jsx     # 簡化版組件
│   ├── App.css           # 樣式檔案
│   └── main.jsx          # 應用程式入口點
├── index.html            # HTML 模板
├── package.json          # 專案依賴配置
├── vite.config.js        # Vite 建構工具配置
├── tailwind.config.js    # Tailwind CSS 配置
└── postcss.config.js     # PostCSS 配置
```

## 本地開發環境設定

### 前置需求

1. **Node.js** (版本 16 或以上)
   - 下載：https://nodejs.org/
   - 建議使用 LTS 版本

2. **VS Code** (推薦的程式碼編輯器)
   - 下載：https://code.visualstudio.com/

### 安裝步驟

1. **下載專案檔案**
   - 將整個 `fragrance-truth-project` 資料夾下載到您的電腦

2. **開啟 VS Code**
   - 啟動 VS Code
   - 選擇 "File" > "Open Folder"
   - 選擇 `fragrance-truth-project` 資料夾

3. **安裝依賴套件**
   - 在 VS Code 中開啟終端機 (Terminal > New Terminal)
   - 執行以下指令：
   ```bash
   npm install
   ```

4. **啟動開發伺服器**
   ```bash
   npm run dev
   ```

5. **開啟瀏覽器**
   - 開發伺服器啟動後，在瀏覽器中開啟 `http://localhost:3000`

## 可用的指令

- `npm run dev` - 啟動開發伺服器
- `npm run build` - 建構生產版本
- `npm run preview` - 預覽建構後的版本
- `npm run lint` - 執行程式碼檢查

## 推薦的 VS Code 擴充功能

為了更好的開發體驗，建議安裝以下 VS Code 擴充功能：

1. **ES7+ React/Redux/React-Native snippets** - React 程式碼片段
2. **Prettier - Code formatter** - 程式碼格式化
3. **Tailwind CSS IntelliSense** - Tailwind CSS 自動完成
4. **Auto Rename Tag** - 自動重新命名標籤
5. **Bracket Pair Colorizer** - 括號配對顏色

## 專案技術棧

- **React 18** - 前端框架
- **Vite** - 建構工具
- **Tailwind CSS** - CSS 框架
- **Framer Motion** - 動畫庫
- **Lucide React** - 圖示庫

## 開發注意事項

1. 專案使用 ES6+ 語法和 JSX
2. 樣式使用 Tailwind CSS 類別
3. 動畫效果使用 Framer Motion
4. 圖示使用 Lucide React

## 疑難排解

如果遇到問題，請嘗試：

1. 刪除 `node_modules` 資料夾和 `package-lock.json`
2. 重新執行 `npm install`
3. 確認 Node.js 版本是否正確

## 聯絡資訊

如有任何問題，請聯絡專案維護者。

