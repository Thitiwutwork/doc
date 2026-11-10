import React from 'react';

export default function PageWeeklyLog2({ weekData, generalData, jobDescData }) {
  const { days = [], feedback = '', studentSignature = '', supervisorSignature = '' } = weekData || {};
  const day5 = days[4] || {};
  const day6 = days[5] || {};

  const studentName = studentSignature || generalData?.studentName || '';
  const supervisorName = supervisorSignature || jobDescData?.mentor?.name || jobDescData?.supervisor?.name || '';

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

    // Exactly 5 content rows matching template image
    const totalRows = Math.max(5, wrappedLines.length);
    const rows = [];
    for (let i = 0; i < totalRows; i++) {
      rows.push(wrappedLines[i] || '');
    }

    return (
      <div className="border-2 border-black bg-white mb-3 text-black overflow-hidden">
        {/* Header Row: วันที่ | รายละเอียดการปฏิบัติงาน with thick solid border */}
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="border-b-2 border-black bg-white text-[13px] font-bold text-black h-[26px]">
              <th className="w-[110px] border-r-2 border-black px-2 py-0.5 text-center font-bold">
                วันที่
              </th>
              <th className="px-3 py-0.5 text-left font-bold">
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
                  className={`h-[22px] ${isLast ? '' : 'border-b border-dotted border-black'}`}
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
                  <td className="px-3 py-0 text-[12px] text-black leading-[22px] align-middle overflow-hidden whitespace-nowrap text-ellipsis font-normal">
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

  const renderFeedbackSection = (feedbackText) => {
    const rawLines = feedbackText ? feedbackText.split('\n').filter(Boolean) : [];
    const wrappedLines = [];
    rawLines.forEach((l) => {
      let rem = l;
      while (rem.length > 85) {
        let sp = rem.lastIndexOf(' ', 85);
        if (sp === -1 || sp < 50) sp = 85;
        wrappedLines.push(rem.substring(0, sp));
        rem = rem.substring(sp).trim();
      }
      if (rem) wrappedLines.push(rem);
    });

    const totalLines = 6;
    const lines = [];
    for (let i = 0; i < totalLines; i++) {
      lines.push(wrappedLines[i] || '');
    }

    return (
      <div className="mt-3 mb-2">
        <div className="font-bold text-black text-[13.5px] mb-2">
          ข้อเสนอแนะเพื่อพัฒนาการปฏิบัติงาน
        </div>
        <div className="w-full">
          {lines.map((text, idx) => (
            <div
              key={idx}
              className="border-b border-black h-[22px] text-[12px] text-black px-1 flex items-end pb-0.5 leading-none font-normal"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="doc-page flex flex-col justify-between text-left text-black font-sarabun text-[14px] leading-normal">
      <div>
        {/* Exactly 2 Day Boxes: Day 5 (ศุกร์) and Day 6 (เสาร์) with thick borders */}
        {renderDayBox(day5)}
        {renderDayBox(day6)}

        {/* Student Signature Block (Right-aligned, matching template image exactly) */}
        <div className="flex justify-end mt-6 mb-5 pr-1">
          <div className="w-[340px] text-center text-[13.5px] text-black">
            <div className="font-bold text-black mb-1.5 text-center text-[13.5px]">
              ผู้ปฏิบัติงาน
            </div>
            <div className="flex items-baseline justify-center mb-1 text-black font-bold">
              <span>ลงชื่อ</span>
              <span className="inline-block border-b border-black w-44 mx-2"></span>
              <span>นิสิต</span>
            </div>
            <div className="text-black text-[13px]">
              (&nbsp;<span className="inline-block w-40 text-center font-normal">{studentName}</span>&nbsp;)
            </div>
          </div>
        </div>

        {/* Feedback Section with exactly 6 solid horizontal lines matching template image */}
        {renderFeedbackSection(feedback)}

        {/* Supervisor Signature Block (Right-aligned, with generous gap matching template image exactly) */}
        <div className="flex justify-end mt-12 mb-4 pr-1">
          <div className="w-[340px] text-center text-[13.5px] text-black">
            <div className="font-bold text-black mb-1.5 text-center text-[13.5px]">
              รับทราบ
            </div>
            <div className="flex items-baseline justify-center mb-1 text-black font-bold">
              <span>ลงชื่อ</span>
              <span className="inline-block border-b border-black w-36 mx-2"></span>
              <span className="whitespace-nowrap">ผู้บังคับบัญชา/ พี่เลี้ยง</span>
            </div>
            <div className="text-black text-[13px]">
              (&nbsp;<span className="inline-block w-40 text-center font-normal">{supervisorName}</span>&nbsp;)
            </div>
          </div>
        </div>
      </div>

      {/* Footer matching template image at bottom left */}
      <div className="text-[12px] text-black italic font-serif mb-1 text-left">
        แบบฟอร์ม สกบ. 04/1
      </div>
    </div>
  );
}
