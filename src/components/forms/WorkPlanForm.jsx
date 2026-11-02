import React from 'react';
import { CalendarRange, Plus, Trash2, CheckSquare } from 'lucide-react';

export default function WorkPlanForm({ data, onChange }) {
  const { workPlan = {} } = data;
  const tasks = workPlan.tasks || [];

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
    const currentWeeks = [...(updated[taskIndex].weeks || Array(16).fill(false))];
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
      weeks: Array(16).fill(false),
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

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-white flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold flex items-center gap-2">
              <CalendarRange className="w-5 h-5" />
              <span>แบบฟอร์ม สกบ. 02: แผนปฏิบัติงานสหกิจศึกษา (Work Plan)</span>
            </h2>
            <p className="text-amber-100 text-xs mt-1">
              กำหนดแผนงาน/กิจกรรม และติ๊กเลือกสัปดาห์ที่จะดำเนินงาน (หน้า 5-6)
            </p>
          </div>

          <button
            type="button"
            onClick={addTask}
            className="flex items-center gap-1.5 bg-slate-900/80 hover:bg-slate-900 text-amber-300 text-xs font-semibold px-3 py-2 rounded-lg transition shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>เพิ่มกิจกรรม</span>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-slate-800 border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-slate-700">
                  <th className="p-2 text-center w-12 font-bold">ลำดับ</th>
                  <th className="p-2 text-left min-w-[280px] font-bold">งาน / กิจกรรม ที่ได้รับมอบหมาย</th>
                  <th colSpan="4" className="p-1 text-center bg-amber-50/80 border-l border-r border-slate-300 font-bold text-amber-800">เดือน 1</th>
                  <th colSpan="4" className="p-1 text-center bg-amber-50/80 border-r border-slate-300 font-bold text-amber-800">เดือน 2</th>
                  <th colSpan="4" className="p-1 text-center bg-amber-50/80 border-r border-slate-300 font-bold text-amber-800">เดือน 3</th>
                  <th colSpan="4" className="p-1 text-center bg-amber-50/80 border-r border-slate-300 font-bold text-amber-800">เดือน 4</th>
                  <th className="p-2 text-center w-10">ลบ</th>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-300 text-[10px] text-slate-500">
                  <th></th>
                  <th></th>
                  {/* 16 week badges */}
                  {Array.from({ length: 16 }).map((_, i) => (
                    <th key={i} className="p-1 text-center border-r border-slate-200 w-7">
                      W{(i % 4) + 1}
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
                        className="w-full px-2 py-1.5 border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-500 outline-none"
                      />
                    </td>
                    {/* 16 week checkboxes */}
                    {Array.from({ length: 16 }).map((_, wIndex) => {
                      const isChecked = task.weeks?.[wIndex] || false;
                      return (
                        <td
                          key={wIndex}
                          onClick={() => toggleWeek(tIndex, wIndex)}
                          className={`p-1 text-center cursor-pointer border-r border-slate-200 transition select-none ${
                            isChecked ? 'bg-amber-400 font-bold text-slate-950' : 'hover:bg-slate-100'
                          }`}
                          title={`สัปดาห์ที่ ${wIndex + 1}`}
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

          {/* Signature Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                วันที่ลงชื่อของนิสิต
              </label>
              <input
                type="text"
                value={workPlan.studentSignDate || ''}
                onChange={(e) => handleDateChange('studentSignDate', e.target.value)}
                placeholder="เช่น 1 ธันวาคม 2568"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                วันที่ลงชื่อของพี่เลี้ยง
              </label>
              <input
                type="text"
                value={workPlan.mentorSignDate || ''}
                onChange={(e) => handleDateChange('mentorSignDate', e.target.value)}
                placeholder="เช่น 1 ธันวาคม 2568"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
