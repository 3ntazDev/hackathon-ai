"use client";

import { useState, useEffect } from 'react';
import { Camera, MapPin, ChevronRight, FileVideo, Shield, Zap, Clock, CheckCircle, Activity } from 'lucide-react';
import Link from 'next/link';

export default function ServicePage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#006C35] via-[#F4F4F4] to-[#FFFFFF] overflow-hidden">
      
      {/* Navbar - نفس تصميم الصفحة الرئيسية */}
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
              { name: 'الرئيسية', active: false },
              { name: 'كيف يعمل', active: false },
              { name: 'رفع البلاغ', active: true }
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

          <Link href="/">
            <button className="relative group px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#006C35] to-[#00A859] group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00A859] to-[#006C35] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative text-white flex items-center gap-2">
                <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">العودة للرئيسية</span>
                <span className="sm:hidden">الرئيسية</span>
              </span>
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 px-4 sm:px-6 overflow-hidden">
        
        {/* خلفية متحركة - ألوان سعودية */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#006C35]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-[#00A859]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* خطوط هندسية */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#006C35]/20 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00A859]/20 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#006C35]/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          {/* العنوان والوصف */}
          <div className="text-center mb-16 space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-lg border-2 border-[#006C35]/20">
              <div className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse"></div>
              <span className="text-[#006C35] text-sm font-bold">اختر طريقة رفع البلاغ المناسبة</span>
              <Zap className="w-5 h-5 text-[#00A859]" />
            </div>

            {/* العنوان الرئيسي */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-[#006C35] via-[#00A859] to-[#006C35] bg-clip-text text-transparent animate-pulse">
                  كيف تريد رفع
                </span>
                <span className="block text-[#1a1a1a] mt-2">
                  بلاغ الحادث؟
                </span>
              </h1>
              
              {/* شعار سعودي */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-1 w-16 bg-gradient-to-r from-[#006C35] to-[#00A859] rounded-full"></div>
                <span className="text-[#006C35] font-bold text-sm">⚡ سريع وآمن ودقيق</span>
                <div className="h-1 w-16 bg-gradient-to-r from-[#00A859] to-[#006C35] rounded-full"></div>
              </div>
            </div>

            {/* الوصف */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
              نوفر لك <span className="text-[#006C35] font-bold">خيارين سهلين</span> لرفع البلاغ بناءً على ما لديك من معلومات
            </p>
          </div>

          {/* البطاقات */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            
            {/* بطاقة الداش كام */}
            <Link href="/upload-dashcam">
            <div
              onMouseEnter={() => setHoveredCard('dashcam')}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* خلفية متوهجة */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[#006C35] to-[#00A859] rounded-3xl transition-all duration-500 ${
                hoveredCard === 'dashcam' ? 'scale-105 opacity-100 blur-2xl' : 'scale-100 opacity-60 blur-xl'
              }`}></div>
              
              <div className={`relative bg-gradient-to-br from-[#006C35] to-[#00A859] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-500 cursor-pointer border-2 border-[#006C35]/30 ${
                hoveredCard === 'dashcam' ? 'scale-105 -translate-y-3' : 'scale-100'
              }`}>
                
                {/* الباترن الخلفي */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 rounded-3xl"></div>

                {/* Badge */}
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Camera className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-bold">الأكثر دقة</span>
                </div>

                {/* أيقونة متحركة */}
                <div className={`relative w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                  hoveredCard === 'dashcam' ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                }`}>
                  <Camera className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2.5} />
                </div>

                {/* المحتوى */}
                <h2 className="relative text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                  رفع بلاغ عن طريق
                  <br />
                  الداش كام
                </h2>
                
                <p className="relative text-base sm:text-lg text-white/90 mb-6 leading-relaxed">
                  قم برفع <span className="font-bold">فيديو الحادث</span> مباشرة من كاميرا سيارتك وسنقوم بمعالجته تلقائياً باستخدام الذكاء الاصطناعي
                </p>

                {/* المميزات */}
                <ul className="relative space-y-3 mb-8">
                  {[
                    { icon: CheckCircle, text: 'معالجة تلقائية بالذكاء الاصطناعي' },
                    { icon: Activity, text: 'دقة عالية في تحديد المسؤولية 98%' },
                    { icon: Clock, text: 'نتائج فورية خلال 5 ثوانٍ' }
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/90">
                      <feature.icon className="w-5 h-5 ml-2 text-white flex-shrink-0" />
                      <span className="text-sm sm:text-base">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* زر الإجراء */}
                <div className={`relative flex items-center justify-between p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-xl transition-all duration-300 group-hover:bg-white/20 ${
                  hoveredCard === 'dashcam' ? 'bg-white/20' : 'bg-white/10'
                }`}>
                  <span className="text-white font-bold text-base sm:text-lg">ابدأ رفع الفيديو</span>
                  <ChevronRight className={`w-6 h-6 text-white transition-transform duration-300 ${
                    hoveredCard === 'dashcam' ? 'translate-x-2' : 'translate-x-0'
                  }`} />
                </div>

                {/* تأثير التوهج المتحرك */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-500 ${
                  hoveredCard === 'dashcam' ? 'opacity-100' : 'opacity-0'
                } rounded-3xl pointer-events-none`}
                  style={{
                    transform: hoveredCard === 'dashcam' ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 1s ease-in-out, opacity 0.5s'
                  }}
                ></div>
              </div>
            </div>
            </Link>

            {/* بطاقة الموقع */}
            <Link href="/report">
            <div
              onMouseEnter={() => setHoveredCard('location')}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* خلفية متوهجة */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[#00A859] to-[#006C35] rounded-3xl transition-all duration-500 ${
                hoveredCard === 'location' ? 'scale-105 opacity-100 blur-2xl' : 'scale-100 opacity-60 blur-xl'
              }`}></div>
              
              <div className={`relative bg-gradient-to-br from-[#00A859] to-[#006C35] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-500 cursor-pointer border-2 border-[#00A859]/30 ${
                hoveredCard === 'location' ? 'scale-105 -translate-y-3' : 'scale-100'
              }`}>
                
                {/* الباترن الخلفي */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 rounded-3xl"></div>

                {/* Badge */}
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-bold">سهل وسريع</span>
                </div>

                {/* أيقونة متحركة */}
                <div className={`relative w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                  hoveredCard === 'location' ? '-rotate-12 scale-110' : 'rotate-0 scale-100'
                }`}>
                  <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2.5} />
                </div>

                {/* المحتوى */}
                <h2 className="relative text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
                  رفع بلاغ باستخدام
                  <br />
                  الموقع
                </h2>
                
                <p className="relative text-base sm:text-lg text-white/90 mb-6 leading-relaxed">
                  قدم البلاغ مباشرة عبر <span className="font-bold">ملء النموذج</span> وإدخال التفاصيل والصور إذا لم يكن لديك فيديو
                </p>

                {/* المميزات */}
                <ul className="relative space-y-3 mb-8">
                  {[
                    { icon: CheckCircle, text: 'سهولة في الاستخدام والتعبئة' },
                    { icon: FileVideo, text: 'لا يتطلب فيديو أو داش كام' },
                    { icon: Activity, text: 'إضافة تفاصيل دقيقة ومرفقات' }
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/90">
                      <feature.icon className="w-5 h-5 ml-2 text-white flex-shrink-0" />
                      <span className="text-sm sm:text-base">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* زر الإجراء */}
                <div className={`relative flex items-center justify-between p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-xl transition-all duration-300 group-hover:bg-white/20 ${
                  hoveredCard === 'location' ? 'bg-white/20' : 'bg-white/10'
                }`}>
                  <span className="text-white font-bold text-base sm:text-lg">ابدأ ملء النموذج</span>
                  <ChevronRight className={`w-6 h-6 text-white transition-transform duration-300 ${
                    hoveredCard === 'location' ? 'translate-x-2' : 'translate-x-0'
                  }`} />
                </div>

                {/* تأثير التوهج المتحرك */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-500 ${
                  hoveredCard === 'location' ? 'opacity-100' : 'opacity-0'
                } rounded-3xl pointer-events-none`}
                  style={{
                    transform: hoveredCard === 'location' ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 1s ease-in-out, opacity 0.5s'
                  }}
                ></div>
              </div>
            </div>
            </Link>

          </div>

          {/* ملاحظة إضافية */}
          <div className="mt-12 sm:mt-16 text-center space-y-4">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-lg border-2 border-[#006C35]/10">
              <Shield className="w-5 h-5 text-[#006C35]" />
              <span className="text-gray-700 text-sm font-semibold">
                جميع البلاغات سرية ويتم معالجتها بعناية فائقة
              </span>
            </div>
            
            {/* إحصائيات سريعة */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto pt-6">
              {[
                { icon: Clock, value: '< 5 ث', label: 'وقت المعالجة' },
                { icon: Activity, value: '98%', label: 'دقة التحليل' },
                { icon: Shield, value: '100%', label: 'أمان وخصوصية' }
              ].map((stat, idx) => (
                <div key={idx} className="p-4 sm:p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#006C35] mb-2 mx-auto" />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#006C35] mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}