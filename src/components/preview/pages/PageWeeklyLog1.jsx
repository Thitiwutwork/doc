import React from 'react';

export default function PageWeeklyLog1({ weekData, generalData }) {
  const { weekNumber, startDate, endDate, days = [] } = weekData || {};
  const day1 = days[0] || {};
  const day2 = days[1] || {};
  const day3 = days[2] || {};
  const day4 = days[3] || {};

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

        {/* Week Info Table */}
        <table className="table-doc text-xs mb-3">
          <tbody>
            <tr>
              <td className="w-1/4 border border-slate-900 px-3 py-1.5 font-bold">
                สัปดาห์ที่: <span className="font-semibold text-sm ml-1 text-slate-900">{weekNumber}</span>
              </td>
              <td className="w-3/8 border border-slate-900 px-3 py-1.5 font-medium">
                ตั้งแต่วันที่: <span className="font-normal ml-1">{startDate}</span>
              </td>
              <td className="w-3/8 border border-slate-900 px-3 py-1.5 font-medium">
                ถึงวันที่: <span className="font-normal ml-1">{endDate}</span>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Days 1 - 4 Table */}
        <table className="table-doc text-xs">
          <tbody>
            {renderDayRow(day1)}
            {renderDayRow(day2)}
            {renderDayRow(day3)}
            {renderDayRow(day4)}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-500 italic mb-2">
        แบบฟอร์ม สกบ. 04/1
      </div>
    </div>
  );
}
