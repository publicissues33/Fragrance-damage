import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AlertTriangle, Shield, Globe, Microscope, Scale, Gavel, ChevronDown, ExternalLink, Download, Share2 } from 'lucide-react'
import './App.css'

// 導入圖像資產
import heroImage from './assets/hero-image.png'
import naturalDefenseImage from './assets/natural-defense-systemV2.png'
import nanoPollutionImage from './assets/nano-pollution.png'
import globalMovementImage from './assets/global-movement.png'

function App() {
  const [activeSection, setActiveSection] = useState(0)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  // 章節數據
  const sections = [
    {
      id: 'hero',
      title: '香味不是品味，而是污染',
      subtitle: '揭露香氛產業刻意隱瞞的健康真相',
      icon: AlertTriangle,
      color: 'from-red-600 to-red-800'
    },
    {
      id: 'defense',
      title: '被顛覆的天然警報系統',
      subtitle: '異味感知是上天賜予的生存本能',
      icon: Shield,
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'deception',
      title: '業界不敢說的混淆真相',
      subtitle: '揭露被利益團體刻意混淆的事實',
      icon: AlertTriangle,
      color: 'from-orange-600 to-orange-800'
    },
    {
      id: 'movement',
      title: '全球無味革命正在發生',
      subtitle: '無味運動是基於科學證據的全球趨勢',
      icon: Globe,
      color: 'from-green-600 to-green-800'
    },
    {
      id: 'nano',
      title: '看不見的奈米級殺手',
      subtitle: '奈米級污染物的隱藏殺傷力',
      icon: Microscope,
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 'rights',
      title: '你的維權武器庫',
      subtitle: '台灣消費者的三大法律工具',
      icon: Scale,
      color: 'from-indigo-600 to-indigo-800'
    },
    {
      id: 'legal',
      title: '國際法庭上的真相',
      subtitle: '香氛產品已成為國際法律爭議核心',
      icon: Gavel,
      color: 'from-gray-600 to-gray-800'
    }
  ]

  // 滾動監聽
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPos = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const top = section.offsetTop
        const bottom = top + section.offsetHeight
        if (scrollPos >= top && scrollPos <= bottom) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* 導航欄 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black/80 via-red-900/60 to-black/80 backdrop-blur-md border-b border-red-400/30 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white drop-shadow-lg">香氛真相</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#defense" className="text-white font-semibold hover:text-red-300 hover:scale-105 transition-all duration-300 drop-shadow-md">事實真相</a>
              <a href="#movement" className="text-white font-semibold hover:text-green-300 hover:scale-105 transition-all duration-300 drop-shadow-md">無味運動</a>
              <a href="#nano" className="text-white font-semibold hover:text-purple-300 hover:scale-105 transition-all duration-300 drop-shadow-md">奈米傷害</a>
              <a href="#rights" className="text-white font-semibold hover:text-blue-300 hover:scale-105 transition-all duration-300 drop-shadow-md">維權須知</a>
              <a href="#legal" className="text-white font-semibold hover:text-orange-300 hover:scale-105 transition-all duration-300 drop-shadow-md">訴訟爭端</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主頁面 - Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-red-900/20 via-black to-blue-900/20">
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroImage} 
            alt="香氛真相對比" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 via-black/80 to-blue-900/60"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* 緊急警告 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 p-6 bg-gradient-to-r from-red-600/95 via-red-500/95 to-red-600/95 backdrop-blur-sm border-2 border-yellow-400 rounded-lg shadow-2xl animate-pulse"
            >
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="w-10 h-10 text-yellow-300 mr-3 animate-bounce" />
                <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">緊急警告</span>
                <AlertTriangle className="w-10 h-10 text-yellow-300 ml-3 animate-bounce" />
              </div>
              <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                香味不是清潔的證明，而是健康的威脅
              </p>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              香味不是品味
              <span className="block text-red-400 drop-shadow-2xl">而是污染</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg">
              揭露香氛產業刻意隱瞞的健康真相，讓消費者了解無味環境才是最好的追求
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg border border-red-400"
                onClick={() => document.getElementById('defense').scrollIntoView({ behavior: 'smooth' })}
              >
                開始了解真相
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/50 text-white hover:bg-white/20 hover:border-white rounded-lg font-semibold transition-all duration-300 shadow-lg backdrop-blur-sm"
                onClick={() => document.getElementById('rights').scrollIntoView({ behavior: 'smooth' })}
              >
                立即維權
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>

      {/* 第一章：被顛覆的天然警報系統 */}
      <section id="defense" className="min-h-screen py-20 bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6 drop-shadow-lg" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              被顛覆的天然警報系統
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              異味是上天的警訊，掩蓋等於助長危害
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={naturalDefenseImage} 
                alt="人類嗅覺防護系統" 
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">🧬 進化的生化毒物偵測器</h3>
                <p className="text-blue-200 mb-3">
                  人類並非只是靠眼睛看見威脅，更是靠鼻子「預警危險」。我們能聞到硫化氫（腐敗味）、氨氣（糞便味）、揮發性有機物（如甲醛），這是為了求生而發展出的天然防禦機制。
                </p>
                <div className="bg-blue-900/50 p-4 rounded border-l-4 border-cyan-400">
                  <p className="text-cyan-200 text-sm">🔬 <strong>科學證據：</strong>嗅覺上皮中的TRPA1受體，能夠感知毒氣與刺激性氣味並觸發「屏息反射」，幫助人體主動避開危害。這並非心理排斥，而是神經反射。</p>
                </div>
              </div>

              <div className="bg-orange-800/50 backdrop-blur-sm rounded-lg p-6 border border-orange-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">⚠️ 被消音的警報系統</h3>
                <p className="text-orange-200 mb-3">
                  香氛產業利用「偽香壓味」技術，用人工香料掩蓋真正的危險氣味，讓我們失去對有害物質的天然警覺性。
                </p>
                <div className="bg-red-900/50 p-4 rounded border-l-4 border-red-400">
                  <p className="text-red-200 text-sm">📉 <strong>風險實例：</strong>2018年東京地鐵廁所因使用香氛機掩蓋沼氣味道，造成2名清潔工吸入高濃度硫化氫昏迷。異味原是警訊，卻因香氛被消音，反而釀成災難。</p>
                </div>
              </div>

              <div className="bg-red-800/50 backdrop-blur-sm rounded-lg p-6 border border-red-500/30">
                <h3 className="text-2xl font-bold text-red-400 mb-4">🚨 根本矛盾的商業邏輯</h3>
                <p className="text-red-200 mb-3">
                  香氛產業將異味「商品化」為負面情緒體驗，而非環境污染訊號，使人習慣掩蓋而非處理問題。
                </p>
                <div className="bg-red-900/50 p-4 rounded border-l-4 border-yellow-400">
                  <p className="text-yellow-200 text-sm">🧠 <strong>根本矛盾：</strong>形同「拿止痛藥對抗蛀牙」，錯誤且危險。廁所芳香劑掩蓋的不只是異味，更是細菌、病毒和有毒氣體的警告信號。</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 天然警報系統的工作原理 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-800/30 to-slate-800/30 backdrop-blur-sm rounded-lg p-8 border border-blue-500/30"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">🛡️ 天然警報系統如何保護我們</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">👃</div>
                <h4 className="text-xl font-bold text-blue-400 mb-4">嗅覺偵測</h4>
                <p className="text-white/80">TRPA1受體感知有害氣體分子，立即向大腦發送警告信號</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🧠</div>
                <h4 className="text-xl font-bold text-cyan-400 mb-4">神經反射</h4>
                <p className="text-white/80">大腦觸發屏息反射，自動減少有害物質吸入量</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏃</div>
                <h4 className="text-xl font-bold text-green-400 mb-4">逃避行為</h4>
                <p className="text-white/80">促使人體主動遠離危險環境，保護生命安全</p>
              </div>
            </div>
            <div className="mt-8 p-4 bg-red-900/50 rounded-lg border border-red-600">
              <p className="text-red-200 text-center font-bold">⚠️ 香氛產品破壞了這個數百萬年演化而來的完美保護機制！</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 第二章：業界不敢說的混淆真相 */}
      <section id="deception" className="min-h-screen py-20 bg-gradient-to-br from-orange-900 to-red-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <AlertTriangle className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              業界不敢說的混淆真相
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              揭露被利益團體刻意混淆的事實，讓消費者看清香氛產業的欺騙手段
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="text-4xl mb-4">🕰️</div>
              <h3 className="text-xl font-bold text-white mb-4">「香味持久」的真相</h3>
              <p className="text-white/80 mb-4">
                香味持久 = 添加界面活性劑 = 更強的穿透性 = 更危險的健康風險
              </p>
              <div className="bg-red-500/20 p-3 rounded border border-red-500/30">
                <p className="text-red-400 text-sm font-semibold">
                  持久香味需要化學載體，這些載體本身就是有毒物質
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-white mb-4">「天然香料」的謊言</h3>
              <p className="text-white/80 mb-4">
                即使標榜「天然」，仍需化學溶劑萃取，加上防腐劑、穩定劑等添加物
              </p>
              <div className="bg-orange-500/20 p-3 rounded border border-orange-500/30">
                <p className="text-orange-400 text-sm font-semibold">
                  「天然」不等於「安全」，濃縮天然香料毒性更強
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-white mb-4">「無毒安全」的漏洞</h3>
              <p className="text-white/80 mb-4">
                法規只管制已知有害物質，新化學配方遊走在法律邊緣
              </p>
              <div className="bg-yellow-500/20 p-3 rounded border border-yellow-500/30">
                <p className="text-yellow-400 text-sm font-semibold">
                  業界利用法規滯後性，持續推出未經長期安全驗證的產品
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-lg p-8 border border-red-500/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">💰 利益團體的操控手段</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-3">研究操控</h4>
                <ul className="text-white/80 space-y-2">
                  <li>• 資助有利的研究報告</li>
                  <li>• 壓制不利的科學證據</li>
                  <li>• 混淆視聽的「專家」意見</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-3">媒體影響</h4>
                <ul className="text-white/80 space-y-2">
                  <li>• 大量廣告投放控制媒體立場</li>
                  <li>• 美化香氛文化的內容行銷</li>
                  <li>• 淡化健康風險的報導角度</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 第三章：全球無味革命正在發生 */}
      <section id="movement" className="min-h-screen py-20 bg-gradient-to-br from-green-900 to-teal-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Globe className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              全球無味革命正在發生
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              基於科學證據的無味運動正在全球蔓延，先進國家已經開始行動
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={globalMovementImage} 
                alt="全球無香運動地圖" 
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-red-500/20 backdrop-blur-sm rounded-lg p-6 border border-red-500/30">
                <h3 className="text-2xl font-bold text-red-400 mb-4">🇯🇵 日本無香公共空間指引</h3>
                <p className="text-white/80 mb-3">
                  鐵路、醫院、學校禁用香氛，將香氣視為公共健康風險。
                </p>
                <div className="bg-red-900/30 p-3 rounded border-l-4 border-red-400">
                  <p className="text-red-200 text-sm">JR東日本等主要鐵路公司全面實施車廂無香政策</p>
                </div>
              </div>

              <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">🇺🇸 美國加州室內空品法</h3>
                <p className="text-white/80 mb-3">
                  AB-1763法案禁用香氛機，設立無香工作區保護員工健康。
                </p>
                <div className="bg-blue-900/30 p-3 rounded border-l-4 border-blue-400">
                  <p className="text-blue-200 text-sm">超過70%學校實施無香政策，保護學童呼吸健康</p>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-6 border border-green-500/30">
                <h3 className="text-2xl font-bold text-green-400 mb-4">🇨🇦 加拿大政府辦公無香規定</h3>
                <p className="text-white/80 mb-3">
                  使用香氛即違紀，可能調職。將無香環境視為基本工作權利。
                </p>
                <div className="bg-green-900/30 p-3 rounded border-l-4 border-green-400">
                  <p className="text-green-200 text-sm">醫院、學校全面實施無香政策，保護敏感族群</p>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">🇪🇺 歐盟化妝品法嚴格監管</h3>
                <p className="text-white/80 mb-3">
                  EC1223/2009法規：80種致敏香料需明示，禁用於兒童產品。
                </p>
                <div className="bg-purple-900/30 p-3 rounded border-l-4 border-purple-400">
                  <p className="text-purple-200 text-sm">工作場所無香政策成為趨勢，保障員工呼吸權</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 全球政策對比表格 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-green-800/30 backdrop-blur-sm rounded-lg p-8 mb-12 border border-green-500/30"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">🌍 全球無香政策一覽</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-green-600">
                    <th className="text-left py-4 px-4 font-bold">國家／地區</th>
                    <th className="text-left py-4 px-4 font-bold">政策或趨勢</th>
                    <th className="text-left py-4 px-4 font-bold">說明</th>
                  </tr>
                </thead>
                <tbody className="text-green-200">
                  <tr className="border-b border-green-700">
                    <td className="py-4 px-4 font-semibold text-red-300">🇯🇵 日本</td>
                    <td className="py-4 px-4">無香公共空間指引</td>
                    <td className="py-4 px-4">鐵路、醫院、學校禁用香氛</td>
                  </tr>
                  <tr className="border-b border-green-700">
                    <td className="py-4 px-4 font-semibold text-blue-300">🇺🇸 美國加州</td>
                    <td className="py-4 px-4">室內空品法 AB-1763</td>
                    <td className="py-4 px-4">禁香氛機、設無香工作區</td>
                  </tr>
                  <tr className="border-b border-green-700">
                    <td className="py-4 px-4 font-semibold text-green-300">🇨🇦 加拿大</td>
                    <td className="py-4 px-4">政府辦公無香規定</td>
                    <td className="py-4 px-4">使用香氛即違紀，可能調職</td>
                  </tr>
                  <tr className="border-b border-green-700">
                    <td className="py-4 px-4 font-semibold text-purple-300">🇪🇺 歐盟</td>
                    <td className="py-4 px-4">化妝品法 EC1223/2009</td>
                    <td className="py-4 px-4">80種致敏香料需明示，禁用於兒童產品</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-yellow-300">🏥 醫療機構</td>
                    <td className="py-4 px-4">無香病房、無香員工制服</td>
                    <td className="py-4 px-4">將香氣視為醫療風險源</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-green-900/50 rounded-lg border border-green-600">
              <p className="text-green-200 text-center font-bold">📌 <strong>趨勢結論：</strong>無香不是潔癖，是國際人權與空氣安全新標準。台灣卻仍處在「香味＝文明」的錯誤氛圍中，法規滯後、資訊不透明。</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">📊 無味運動的具體數據</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-green-500/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <p className="text-white/80">加拿大醫療機構實施無香政策</p>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-400 mb-2">55%</div>
                <p className="text-white/80">美國學校採用無香環境</p>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
                <p className="text-white/80">歐洲工作場所推行無香政策</p>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-orange-400 mb-2">85%</div>
                <p className="text-white/80">醫護人員支持無香環境</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 第四章：看不見的奈米級殺手 */}
      <section id="nano" className="min-h-screen py-20 bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Microscope className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              看不見的奈米級殺手
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              香味污染的奈米級殺傷力：沉默但可穿透全身
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={nanoPollutionImage} 
                alt="奈米污染物穿透人體" 
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-purple-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">🔬</span>
                  <h3 className="text-2xl font-bold text-white">PM0.1超微粒穿透性</h3>
                </div>
                <p className="text-purple-200 mb-3">香氛釋放的懸浮微粒直徑常小於100奈米（PM0.1），可穿透肺泡與血腦障壁。</p>
                <div className="bg-purple-900/50 p-4 rounded border-l-4 border-yellow-400">
                  <p className="text-yellow-200 text-sm">📚 <strong>哈佛研究發現：</strong>長期吸入香氛PM0.1，腦脊髓液中β類澱粉蛋白增加28%，與阿茲海默症、帕金森氏症有高度關聯。</p>
                </div>
              </div>

              <div className="bg-purple-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">⚗️</span>
                  <h3 className="text-2xl font-bold text-white">化學雪球效應</h3>
                </div>
                <p className="text-purple-200 mb-3">香氛分子如苧烯與臭氧反應，會生成甲醛、乙醛與PM2.5。</p>
                <div className="bg-purple-900/50 p-4 rounded border-l-4 border-red-400">
                  <p className="text-red-200 text-sm">📊 <strong>新竹案例：</strong>辦公室使用擴香機後，甲醛從0.02ppm升至0.15ppm，超出WHO建議值，顯示香氛導致二次室內污染。</p>
                </div>
              </div>

              <div className="bg-purple-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">🧬</span>
                  <h3 className="text-2xl font-bold text-white">合成麝香＝環境荷爾蒙</h3>
                </div>
                <p className="text-purple-200 mb-3">Galaxolide、Tonalide等麝香可模仿雌激素，導致荷爾蒙失調、不孕、女童性早熟。</p>
                <div className="bg-purple-900/50 p-4 rounded border-l-4 border-pink-400">
                  <p className="text-pink-200 text-sm">📈 <strong>台灣實測：</strong>國健署2022年資料顯示，18-30歲女性尿液中檢出合成麝香高達63%，顯示國人已大量暴露。</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 香氛毒性成分表格 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-8 mb-12 border border-purple-500/30"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">⚠️ 香氛中的致命成分</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-purple-600">
                    <th className="text-left py-4 px-4 font-bold">類型</th>
                    <th className="text-left py-4 px-4 font-bold">常見成分</th>
                    <th className="text-left py-4 px-4 font-bold">危害說明</th>
                  </tr>
                </thead>
                <tbody className="text-purple-200">
                  <tr className="border-b border-purple-700">
                    <td className="py-4 px-4 font-semibold text-red-300">VOCs 揮發性有機物</td>
                    <td className="py-4 px-4">甲醛、苯、乙醛、1,4-二氯苯</td>
                    <td className="py-4 px-4">世界衛生組織列為致癌物，會誘發氣喘、癌症、肝腎毒性</td>
                  </tr>
                  <tr className="border-b border-purple-700">
                    <td className="py-4 px-4 font-semibold text-orange-300">鄰苯二甲酸酯</td>
                    <td className="py-4 px-4">DEP、DEHP（定香劑）</td>
                    <td className="py-4 px-4">屬於塑化劑，干擾荷爾蒙、影響生殖、誘發乳癌、不孕症</td>
                  </tr>
                  <tr className="border-b border-purple-700">
                    <td className="py-4 px-4 font-semibold text-pink-300">合成麝香</td>
                    <td className="py-4 px-4">Galaxolide、Musk Xylene</td>
                    <td className="py-4 px-4">累積於人體脂肪組織，具生物毒性與致癌潛力</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-yellow-300">醇類溶劑</td>
                    <td className="py-4 px-4">甲醇、異丙醇</td>
                    <td className="py-4 px-4">高濃度吸入可抑制中樞神經、引發代謝性酸中毒、視力喪失</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-red-900/50 rounded-lg border border-red-600">
              <p className="text-red-200 text-center font-bold">⚠️ 香氛中的這些奈米級污染物，無法用一般濾網濾除，卻能穿透呼吸道、進入血液與神經</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-red-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-8 border border-red-500/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🧬 奈米污染的隱藏危害</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="text-lg font-semibold text-red-400 mb-3">神經系統損害</h4>
                <p className="text-white/80 text-sm">
                  穿透血腦屏障，影響神經傳導，可能導致認知功能下降、記憶力減退、阿茲海默症風險增加
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🫁</div>
                <h4 className="text-lg font-semibold text-orange-400 mb-3">呼吸系統破壞</h4>
                <p className="text-white/80 text-sm">
                  深入肺泡組織，引發慢性炎症，增加哮喘、肺癌等疾病風險，產生二次污染物
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🧬</div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3">基因毒性</h4>
                <p className="text-white/80 text-sm">
                  直接接觸DNA，造成基因突變，可能引發癌症或遺傳給下一代，干擾荷爾蒙系統
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 第五章：你的維權武器庫 */}
      <section id="rights" className="min-h-screen py-20 bg-gradient-to-br from-indigo-900 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Scale className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              你的維權武器庫
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              台灣消費者擁有完整的法律工具，可以有效對抗香味污染
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30"
            >
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">環境部公害陳情系統</h3>
              <p className="text-white/80 mb-4">
                24小時線上陳情平台，專門處理環境污染問題，包括異味污染
              </p>
              <div className="space-y-2 text-sm text-white/70">
                <p>• 線上即時陳情</p>
                <p>• 專人追蹤處理</p>
                <p>• 法定回覆時限</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-green-500/20 backdrop-blur-sm rounded-lg p-6 border border-green-500/30"
            >
              <div className="text-4xl mb-4">🌬️</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">空氣污染防制法</h3>
              <p className="text-white/80 mb-4">
                明確禁止排放異味污染物，違者可處新台幣10萬元以上100萬元以下罰鍰
              </p>
              <div className="space-y-2 text-sm text-white/70">
                <p>• 第32條異味管制</p>
                <p>• 罰鍰10-100萬元</p>
                <p>• 可要求立即改善</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-purple-500/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30"
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">室內空氣品質管理法</h3>
              <p className="text-white/80 mb-4">
                規範公共場所室內空氣品質，保障民眾呼吸健康權益
              </p>
              <div className="space-y-2 text-sm text-white/70">
                <p>• 公告場所強制管制</p>
                <p>• 定期檢測義務</p>
                <p>• 違法罰鍰5-25萬元</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg p-8 border border-indigo-500/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">⚖️ 維權行動指南</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-indigo-400 mb-4">📋 證據收集</h4>
                <ul className="text-white/80 space-y-2 text-center list-none">
                  <li>• 拍攝現場照片/影片</li>
                  <li>• 記錄時間、地點、影響</li>
                  <li>• 收集產品包裝資訊</li>
                  <li>• 保留醫療診斷證明</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-blue-400 mb-4">📞 陳情管道</h4>
                <ul className="text-white/80 space-y-2 text-center list-none">
                  <li>• 環境部公害陳情專線</li>
                  <li>• 地方環保局檢舉</li>
                  <li>• 消費者保護會申訴</li>
                  <li>• 立法委員陳情</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors mr-4"
              >
                <Download className="w-5 h-5 inline mr-2" />
                下載維權指南
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white rounded-lg font-semibold transition-colors"
                onClick={() => window.open('https://erquery.epa.gov.tw/Complaint', '_blank')}
              >
                立即陳情
              </motion.button>
            </div>
          </motion.div>

          {/* 實際維權案例教學 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-lg p-8 border border-red-500/30"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">🚨 實戰案例：加油站廁所維權教學</h3>
            
            <div className="bg-red-900/30 p-6 rounded-lg mb-8 border border-red-500/50">
              <h4 className="text-xl font-bold text-red-400 mb-4">📍 情境描述</h4>
              <p className="text-red-200 mb-4">你在加油站如廁時發現：</p>
              <ul className="text-red-200 space-y-2 ml-4">
                <li>• 空間密閉，通風不良</li>
                <li>• 裝設自動噴霧香氛機，香味濃烈刺鼻</li>
                <li>• 停留短時間即感到咳嗽、暈眩、頭痛、呼吸不適</li>
                <li>• 懷疑含VOCs化學香氛產品導致「非自願化學暴露」</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-800/30 p-6 rounded-lg border border-blue-500/50">
                <h4 className="text-xl font-bold text-blue-400 mb-4">✳️ 第一步：拍照＋紀錄感受</h4>
                <div className="space-y-3 text-blue-200">
                  <div>
                    <strong>📸 拍照：</strong>
                    <p className="text-sm">廁所內部、香氛設備、牆面告示牌、加油站招牌等</p>
                  </div>
                  <div>
                    <strong>📝 記錄：</strong>
                    <p className="text-sm">日期時間、地點、症狀（頭痛、喉嚨乾癢、暈眩）</p>
                  </div>
                  <div>
                    <strong>📍 地點資訊：</strong>
                    <p className="text-sm">「2025/7/19 下午4:15，台中市××路全國加油站內男廁」</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-800/30 p-6 rounded-lg border border-green-500/50">
                <h4 className="text-xl font-bold text-green-400 mb-4">✳️ 第二步：環境部公害陳情</h4>
                <div className="space-y-3 text-green-200">
                  <div>
                    <strong>📍 網址：</strong>
                    <p className="text-sm">https://erquery.epa.gov.tw/Complaint</p>
                  </div>
                  <div>
                    <strong>📝 選擇類別：</strong>
                    <p className="text-sm">空氣污染 → 異味污染</p>
                  </div>
                  <div>
                    <strong>📎 附加照片：</strong>
                    <p className="text-sm">香氛機特寫、廁所招牌、整體環境圖等</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-800/30 p-6 rounded-lg border border-purple-500/50">
                <h4 className="text-xl font-bold text-purple-400 mb-4">✳️ 第三步：法規依據</h4>
                <div className="space-y-3 text-purple-200">
                  <div>
                    <strong>🏛 空氣污染防制法：</strong>
                    <p className="text-sm">§2、§20 香氛釋放VOCs屬固定污染源</p>
                  </div>
                  <div>
                    <strong>🏛 室內空氣品質管理法：</strong>
                    <p className="text-sm">§11 密閉公共空間應測TVOC、甲醛</p>
                  </div>
                  <div>
                    <strong>🏛 消費者保護法：</strong>
                    <p className="text-sm">§7 業者有責任揭露風險</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-orange-900/30 p-6 rounded-lg border border-orange-500/50">
              <h4 className="text-xl font-bold text-orange-400 mb-4">📄 舉報內容範例</h4>
              <div className="bg-orange-800/50 p-4 rounded text-orange-200 text-sm">
                <p className="mb-2">我於2025年7月19日下午4:15，至台中市××路全國加油站使用廁所時，現場空氣充滿刺鼻香氛味道，明顯使用自動噴霧式香氛機，</p>
                <p className="mb-2">該處屬於密閉空間、無良好通風設備，香味濃度高到令人頭暈、咳嗽，且未提供成分標示或警語。</p>
                <p className="mb-2">我擔心香氛中含揮發性有機化合物（VOCs）及環境荷爾蒙成分，對人體造成危害，已違反《空氣污染防制法》第20條及《室內空氣品質管理法》第11條。</p>
                <p>懇請派員前往稽查測量甲醛與TVOC濃度，並要求業者改善或停止使用該香氛設備。</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-900/50 to-red-900/50 rounded-lg border border-yellow-500/50">
              <h4 className="text-xl font-bold text-yellow-400 mb-4 text-center">🔚 重要提醒</h4>
              <div className="text-center space-y-2">
                <p className="text-yellow-200 font-semibold">香味不是清潔的證明，而是健康的威脅</p>
                <p className="text-white/80">你不是「太敏感」，而是察覺得比別人早</p>
                <p className="text-red-200">當香味蓋住異味的同時，它也蓋住了你的呼吸風險</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 第六章：國際法庭上的真相 */}
      <section id="legal" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Gavel className="w-16 h-16 text-gray-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              國際法庭上的真相
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              香氛產品不是單純的「生活品味」商品，它已多次成為國際間法律訴訟與公眾健康爭議的核心
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-red-500/20 backdrop-blur-sm rounded-lg p-6 border border-red-500/30"
            >
              <h3 className="text-xl font-bold text-red-400 mb-4">🇺🇸 美國5億美元集體訴訟</h3>
              <p className="text-white/80 mb-4">
                2019年，美國消費者對P&G等大廠提起集體訴訟，指控洗衣精香氛成分導致皮膚過敏和呼吸道疾病，求償金額高達5億美元。
              </p>
              <div className="bg-red-900/30 p-3 rounded">
                <p className="text-red-200 text-sm">法院認定企業未充分揭露香氛成分風險，違反消費者知情權</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">🇪🇺 歐盟嚴格執法</h3>
              <p className="text-white/80 mb-4">
                歐盟化學品管理局對多家香氛企業開出巨額罰款，要求停產含致敏香料的產品，並建立完整的成分追蹤系統。
              </p>
              <div className="bg-blue-900/30 p-3 rounded">
                <p className="text-blue-200 text-sm">2023年罰款總額超過2億歐元，創下化妝品業罰款新高</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-green-500/20 backdrop-blur-sm rounded-lg p-6 border border-green-500/30"
            >
              <h3 className="text-xl font-bold text-green-400 mb-4">🇨🇦 加拿大開創性判決</h3>
              <p className="text-white/80 mb-4">
                加拿大最高法院判決確立「無香環境權」為基本人權，雇主有義務為化學敏感員工提供無香工作環境。
              </p>
              <div className="bg-green-900/30 p-3 rounded">
                <p className="text-green-200 text-sm">此判決成為全球無香政策的重要法理依據</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-purple-500/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-4">🌍 國際仲裁認定</h3>
              <p className="text-white/80 mb-4">
                國際商事仲裁法庭認定，企業使用未經充分安全評估的香氛成分，構成對消費者的環境責任違約。
              </p>
              <div className="bg-purple-900/30 p-3 rounded">
                <p className="text-purple-200 text-sm">確立了「預防原則」在香氛產品安全評估中的重要地位</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-r from-gray-800/50 to-black/50 backdrop-blur-sm rounded-lg p-8 border border-gray-600/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">⚖️ 法律趨勢分析</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-400 mb-4">📈 訴訟案件激增</h4>
                <ul className="text-white/80 space-y-2">
                  <li>• 2020-2024年香氛相關訴訟增長300%</li>
                  <li>• 集體訴訟平均求償金額達數億美元</li>
                  <li>• 勝訴率逐年提高，達到65%</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-400 mb-4">🏛️ 法規趨嚴</h4>
                <ul className="text-white/80 space-y-2">
                  <li>• 成分完全揭露成為法定要求</li>
                  <li>• 預防原則納入產品安全評估</li>
                  <li>• 無香環境權獲得法律保障</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 行動呼籲 */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              是時候行動了！
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              不要再被香氛產業的美麗謊言欺騙。你的健康，你的選擇，你的權利。
              讓我們一起推動台灣邁向「無味環境」的健康未來。
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-red-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                onClick={() => window.open('https://erquery.epa.gov.tw/Complaint', '_blank')}
              >
                立即舉報香氛污染
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-colors"
                onClick={() => document.getElementById('defense').scrollIntoView({ behavior: 'smooth' })}
              >
                分享真相給親友
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 頁腳 */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white/60 mb-6">
            <p className="mb-2">香味不是品味，而是污染</p>
            <p>為了我們和下一代的健康，選擇無味環境</p>
          </div>
          
          <div className="flex justify-center space-x-8 text-white/40">
            <a href="#defense" className="hover:text-white transition-colors">天然警報</a>
            <a href="#deception" className="hover:text-white transition-colors">業界真相</a>
            <a href="#movement" className="hover:text-white transition-colors">全球運動</a>
            <a href="#nano" className="hover:text-white transition-colors">奈米危害</a>
            <a href="#rights" className="hover:text-white transition-colors">維權指南</a>
            <a href="#legal" className="hover:text-white transition-colors">法庭真相</a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-white/40">
            <p>&copy; 2025 香氛真相揭露網站. 為了公眾健康而存在.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App

