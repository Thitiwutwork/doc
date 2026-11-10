import React from 'react';

// Word-level Thai text wrapping using Intl.Segmenter so words are never cut mid-word
function wrapThaiText(text, maxChars = 68) {
  if (!text) return [];
  const trimmed = text.trim();
  if (!trimmed) return [];

  const rawLines = trimmed.split('\n').filter(Boolean);
  const resultLines = [];

  rawLines.forEach((line) => {
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter('th', { granularity: 'word' });
      const segments = [...segmenter.segment(line)].map((s) => s.segment);
      let cur = '';
      for (const seg of segments) {
        if ((cur + seg).length > maxChars) {
          if (cur) resultLines.push(cur.trimEnd());
          cur = seg.trimStart();
        } else {
          cur += seg;
        }
      }
      if (cur) resultLines.push(cur.trimEnd());
    } else {
      // Fallback
      let rem = line;
      while (rem.length > maxChars) {
        let sp = rem.lastIndexOf(' ', maxChars);
        if (sp === -1 || sp < maxChars * 0.6) sp = maxChars;
        resultLines.push(rem.substring(0, sp).trimEnd());
        rem = rem.substring(sp).trimStart();
      }
      if (rem) resultLines.push(rem);
    }
  });

  return resultLines;
}

export default function PageWeeklyLog2({ weekData, generalData, jobDescData }) {
  const { days = [], feedback = '', studentSignature = '', supervisorSignature = '' } = weekData || {};
  const day5 = days[4] || {};
  const day6 = days[5] || {};

  const studentName = studentSignature || generalData?.studentName || '';
  const supervisorName = supervisorSignature || jobDescData?.mentor?.name || jobDescData?.supervisor?.name || '';

  const renderDayBox = (day, isFirst = false) => {
    const wrappedLines = wrapThaiText(day?.content || '', 68);

    // Exactly 5 content rows matching template image
    const totalRows = Math.max(5, wrappedLines.length);
    const rows = [];
    for (let i = 0; i < totalRows; i++) {
      rows.push(wrappedLines[i] || '');
    }

    return (
      <div className={`border-2 border-black bg-white text-black overflow-hidden ${isFirst ? 'mb-[34px]' : ''}`}>
        {/* Header Row: วันที่ | รายละเอียดการปฏิบัติงาน */}
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="border-b-2 border-black bg-white text-[13.5px] font-bold text-black h-[28px]">
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
                  className={`h-[35px] ${isLast ? '' : 'border-b border-dotted border-black'}`}
                >
                  {/* Left Column: Date & Day Label on row 0 */}
                  <td className="w-[110px] border-r-2 border-black px-1.5 py-0 text-center align-middle">
                    {idx === 0 && (
                      <div className="leading-tight">
                        <span className="font-bold text-[12.5px] block">
                          {day?.date || ''}
                        </span>
                        {day?.dayLabel && (
                          <span className="text-[11.5px] font-normal text-black block mt-0.5">
                            ({day.dayLabel})
                          </span>
                        )}
                      </div>
                    )}
                  </td>

                  {/* Right Column: Line of Work Description */}
                  <td className="px-3 py-0 text-[13px] text-black leading-[35px] align-middle overflow-hidden whitespace-nowrap text-ellipsis font-normal">
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
    const wrappedLines = wrapThaiText(feedbackText || '', 80);
    const totalLines = 6;
    const lines = [];
    for (let i = 0; i < totalLines; i++) {
      lines.push(wrappedLines[i] || '');
    }

    return (
      <div className="mt-[36px]">
        <div className="font-bold text-black text-[14.5px] mb-2.5">
          ข้อเสนอแนะเพื่อพัฒนาการปฏิบัติงาน
        </div>
        <div className="w-full">
          {lines.map((text, idx) => (
            <div
              key={idx}
              className="border-b border-black h-[24px] text-[12.5px] text-black px-1 flex items-end pb-0.5 leading-none font-normal"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="doc-page text-left text-black font-sarabun text-[14px] leading-normal"
      style={{
        paddingTop: '34mm',
        paddingBottom: '16mm',
        paddingLeft: '25mm',
        paddingRight: '15mm',
        boxSizing: 'border-box',
        height: '297mm',
      }}
    >
      {/* Day 5 (ศุกร์) with thick borders & 35px row height */}
      {renderDayBox(day5, true)}

      {/* Day 6 (เสาร์) with thick borders & 35px row height */}
      {renderDayBox(day6, false)}

      {/* Student Signature Block (Right-aligned, matching template image exactly) */}
      <div className="flex justify-end mt-[30px] pr-1">
        <div className="w-[330px] text-center text-black">
          <div className="font-bold text-black mb-1.5 text-center text-[14px]">
            ผู้ปฏิบัติงาน
          </div>
          <div className="flex items-baseline justify-center mb-1 text-black font-normal text-[13.5px]">
            <span>ลงชื่อ</span>
            <span className="inline-block border-b border-black w-44 mx-2"></span>
            <span>นิสิต</span>
          </div>
          <div className="text-black text-[13.5px]">
            (&nbsp;<span className="inline-block w-40 text-center font-normal">{studentName}</span>&nbsp;)
          </div>
        </div>
      </div>

      {/* Feedback Section with exactly 6 solid horizontal lines matching template image */}
      {renderFeedbackSection(feedback)}

      {/* Supervisor Signature Block (Right-aligned, with generous gap matching template image exactly) */}
      <div className="flex justify-end mt-[56px] pr-1">
        <div className="w-[340px] text-center text-black">
          <div className="font-bold text-black mb-1.5 text-center text-[14px]">
            รับทราบ
          </div>
          <div className="flex items-baseline justify-center mb-1 text-black font-normal text-[13.5px]">
            <span>ลงชื่อ</span>
            <span className="inline-block border-b border-black w-36 mx-2"></span>
            <span className="whitespace-nowrap">ผู้บังคับบัญชา/ พี่เลี้ยง</span>
          </div>
          <div className="text-black text-[13.5px]">
            (&nbsp;<span className="inline-block w-40 text-center font-normal">{supervisorName}</span>&nbsp;)
          </div>
        </div>
      </div>
    </div>
  );
}
