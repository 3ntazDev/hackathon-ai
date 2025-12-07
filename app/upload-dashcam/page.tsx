"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Upload, 
  Camera, 
  CheckCircle, 
  X, 
  Film, 
  Shield, 
  Zap, 
  Clock, 
  ArrowRight, 
  FileVideo, 
  AlertCircle,
  Loader2,
  FileImage
} from 'lucide-react';

export default function UploadDashcamPage() {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileType, setFileType] = useState<'image' | 'video' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // رابط الـ API المنشور على Vercel
  const API_BASE_URL = 'https://ai-acs.vercel.app';

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && (file.type.startsWith('image/'))) {
      handleFileSelect(file);
    } else {
      setError('يرجى رفع صورة فقط (JPG, PNG, WEBP)');
    }
  };

  const handleFileSelect = (file: File) => {
    // التحقق من نوع الملف
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setError('نوع الملف غير مدعوم. يرجى رفع صورة JPG أو PNG أو WEBP');
      return;
    }

    // التحقق من حجم الملف (10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setError('حجم الملف كبير جداً. الحد الأقصى 10 ميجابايت');
      return;
    }

    setSelectedFile(file);
    setError(null);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setFileType('image');
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    setError(null);
    
    try {
      // إنشاء FormData
      const formData = new FormData();
      formData.append('file', selectedFile);
      
      // يمكن إضافة الموقع إذا كان متوفراً
      // formData.append('latitude', '24.7136');
      // formData.append('longitude', '46.6753');
      
      // رفع الملف باستخدام XMLHttpRequest لتتبع التقدم
      const xhr = new XMLHttpRequest();
      
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = Math.round((e.loaded / e.total) * 100);
          setUploadProgress(percentComplete);
        }
      });
      
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          try {
            const result = JSON.parse(xhr.responseText);
            
            // حفظ النتائج في localStorage
            localStorage.setItem('accidentReport', JSON.stringify(result));
            
            // الانتقال لصفحة التقرير بعد ثانية
            setTimeout(() => {
              router.push('/report/status');
            }, 1500);
          } catch (parseError) {
            setError('خطأ في معالجة استجابة الخادم');
            setIsUploading(false);
            setUploadProgress(0);
          }
        } else {
          try {
            const errorData = JSON.parse(xhr.responseText);
            setError(errorData.detail || 'حدث خطأ أثناء التحليل');
          } catch {
            setError(`خطأ في الخادم: ${xhr.status}`);
          }
          setIsUploading(false);
          setUploadProgress(0);
        }
      });
      
      xhr.addEventListener('error', () => {
        setError('فشل الاتصال بالخادم. يرجى التحقق من اتصال الإنترنت');
        setIsUploading(false);
        setUploadProgress(0);
      });
      
      xhr.addEventListener('timeout', () => {
        setError('انتهت مهلة الاتصال. يرجى المحاولة مرة أخرى');
        setIsUploading(false);
        setUploadProgress(0);
      });
      
      xhr.open('POST', `${API_BASE_URL}/analyze`);
      xhr.timeout = 60000; // 60 seconds timeout
      xhr.send(formData);
      
    } catch (err: any) {
      setError(err.message || 'حدث خطأ غير متوقع');
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setUploadProgress(0);
    setFileType(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
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
              <span className="text-[#006C35] text-sm font-bold">رفع صورة الحادث</span>
              <div className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-[#006C35] via-[#00A859] to-[#006C35] bg-clip-text text-transparent">
                ارفع صورة الحادث
              </span>
              <span className="block text-[#1a1a1a] mt-2 text-3xl sm:text-4xl">
                للتحليل الفوري بالذكاء الاصطناعي
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              قم برفع صورة واضحة للحادث وسيقوم <span className="text-[#006C35] font-bold">Gemini AI</span> بتحليله خلال ثوانٍ
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
                onClick={() => !isUploading && fileInputRef.current?.click()}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isDragging ? 'scale-105' : 'hover:scale-102'
                } ${isUploading ? 'pointer-events-none opacity-75' : ''}`}
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
                          {isDragging ? 'أفلت الصورة هنا' : 'اسحب صورة الحادث وأفلتها هنا'}
                        </h3>
                        <p className="text-gray-600 mb-4">أو اضغط لاختيار ملف من جهازك</p>
                        
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#006C35] to-[#00A859] text-white font-bold hover:scale-105 transition-transform duration-300">
                          <FileImage className="w-5 h-5" />
                          <span>اختر صورة</span>
                        </div>
                      </div>

                      {/* أنواع الملفات المدعومة */}
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-2 font-semibold">الصيغ المدعومة:</p>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                          {['JPG', 'JPEG', 'PNG', 'WEBP'].map((format) => (
                            <span key={format} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold">
                              {format}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">الحد الأقصى: 10 ميجابايت</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* معلومات الملف */}
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#006C35] to-[#00A859] flex items-center justify-center flex-shrink-0">
                          <FileImage className="w-8 h-8 text-white" />
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
                            
                            {!isUploading && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRemoveFile();
                                }}
                                className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors flex-shrink-0"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            )}
                          </div>

                          {/* شريط التقدم */}
                          {isUploading && (
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 font-semibold">
                                  {uploadProgress < 100 ? 'جاري الرفع والتحليل...' : 'اكتمل التحليل!'}
                                </span>
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
                        </div>
                      </div>

                      {/* معاينة الصورة */}
                      {previewUrl && !isUploading && (
                        <div className="relative rounded-2xl overflow-hidden bg-black">
                          <img 
                            src={previewUrl} 
                            alt="معاينة الصورة"
                            className="w-full h-64 object-contain"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleFileInput}
                    className="hidden"
                    disabled={isUploading}
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
                    ابدأ رفع الصورة والتحليل
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              )}
              
              {/* رسالة الخطأ */}
              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-red-900 mb-1">حدث خطأ</h4>
                      <p className="text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* رسالة النجاح والانتقال */}
              {uploadProgress === 100 && isUploading && (
                <div className="bg-gradient-to-br from-[#006C35] to-[#00A859] rounded-2xl p-6 text-white animate-pulse">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-8 h-8" />
                    <h3 className="text-2xl font-black">تم التحليل بنجاح!</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <p className="text-white/90 font-semibold">جاري التحويل لصفحة التقرير...</p>
                  </div>
                </div>
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
                    <h3 className="text-2xl font-black text-[#1a1a1a]">نصائح للحصول على أفضل نتيجة</h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      { icon: Camera, text: 'التقط صورة واضحة لموقع الحادث' },
                      { icon: FileImage, text: 'تأكد من ظهور جميع المركبات المتضررة' },
                      { icon: Shield, text: 'اجعل الإضاءة جيدة وتجنب الظلال' },
                      { icon: CheckCircle, text: 'صور من زاوية توضح نقطة الاصطدام' }
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
                      <h3 className="text-2xl font-black">ماذا سيحدث بعد الرفع؟</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        { step: '1', text: 'تحليل نوع الحادث وشدته' },
                        { step: '2', text: 'تحديد الأضرار والأجزاء المتضررة' },
                        { step: '3', text: 'حساب نسبة المسؤولية لكل طرف' },
                        { step: '4', text: 'تحديد الجهة المختصة (نجم/أبشر)' },
                        { step: '5', text: 'إنشاء تقرير مفصل فوري' }
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
                        <span className="font-bold">مدعوم بـ Gemini 2.5 Flash AI</span>
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
              { icon: Zap, value: '< 10 ث', label: 'سرعة التحليل' },
              { icon: CheckCircle, value: '99%', label: 'دقة النتائج' },
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