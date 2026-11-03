import React from 'react';
import { FileCheck, Plus, Trash2 } from 'lucide-react';

export default function SummaryForm({ data, onChange }) {
  const { summaryReport = {} } = data;
  const workTypes = summaryReport.workTypes || [];
  const learningOutcomes = summaryReport.learningOutcomes || [];

  // Work Types handlers
  const handleWorkTypeChange = (index, value) => {
    const updated = [...workTypes];
    updated[index] = value;
    onChange({
      ...data,
      summaryReport: {
        ...summaryReport,
        workTypes: updated,
      },
    });
  };

  const addWorkType = () => {
    onChange({
      ...data,
      summaryReport: {
        ...summaryReport,
        workTypes: [...workTypes, ''],
      },
    });
  };

  const removeWorkType = (index) => {
    onChange({
      ...data,
      summaryReport: {
        ...summaryReport,
        workTypes: workTypes.filter((_, i) => i !== index),
      },
    });
  };

  // Learning Outcomes handlers
  const handleOutcomeChange = (index, value) => {
    const updated = [...learningOutcomes];
    updated[index] = value;
    onChange({
      ...data,
      summaryReport: {
        ...summaryReport,
        learningOutcomes: updated,
      },
    });
  };

  const addOutcome = () => {
    onChange({
      ...data,
      summaryReport: {
        ...summaryReport,
        learningOutcomes: [...learningOutcomes, ''],
      },
    });
  };

  const removeOutcome = (index) => {
    onChange({
      ...data,
      summaryReport: {
        ...summaryReport,
        learningOutcomes: learningOutcomes.filter((_, i) => i !== index),
      },
    });
  };

  const handleDateChange = (field, val) => {
    onChange({
      ...data,
      summaryReport: {
        ...summaryReport,
        [field]: val,
      },
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-white">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <FileCheck className="w-5 h-5" />
            <span>แบบฟอร์ม สกบ. 07: แบบรายงานผลการดำเนินงานโครงการสหกิจศึกษา</span>
          </h2>
          <p className="text-amber-100 text-xs mt-1">
            สรุปประเภทของงานที่ปฏิบัติ และสิ่งที่ได้รับจากการปฏิบัติงานสหกิจศึกษา (หน้า 46)
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Section 1: ประเภทของงาน */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-bold text-slate-800">
                1. ประเภทของงานที่ปฏิบัติสหกิจศึกษา
              </label>
              <button
                type="button"
                onClick={addWorkType}
                className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 transition"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>เพิ่มรายการ</span>
              </button>
            </div>

            <div className="space-y-2">
              {workTypes.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-6 text-center font-bold text-xs text-slate-400">
                    {idx + 1}.
                  </span>
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleWorkTypeChange(idx, e.target.value)}
                    placeholder={`ประเภทงานที่ ${idx + 1}`}
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <button
                    type="button"
                    onClick={() => removeWorkType(idx)}
                    className="p-2 text-slate-400 hover:text-rose-500 rounded transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: สิ่งที่ได้รับ */}
          <div className="pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-bold text-slate-800">
                2. สิ่งที่ได้รับจากการปฏิบัติงานสหกิจศึกษา
              </label>
              <button
                type="button"
                onClick={addOutcome}
                className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 transition"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>เพิ่มรายการ</span>
              </button>
            </div>

            <div className="space-y-2">
              {learningOutcomes.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-6 text-center font-bold text-xs text-slate-400">
                    {idx + 1}.
                  </span>
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleOutcomeChange(idx, e.target.value)}
                    placeholder={`สิ่งที่ได้รับข้อที่ ${idx + 1}`}
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <button
                    type="button"
                    onClick={() => removeOutcome(idx)}
                    className="p-2 text-slate-400 hover:text-rose-500 rounded transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Training Period */}
          <div className="pt-4 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ระยะเวลาปฏิบัติสหกิจศึกษา ตั้งแต่วันที่
              </label>
              <input
                type="text"
                value={summaryReport.startDate || ''}
                onChange={(e) => handleDateChange('startDate', e.target.value)}
                placeholder="เช่น 1 ธันวาคม 2568"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ถึงวันที่
              </label>
              <input
                type="text"
                value={summaryReport.endDate || ''}
                onChange={(e) => handleDateChange('endDate', e.target.value)}
                placeholder="เช่น 31 มีนาคม 2569"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
