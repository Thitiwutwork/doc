import React from 'react';

export default function PageWorkPlan2({ data }) {
  const { general = {}, jobDesc = {}, workPlan = {} } = data;
  const tasks = workPlan.tasks || [];
  const { mentor = {} } = jobDesc;

  // Match template: exactly 16 table rows
  const totalRows = Math.max(tasks.length, 16);
  const rows = Array.from({ length: totalRows }, (_, i) => tasks[i] || null);

  return (
    <div className="doc-page flex flex-col justify-between text-left text-xs text-black">
      <div>
        {/* Gantt Table Months 5 - 8 (Weeks 17 - 32) matching Page 6 of template */}
        <table className="table-doc table-fixed w-full text-[10px] border-collapse mb-4 mt-2">
          <thead>
            <tr>
              <th rowSpan="2" className="w-[30px] text-center font-bold border border-black p-0.5 align-middle">
                ลำดับ
              </th>
              <th rowSpan="2" className="text-center font-bold border border-black px-1.5 py-1 align-middle">
                งาน / กิจกรรม ที่ได้รับมอบหมาย
              </th>
              <th colSpan="4" className="w-[84px] text-center font-bold border border-black py-0.5">เดือนที่ 5</th>
              <th colSpan="4" className="w-[84px] text-center font-bold border border-black py-0.5">เดือนที่ 6</th>
              <th colSpan="4" className="w-[84px] text-center font-bold border border-black py-0.5">เดือนที่ 7</th>
              <th colSpan="4" className="w-[84px] text-center font-bold border border-black py-0.5">เดือนที่ 8</th>
            </tr>
            <tr className="h-[62px]">
              {Array.from({ length: 16 }).map((_, wIdx) => (
                <th
                  key={wIdx}
                  className="w-[21px] max-w-[21px] p-0 border border-black font-normal align-bottom pb-1 text-center"
                >
                  <div className="[writing-mode:vertical-rl] rotate-180 text-[8.5px] leading-none inline-block whitespace-nowrap">
                    สัปดาห์ที่ {(wIdx % 4) + 1}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="h-[21px]">
                <td className="w-[30px] text-center border border-black p-0 font-medium">
                  {row ? idx + 1 : ''}
                </td>
                <td className="border border-black px-1.5 py-0.5 text-[9.5px] leading-tight overflow-hidden truncate">
                  {row?.title || ''}
                </td>
                {/* 16 week check columns (Weeks 17 - 32) */}
                {Array.from({ length: 16 }).map((_, wIdx) => {
                  const isChecked = row?.weeks?.[wIdx + 16];
                  return (
                    <td
                      key={wIdx}
                      className="w-[21px] max-w-[21px] text-center border border-black p-0 align-middle"
                    >
                      {isChecked ? (
                        <span className="text-black text-xs font-bold block leading-none select-none">
                          ✓
                        </span>
                      ) : (
                        ''
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Signature Box matching template Page 6 */}
        <table className="table-doc w-full text-xs border-collapse">
          <tbody>
            <tr>
              {/* Student Signature Column */}
              <td className="w-1/2 border border-black p-3.5 text-center">
                <div className="font-bold text-left mb-2 text-xs">ลงชื่อ</div>
                <div className="w-48 border-b border-black mx-auto mb-2 min-h-[1.4em]"></div>
                <div className="mb-1 text-xs">
                  ( <span className="inline-block min-w-36 text-center">{general.studentName || ''}</span> )
                </div>
                <div className="font-bold mb-1 text-xs">นิสิต</div>
                <div className="text-[11px] text-black">
                  {workPlan.studentSignDate || '........./…………………/………'}
                </div>
              </td>

              {/* Mentor Signature Column */}
              <td className="w-1/2 border border-black p-3.5 text-center">
                <div className="font-bold text-left mb-2 text-xs">ลงชื่อ</div>
                <div className="w-48 border-b border-black mx-auto mb-2 min-h-[1.4em]"></div>
                <div className="mb-1 text-xs">
                  ( <span className="inline-block min-w-36 text-center">{mentor.name || ''}</span> )
                </div>
                <div className="font-bold mb-1 text-xs">พี่เลี้ยง</div>
                <div className="text-[11px] text-black">
                  {workPlan.mentorSignDate || '.........../…………………./………'}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-500 italic mb-1">
        แบบฟอร์ม สกบ. 02
      </div>
    </div>
  );
}
