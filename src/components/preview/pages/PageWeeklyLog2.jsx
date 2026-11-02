import React from 'react';

export default function PageWeeklyLog2({ weekData, generalData, jobDescData }) {
  const { days = [], feedback = '', studentSignature = '', supervisorSignature = '' } = weekData || {};
  const day5 = days[4] || {};
  const day6 = days[5] || {};
  const studentName = studentSignature || generalData?.studentName || '';
  const supervisorName = supervisorSignature || jobDescData?.mentor?.name || jobDescData?.supervisor?.name || '';

  const renderDayRow = (day) => {
    return (
      <tr className="min-h-[140px]">
        <td className="w-28 border border-slate-900 px-2 py-2 align-top font-medium text-center">
          <div className="text-slate-900 font-bold mb-1">วันที่</div>
          <div className="text-slate-700 text-[11px] font-normal leading-tight">
            {day?.date || ''}
          </div>
          {day?.dayLabel && (
            <div className="text-slate-400 text-[10px] mt-0.5">({day.dayLabel})</div>
          )}
        </td>
        <td className="border border-slate-900 px-3 py-2 align-top font-normal text-xs leading-relaxed">
          <div className="font-bold text-slate-800 text-[11px] mb-1">รายละเอียดการปฏิบัติงาน</div>
          <div className="whitespace-pre-line min-h-[105px] text-slate-900 text-xs">
            {day?.content || ''}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="doc-page flex flex-col justify-between text-left text-xs text-slate-900">
      <div>
        {/* Top Header Tag */}
        <div className="text-xs text-slate-600 mb-2 italic">
          แบบฟอร์ม สกบ. 04/1
        </div>

        {/* Days 5 - 6 Table */}
        <table className="table-doc text-xs mb-6">
          <tbody>
            {renderDayRow(day5)}
            {renderDayRow(day6)}
          </tbody>
        </table>

        {/* Student Signature */}
        <div className="flex justify-end mb-8 pr-6">
          <div className="text-center text-xs">
            <div className="font-medium text-slate-700 mb-2">ผู้ปฏิบัติงาน</div>
            <div className="mb-2">
              ลงชื่อ <span className="inline-block border-b border-slate-700 w-44"></span> นิสิต
            </div>
            <div>
              ( <span className="inline-block w-40 text-center">{studentName}</span> )
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mb-8">
          <div className="font-bold text-slate-900 text-sm mb-2">
            ข้อเสนอแนะเพื่อพัฒนาการปฏิบัติงาน
          </div>
          
          <div className="min-h-[120px] text-slate-800 text-xs leading-relaxed pl-3 py-2 border-b border-dashed border-slate-400">
            {feedback || ''}
          </div>

          {/* Dotted lines filling remaining height if empty */}
          {!feedback && (
            <div className="space-y-4 pt-2">
              <div className="border-b border-dashed border-slate-400 w-full h-4"></div>
              <div className="border-b border-dashed border-slate-400 w-full h-4"></div>
              <div className="border-b border-dashed border-slate-400 w-full h-4"></div>
            </div>
          )}
        </div>

        {/* Supervisor / Mentor Acknowledgement */}
        <div className="flex justify-end pr-6">
          <div className="text-center text-xs">
            <div className="font-medium text-slate-700 mb-2">รับทราบ</div>
            <div className="mb-2">
              ลงชื่อ <span className="inline-block border-b border-slate-700 w-44"></span> ผู้บังคับบัญชา/ พี่เลี้ยง
            </div>
            <div>
              ( <span className="inline-block w-40 text-center">{supervisorName}</span> )
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-500 italic mb-2">
        แบบฟอร์ม สกบ. 04/1
      </div>
    </div>
  );
}
