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

    // Exactly 5 content rows matching template image (or more if text overflows)
    const totalRows = Math.max(5, wrappedLines.length);
    const rows = [];
    for (let i = 0; i < totalRows; i++) {
      rows.push(wrappedLines[i] || '');
    }

    return (
      <div className="border-2 border-black bg-white mb-2.5 text-black overflow-hidden">
        {/* Header Row: วันที่ | รายละเอียดการปฏิบัติงาน with thick solid border */}
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="border-b-2 border-black bg-white text-[13px] font-bold text-black">
              <th className="w-[110px] border-r-2 border-black px-2 py-1 text-center font-bold">
                วันที่
              </th>
              <th className="px-3 py-1 text-left font-bold">
                รายละเอียดการปฏิบัติงาน
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((lineText, idx) => {
              const isLast = idx === rows.length - 1;
              return (
                <tr
                  key={idx}
                  className={`h-[25px] ${isLast ? '' : 'border-b border-dotted border-black'}`}
                >
                  {/* Left Column: Date & Day Label on row 0, dotted border below each row */}
                  <td className="w-[110px] border-r-2 border-black px-1.5 py-0 text-center align-middle">
                    {idx === 0 && (
                      <div className="leading-tight">
                        <span className="font-bold text-[12px] block">
                          {day?.date || ''}
                        </span>
                        {day?.dayLabel && (
                          <span className="text-[11px] font-normal text-black block mt-0.5">
                            ({day.dayLabel})
                          </span>
                        )}
                      </div>
                    )}
                  </td>

                  {/* Right Column: Line of Work Description */}
                  <td className="px-3 py-0 text-[12px] text-black leading-[24px] align-middle overflow-hidden whitespace-nowrap text-ellipsis font-normal">
                    {lineText}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="doc-page flex flex-col justify-between text-left text-black font-sarabun text-[14px] leading-normal">
      <div>
        {/* Week Info Table matching template image with 2px thick borders */}
        <table className="w-full table-fixed border-collapse border-2 border-black bg-white mb-3 text-[14px]">
          <tbody>
            <tr>
              <td className="w-[110px] border-r-2 border-black px-2.5 py-1.5 font-bold text-black whitespace-nowrap">
                สัปดาห์ที่: <span className="font-bold text-[15px] ml-1">{weekNumber}</span>
              </td>
              <td className="px-4 py-1.5 font-bold text-black">
                <div className="flex items-center justify-between">
                  <div>
                    ตั้งแต่วันที่: <span className="font-normal ml-1.5">{startDate}</span>
                  </div>
                  <div className="pr-8">
                    ถึงวันที่: <span className="font-normal ml-1.5">{endDate}</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Exactly 4 Day Boxes: Day 1 (จันทร์), Day 2 (อังคาร), Day 3 (พุธ), Day 4 (พฤหัสบดี) */}
        {renderDayBox(day1)}
        {renderDayBox(day2)}
        {renderDayBox(day3)}
        {renderDayBox(day4)}
      </div>

      {/* Footer matching template at bottom left */}
      <div className="text-[12px] text-black italic font-serif mt-auto pt-1 text-left">
        แบบฟอร์ม สกบ. 04/1
      </div>
    </div>
  );
}
