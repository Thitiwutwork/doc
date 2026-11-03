import React from 'react';
import {
  Award,
  Briefcase,
  Network,
  CalendarRange,
  CalendarDays,
  FileCheck,
  CheckCircle,
} from 'lucide-react';

export default function Sidebar({
  activeTab,
  setActiveTab,
  activeWeek,
  setActiveWeek,
  data,
}) {
  const weeklyLogs = data.weeklyLogs || [];
  const completedWeeksCount = weeklyLogs.filter(
    (w) => w.days?.some((d) => d.content && d.content.trim() !== '') || w.startDate
  ).length;

  const menuItems = [
    {
      id: 'cover',
      title: 'หน้าปก & ข้อมูลทั่วไป',
      subtitle: 'ข้อมูลนิสิต และสถานประกอบการ',
      icon: Award,
      badge: data.general?.studentName ? '✓' : '',
    },
    {
      id: 'jobDesc',
      title: 'สกบ. 01/1 ข้อมูลตำแหน่งงาน',
      subtitle: 'Job Description, พี่เลี้ยง, ผู้บังคับบัญชา',
      icon: Briefcase,
      badge: data.jobDesc?.position ? '✓' : '',
    },
    {
      id: 'orgChart',
      title: 'สกบ. 01/2 โครงสร้างองค์กร',
      subtitle: 'ผังองค์กร และส่วนงานที่สังกัด',
      icon: Network,
      badge: data.orgChart?.imageUrl ? 'รูป' : '',
    },
    {
      id: 'workPlan',
      title: 'สกบ. 02 แผนปฏิบัติงาน',
      subtitle: 'ตารางแผนงานประจำสัปดาห์ 16 สัปดาห์',
      icon: CalendarRange,
      badge: `${data.workPlan?.tasks?.length || 0} งาน`,
    },
    {
      id: 'weeklyLog',
      title: 'สกบ. 04/1 บันทึกรายสัปดาห์',
      subtitle: `บันทึกกิจกรรมประจำวัน (สัปดาห์ที่ 1-19)`,
      icon: CalendarDays,
      badge: `${completedWeeksCount}/19 สัปดาห์`,
      badgeColor: completedWeeksCount > 0 ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-500',
    },
    {
      id: 'summary',
      title: 'สกบ. 07 รายงานผลการดำเนินงาน',
      subtitle: 'สรุปประเภทงาน และสิ่งที่ได้รับ',
      icon: FileCheck,
      badge: 'สรุปผล',
    },
  ];

  return (
    <aside className="w-full md:w-80 bg-white border-r border-slate-200 p-4 space-y-2 flex-shrink-0">
      <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
        สารบัญแบบฟอร์มเอกสาร
      </div>

      <nav className="space-y-1.5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left p-3 rounded-xl transition flex items-start justify-between gap-3 group ${
                isActive
                  ? 'bg-amber-50 border border-amber-300 text-amber-950 shadow-sm'
                  : 'hover:bg-slate-50 text-slate-700 border border-transparent'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg transition ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3
                    className={`text-xs font-bold leading-snug ${
                      isActive ? 'text-amber-950' : 'text-slate-800'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {item.badge && (
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${
                    item.badgeColor || (isActive ? 'bg-amber-200 text-amber-900' : 'bg-slate-100 text-slate-600')
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Helper Box */}
      <div className="pt-4 mt-6 border-t border-slate-100">
        <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-3.5 text-xs text-amber-900">
          <div className="font-bold flex items-center gap-1.5 text-amber-950 mb-1">
            <CheckCircle className="w-4 h-4 text-amber-600" />
            <span>ระบบบันทึกอัตโนมัติ (Auto-Save)</span>
          </div>
          <p className="text-[11px] text-amber-800 leading-relaxed">
            ทุกข้อมูลที่คุณพิมพ์จะถูกบันทึกไว้ในเครื่องทันที สามารถกดปุ่ม <strong>"ดูตัวอย่าง PDF"</strong> ด้านบนเพื่อตรวจเช็คเอกสารได้ตลอดเวลา
          </p>
        </div>
      </div>
    </aside>
  );
}
