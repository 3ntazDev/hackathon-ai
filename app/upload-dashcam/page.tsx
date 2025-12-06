"use client";

import { useState, useRef } from 'react';
import { Upload, Camera, CheckCircle, X, Play, Film, Shield, Zap, Clock, ArrowRight, FileVideo, AlertCircle } from 'lucide-react';

export default function UploadDashcamPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      handleFileSelect(file);
    }
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    // محاكاة رفع الفيديو
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            // هنا يمكن التوجيه لصفحة النتائج
          }, 1000);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#006C35] via-[#F4F4F4] to-[#FFFFFF] overflow-hidden">
      
      {/* خلفية متحركة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#006C35]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-[#00A859]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl">
          
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white shadow-lg border-2 border-[#006C35]/20 mb-4">
              <Camera className="w-5 h-5 text-[#006C35]" />
              <span className="text-[#006C35] text-sm font-bold">رفع فيديو الحادث</span>
              <div className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-[#006C35] via-[#00A859] to-[#006C35] bg-clip-text text-transparent">
                ارفع فيديو الداش كام
              </span>
              <span className="block text-[#1a1a1a] mt-2 text-3xl sm:text-4xl">
                للتحليل الفوري
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              قم برفع الفيديو وسيقوم <span className="text-[#006C35] font-bold">الذكاء الاصطناعي</span> بتحليله خلال ثوانٍ
            </p>
          </div>

          {/* Main Upload Area */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            
            {/* Upload Zone */}
            <div className="space-y-6">
              
              {/* Drag & Drop Area */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isDragging ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                {/* خلفية متوهجة */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#006C35] to-[#00A859] rounded-3xl transition-all duration-500 ${
                  isDragging ? 'opacity-100 blur-2xl scale-105' : 'opacity-60 blur-xl'
                }`}></div>
                
                <div className={`relative bg-white rounded-3xl p-8 sm:p-12 border-4 border-dashed transition-all duration-500 ${
                  isDragging 
                    ? 'border-[#006C35] bg-[#006C35]/5' 
                    : selectedFile 
                      ? 'border-[#00A859]' 
                      : 'border-gray-300 hover:border-[#006C35]'
                }`}>
                  
                  {!selectedFile ? (
                    <div className="text-center space-y-6">
                      {/* أيقونة متحركة */}
                      <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#006C35] to-[#00A859] flex items-center justify-center transition-all duration-500 ${
                        isDragging ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                      }`}>
                        <Upload className="w-12 h-12 text-white" strokeWidth={2.5} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-black text-[#1a1a1a] mb-3">
                          {isDragging ? 'أفلت الفيديو هنا' : 'اسحب الفيديو وأفلته هنا'}
                        </h3>
                        <p className="text-gray-600 mb-4">أو اضغط لاختيار ملف من جهازك</p>
                        
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#006C35] to-[#00A859] text-white font-bold hover:scale-105 transition-transform duration-300">
                          <FileVideo className="w-5 h-5" />
                          <span>اختر فيديو</span>
                        </div>
                      </div>

                      {/* أنواع الملفات المدعومة */}
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-2 font-semibold">الصيغ المدعومة:</p>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                          {['MP4', 'MOV', 'AVI', 'MKV'].map((format) => (
                            <span key={format} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold">
                              {format}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* معلومات الملف */}
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#006C35] to-[#00A859] flex items-center justify-center flex-shrink-0">
                          <Film className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg font-bold text-[#1a1a1a] truncate">
                                {selectedFile.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {formatFileSize(selectedFile.size)}
                              </p>
                            </div>
                            
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveFile();
                              }}
                              className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors flex-shrink-0"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>

                          {/* شريط التقدم */}
                          {isUploading && (
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 font-semibold">جاري الرفع...</span>
                                <span className="text-[#006C35] font-bold">{uploadProgress}%</span>
                              </div>
                              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-[#006C35] to-[#00A859] rounded-full transition-all duration-300"
                                  style={{ width: `${uploadProgress}%` }}
                                ></div>
                              </div>
                            </div>
                          )}

                          {uploadProgress === 100 && !isUploading && (
                            <div className="flex items-center gap-2 text-[#00A859] font-bold">
                              <CheckCircle className="w-5 h-5" />
                              <span>تم الرفع بنجاح!</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* معاينة الفيديو */}
                      {previewUrl && (
                        <div className="relative rounded-2xl overflow-hidden bg-black">
                          <video 
                            src={previewUrl} 
                            controls
                            className="w-full h-48 object-contain"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                </div>
              </div>

              {/* زر الرفع */}
              {selectedFile && !isUploading && uploadProgress !== 100 && (
                <button
                  onClick={handleUpload}
                  className="w-full group relative px-8 py-5 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(0,108,53,0.3)] transition-all duration-500 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#006C35] to-[#00A859]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00A859] to-[#006C35] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative text-white font-bold text-lg flex items-center gap-3 justify-center">
                    <Upload className="w-6 h-6" />
                    ابدأ رفع الفيديو والتحليل
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              )}
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              
              {/* نصائح الرفع */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#006C35] to-[#00A859] rounded-3xl opacity-10 blur-xl"></div>
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#006C35] to-[#00A859] flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-[#1a1a1a]">نصائح للرفع</h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      { icon: Camera, text: 'تأكد من وضوح الفيديو وجودته' },
                      { icon: Clock, text: 'يفضل فيديو من 10 ثانية إلى دقيقتين' },
                      { icon: FileVideo, text: 'الحجم الأقصى: 500 ميجابايت' },
                      { icon: Play, text: 'يجب أن يظهر الحادث بوضوح' }
                    ].map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#006C35]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <tip.icon className="w-4 h-4 text-[#006C35]" />
                        </div>
                        <span className="text-gray-700 font-medium">{tip.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* مميزات التحليل */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A859] to-[#006C35] rounded-3xl opacity-10 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-[#006C35] to-[#00A859] rounded-3xl p-6 sm:p-8 shadow-xl">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 rounded-3xl"></div>
                  
                  <div className="relative text-white space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-black">ماذا سيحدث؟</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        { step: '1', text: 'تحليل مسار المركبات' },
                        { step: '2', text: 'كشف نقاط الاصطدام' },
                        { step: '3', text: 'تحديد نسبة المسؤولية' },
                        { step: '4', text: 'إنشاء التقرير النهائي' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center font-black text-sm flex-shrink-0">
                            {item.step}
                          </div>
                          <span className="font-semibold">{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/20">
                      <div className="flex items-center gap-2 text-sm">
                        <Shield className="w-5 h-5" />
                        <span className="font-bold">جميع البيانات محمية ومشفرة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* إحصائيات سريعة */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Zap, value: '< 5 ث', label: 'سرعة التحليل' },
              { icon: CheckCircle, value: '98%', label: 'دقة النتائج' },
              { icon: Shield, value: '100%', label: 'أمان البيانات' }
            ].map((stat, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#006C35] to-[#00A859] rounded-2xl opacity-10 blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                  <stat.icon className="w-8 h-8 text-[#006C35] mb-3 mx-auto" />
                  <div className="text-3xl font-black text-[#006C35] mb-1 text-center">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-semibold text-center">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}