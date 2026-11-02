import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MessageSquare,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  User,
  ShieldCheck,
  PlusCircle,
  Copy,
  RefreshCw,
} from 'lucide-react';

export default function WeeklyLogForm({ data, onChange, activeWeek = 1, onSelectWeek }) {
  const weeklyLogs = data.weeklyLogs || [];
  const currentWeekIndex = activeWeek - 1;
  const mentorName = data.jobDesc?.mentor?.name || data.jobDesc?.supervisor?.name || '';
  const studentName = data.general?.studentName || '';

  const currentWeek = weeklyLogs[currentWeekIndex] || {
    weekNumber: activeWeek,
    startDate: '',
    endDate: '',
    days: [
      { dayIndex: 1, dayLabel: 'วันจันทร์', date: '', content: '' },
      { dayIndex: 2, dayLabel: 'วันอังคาร', date: '', content: '' },
      { dayIndex: 3, dayLabel: 'วันพุธ', date: '', content: '' },
      { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '', content: '' },
      { dayIndex: 5, dayLabel: 'วันศุกร์', date: '', content: '' },
      { dayIndex: 6, dayLabel: 'วันเสาร์', date: '', content: '' },
    ],
    feedback: '',
    studentSignature: studentName,
    supervisorSignature: mentorName,
  };

  const updateCurrentWeek = (updatedFields) => {
    const updatedWeeklyLogs = [...weeklyLogs];
    updatedWeeklyLogs[currentWeekIndex] = {
      ...currentWeek,
      ...updatedFields,
    };
    onChange({
      ...data,
      weeklyLogs: updatedWeeklyLogs,
    });
  };

  const handleDayChange = (dayIndex, field, value) => {
    const updatedDays = [...(currentWeek.days || [])];
    const targetIdx = updatedDays.findIndex((d) => d.dayIndex === dayIndex);
    if (targetIdx >= 0) {
      updatedDays[targetIdx] = {
        ...updatedDays[targetIdx],
        [field]: value,
      };
    } else {
      updatedDays.push({
        dayIndex,
        dayLabel: `วันที่ ${dayIndex}`,
        [field]: value,
      });
    }
    updateCurrentWeek({ days: updatedDays });
  };

  // Helper to add bullet in textarea
  const addBulletToDay = (dayIndex) => {
    const day = currentWeek.days?.find((d) => d.dayIndex === dayIndex);
    const existing = day?.content || '';
    const updated = existing ? `${existing}\n- ` : '- ';
    handleDayChange(dayIndex, 'content', updated);
  };

  const handleSyncMentorToAll = () => {
    if (!mentorName) {
      alert('กรุณากรอกชื่อพี่เลี้ยงในหน้า สกบ. 01/1 ก่อนครับ');
      return;
    }
    const updated = weeklyLogs.map((w) => ({
      ...w,
      supervisorSignature: mentorName,
      studentSignature: studentName || w.studentSignature,
    }));
    onChange({
      ...data,
      weeklyLogs: updated,
    });
    alert(`ดึงชื่อพี่เลี้ยง "${mentorName}" และชื่อนิสิต "${studentName}" ลงบันทึกทุกสัปดาห์เรียบร้อยแล้ว!`);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Week Selector Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-500" />
            <h2 className="text-base font-bold text-slate-800">
              เลือกสัปดาห์ที่ต้องการบันทึก (แบบฟอร์ม สกบ. 04/1)
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={activeWeek <= 1}
              onClick={() => onSelectWeek(Math.max(1, activeWeek - 1))}
              className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold disabled:opacity-30 transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>สัปดาห์ก่อนหน้า</span>
            </button>
            <button
              type="button"
              disabled={activeWeek >= 19}
              onClick={() => onSelectWeek(Math.min(19, activeWeek + 1))}
              className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold disabled:opacity-30 transition"
            >
              <span>สัปดาห์ถัดไป</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 19 Week Pills Grid */}
        <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-19 gap-1.5">
          {Array.from({ length: 19 }, (_, i) => {
            const weekNum = i + 1;
            const isCurrent = weekNum === activeWeek;
            const weekLog = weeklyLogs[i];
            const hasData =
              weekLog?.days?.some((d) => d.content && d.content.trim() !== '') ||
              weekLog?.startDate;

            return (
              <button
                key={weekNum}
                type="button"
                onClick={() => onSelectWeek(weekNum)}
                className={`py-2 px-1 text-center rounded-lg text-xs font-semibold transition relative ${
                  isCurrent
                    ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-400 font-bold shadow'
                    : hasData
                    ? 'bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <div>ส.{weekNum}</div>
                {hasData && !isCurrent && (
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block mt-0.5"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Weekly Form Container */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-white flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold">
              บันทึกการปฏิบัติงาน: สัปดาห์ที่ {activeWeek}
            </h3>
            <p className="text-amber-100 text-xs mt-0.5">
              หน้าเอกสารคู่ที่ {activeWeek} (จะนำไปใส่ในหน้า {activeWeek * 2 + 6} และ {activeWeek * 2 + 7} ของ PDF)
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/60 px-3 py-1.5 rounded-lg text-xs">
            <span className="text-amber-300 font-semibold">สถานะ:</span>
            <span>
              {currentWeek.days?.filter((d) => d.content).length || 0} / 6 วันทำการ
            </span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Week Date Range */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ตั้งแต่วันที่ <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={currentWeek.startDate || ''}
                onChange={(e) => updateCurrentWeek({ startDate: e.target.value })}
                placeholder="เช่น 1 ก.ค. 2569"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ถึงวันที่ <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={currentWeek.endDate || ''}
                onChange={(e) => updateCurrentWeek({ endDate: e.target.value })}
                placeholder="เช่น 3 ก.ค. 2569"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-400 outline-none"
              />
            </div>
          </div>

          {/* Daily Records (Days 1 to 6) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-800 border-b pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>บันทึกกิจกรรมรายวัน (วันจันทร์ – วันเสาร์)</span>
            </h4>

            {[
              { idx: 1, label: 'วันจันทร์' },
              { idx: 2, label: 'วันอังคาร' },
              { idx: 3, label: 'วันพุธ' },
              { idx: 4, label: 'วันพฤหัสบดี' },
              { idx: 5, label: 'วันศุกร์' },
              { idx: 6, label: 'วันเสาร์' },
            ].map(({ idx, label }) => {
              const day = currentWeek.days?.find((d) => d.dayIndex === idx) || {};

              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-lg p-4 bg-white hover:border-amber-300 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs">
                        {idx}
                      </span>
                      <span className="font-bold text-xs text-slate-800">{label}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <label className="text-xs text-slate-500 whitespace-nowrap">วันที่:</label>
                      <input
                        type="text"
                        value={day.date || ''}
                        onChange={(e) => handleDayChange(idx, 'date', e.target.value)}
                        placeholder="เช่น 1 ก.ค. 2569"
                        className="px-2 py-1 border border-slate-300 rounded text-xs w-36 outline-none focus:ring-1 focus:ring-amber-400"
                      />
                      <button
                        type="button"
                        onClick={() => addBulletToDay(idx)}
                        className="text-[11px] text-amber-700 bg-amber-50 hover:bg-amber-100 px-2 py-1 rounded border border-amber-200 transition"
                        title="เพิ่มหัวข้อ (- )"
                      >
                        + เพิ่มข้อ
                      </button>
                    </div>
                  </div>

                  <textarea
                    rows="3"
                    value={day.content || ''}
                    onChange={(e) => handleDayChange(idx, 'content', e.target.value)}
                    placeholder={`รายละเอียดการปฏิบัติงานประจำ${label} (เช่น งานที่ได้รับมอบหมาย ปัญหาที่พบ หรือการแก้ไข)...`}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs leading-relaxed outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              );
            })}
          </div>

          {/* Feedback & Supervisor Comments */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-amber-500" />
              <span>ข้อเสนอแนะเพื่อพัฒนาการปฏิบัติงาน (จากพี่เลี้ยง / ผู้บังคับบัญชา)</span>
            </h4>

            <textarea
              rows="3"
              value={currentWeek.feedback || ''}
              onChange={(e) => updateCurrentWeek({ feedback: e.target.value })}
              placeholder="ความเห็นหรือข้อเสนอแนะจากพี่เลี้ยงประจำสัปดาห์นี้..."
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs leading-relaxed outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Signatures & Auto-Sync Controls */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>ช่องลงชื่อประจำสัปดาห์ (ดึงชื่ออัตโนมัติจาก สกบ. 01/1)</span>
              </h4>
              <button
                type="button"
                onClick={handleSyncMentorToAll}
                className="text-[11px] font-semibold text-amber-800 bg-amber-100 hover:bg-amber-200 px-2.5 py-1 rounded-md border border-amber-300 flex items-center gap-1 transition"
                title="ดึงชื่อพี่เลี้ยงจาก สกบ.01/1 ไปใส่ทุกสัปดาห์"
              >
                <RefreshCw className="w-3 h-3" />
                <span>ดึงชื่อพี่เลี้ยงลงทุกสัปดาห์</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ชื่อนิสิตผู้ปฏิบัติงาน (ลงชื่อ)
                </label>
                <input
                  type="text"
                  value={currentWeek.studentSignature || studentName}
                  onChange={(e) => updateCurrentWeek({ studentSignature: e.target.value })}
                  placeholder="เช่น นายฐิติวุฒิ พุกภิญโญ"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-amber-400"
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  (ดึงอัตโนมัติจากหน้าปก: {studentName || 'ยังไม่ได้ระบุ'})
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ชื่อผู้บังคับบัญชา / พี่เลี้ยง (รับทราบ)
                </label>
                <input
                  type="text"
                  value={currentWeek.supervisorSignature || mentorName}
                  onChange={(e) => updateCurrentWeek({ supervisorSignature: e.target.value })}
                  placeholder="เช่น นายสามศักดิ์ บุญจวง"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-amber-400"
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  (ดึงอัตโนมัติจาก สกบ. 01/1: {mentorName || 'ยังไม่ได้ระบุ'})
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
