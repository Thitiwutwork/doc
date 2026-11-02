import React from 'react';
import BuuLogo from '../../BuuLogo';

export default function PageWorkPlan1({ data }) {
  const { general = {}, workPlan = {} } = data;
  const tasks = workPlan.tasks || [];

  // 16 slots = 4 months x 4 weeks
  const totalRows = Math.max(tasks.length, 12);
  const rows = Array.from({ length: totalRows }, (_, i) => tasks[i] || null);

  return (
    <div className="doc-page flex flex-col justify-between text-left text-xs text-slate-900">
      <div>
        {/* Header with Logo */}
        <div className="flex items-center justify-center relative mb-4">
          <BuuLogo className="w-16 h-16 absolute left-4 top-0" />
          <h2 className="text-center font-bold text-lg text-slate-900 py-2">
            แผนปฏิบัติงานสหกิจศึกษา
          </h2>
        </div>

        {/* Student & Org Info */}
        <div className="space-y-1 mb-3 text-xs">
          <div className="flex">
            <span className="font-medium mr-2">ชื่อ – นามสกุล</span>
            <span className="flex-1 border-b border-slate-700 px-2 font-normal">
              {general.studentName}
            </span>
            <span className="font-medium mx-2">รหัสประจำตัวนิสิต</span>
            <span className="w-48 border-b border-slate-700 px-2 font-normal text-center">
              {general.studentId}
            </span>
          </div>

          <div className="flex">
            <span className="font-medium mr-2">คณะวิทยาศาสตร์และศิลปศาสตร์ สาขา</span>
            <span className="flex-1 border-b border-slate-700 px-2 font-normal">
              {general.major || 'เทคโนโลยีสารสนเทศและวิทยาการข้อมูล'}
            </span>
          </div>

          <div className="flex">
            <span className="font-medium mr-2">สถานประกอบการ</span>
            <span className="flex-1 border-b border-slate-700 px-2 font-normal">
              {general.companyName}
            </span>
          </div>
        </div>

        <p className="font-medium text-xs mb-2">
          รายละเอียดเกี่ยวกับแผนปฏิบัติงานสหกิจศึกษา ระยะเวลา 1 ภาคเรียน มีดังนี้
        </p>

        {/* Gantt Table Months 1 - 4 (Weeks 1 - 16) */}
        <table className="table-doc text-[11px]">
          <thead>
            <tr>
              <th rowSpan="2" className="w-10 text-center font-medium border border-slate-900 py-1">
                ลำดับ
              </th>
              <th rowSpan="2" className="text-center font-medium border border-slate-900 py-1">
                งาน / กิจกรรม ที่ได้รับมอบหมาย
              </th>
              <th colSpan="4" className="text-center font-medium border border-slate-900 py-0.5">เดือนที่ 1</th>
              <th colSpan="4" className="text-center font-medium border border-slate-900 py-0.5">เดือนที่ 2</th>
              <th colSpan="4" className="text-center font-medium border border-slate-900 py-0.5">เดือนที่ 3</th>
              <th colSpan="4" className="text-center font-medium border border-slate-900 py-0.5">เดือนที่ 4</th>
            </tr>
            <tr className="text-[8.5px] leading-tight">
              {/* Month 1: 4 weeks */}
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 1</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 2</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 3</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 4</th>
              {/* Month 2: 4 weeks */}
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 1</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 2</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 3</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 4</th>
              {/* Month 3: 4 weeks */}
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 1</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 2</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 3</th>
              <th className="w-5 text-center font-normal border border-slate-900 px-0.5 py-1">สัปดาห์ที่ 4</th>
              {/* Month 4: 4 weeks */}
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
                {/* 16 week check columns */}
                {Array.from({ length: 16 }).map((_, wIdx) => {
                  const isChecked = row?.weeks?.[wIdx];
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
      </div>

      <div className="text-right text-[10px] text-slate-400 italic">
        (ต่อหน้าถัดไป)
      </div>
    </div>
  );
}
