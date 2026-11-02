import React from 'react';

export default function PageWorkPlan2({ data }) {
  const { general = {}, jobDesc = {}, workPlan = {} } = data;
  const tasks = workPlan.tasks || [];
  const { mentor = {} } = jobDesc;

  const totalRows = Math.max(tasks.length, 12);
  const rows = Array.from({ length: totalRows }, (_, i) => tasks[i] || null);

  return (
    <div className="doc-page flex flex-col justify-between text-left text-xs text-slate-900">
      <div>
        {/* Gantt Table Months 5 - 8 (Weeks 17 - 32) */}
        <table className="table-doc text-[11px] mb-6">
          <thead>
            <tr>
              <th rowSpan="2" className="w-10 text-center font-medium border border-slate-900 py-1">
                ลำดับ
              </th>
              <th rowSpan="2" className="text-center font-medium border border-slate-900 py-1">
                งาน / กิจกรรม ที่ได้รับมอบหมาย
              </th>
              <th colSpan="4" className="text-center font-medium border border-slate-900 py-0.5">เดือนที่ 5</th>
              <th colSpan="4" className="text-center font-medium border border-slate-900 py-0.5">เดือนที่ 6</th>
              <th colSpan="4" className="text-center font-medium border border-slate-900 py-0.5">เดือนที่ 7</th>
              <th colSpan="4" className="text-center font-medium border border-slate-900 py-0.5">เดือนที่ 8</th>
            </tr>
            <tr className="text-[8.5px] leading-tight">
              {/* Month 5 */}
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 1</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 2</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 3</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 4</th>
              {/* Month 6 */}
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 1</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 2</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 3</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 4</th>
              {/* Month 7 */}
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 1</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 2</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 3</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 4</th>
              {/* Month 8 */}
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 1</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 2</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 3</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 4</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="h-[28px]">
                <td className="text-center border border-slate-900">{row ? idx + 1 : ''}</td>
                <td className="border border-slate-900 px-1.5 py-0.5 text-[10px] leading-tight">
                  {row?.title || ''}
                </td>
                {/* 16 week check columns (Weeks 17-32) */}
                {Array.from({ length: 16 }).map((_, wIdx) => {
                  const isChecked = row?.weeks?.[wIdx + 16];
                  return (
                    <td
                      key={wIdx}
                      className={`text-center border border-slate-900 ${
                        isChecked ? 'bg-slate-800' : ''
                      }`}
                    >
                      {isChecked ? <span className="text-white text-[9px] font-bold">✓</span> : ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Signature Box */}
        <div className="border border-slate-900 grid grid-cols-2 text-xs py-4 px-6 gap-6">
          {/* Student Signature */}
          <div className="flex flex-col items-center">
            <div className="w-full font-bold mb-3">ลงชื่อ</div>
            <div className="w-48 border-b border-slate-600 mb-2 min-h-[1.5em]"></div>
            <div className="mb-2">
              ( <span className="inline-block min-w-36 text-center">{general.studentName || ''}</span> )
            </div>
            <div className="font-bold mb-2">นิสิต</div>
            <div className="text-[11px] text-slate-700">
              {workPlan.studentSignDate || '........./…………………/………'}
            </div>
          </div>

          {/* Mentor Signature */}
          <div className="flex flex-col items-center border-l border-slate-900 pl-6">
            <div className="w-full font-bold mb-3">ลงชื่อ</div>
            <div className="w-48 border-b border-slate-600 mb-2 min-h-[1.5em]"></div>
            <div className="mb-2">
              ( <span className="inline-block min-w-36 text-center">{mentor.name || ''}</span> )
            </div>
            <div className="font-bold mb-2">พี่เลี้ยง</div>
            <div className="text-[11px] text-slate-700">
              {workPlan.mentorSignDate || '........./…………………/………'}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-500 italic mb-2">
        แบบฟอร์ม สกบ. 02
      </div>
    </div>
  );
}
