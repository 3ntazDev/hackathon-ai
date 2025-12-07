"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  CheckCircle, 
  AlertTriangle, 
  Car, 
  Users, 
  Phone, 
  Camera, 
  MapPin, 
  Clock, 
  FileText, 
  Shield,
  ArrowRight,
  Download,
  Share2,
  Home,
  TrendingUp,
  AlertCircle,
  Wrench,
  DollarSign
} from 'lucide-react';

export default function ReportStatusPage() {
  const router = useRouter();
  const [reportData, setReportData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // جلب البيانات من localStorage
    const savedReport = localStorage.getItem('accidentReport');
    
    if (savedReport) {
      try {
        const data = JSON.parse(savedReport);
        setReportData(data);
        setLoading(false);
      } catch (error) {
        console.error('خطأ في تحليل البيانات:', error);
        setLoading(false);
      }
    } else {
      // إذا لم توجد بيانات، العودة للصفحة الرئيسية
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }, [router]);

  const getSeverityColor = (level: string) => {
    switch(level) {
      case 'عالي':
        return 'from-red-500 to-red-600';
      case 'متوسط':
        return 'from-orange-500 to-orange-600';
      case 'منخفض':
        return 'from-green-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getSeverityIcon = (level: string) => {
    switch(level) {
      case 'عالي':
        return <AlertTriangle className="w-8 h-8" />;
      case 'متوسط':
        return <AlertCircle className="w-8 h-8" />;
      case 'منخفض':
        return <CheckCircle className="w-8 h-8" />;
      default:
        return <AlertCircle className="w-8 h-8" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#006C35] via-[#F4F4F4] to-[#FFFFFF] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-[#006C35] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-bold text-[#006C35]">جاري تحميل التقرير...</p>
        </div>
      </div>
    );
  }

  if (!reportData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#006C35] via-[#F4F4F4] to-[#FFFFFF] flex items-center justify-center">
        <div className="text-center space-y-4">
          <AlertTriangle className="w-20 h-20 text-red-500 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800">لم يتم العثور على تقرير</h2>
          <p className="text-gray-600">جاري التحويل للصفحة الرئيسية...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#006C35] via-[#F4F4F4] to-[#FFFFFF] py-8 px-4">
      
      {/* خلفية متحركة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#006C35]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-[#00A859]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-6">
        
        {/* Header - رقم البلاغ */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white shadow-lg border-2 border-[#006C35]/20">
            <FileText className="w-5 h-5 text-[#006C35]" />
            <span className="text-[#006C35] text-sm font-bold">تقرير الحادث</span>
            <div className="w-2 h-2 rounded-full bg-[#00A859] animate-pulse"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">
            رقم البلاغ: <span className="text-[#006C35]">{reportData.incident_id}</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">
              {new Date(reportData.timestamp).toLocaleString('ar-SA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
        </div>

        {/* مستوى الخطورة */}
        <div className={`relative bg-gradient-to-r ${getSeverityColor(reportData.severity_level)} rounded-3xl p-8 text-white shadow-2xl`}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 rounded-3xl"></div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                {getSeverityIcon(reportData.severity_level)}
              </div>
              <div>
                <h2 className="text-3xl font-black mb-1">مستوى الخطورة: {reportData.severity_level}</h2>
                <p className="text-white/90 font-semibold">نوع الحادث: {reportData.accident_type}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-5xl font-black">{reportData.severity_score}</div>
              <div className="text-sm font-semibold text-white/90">من 100</div>
            </div>
          </div>
        </div>

        {/* وصف الحادث */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#006C35] to-[#00A859] flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-black text-[#1a1a1a]">وصف الحادث</h3>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {reportData.accident_description}
            </p>
          </div>

          <div className="mt-6 p-4 bg-red-50 border-2 border-red-100 rounded-xl">
            <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              السبب الرئيسي:
            </h4>
            <p className="text-red-800 font-semibold">{reportData.accident_cause.primary_cause}</p>
            
            {reportData.accident_cause.contributing_factors.length > 0 && (
              <>
                <h4 className="font-bold text-red-900 mt-4 mb-2">عوامل إضافية:</h4>
                <ul className="list-disc list-inside space-y-1 text-red-800">
                  {reportData.accident_cause.contributing_factors.map((factor: string, idx: number) => (
                    <li key={idx}>{factor}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* تقييم المسؤولية */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#006C35] to-[#00A859] flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-black text-[#1a1a1a]">تقييم المسؤولية</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4">الطرف الأول (A)</h4>
                <div className="text-6xl font-black mb-2">{reportData.fault_assessment.party_a}%</div>
                <p className="text-blue-100">نسبة المسؤولية</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4">الطرف الثاني (B)</h4>
                <div className="text-6xl font-black mb-2">{reportData.fault_assessment.party_b}%</div>
                <p className="text-purple-100">نسبة المسؤولية</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#006C35]" />
              تفسير المسؤولية:
            </h4>
            <p className="text-gray-700 leading-relaxed">{reportData.fault_explanation}</p>
          </div>
        </div>

        {/* الأضرار والتكاليف */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* تفاصيل الأضرار */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#006C35] to-[#00A859] flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#1a1a1a]">تفاصيل الأضرار</h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{reportData.damage_description}</p>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-2">الأجزاء المتضررة:</h4>
                <div className="flex flex-wrap gap-2">
                  {reportData.damaged_parts.map((part: string, idx: number) => (
                    <span key={idx} className="px-3 py-1 bg-red-100 text-red-800 rounded-lg text-sm font-bold">
                      {part}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className={`p-4 rounded-xl ${reportData.vehicle_drivable ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'}`}>
                  <p className="text-sm font-semibold text-gray-600 mb-1">حالة القيادة</p>
                  <p className={`font-black text-lg ${reportData.vehicle_drivable ? 'text-green-700' : 'text-red-700'}`}>
                    {reportData.vehicle_drivable ? '✓ قابلة للقيادة' : '✗ غير قابلة'}
                  </p>
                </div>

                <div className={`p-4 rounded-xl ${reportData.tow_needed ? 'bg-orange-50 border-2 border-orange-200' : 'bg-green-50 border-2 border-green-200'}`}>
                  <p className="text-sm font-semibold text-gray-600 mb-1">سحب السيارة</p>
                  <p className={`font-black text-lg ${reportData.tow_needed ? 'text-orange-700' : 'text-green-700'}`}>
                    {reportData.tow_needed ? '⚠ مطلوب' : '✓ غير مطلوب'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* تكاليف الإصلاح */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#006C35] to-[#00A859] flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#1a1a1a]">تقدير التكاليف</h3>
            </div>

            <div className="space-y-6">
              <div className="text-center p-6 bg-gradient-to-br from-[#006C35] to-[#00A859] rounded-2xl text-white">
                <p className="text-sm font-semibold mb-2 text-white/90">تكلفة الإصلاح المتوقعة</p>
                <p className="text-4xl font-black">{reportData.repair_cost}</p>
              </div>

              <div className={`p-4 rounded-xl ${reportData.injuries_detected ? 'bg-red-50 border-2 border-red-200' : 'bg-green-50 border-2 border-green-200'}`}>
                <div className="flex items-center gap-3">
                  {reportData.injuries_detected ? (
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  ) : (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  )}
                  <div>
                    <p className="font-bold text-gray-900">إصابات</p>
                    <p className={`font-black ${reportData.injuries_detected ? 'text-red-700' : 'text-green-700'}`}>
                      {reportData.injuries_detected ? '⚠ تم اكتشاف إصابات' : '✓ لا توجد إصابات ظاهرة'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* الإجراءات المطلوبة */}
        <div className="bg-gradient-to-br from-[#006C35] to-[#00A859] rounded-3xl p-8 text-white shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-black">الإجراءات المطلوبة</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-sm text-white/80 mb-1">الجهة المختصة</p>
              <p className="text-2xl font-black">{reportData.emergency_response.service_needed}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-sm text-white/80 mb-1">مستوى الأولوية</p>
              <p className="text-2xl font-black">{reportData.emergency_response.priority_level}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-sm text-white/80 mb-1">وقت الاستجابة</p>
              <p className="text-2xl font-black">{reportData.emergency_response.estimated_response_time}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="font-bold text-xl mb-4">التوصيات:</h4>
            <div className="whitespace-pre-line text-white/90 leading-relaxed">
              {reportData.recommended_action}
            </div>
          </div>
        </div>

        {/* طلب كاميرات المراقبة */}
        {reportData.camera_request.cameras_needed && (
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#006C35]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#006C35] to-[#00A859] flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#1a1a1a]">طلب كاميرات المراقبة</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
                <h4 className="font-bold text-blue-900 mb-2">السبب:</h4>
                <p className="text-blue-800">{reportData.camera_request.reason}</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">المواقع المحتملة:</h4>
                <div className="flex flex-wrap gap-2">
                  {reportData.camera_request.estimated_locations.map((location: string, idx: number) => (
                    <span key={idx} className="px-4 py-2 bg-[#006C35]/10 text-[#006C35] rounded-lg font-bold flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <p className="text-green-800 font-semibold flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  سيتم التواصل تلقائياً مع الجهات المختصة لطلب تسجيلات الكاميرات
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ملاحظات فنية */}
        {reportData.technical_notes && (
          <div className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-gray-600" />
              <h3 className="text-xl font-black text-gray-900">ملاحظات فنية</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{reportData.technical_notes}</p>
          </div>
        )}

        {/* أزرار الإجراءات */}
        <div className="grid md:grid-cols-3 gap-4">
          <button 
            onClick={() => window.print()}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#006C35] font-bold text-gray-700 hover:text-[#006C35]"
          >
            <Download className="w-5 h-5" />
            تحميل التقرير PDF
          </button>

          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'تقرير حادث',
                  text: `تقرير حادث رقم: ${reportData.incident_id}`,
                });
              }
            }}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-[#006C35] font-bold text-gray-700 hover:text-[#006C35]"
          >
            <Share2 className="w-5 h-5" />
            مشاركة التقرير
          </button>

          <button 
            onClick={() => router.push('/')}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#006C35] to-[#00A859] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-white hover:scale-105"
          >
            <Home className="w-5 h-5" />
            العودة للرئيسية
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </main>
  );
}