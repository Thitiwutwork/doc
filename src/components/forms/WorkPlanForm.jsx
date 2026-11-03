import React, { useState } from 'react';
import { CalendarRange, Plus, Trash2, CheckSquare, Layers } from 'lucide-react';

export default function WorkPlanForm({ data, onChange }) {
  const { workPlan = {} } = data;
  const tasks = workPlan.tasks || [];
  const [activeMonthGroup, setActiveMonthGroup] = useState(1); // 1 = Weeks 1-16 (Months 1-4), 2 = Weeks 17-32 (Months 5-8)

  const handleTaskTitleChange = (index, value) => {
    const updated = [...tasks];
    updated[index] = { ...updated[index], title: value };
    onChange({
      ...data,
      workPlan: {
        ...workPlan,
        tasks: updated,
      },
    });
  };

  const toggleWeek = (taskIndex, weekIndex) => {
    const updated = [...tasks];
    const currentWeeks = [...(updated[taskIndex].weeks || Array(32).fill(false))];
    while (currentWeeks.length < 32) currentWeeks.push(false);
    currentWeeks[weekIndex] = !currentWeeks[weekIndex];
    updated[taskIndex] = { ...updated[taskIndex], weeks: currentWeeks };
    onChange({
      ...data,
      workPlan: {
        ...workPlan,
        tasks: updated,
      },
    });
  };

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: '',
      weeks: Array(32).fill(false),
    };
    onChange({
      ...data,
      workPlan: {
        ...workPlan,
        tasks: [...tasks, newTask],
      },
    });
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    onChange({
      ...data,
      workPlan: {
        ...workPlan,
        tasks: updated,
      },
    });
  };

  const handleDateChange = (field, val) => {
    onChange({
      ...data,
      workPlan: {
        ...workPlan,
        [field]: val,
      },
    });
  };

  const weekOffset = activeMonthGroup === 1 ? 0 : 16;
  const monthLabels = activeMonthGroup === 1 
    ? ['เดือน 1', 'เดือน 2', 'เดือน 3', 'เดือน 4'] 
    : ['เดือน 5', 'เดือน 6', 'เดือน 7', 'เดือน 8'];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-white flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold flex items-center gap-2">
              <CalendarRange className="w-5 h-5" />
              <span>แบบฟอร์ม สกบ. 02: แผนปฏิบัติงานสหกิจศึกษา (Work Plan)</span>
            </h2>
            <p className="text-amber-100 text-xs mt-1">
              กำหนดแผนงาน/กิจกรรม และติ๊กเลือกสัปดาห์ที่จะดำเนินงาน (หน้า 5 - 6)
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle Month 1-4 vs Month 5-8 */}
            <div className="flex bg-slate-900/60 p-0.5 rounded-lg text-xs">
              <button
                type="button"
                onClick={() => setActiveMonthGroup(1)}
                className={`px-3 py-1.5 rounded-md font-bold transition ${
                  activeMonthGroup === 1
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-amber-100 hover:text-white'
                }`}
              >
                หน้า 1 (ด.1-4 / ส.1-16)
              </button>
              <button
                type="button"
                onClick={() => setActiveMonthGroup(2)}
                className={`px-3 py-1.5 rounded-md font-bold transition ${
                  activeMonthGroup === 2
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-amber-100 hover:text-white'
                }`}
              >
                หน้า 2 (ด.5-8 / ส.17-32)
              </button>
            </div>

            <button
              type="button"
              onClick={addTask}
              className="flex items-center gap-1.5 bg-slate-950 hover:bg-slate-900 text-amber-300 text-xs font-bold px-3 py-2 rounded-lg transition shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>เพิ่มกิจกรรม</span>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-slate-800 border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-slate-700">
                  <th className="p-2 text-center w-12 font-bold">ลำดับ</th>
                  <th className="p-2 text-left min-w-[280px] font-bold">งาน / กิจกรรม ที่ได้รับมอบหมาย</th>
                  {monthLabels.map((mLabel, mIdx) => (
                    <th key={mIdx} colSpan="4" className="p-1 text-center bg-amber-50/80 border-l border-r border-slate-300 font-bold text-amber-900">
                      {mLabel}
                    </th>
                  ))}
                  <th className="p-2 text-center w-10">ลบ</th>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-300 text-[10px] text-slate-500">
                  <th></th>
                  <th></th>
                  {/* 16 week badges for this month group */}
                  {Array.from({ length: 16 }).map((_, i) => (
                    <th key={i} className="p-1 text-center border-r border-slate-200 w-7">
                      W{weekOffset + i + 1}
                    </th>
                  ))}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, tIndex) => (
                  <tr key={task.id || tIndex} className="border-b border-slate-200 hover:bg-slate-50/80">
                    <td className="p-2 text-center font-bold text-slate-500">
                      {tIndex + 1}
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={task.title || ''}
                        onChange={(e) => handleTaskTitleChange(tIndex, e.target.value)}
                        placeholder={`ระบุกิจกรรมที่ ${tIndex + 1}`}
                        className="w-full px-2.5 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </td>
                    {/* 16 week checkboxes */}
                    {Array.from({ length: 16 }).map((_, wIndex) => {
                      const actualWeekIdx = weekOffset + wIndex;
                      const isChecked = task.weeks?.[actualWeekIdx] || false;
                      return (
                        <td
                          key={wIndex}
                          onClick={() => toggleWeek(tIndex, actualWeekIdx)}
                          className={`p-1 text-center cursor-pointer border-r border-slate-200 transition select-none ${
                            isChecked ? 'bg-amber-400 font-bold text-slate-950' : 'hover:bg-slate-100'
                          }`}
                          title={`สัปดาห์ที่ ${actualWeekIdx + 1}`}
                        >
                          {isChecked ? '✓' : ''}
                        </td>
                      );
                    })}
                    <td className="p-2 text-center">
                      <button
                        type="button"
                        onClick={() => removeTask(tIndex)}
                        className="p-1 text-slate-400 hover:text-rose-500 rounded transition"
                        title="ลบแถวนี้"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dates & Signatures Info */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                วันที่นิสิตลงนาม (หน้า 6)
              </label>
              <input
                type="text"
                value={workPlan.studentSignDate || ''}
                onChange={(e) => handleDateChange('studentSignDate', e.target.value)}
                placeholder="เช่น 1 กรกฎาคม 2569"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                วันที่พี่เลี้ยงลงนาม (หน้า 6)
              </label>
              <input
                type="text"
                value={workPlan.mentorSignDate || ''}
                onChange={(e) => handleDateChange('mentorSignDate', e.target.value)}
                placeholder="เช่น 1 กรกฎาคม 2569"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-amber-400 outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
