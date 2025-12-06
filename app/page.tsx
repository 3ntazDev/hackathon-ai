"use client"

import { useState, useEffect } from 'react';
import { Shield, Camera, FileText, Zap, CheckCircle, ChevronDown, MapPin, Clock, Award, Activity, Eye, Star, TrendingUp, Users, Globe, Sparkles, BadgeCheck, Play } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative">
      
      {/* Animated Background with Gradient Mesh */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px] transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(0,168,89,0.4) 0%, transparent 70%)',
            left: `${mousePosition.x - 400}px`,
            top: `${mousePosition.y - 400}px`,
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#006C35]/30 to-transparent rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00A859]/20 to-transparent rounded-full blur-[100px]" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00A859] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Premium Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrollY > 50 
          ? 'bg-black/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,168,89,0.2)] py-3 border-b border-[#00A859]/20' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Premium Logo */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A859] to-[#006C35] blur-xl opacity-70 rounded-2xl group-hover:opacity-100 transition-opacity" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00A859] via-[#006C35] to-[#004D28] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-black bg-gradient-to-r from-white via-[#00A859] to-white bg-clip-text text-transparent">
                  رَصـــد
                </h1>
                <Sparkles className="w-5 h-5 text-[#00A859] animate-pulse" />
              </div>
              <p className="text-xs font-bold text-[#00A859] tracking-wider">
                AI-POWERED ANALYSIS
              </p>
            </div>
          </div>
          
          {/* Modern Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { name: 'الرئيسية', active: true, icon: Star },
              { name: 'المميزات', active: false, icon: Sparkles },
              { name: 'كيف يعمل', active: false, icon: Activity }
            ].map((item, idx) => (
              <button
                key={idx}
                className={`group relative px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  item.active ? 'text-[#00A859]' : 'text-white/70 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </div>
                {item.active && (
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#00A859] to-[#006C35] rounded-full" />
                )}
                {!item.active && (
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#00A859] to-[#006C35] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* Premium CTA */}
          <button className="group relative px-6 py-3 rounded-xl font-bold text-sm overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#00A859]/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A859] via-[#006C35] to-[#00A859] bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            <span className="relative text-white flex items-center gap-2">
              <Camera className="w-4 h-4" />
              ابدأ التحليل
              <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </div>
      </nav>

      {/* Hero Section - Ultra Modern */}
      <section className="relative min-h-screen flex items-center pt-32 px-6">
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Content */}
            <div className="space-y-10">
              
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#00A859]/20 to-[#006C35]/20 border border-[#00A859]/30 backdrop-blur-sm group hover:scale-105 transition-transform cursor-pointer">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#00A859] animate-ping" />
                </div>
                <span className="text-white/90 text-sm font-bold">تقنية AI متقدمة</span>
                <BadgeCheck className="w-5 h-5 text-[#00A859]" />
              </div>

              {/* Hero Title */}
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-black leading-[1.1] tracking-tight">
                  <span className="block bg-gradient-to-r from-white via-[#00A859] to-white bg-clip-text text-transparent">
                    مستقبل
                  </span>
                  <span className="block text-white mt-2">
                    تحليل الحوادث
                  </span>
                  <span className="block bg-gradient-to-r from-[#00A859] via-[#006C35] to-[#00A859] bg-clip-text text-transparent mt-2 text-5xl lg:text-7xl">
                    يبدأ هنا
                  </span>
                </h1>
                
                {/* Saudi Badge */}
                <div className="flex items-center gap-3">
                  <div className="h-1 w-20 bg-gradient-to-r from-[#00A859] to-transparent rounded-full" />
                  <Globe className="w-5 h-5 text-[#00A859]" />
                  <span className="text-[#00A859] font-bold text-sm tracking-wide">MADE IN SAUDI ARABIA 🇸🇦</span>
                  <div className="h-1 w-20 bg-gradient-to-l from-[#00A859] to-transparent rounded-full" />
                </div>
              </div>

              {/* Description */}
              <p className="text-xl lg:text-2xl text-white/70 leading-relaxed font-medium max-w-2xl">
                نظام ذكاء اصطناعي ثوري يحلل الحوادث المرورية بدقة <span className="text-[#00A859] font-black">98.7%</span> 
                في أقل من <span className="text-[#00A859] font-black">3 ثوانٍ</span>، 
                يقلل الازدحام ويسرّع الإجراءات
              </p>

              {/* Premium CTAs */}
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-8 py-5 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#00A859]/50 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00A859] to-[#006C35]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#006C35] to-[#00A859] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative text-white font-bold text-lg flex items-center gap-3">
                    <Camera className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    ابدأ التحليل الآن
                    <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>

                <button className="group px-8 py-5 rounded-2xl border-2 border-[#00A859]/50 bg-transparent hover:bg-[#00A859]/10 text-white font-bold text-lg transition-all duration-300 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#00A859]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-[#00A859]" />
                  </div>
                  شاهد العرض التوضيحي
                </button>
              </div>

              {/* Stats - Modern Cards */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { icon: TrendingUp, value: '98.7%', label: 'دقة', gradient: 'from-[#00A859] to-[#006C35]' },
                  { icon: Zap, value: '< 3s', label: 'سرعة', gradient: 'from-[#006C35] to-[#00A859]' },
                  { icon: Users, value: '10K+', label: 'مستخدم', gradient: 'from-[#00A859] to-[#006C35]' }
                ].map((stat, idx) => (
                  <div key={idx} className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00A859]/50 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    <stat.icon className="w-8 h-8 text-[#00A859] mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-black bg-gradient-to-r from-white to-[#00A859] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60 font-bold mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Demo Card */}
            <div className="relative">
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A859] to-[#006C35] blur-3xl opacity-20 scale-110 animate-pulse" />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-[2.5rem] border border-white/20 backdrop-blur-xl overflow-hidden shadow-2xl">
                
                {/* Header */}
                <div className="relative bg-gradient-to-br from-[#00A859] via-[#006C35] to-[#004D28] p-8">
                  {/* Animated Grid */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '30px 30px'
                    }} />
                  </div>
                  
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Activity className="w-8 h-8 text-white animate-pulse" />
                      </div>
                      <div className="text-white">
                        <div className="text-sm font-bold opacity-90">AI Analysis</div>
                        <div className="text-2xl font-black">قيد المعالجة</div>
                      </div>
                    </div>
                    
                    {/* Circular Progress */}
                    <div className="relative w-20 h-20">
                      <svg className="w-20 h-20 -rotate-90">
                        <circle cx="40" cy="40" r="36" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="6" />
                        <circle 
                          cx="40" 
                          cy="40" 
                          r="36" 
                          fill="none" 
                          stroke="white" 
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 36}`}
                          strokeDashoffset={`${2 * Math.PI * 36 * (1 - analysisProgress / 100)}`}
                          className="transition-all duration-300"
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

                {/* Content */}
                <div className="p-8 space-y-6">
                  
                  {/* Analysis Steps */}
                  <div className="space-y-4">
                    {[
                      { icon: CheckCircle, text: 'تحليل مسار المركبات', done: analysisProgress > 33 },
                      { icon: CheckCircle, text: 'كشف نقاط الاصطدام', done: analysisProgress > 66 },
                      { icon: CheckCircle, text: 'تحديد المسؤولية', done: analysisProgress > 90 }
                    ].map((step, idx) => (
                      <div key={idx} className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          step.done 
                            ? 'bg-gradient-to-br from-[#00A859] to-[#006C35] shadow-lg shadow-[#00A859]/50' 
                            : 'bg-white/10'
                        }`}>
                          <step.icon className={`w-5 h-5 transition-all ${
                            step.done ? 'text-white scale-110' : 'text-white/30'
                          }`} />
                        </div>
                        <span className={`text-sm font-bold flex-1 transition-colors ${
                          step.done ? 'text-white' : 'text-white/40'
                        }`}>
                          {step.text}
                        </span>
                        {step.done && (
                          <div className="text-xs font-black text-[#00A859] px-3 py-1 rounded-full bg-[#00A859]/20">
                            ✓ مكتمل
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Result Card */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00A859]/10 to-[#006C35]/10 border border-[#00A859]/30">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-white/70 font-bold">النتيجة المبدئية</span>
                      <MapPin className="w-5 h-5 text-[#00A859]" />
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex-1">
                        <div className="text-xs text-white/50 mb-2">المركبة الأولى</div>
                        <div className="text-4xl font-black bg-gradient-to-r from-[#00A859] to-white bg-clip-text text-transparent">
                          75%
                        </div>
                      </div>
                      <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#00A859]/50 to-transparent" />
                      <div className="flex-1 text-right">
                        <div className="text-xs text-white/50 mb-2">المركبة الثانية</div>
                        <div className="text-4xl font-black bg-gradient-to-l from-[#006C35] to-white bg-clip-text text-transparent">
                          25%
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#00A859] to-[#006C35] rounded-3xl shadow-2xl flex items-center justify-center" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <div className="text-center text-white">
                  <Sparkles className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-xs font-black">AI</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#00A859]" />
                  <div>
                    <div className="text-xs text-white/60 font-bold">Accuracy</div>
                    <div className="text-2xl font-black text-white">98.7%</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[#00A859] text-sm font-bold tracking-wider">SCROLL DOWN</span>
            <div className="w-6 h-10 rounded-full border-2 border-[#00A859]/50 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-[#00A859] rounded-full animate-pulse" />
            </div>
          </div>
        </div>

      </section>

      {/* How It Works - Premium */}
      <section className="py-32 px-6 relative">
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Zap className="w-5 h-5 text-[#00A859]" />
              <span className="text-white/90 font-bold">كيف يعمل النظام</span>
            </div>
            <h2 className="text-6xl font-black">
              <span className="bg-gradient-to-r from-white via-[#00A859] to-white bg-clip-text text-transparent">
                ثلاث خطوات
              </span>
              <br />
              <span className="text-white">للحصول على التقرير</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              عملية بسيطة وسريعة تعتمد على أحدث تقنيات الذكاء الاصطناعي
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                icon: Camera,
                title: 'رفع الفيديو',
                desc: 'قم برفع فيديو الحادث من أي مصدر: داش كام، هاتف، أو كاميرات مراقبة',
                color: 'from-[#00A859] to-[#006C35]',
                features: ['دعم جميع الصيغ', 'رفع سريع', 'تشفير آمن']
              },
              {
                num: '02',
                icon: Activity,
                title: 'التحليل الذكي',
                desc: 'الذكاء الاصطناعي يحلل الفيديو ويحدد المركبات والمسارات ونقاط الاصطدام',
                color: 'from-[#006C35] to-[#00A859]',
                features: ['تحليل 360°', 'كشف دقيق', 'معالجة فورية']
              },
              {
                num: '03',
                icon: FileText,
                title: 'التقرير الشامل',
                desc: 'احصل على تقرير مفصل يحدد نسبة المسؤولية لكل طرف بدقة عالية',
                color: 'from-[#00A859] to-[#006C35]',
                features: ['تقرير PDF', 'رسوم بيانية', 'جاهز للتأمين']
              }
            ].map((step, idx) => (
              <div 
                key={idx}
                className={`group relative transition-all duration-500 cursor-pointer ${
                  activeFeature === idx ? 'scale-105' : 'hover:scale-105'
                }`}
                onMouseEnter={() => setActiveFeature(idx)}
              >
                <div className={`relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border transition-all duration-500 overflow-hidden ${
                  activeFeature === idx 
                    ? 'border-[#00A859] shadow-2xl shadow-[#00A859]/30' 
                    : 'border-white/10 hover:border-[#00A859]/50'
                }`}>
                  
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Step Number */}
                  <div className={`absolute -top-6 -right-6 w-20 h-20 rounded-2xl flex items-center justify-center font-black text-3xl transition-all duration-500 shadow-2xl ${
                    activeFeature === idx
                      ? `bg-gradient-to-br ${step.color} text-white scale-110 rotate-12`
                      : 'bg-white/10 text-white/30'
                  }`}>
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div className={`relative w-24 h-24 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    activeFeature === idx
                      ? `bg-gradient-to-br ${step.color} shadow-xl shadow-[#00A859]/50`
                      : 'bg-white/10'
                  }`}>
                    <step.icon className={`w-12 h-12 transition-all duration-500 ${
                      activeFeature === idx ? 'text-white scale-110' : 'text-white/40'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className={`w-4 h-4 ${activeFeature === idx ? 'text-[#00A859]' : 'text-white/30'}`} />
                        <span className="text-white/70 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Line */}
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-1 bg-gradient-to-r from-[#00A859] to-transparent rounded-full" />
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Features Grid - Ultimate */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Award className="w-5 h-5 text-[#00A859]" />
              <span className="text-white/90 font-bold">المميزات الاحترافية</span>
            </div>
            <h2 className="text-6xl font-black">
              <span className="text-white">لماذا </span>
              <span className="bg-gradient-to-r from-[#00A859] via-[#006C35] to-[#00A859] bg-clip-text text-transparent">
                رَصد
              </span>
              <span className="text-white"> الأفضل؟</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: '⚡', 
                title: 'سرعة خارقة', 
                desc: 'تحليل كامل في أقل من 3 ثوانٍ بفضل معالجات AI المتقدمة',
                gradient: 'from-yellow-500 via-orange-500 to-red-500',
                stats: '< 3s'
              },
              { 
                icon: '🎯', 
                title: 'دقة استثنائية', 
                desc: 'نسبة دقة 98.7% في تحديد المسؤولية وتحليل الحوادث',
                gradient: 'from-blue-500 via-indigo-500 to-purple-500',
                stats: '98.7%'
              },
              { 
                icon: '🚗', 
                title: 'تقليل الازدحام', 
                desc: 'حل فوري للنزاعات يفتح الطرق ويمنع الاختناقات المرورية',
                gradient: 'from-green-500 via-teal-500 to-cyan-500',
                stats: '70%'
              },
              { 
                icon: '📹', 
                title: 'تكامل CCTV', 
                desc: 'ربط مستقبلي مع كاميرات المراقبة الحكومية للتحليل الآلي',
                gradient: 'from-purple-500 via-pink-500 to-rose-500',
                stats: 'Soon'
              },
              { 
                icon: '⚖️', 
                title: 'عدالة مطلقة', 
                desc: 'تحديد نزيه للمسؤولية يمنع التلاعب والخلافات بين الأطراف',
                gradient: 'from-emerald-500 via-green-500 to-lime-500',
                stats: '100%'
              },
              { 
                icon: '💰', 
                title: 'توفير ذكي', 
                desc: 'تقليل الحاجة للخبراء وتسريع معاملات التأمين والإجراءات',
                gradient: 'from-amber-500 via-yellow-500 to-orange-500',
                stats: '60%'
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00A859] transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105"
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                
                <div className="relative space-y-5">
                  {/* Icon with Pulse */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity rounded-full`} />
                    <div className="relative text-6xl group-hover:scale-125 transition-transform duration-500">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Title & Stat */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black text-white">
                      {feature.title}
                    </h3>
                    <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${feature.gradient} text-white text-xs font-black`}>
                      {feature.stats}
                    </div>
                  </div>
                  
                  <p className="text-white/60 leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                  
                  {/* Hover Arrow */}
                  <div className="flex items-center gap-2 text-[#00A859] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-bold">اكتشف المزيد</span>
                    <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Integration Section - Premium */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-white mb-6">
              التكامل مع الأنظمة
              <br />
              <span className="bg-gradient-to-r from-[#00A859] via-[#006C35] to-[#00A859] bg-clip-text text-transparent">
                الحكومية السعودية
              </span>
            </h2>
            <p className="text-xl text-white/60">
              نعمل على الربط المباشر مع المنصات الرسمية
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Absher Card */}
            <div className="group relative p-12 rounded-[3rem] bg-gradient-to-br from-[#00A859] to-[#006C35] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 shadow-2xl">
              {/* Animated Grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px)',
                  backgroundSize: '50px 50px'
                }} />
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10 text-white space-y-8">
                <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <Shield className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-4xl font-black mb-3">منصة أبشر</h3>
                  <p className="text-xl text-white/90 leading-relaxed">
                    التكامل مع أبشر لربط البيانات وتسريع الإجراءات الرسمية تلقائياً
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full w-fit">
                  <Clock className="w-5 h-5" />
                  <span>قريباً جداً</span>
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Najm Card */}
            <div className="group relative p-12 rounded-[3rem] bg-gradient-to-br from-[#006C35] to-[#00A859] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px)',
                  backgroundSize: '50px 50px'
                }} />
              </div>
              
              <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10 text-white space-y-8">
                <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                  <Camera className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-4xl font-black mb-3">نظام نجم</h3>
                  <p className="text-xl text-white/90 leading-relaxed">
                    الربط مع نجم لإرسال التقارير مباشرة وتسريع معالجة الحوادث
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full w-fit">
                  <Clock className="w-5 h-5" />
                  <span>قيد التطوير</span>
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Mega Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00A859] via-[#006C35] to-[#004D28]" />
        
        {/* Animated Mesh */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Large Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00A859] rounded-full blur-[150px] opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#006C35] rounded-full blur-[150px] opacity-30" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="space-y-12 text-white">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/20 backdrop-blur-xl border border-white/30">
              <Zap className="w-6 h-6 text-yellow-300" />
              <span className="font-black text-lg">ابدأ الآن مجاناً</span>
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>

            {/* Heading */}
            <h2 className="text-6xl lg:text-7xl font-black leading-tight">
              جاهز لتجربة
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
                مستقبل التحليل؟
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              انضم إلى <span className="font-black text-yellow-300">آلاف المستخدمين</span> الذين يثقون في 
              <span className="font-black"> رَصد </span>
              لتحليل حوادثهم بدقة وسرعة
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="group relative px-12 py-6 rounded-2xl bg-white text-[#006C35] font-black text-2xl overflow-hidden shadow-2xl hover:shadow-[0_30px_80px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-yellow-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-4 justify-center">
                  <Camera className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                  ابدأ التحليل الآن
                  <ChevronDown className="w-6 h-6 rotate-[-90deg] group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

              <button className="group px-12 py-6 rounded-2xl border-3 border-white/50 backdrop-blur-sm text-white font-black text-2xl hover:bg-white/10 transition-all duration-300 shadow-lg flex items-center gap-4 justify-center">
                <Play className="w-7 h-7 group-hover:scale-110 transition-transform" />
                شاهد العرض
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
              {[
                { icon: Users, value: '10K+', label: 'مستخدم نشط' },
                { icon: TrendingUp, value: '98.7%', label: 'معدل الدقة' },
                { icon: Zap, value: '< 3s', label: 'سرعة التحليل' }
              ].map((stat, idx) => (
                <div key={idx} className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all hover:scale-110 cursor-pointer">
                  <stat.icon className="w-10 h-10 mx-auto mb-3 text-yellow-300 group-hover:scale-110 transition-transform" />
                  <div className="text-5xl font-black mb-2">{stat.value}</div>
                  <div className="text-sm text-white/80 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-black/50 backdrop-blur-xl text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00A859] to-[#006C35] flex items-center justify-center shadow-2xl">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-white to-[#00A859] bg-clip-text text-transparent">رَصـد</h3>
                  <p className="text-xs text-white/60 font-bold">AI-Powered Analysis</p>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                منصة سعودية رائدة في تحليل الحوادث المرورية بتقنية الذكاء الاصطناعي المتقدمة
              </p>
              <div className="flex gap-3">
                {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((social, idx) => (
                  <div 
                    key={idx}
                    className="w-11 h-11 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-[#00A859] hover:to-[#006C35] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 border border-white/10 hover:border-[#00A859]"
                  >
                    <Star className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-black mb-6 text-[#00A859]">روابط سريعة</h4>
              <div className="space-y-4">
                {['الرئيسية', 'المميزات', 'كيف يعمل', 'الأسعار', 'من نحن'].map((link, idx) => (
                  <div key={idx} className="group flex items-center gap-2 text-white/60 hover:text-[#00A859] transition-colors cursor-pointer">
                    <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">{link}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-black mb-6 text-[#00A859]">الدعم</h4>
              <div className="space-y-4">
                {['مركز المساعدة', 'تواصل معنا', 'الأسئلة الشائعة', 'التقارير'].map((link, idx) => (
                  <div key={idx} className="group flex items-center gap-2 text-white/60 hover:text-[#00A859] transition-colors cursor-pointer">
                    <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">{link}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-black mb-6 text-[#00A859]">ابقَ على اطلاع</h4>
              <p className="text-sm text-white/60 mb-4">
                اشترك للحصول على آخر التحديثات والمميزات
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#00A859] transition-colors"
                />
                <button className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#00A859] to-[#006C35] hover:scale-105 transition-transform">
                  <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <span>© 2025 رَصد</span>
                <span className="w-1 h-1 rounded-full bg-white/30"></span>
                <span>جميع الحقوق محفوظة</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#00A859] animate-pulse" />
                <span className="text-sm text-white/60 font-bold">نسخة تجريبية (MVP)</span>
              </div>
            </div>
          </div>

        </div>
      </footer>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

    </main>
  );
}