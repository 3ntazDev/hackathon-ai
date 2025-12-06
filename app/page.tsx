"use client"

import { useState, useEffect } from 'react';
import { Shield, Camera, FileText, Zap, CheckCircle, ChevronDown, MapPin, Clock, UserCheck, Award, Activity, Eye, TrendingUp, AlertCircle, BarChart3, Target, Sparkles } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [particlePositions, setParticlePositions] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }));
    setParticlePositions(particles);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#006C35] via-[#F4F4F4] to-[#FFFFFF] overflow-hidden">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/98 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,108,53,0.12)] py-2 sm:py-3' 
          : 'bg-gradient-to-b from-[#006C35]/95 to-transparent py-3 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#006C35] to-[#00A859] blur-lg sm:blur-xl opacity-50 rounded-xl sm:rounded-2xl"></div>
              <div className="relative w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#006C35] to-[#00A859] flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 sm:w-6 md:w-8 sm:h-6 md:h-8 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <div className="text-right">
              <h1 className={`text-xl sm:text-2xl font-black tracking-tight transition-colors duration-300 ${
                scrollY > 50 ? 'text-[#006C35]' : 'text-white'
              }`}>
                رَصـــد
              </h1>
              <p className={`text-[10px] sm:text-xs font-semibold transition-colors duration-300 ${
                scrollY > 50 ? 'text-[#00A859]' : 'text-white/80'
              }`}>
                منصة تحليل الحوادث
              </p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {[
              { name: 'الرئيسية', active: true },
              { name: 'كيف يعمل', active: false },
              { name: 'المميزات', active: false }
            ].map((item, idx) => (
              <button
                key={idx}
                className={`relative text-sm font-bold transition-all duration-300 ${
                  scrollY > 50
                    ? item.active ? 'text-[#006C35]' : 'text-gray-600 hover:text-[#006C35]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                {item.active && (
                  <div className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-colors duration-300 ${
                    scrollY > 50 ? 'bg-[#006C35]' : 'bg-white'
                  }`}></div>
                )}
              </button>
            ))}
          </div>

          <button className="relative group px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-[#006C35] to-[#00A859] group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A859] to-[#006C35] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative text-white flex items-center gap-2">
              <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">ابدأ التحليل</span>
              <span className="sm:hidden">ابدأ</span>
            </span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 px-6 overflow-hidden">
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#006C35]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-[#00A859]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#006C35]/20 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00A859]/20 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#006C35]/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="text-center lg:text-right space-y-8">
              
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-lg border-2 border-[#006C35]/20">
                <div className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse"></div>
                <span className="text-[#006C35] text-sm font-bold">منصة ذكية لحل ازدحام الحوادث</span>
                <Zap className="w-5 h-5 text-[#00A859]" />
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                  <span className="block bg-gradient-to-r from-[#006C35] via-[#00A859] to-[#006C35] bg-clip-text text-transparent animate-pulse">
                    تحليل ذكي
                  </span>
                  <span className="block text-[#1a1a1a] mt-2">
                    للحوادث المرورية
                  </span>
                </h1>
                
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="h-1 w-16 bg-gradient-to-r from-[#006C35] to-[#00A859] rounded-full"></div>
                  <span className="text-[#006C35] font-bold text-sm">🇸🇦 صنع في المملكة</span>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#00A859] to-[#006C35] rounded-full"></div>
                </div>
              </div>

              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                حل مبتكر يعمل بتقنية <span className="text-[#006C35] font-bold">الذكاء الاصطناعي</span> يساهم في تقليل ازدحام الطرق، 
                تسريع إجراءات الحوادث، وحل النزاعات بدقة <span className="text-[#00A859] font-bold">98%</span> خلال ثوانٍ.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group relative px-8 py-5 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(0,108,53,0.3)] transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#006C35] to-[#00A859]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00A859] to-[#006C35] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative text-white font-bold text-lg flex items-center gap-3 justify-center">
                    <Camera className="w-6 h-6" />
                    رفع فيديو الحادث
                    <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                  </span>
                </button>

                <button className="group px-8 py-5 rounded-2xl border-3 border-[#006C35] bg-white text-[#006C35] font-bold text-lg hover:bg-[#006C35] hover:text-white transition-all duration-300 shadow-lg flex items-center gap-3 justify-center">
                  <Eye className="w-6 h-6" />
                  شاهد فيديو توضيحي
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { icon: Activity, value: '98%', label: 'دقة التحليل', color: 'from-[#006C35] to-[#00A859]' },
                  { icon: Zap, value: '< 5 ث', label: 'سرعة المعالجة', color: 'from-[#00A859] to-[#006C35]' },
                  { icon: Clock, value: '24/7', label: 'متاح دائماً', color: 'from-[#006C35] to-[#00A859]' }
                ].map((stat, idx) => (
                  <div key={idx} className="group relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 border border-gray-100">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                    <stat.icon className="w-8 h-8 text-[#006C35] mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-black text-[#006C35] mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* البطاقة التفاعلية المحسّنة */}
            <div className="relative lg:scale-110">
              
              <div className="relative mx-auto max-w-lg">
                
                {/* خلفية متوهجة ونابضة */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#006C35] to-[#00A859] blur-3xl opacity-40 rounded-[3rem] scale-110 animate-pulse"></div>
                
                {/* جزيئات متحركة حول الكارد */}
                {particlePositions.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-[#00A859] rounded-full opacity-60"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      animation: `float ${particle.duration}s ease-in-out infinite`,
                      animationDelay: `${particle.delay}s`
                    }}
                  ></div>
                ))}
                
                {/* الكرت الرئيسي */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-[2.5rem] shadow-[0_25px_80px_rgba(0,108,53,0.25)] overflow-hidden border-2 border-white/50 backdrop-blur-sm">
                  
                  {/* شريط علوي متحرك */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#006C35] via-[#00A859] to-[#006C35] bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]"></div>
                  
                  {/* Header المطوّر */}
                  <div className="relative bg-gradient-to-br from-[#006C35] via-[#00A859] to-[#006C35] p-8 overflow-hidden">
                    {/* خلفية شبكية متحركة */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                    
                    {/* تأثير الوهج المتحرك */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[slide_3s_ease-in-out_infinite]"></div>
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* أيقونة محسّنة بتأثير 3D */}
                        <div className="relative group">
                          <div className="absolute inset-0 bg-white/30 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                          <div className="relative w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <Camera className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={2.5} />
                          </div>
                        </div>
                        
                        <div className="text-white">
                          <div className="text-xs font-semibold opacity-90 mb-1 tracking-wider">حالة التحليل</div>
                          <div className="text-2xl font-black tracking-tight flex items-center gap-2">
                            جاري المعالجة
                            <Sparkles className="w-5 h-5 animate-pulse" />
                          </div>
                        </div>
                      </div>
                      
                      {/* دائرة التقدم المطورة */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
                        <div className="relative w-20 h-20">
                          <svg className="w-20 h-20 -rotate-90 drop-shadow-2xl">
                            <circle cx="40" cy="40" r="34" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="5" />
                            <circle 
                              cx="40" 
                              cy="40" 
                              r="34" 
                              fill="none" 
                              stroke="white" 
                              strokeWidth="5"
                              strokeLinecap="round"
                              strokeDasharray={`${2 * Math.PI * 34}`}
                              strokeDashoffset={`${2 * Math.PI * 34 * (1 - analysisProgress / 100)}`}
                              className="transition-all duration-300 drop-shadow-lg"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-white font-black text-lg">{analysisProgress}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* المحتوى المحسّن */}
                  <div className="p-8 space-y-6">
                    
                    {/* Progress الخطوات بتصميم أنيق */}
                    <div className="space-y-5">
                      {[
                        { icon: Target, text: 'تحليل مسار المركبات', done: analysisProgress > 30, percent: 100 },
                        { icon: AlertCircle, text: 'كشف نقاط الاصطدام', done: analysisProgress > 60, percent: analysisProgress > 60 ? 100 : Math.max(0, (analysisProgress - 30) * 3.33) },
                        { icon: BarChart3, text: 'تحديد نسبة المسؤولية', done: analysisProgress > 90, percent: analysisProgress > 90 ? 100 : Math.max(0, (analysisProgress - 60) * 3.33) }
                      ].map((step, idx) => (
                        <div key={idx} className="space-y-3 group">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                                step.done 
                                  ? 'bg-gradient-to-br from-[#006C35] to-[#00A859] shadow-lg shadow-[#006C35]/30' 
                                  : 'bg-gray-100'
                              }`}>
                                {step.done && (
                                  <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
                                )}
                                <step.icon className={`relative w-5 h-5 transition-colors duration-500 ${
                                  step.done ? 'text-white' : 'text-gray-400'
                                }`} strokeWidth={2.5} />
                              </div>
                              <span className={`text-sm font-bold transition-colors duration-500 ${
                                step.done ? 'text-[#006C35]' : 'text-gray-500'
                              }`}>
                                {step.text}
                              </span>
                            </div>
                            <span className={`text-sm font-black transition-colors duration-500 ${
                              step.done ? 'text-[#00A859]' : 'text-gray-400'
                            }`}>
                              {Math.round(step.percent)}%
                            </span>
                          </div>
                          <div className="relative w-full h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                            <div 
                              className="absolute inset-0 bg-gradient-to-r from-[#006C35] via-[#00A859] to-[#006C35] rounded-full transition-all duration-500 shadow-lg"
                              style={{ width: `${step.percent}%`, backgroundSize: '200% 100%' }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[slide_2s_ease-in-out_infinite]"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* النتيجة بتصميم فخم */}
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#006C35]/10 via-[#00A859]/5 to-transparent border-2 border-[#006C35]/20 overflow-hidden group hover:shadow-xl transition-all duration-500">
                      {/* تأثير الوهج */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[slide_3s_ease-in-out_infinite]"></div>
                      
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-gray-700 font-bold flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-[#006C35]" />
                            نتيجة التحليل الأولية
                          </span>
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#006C35]/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00A859] animate-pulse"></div>
                            <span className="text-xs font-bold text-[#006C35]">مباشر</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <div className="flex-1 relative group/item">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#006C35]/5 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative p-4 rounded-xl border border-[#006C35]/20">
                              <div className="text-xs text-gray-600 mb-2 font-semibold">المركبة (أ)</div>
                              <div className="text-4xl font-black bg-gradient-to-br from-[#006C35] to-[#00A859] bg-clip-text text-transparent">
                                75%
                              </div>
                              <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-[#006C35] to-[#00A859] rounded-full w-3/4 animate-[expand_1s_ease-out]"></div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="relative flex flex-col items-center">
                            <div className="w-px h-16 bg-gradient-to-b from-[#006C35]/30 via-[#00A859] to-[#006C35]/30"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00A859] shadow-lg animate-pulse"></div>
                          </div>
                          
                          <div className="flex-1 relative group/item">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00A859]/5 to-transparent rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative p-4 rounded-xl border border-[#00A859]/20">
                              <div className="text-xs text-gray-600 mb-2 font-semibold text-left">المركبة (ب)</div>
                              <div className="text-4xl font-black bg-gradient-to-br from-[#00A859] to-[#006C35] bg-clip-text text-transparent text-left">
                                25%
                              </div>
                              <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-[#00A859] to-[#006C35] rounded-full w-1/4 animate-[expand_1s_ease-out]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* معلومات إضافية فخمة */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: Clock, label: 'الوقت', value: '< 3 ثانية', color: 'from-blue-500 to-blue-600' },
                        { icon: CheckCircle, label: 'الدقة', value: '98.5%', color: 'from-green-500 to-green-600' }
                      ].map((item, idx) => (
                        <div key={idx} className="relative p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#006C35]/30 transition-all duration-300 group hover:shadow-lg">
                          <div className={`absolute top-2 right-2 w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                          <div className="relative flex items-center gap-2 mb-2">
                            <item.icon className="w-4 h-4 text-[#006C35]" />
                            <span className="text-xs text-gray-600 font-semibold">{item.label}</span>
                          </div>
                          <div className="text-xl font-black text-[#006C35]">{item.value}</div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* عناصر طافية محسّنة */}
                <div className="absolute -bottom-8 -left-8 px-6 py-4 bg-white rounded-3xl shadow-2xl border-2 border-[#006C35]/20 animate-[float_3s_ease-in-out_infinite] hover:scale-110 transition-transform duration-500 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#006C35] to-[#00A859] flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                      <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse"></div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-semibold">مشروع ناشئ</div>
                      <div className="text-sm font-black text-[#006C35]">نسخة تجريبية</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* تأثيرات إضافية حول الكارد */}
              <div className="absolute top-1/4 -right-4 w-24 h-24 border-4 border-[#006C35]/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute bottom-1/4 -left-4 w-20 h-20 border-4 border-[#00A859]/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>

            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-[#006C35] text-sm font-bold">اكتشف المزيد</span>
            <ChevronDown className="w-6 h-6 text-[#006C35]" />
          </div>
        </div>

      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-white relative">
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #006C35 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006C35]/10 text-[#006C35] text-sm font-bold mb-4">
              <Zap className="w-4 h-4" />
              خطوات بسيطة
            </div>
            <h2 className="text-5xl font-black text-[#1a1a1a]">
              كيف يعمل <span className="text-[#006C35]">رَصد</span>؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ثلاث خطوات فقط للحصول على تقرير شامل ودقيق
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                icon: Camera,
                title: 'رفع الفيديو',
                desc: 'ارفع فيديو الحادث من الداش كام، الهاتف، أو كاميرات المراقبة',
                color: 'from-[#006C35] to-[#00A859]'
              },
              {
                num: '02',
                icon: Activity,
                title: 'التحليل الفوري',
                desc: 'الذكاء الاصطناعي يحلل الفيديو ويكشف المركبات ونقاط الاصطدام',
                color: 'from-[#00A859] to-[#006C35]'
              },
              {
                num: '03',
                icon: FileText,
                title: 'التقرير النهائي',
                desc: 'احصل على تقرير مفصل يحدد نسبة الخطأ لكل طرف بدقة 98%',
                color: 'from-[#006C35] to-[#00A859]'
              }
            ].map((step, idx) => (
              <div 
                key={idx}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeFeature === idx ? 'scale-105' : 'hover:scale-105'
                }`}
                onMouseEnter={() => setActiveFeature(idx)}
              >
                <div className={`relative p-8 rounded-3xl bg-white border-2 transition-all duration-500 shadow-lg ${
                  activeFeature === idx 
                    ? 'border-[#006C35] shadow-2xl shadow-[#006C35]/20' 
                    : 'border-gray-200 hover:border-[#00A859]'
                }`}>
                  
                  <div className={`absolute -top-6 -right-6 w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl transition-all duration-500 shadow-xl ${
                    activeFeature === idx
                      ? `bg-gradient-to-br ${step.color} text-white scale-110`
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step.num}
                  </div>

                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    activeFeature === idx
                      ? `bg-gradient-to-br ${step.color} shadow-xl`
                      : 'bg-gray-50'
                  }`}>
                    <step.icon className={`w-10 h-10 transition-colors duration-500 ${
                      activeFeature === idx ? 'text-white' : 'text-gray-400'
                    }`} />
                  </div>

                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>

                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-gradient-to-r from-[#006C35] to-transparent"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A859]/10 text-[#00A859] text-sm font-bold mb-4">
              <Award className="w-4 h-4" />
              مميزات المنصة
            </div>
            <h2 className="text-5xl font-black text-[#1a1a1a]">
              لماذا <span className="text-[#006C35]">رَصد</span> الأفضل؟
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'تحليل فوري', desc: 'نتائج دقيقة خلال 5 ثوانٍ تقلل وقت الانتظار', gradient: 'from-yellow-400 to-orange-500' },
              { icon: '🚗', title: 'تقليل الازدحام', desc: 'حل النزاعات سريعاً لفتح الطرق وتجنب الاختناقات', gradient: 'from-blue-400 to-blue-600' },
              { icon: '📹', title: 'تكامل CCTV', desc: 'سيتم ربطه مع كاميرات المراقبة الحكومية مستقبلاً', gradient: 'from-purple-400 to-purple-600' },
              { icon: '⚖️', title: 'عدالة وشفافية', desc: 'تحديد المسؤولية بدقة يمنع الخلافات بين الأطراف', gradient: 'from-green-400 to-green-600' },
              { icon: '💰', title: 'توفير التكاليف', desc: 'تقليل حاجة الخبراء وتسريع إجراءات التأمين', gradient: 'from-red-400 to-red-600' },
              { icon: '📊', title: 'تقارير احترافية', desc: 'وثائق مفصلة جاهزة للتأمين والجهات الرسمية', gradient: 'from-indigo-400 to-indigo-600' }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-[#006C35] transition-all duration-500 cursor-pointer hover:shadow-2xl hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#006C35]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                
                <div className="relative space-y-4">
                  <div className={`text-5xl group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-black text-[#1a1a1a]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#1a1a1a] mb-4">
              التكامل المستقبلي مع <span className="text-[#006C35]">الأنظمة الحكومية</span>
            </h2>
            <p className="text-xl text-gray-600">
              سيتم ربط المنصة مع الأنظمة الرسمية لتسهيل الإجراءات
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="group relative p-10 rounded-3xl bg-gradient-to-br from-[#006C35] to-[#00A859] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
              
              <div className="relative z-10 text-white space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black">منصة أبشر</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  سيتم الربط مع أبشر لتسهيل إجراءات البلاغات وتحديث المعلومات تلقائياً
                </p>
                <div className="flex items-center gap-2 text-sm font-bold opacity-80">
                  <Clock className="w-5 h-5" />
                  <span>قريباً</span>
                </div>
              </div>
            </div>

            <div className="group relative p-10 rounded-3xl bg-gradient-to-br from-[#006C35] to-[#00A859] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
              
              <div className="relative z-10 text-white space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Camera className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black">نظام نجم</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  سيتم التكامل مع نجم لإرسال التقارير وتسريع إجراءات الحوادث المرورية
                </p>
                <div className="flex items-center gap-2 text-sm font-bold opacity-80">
                  <Clock className="w-5 h-5" />
                  <span>قريباً</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#006C35] via-[#00A859] to-[#006C35]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="space-y-8 text-white">
            
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/20 backdrop-blur-sm">
              <Zap className="w-5 h-5" />
              <span className="font-bold">ابدأ الآن</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              جاهز لتجربة مستقبل
              <br />
              <span className="text-yellow-300">تحليل الحوادث؟</span>
            </h2>
            
            <p className="text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              انضم إلى آلاف المستخدمين الذين سيستفيدون من <span className="font-black">رَصد</span> لتحليل حوادثهم بدقة وسرعة
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="group relative px-10 py-5 rounded-2xl bg-white text-[#006C35] font-black text-xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-500">
                <span className="relative flex items-center gap-3 justify-center">
                  <Camera className="w-6 h-6" />
                  ابدأ التحليل الآن
                  <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>

              <button className="px-10 py-5 rounded-2xl border-3 border-white text-white font-black text-xl hover:bg-white hover:text-[#006C35] transition-all duration-300 shadow-lg">
                شاهد كيف يعمل
              </button>
            </div>

            <div className="pt-12 grid grid-cols-3 gap-8">
              {[
                { value: 'MVP', label: 'نسخة تجريبية' },
                { value: '98%', label: 'دقة التحليل' },
                { value: '< 5 ث', label: 'سرعة المعالجة' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-black mb-2">{stat.value}</div>
                  <div className="text-sm opacity-80 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#006C35] to-[#00A859] flex items-center justify-center">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-black">رَصـد</h3>
                  <p className="text-xs text-gray-400 font-semibold">منصة تحليل الحوادث</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                منصة سعودية ذكية معتمدة لتحليل الحوادث المرورية بتقنية الذكاء الاصطناعي
              </p>
              <div className="flex gap-3">
                {['🐦', '📷', '💼', '📱'].map((emoji, idx) => (
                  <div 
                    key={idx}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#006C35] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-black mb-4">روابط سريعة</h4>
              <div className="space-y-3">
                {['الرئيسية', 'كيف يعمل', 'المميزات', 'من نحن', 'الأسئلة الشائعة'].map((link, idx) => (
                  <div key={idx} className="text-gray-400 hover:text-[#00A859] transition-colors cursor-pointer text-sm font-medium">
                    {link}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-black mb-4">الدعم والمساعدة</h4>
              <div className="space-y-3">
                {['مركز المساعدة', 'تواصل معنا', 'الأسئلة الشائعة', 'سياسة الخصوصية'].map((link, idx) => (
                  <div key={idx} className="text-gray-400 hover:text-[#00A859] transition-colors cursor-pointer text-sm font-medium">
                    {link}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-black mb-4">عن المشروع</h4>
              <div className="space-y-4 text-sm">
                <p className="text-gray-400 leading-relaxed">
                  مشروع ناشئ يهدف لحل مشكلة ازدحام الطرق بعد الحوادث وتسريع إجراءات تحديد المسؤولية
                </p>
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-[#00A859]"></div>
                  <span>نسخة تجريبية (MVP)</span>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span>© 2025 رَصد</span>
                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                <span>مشروع ناشئ - جميع الحقوق محفوظة</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse"></div>
                <span>نسخة تجريبية (MVP)</span>
              </div>
            </div>
          </div>

        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes expand {
          0% { width: 0; }
          100% { width: var(--target-width, 100%); }
        }
      `}</style>

    </main>
  );
}