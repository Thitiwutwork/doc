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

    const totalRows = Math.max(6, wrappedLines.length);
    const rows = [];
    for (let i = 0; i < totalRows; i++) {
      rows.push(wrappedLines[i] || '');
    }

    return (
      <div className="border-[1.5px] border-black bg-white mb-2.5 text-xs overflow-hidden">
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
                {/* Left Column: Date & Day Label in row 0 spanning all rows */}
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

                {/* Right Column: Text sits safely ABOVE the dashed border-bottom */}
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
      <div className="mb-3">
        <div className="font-bold text-black text-xs mb-1.5">
          ข้อเสนอแนะเพื่อพัฒนาการปฏิบัติงาน
        </div>
        <div className="w-full">
          {lines.map((text, idx) => (
            <div
              key={idx}
              className="border-b border-black h-[22px] text-[11px] text-black px-1 flex items-end pb-0.5 leading-none"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="doc-page flex flex-col justify-between text-left text-xs text-black">
      <div>
        {/* Top Form Code matching template Page 9 */}
        <div className="text-xs text-black italic font-serif mb-1.5">
          แบบฟอร์ม สกบ. 04/1
        </div>

        {/* Exactly 2 Day Boxes: Day 5 (ศุกร์) and Day 6 (เสาร์) */}
        {renderDayBox(day5)}
        {renderDayBox(day6)}

        {/* Student Signature Block (Right-aligned, matching PDF Page 9 exactly) */}
        <div className="flex justify-end mt-2 mb-2 pr-2">
          <div className="w-[320px] text-center text-xs text-black">
            <div className="font-semibold text-black mb-1 text-center">
              ผู้ปฏิบัติงาน
            </div>
            <div className="flex items-baseline justify-center mb-0.5 text-black">
              <span>ลงชื่อ</span>
              <span className="inline-block border-b border-black w-44 mx-2"></span>
              <span>นิสิต</span>
            </div>
            <div className="text-black">
              (&nbsp;<span className="inline-block w-40 text-center font-normal">{studentName}</span>&nbsp;)
            </div>
          </div>
        </div>

        {/* Feedback Section with exactly 6 solid horizontal lines matching PDF Page 9 */}
        {renderFeedbackSection(feedback)}

        {/* Supervisor Signature Block (Right-aligned, matching PDF Page 9 exactly) */}
        <div className="flex justify-end mt-1.5 pr-2">
          <div className="w-[320px] text-center text-xs text-black">
            <div className="font-semibold text-black mb-1 text-center">
              รับทราบ
            </div>
            <div className="flex items-baseline justify-center mb-0.5 text-black">
              <span>ลงชื่อ</span>
              <span className="inline-block border-b border-black w-36 mx-2"></span>
              <span className="whitespace-nowrap">ผู้บังคับบัญชา/ พี่เลี้ยง</span>
            </div>
            <div className="text-black">
              (&nbsp;<span className="inline-block w-40 text-center font-normal">{supervisorName}</span>&nbsp;)
            </div>
          </div>
        </div>
      </div>

      {/* Footer matching template Pages 9, 11, 13... at bottom left */}
      <div className="text-xs text-slate-600 italic font-serif mt-auto pt-1">
        แบบฟอร์ม สกบ. 04/1
      </div>
    </div>
  );
}
