import React from 'react';

export default function PageWorkPlan2({ data }) {
  const { general = {}, jobDesc = {}, workPlan = {} } = data;
  const tasks = workPlan.tasks || [];
  const { mentor = {} } = jobDesc;

  // Match template: exactly 16 table rows
  const totalRows = Math.max(tasks.length, 16);
  const rows = Array.from({ length: totalRows }, (_, i) => tasks[i] || null);

  return (
    <div className="doc-page flex flex-col justify-between text-left text-black font-sarabun text-[14px] leading-normal">
      <div>
        {/* Gantt Table Months 5 - 8 (Weeks 17 - 32) matching official template Page 6 exactly */}
        <table className="w-full table-fixed border-collapse border border-black mb-5 mt-1 text-[11px]">
          <thead>
            <tr>
              <th rowSpan="2" className="w-[38px] text-center font-bold border border-black p-1 align-middle text-[12px]">
                ลำดับ
              </th>
              <th rowSpan="2" className="text-center font-bold border border-black px-2 py-1 align-middle text-[12px]">
                งาน / กิจกรรม ที่ได้รับมอบหมาย
              </th>
              <th colSpan="4" className="w-[84px] text-center font-bold border border-black py-1 text-[11px]">
                เดือนที่ 5
              </th>
              <th colSpan="4" className="w-[84px] text-center font-bold border border-black py-1 text-[11px]">
                เดือนที่ 6
              </th>
              <th colSpan="4" className="w-[84px] text-center font-bold border border-black py-1 text-[11px]">
                เดือนที่ 7
              </th>
              <th colSpan="4" className="w-[84px] text-center font-bold border border-black py-1 text-[11px]">
                เดือนที่ 8
              </th>
            </tr>
            <tr className="h-[65px]">
              {Array.from({ length: 16 }).map((_, wIdx) => (
                <th
                  key={wIdx}
                  className="w-[21px] max-w-[21px] p-0 border border-black font-normal align-bottom pb-1.5 text-center"
                >
                  <div className="[writing-mode:vertical-rl] rotate-180 text-[9px] leading-none inline-block whitespace-nowrap">
                    สัปดาห์ที่ {(wIdx % 4) + 1}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="h-[23px]">
                <td className="w-[38px] text-center border border-black p-0 font-medium text-[11px]">
                  {row ? idx + 1 : ''}
                </td>
                <td className="border border-black px-2 py-0.5 text-[11px] leading-snug overflow-hidden truncate">
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

        {/* Signature Box matching template Page 6 exactly */}
        <table className="w-full border-collapse border border-black text-[14px]">
          <tbody>
            <tr>
              {/* Student Signature Column */}
              <td className="w-1/2 border-r border-black p-4 text-center align-top">
                <div className="flex items-baseline mb-2">
                  <span className="font-bold text-[14px] whitespace-nowrap">ลงชื่อ</span>
                  <span className="border-b border-black flex-1 ml-2 min-h-[1.4em]"></span>
                </div>
                <div className="mb-2 text-[14px] text-center">
                  (&nbsp;<span className="inline-block min-w-44 text-center font-normal">{general.studentName || ''}</span>&nbsp;)
                </div>
                <div className="font-bold mb-2 text-[14px] text-center">
                  นิสิต
                </div>
                <div className="text-[12.5px] text-black text-center font-normal tracking-wider">
                  {workPlan.studentSignDate ? workPlan.studentSignDate : '........./..................../.........'}
                </div>
              </td>

              {/* Mentor Signature Column */}
              <td className="w-1/2 p-4 text-center align-top">
                <div className="flex items-baseline mb-2">
                  <span className="font-bold text-[14px] whitespace-nowrap">ลงชื่อ</span>
                  <span className="border-b border-black flex-1 ml-2 min-h-[1.4em]"></span>
                </div>
                <div className="mb-2 text-[14px] text-center">
                  (&nbsp;<span className="inline-block min-w-44 text-center font-normal">{mentor.name || ''}</span>&nbsp;)
                </div>
                <div className="font-bold mb-2 text-[14px] text-center">
                  พี่เลี้ยง
                </div>
                <div className="text-[12.5px] text-black text-center font-normal tracking-wider">
                  {workPlan.mentorSignDate ? workPlan.mentorSignDate : '........./..................../.........'}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Form Code matching template */}
      <div className="text-[12px] text-black italic font-serif mb-1 text-left">
        แบบฟอร์ม สกบ. 02
      </div>
    </div>
  );
}
