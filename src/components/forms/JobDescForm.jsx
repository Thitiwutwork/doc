import React from 'react';
import { Briefcase, UserCheck, ShieldCheck, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';

export default function JobDescForm({ data, onChange }) {
  const { jobDesc = {}, weeklyLogs = [] } = data;
  const { mentor = {}, supervisor = {} } = jobDesc;

  const handleJobChange = (field, value) => {
    onChange({
      ...data,
      jobDesc: {
        ...jobDesc,
        [field]: value,
      },
    });
  };

  const handleMentorChange = (field, value) => {
    const updatedJobDesc = {
      ...jobDesc,
      mentor: {
        ...mentor,
        [field]: value,
      },
    };

    // Auto sync to weekly logs if mentor name changes
    let updatedWeeklyLogs = weeklyLogs;
    if (field === 'name') {
      updatedWeeklyLogs = weeklyLogs.map((w) => ({
        ...w,
        supervisorSignature: value,
      }));
    }

    onChange({
      ...data,
      jobDesc: updatedJobDesc,
      weeklyLogs: updatedWeeklyLogs,
    });
  };

  const handleSupervisorChange = (field, value) => {
    onChange({
      ...data,
      jobDesc: {
        ...jobDesc,
        supervisor: {
          ...supervisor,
          [field]: value,
        },
      },
    });
  };

  const handleSyncToAllWeeks = () => {
    const targetName = mentor.name || 'นายสามศักดิ์ บุญจวง';
    const targetStudent = data.general?.studentName || 'นายฐิติวุฒิ พุกภิญโญ';

    const updated = weeklyLogs.map((w) => ({
      ...w,
      supervisorSignature: targetName,
      studentSignature: targetStudent,
    }));

    onChange({
      ...data,
      weeklyLogs: updated,
    });

    alert(`ซิงค์ชื่อพี่เลี้ยง "${targetName}" ลงในช่องลงชื่อของบันทึกรายสัปดาห์ (สัปดาห์ที่ 1 - 19) เรียบร้อยแล้ว!`);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Auto-sync Notification Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-amber-900 shadow-sm">
        <div className="flex items-start gap-2.5">
          <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold text-amber-950 text-sm">ระบบเชื่อมโยงชื่ออัตโนมัติ (Auto-Sync Data)</span>
            <p className="text-amber-800 mt-0.5 leading-relaxed">
              ชื่อพี่เลี้ยง (<strong>นายสามศักดิ์ บุญจวง</strong>) และผู้บังคับบัญชา (<strong>นายจิรกานต์ วาทกิจ</strong>) ที่คุณกรอกในหน้านี้ จะถูกส่งไปใส่ในช่องลงชื่อของ <strong>สกบ. 01/1</strong>, <strong>สกบ. 02 (แผนปฏิบัติงาน)</strong> และ <strong>สกบ. 04/1 (บันทึกประจำสัปดาห์ 1-19)</strong> ให้โดยอัตโนมัติ 100%
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSyncToAllWeeks}
          className="flex items-center gap-1.5 whitespace-nowrap bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 text-xs font-bold px-3 py-2 rounded-lg shadow-sm transition"
          title="บังคับอัปเดตชื่อพี่เลี้ยงลงทุกสัปดาห์"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>ซิงค์ชื่อลงทุกสัปดาห์</span>
        </button>
      </div>

      {/* Card: ข้อมูลตำแหน่งงานและความรับผิดชอบ */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-white">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            <span>แบบฟอร์ม สกบ. 01/1: ข้อมูลตำแหน่งงาน (Job Description)</span>
          </h2>
          <p className="text-amber-100 text-xs mt-1">
            ระบุตำแหน่งงาน หน้าที่ความรับผิดชอบ และผู้ประสานงานในสถานประกอบการ (หน้า 3)
          </p>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              ตำแหน่งงาน (Job Position) <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={jobDesc.position || ''}
              onChange={(e) => handleJobChange('position', e.target.value)}
              placeholder="เช่น โปรแกรมเมอร์ / นักพัฒนาซอฟต์แวร์ (Programmer & Software Developer Intern)"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700">
                หน้าที่ความรับผิดชอบ (Job Responsibilities) <span className="text-rose-500">*</span>
              </label>
              <span className="text-xs text-slate-400">ขึ้นบรรทัดใหม่ด้วยการกด Enter หรือใส่เลข 1. 2. 3.</span>
            </div>
            <textarea
              rows="6"
              value={jobDesc.responsibilities || ''}
              onChange={(e) => handleJobChange('responsibilities', e.target.value)}
              placeholder="1. พัฒนา Web Dashboard แสดงข้อมูลของเสียจากการผลิต (Defect / Scrap Dashboard)...&#10;2. พัฒนาระบบจัดการครุภัณฑ์และคลังอุปกรณ์ (Asset Management)...&#10;3. พัฒนาและติดตั้งโปรแกรม RS-232 ใช้งานจริง 17 ส.ค. 2569..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm leading-relaxed focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Grid: พี่เลี้ยง & ผู้บังคับบัญชา */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mentor Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 px-6 py-3.5 text-white flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-semibold">ข้อมูลพี่เลี้ยง (Mentor)</h2>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ชื่อ - นามสกุล พี่เลี้ยง <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={mentor.name || ''}
                onChange={(e) => handleMentorChange('name', e.target.value)}
                placeholder="เช่น นายสามศักดิ์ บุญจวง"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
              <p className="text-[11px] text-amber-700 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>ชื่อนี้จะไปปรากฏในช่องลงชื่อของ สกบ.01/1, สกบ.02 และบันทึกสัปดาห์ที่ 1-19 ทันที</span>
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ตำแหน่งงานของพี่เลี้ยง
              </label>
              <input
                type="text"
                value={mentor.position || ''}
                onChange={(e) => handleMentorChange('position', e.target.value)}
                placeholder="เช่น หัวหน้าพัฒนาซอฟแวร์"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={mentor.email || ''}
                onChange={(e) => handleMentorChange('email', e.target.value)}
                placeholder="เช่น samsak.b@ckshoes.co.th"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                เบอร์โทรศัพท์
              </label>
              <input
                type="text"
                value={mentor.phone || ''}
                onChange={(e) => handleMentorChange('phone', e.target.value)}
                placeholder="เช่น 081-999-1234"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Supervisor Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 px-6 py-3.5 text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-semibold">ข้อมูลผู้บังคับบัญชา (Supervisor)</h2>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ชื่อ - นามสกุล ผู้บังคับบัญชา <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={supervisor.name || ''}
                onChange={(e) => handleSupervisorChange('name', e.target.value)}
                placeholder="เช่น นายจิรกานต์ วาทกิจ"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
              <p className="text-[11px] text-amber-700 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>ใช้สำหรับช่องลงชื่อผู้บังคับบัญชาใน สกบ. 01/1</span>
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ตำแหน่งงาน
              </label>
              <input
                type="text"
                value={supervisor.position || ''}
                onChange={(e) => handleSupervisorChange('position', e.target.value)}
                placeholder="เช่น ผู้ช่วยรองกรรมการผู้จัดการ"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={supervisor.email || ''}
                onChange={(e) => handleSupervisorChange('email', e.target.value)}
                placeholder="เช่น jirakan.w@ckshoes.co.th"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                เบอร์โทรศัพท์
              </label>
              <input
                type="text"
                value={supervisor.phone || ''}
                onChange={(e) => handleSupervisorChange('phone', e.target.value)}
                placeholder="เช่น 089-888-5678"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
