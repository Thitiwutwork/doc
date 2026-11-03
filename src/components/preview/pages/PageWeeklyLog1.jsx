import React from 'react';

export default function PageWeeklyLog1({ weekData, generalData }) {
  const { weekNumber, startDate, endDate, days = [] } = weekData || {};
  const day1 = days[0] || {};
  const day2 = days[1] || {};
  const day3 = days[2] || {};
  const day4 = days[3] || {};

  const renderDayBox = (day) => {
    const rawContent = (day?.content || '').trim();
    const rawLines = rawContent ? rawContent.split('\n').filter(Boolean) : [];
    const wrappedLines = [];
    rawLines.forEach((line) => {
      let rem = line;
      while (rem.length > 80) {
        let sp = rem.lastIndexOf(' ', 80);
        if (sp === -1 || sp < 45) sp = 80;
        wrappedLines.push(rem.substring(0, sp));
        rem = rem.substring(sp).trim();
      }
      if (rem) wrappedLines.push(rem);
    });

    const totalRows = Math.max(6, wrappedLines.length);
    const rows = [];
    for (let i = 0; i < totalRows; i++) {
      rows.push(wrappedLines[i] || '');
    }

    return (
      <div className="border-[1.5px] border-black bg-white mb-2 text-xs overflow-hidden">
        {/* Header Row: วันที่ | รายละเอียดการปฏิบัติงาน */}
        <div className="flex border-b-[1.5px] border-black bg-white text-xs font-bold text-black">
          <div className="w-[100px] border-r-[1.5px] border-black px-2.5 py-0.5 text-left">
            วันที่
          </div>
          <div className="flex-1 px-3 py-0.5 text-left">
            รายละเอียดการปฏิบัติงาน
          </div>
        </div>

        {/* Body Table with Native Rows: lines NEVER cut through text */}
        <table className="w-full table-fixed border-collapse">
          <tbody>
            {rows.map((lineText, idx) => (
              <tr
                key={idx}
                className={idx < rows.length - 1 ? 'border-b border-dashed border-black/70' : ''}
              >
                {/* Left Column: Date & Day Label rendered in row 0 spanning all rows */}
                {idx === 0 && (
                  <td
                    rowSpan={rows.length}
                    className="w-[100px] border-r-[1.5px] border-black bg-white p-2 text-center align-top"
                  >
                    <div className="font-bold text-xs text-black leading-tight">
                      {day?.date || ''}
                    </div>
                    {day?.dayLabel && (
                      <div className="text-[10.5px] text-slate-800 font-normal mt-1">
                        ({day.dayLabel})
                      </div>
                    )}
                  </td>
                )}

                {/* Right Column: Line of Work Description */}
                <td className="px-2.5 py-0 text-[11px] text-black leading-[22px] align-middle h-[23px] overflow-hidden">
                  {lineText}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="doc-page flex flex-col justify-between text-left text-xs text-black">
      <div>
        {/* Week Info Table matching PDF Pages 8, 10, 12... */}
        <div className="border-[1.5px] border-black bg-white flex text-xs mb-2">
          <div className="w-[100px] border-r-[1.5px] border-black px-2.5 py-1 font-bold text-black whitespace-nowrap">
            สัปดาห์ที่: <span className="font-bold text-sm ml-1">{weekNumber}</span>
          </div>
          <div className="flex-1 px-3 py-1 font-bold text-black flex items-center justify-between">
            <div>
              ตั้งแต่วันที่: <span className="font-normal ml-1.5">{startDate}</span>
            </div>
            <div className="pr-6">
              ถึงวันที่: <span className="font-normal ml-1.5">{endDate}</span>
            </div>
          </div>
        </div>

        {/* Exactly 4 Day Boxes: Day 1 (จันทร์), Day 2 (อังคาร), Day 3 (พุธ), Day 4 (พฤหัสบดี) */}
        {renderDayBox(day1)}
        {renderDayBox(day2)}
        {renderDayBox(day3)}
        {renderDayBox(day4)}
      </div>

      {/* Footer matching template Pages 10, 12, 14, 16... at bottom left */}
      <div className="text-xs text-slate-600 italic font-serif mt-auto pt-1">
        แบบฟอร์ม สกบ. 04/1
      </div>
    </div>
  );
}
