import React from 'react';
import BuuLogo from '../../BuuLogo';

export default function PageWorkPlan1({ data }) {
  const { general = {}, workPlan = {} } = data;
  const tasks = workPlan.tasks || [];

  // Match template: exactly 16 table rows
  const totalRows = Math.max(tasks.length, 16);
  const rows = Array.from({ length: totalRows }, (_, i) => tasks[i] || null);

  return (
    <div className="doc-page flex flex-col justify-between text-left text-black font-sarabun text-[14px] leading-normal">
      <div>
        {/* Header with Logo */}
        <div className="flex items-center justify-center relative mb-2">
          <BuuLogo className="w-14 h-14 absolute left-0 top-0" />
          <h2 className="text-center font-bold text-[18px] text-black py-1">
            แผนปฏิบัติงานสหกิจศึกษา
          </h2>
        </div>

        {/* Student & Org Info matching Page 5 of template */}
        <div className="space-y-1 mb-2.5 text-[14px] text-black">
          <div className="flex items-baseline">
            <span className="font-bold mr-2 whitespace-nowrap">ชื่อ – นามสกุล</span>
            <span className="flex-1 border-b border-black px-2 font-normal">
              {general.studentName}
            </span>
            <span className="font-bold mx-2 whitespace-nowrap">รหัสประจำตัวนิสิต</span>
            <span className="w-44 border-b border-black px-2 font-normal text-center">
              {general.studentId}
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="font-bold mr-2 whitespace-nowrap">คณะวิทยาศาสตร์และศิลปศาสตร์ สาขา</span>
            <span className="flex-1 border-b border-black px-2 font-normal">
              {general.major || 'เทคโนโลยีสารสนเทศและวิทยาการข้อมูล'}
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="font-bold mr-2 whitespace-nowrap">สถานประกอบการ</span>
            <span className="flex-1 border-b border-black px-2 font-normal">
              {general.companyName}
            </span>
          </div>
        </div>

        <p className="font-bold text-[13.5px] mb-2 text-black">
          รายละเอียดเกี่ยวกับแผนปฏิบัติงานสหกิจศึกษา ระยะเวลา 1 ภาคเรียน มีดังนี้
        </p>

        {/* Gantt Table Months 1 - 4 (Weeks 1 - 16) with strict fixed layout */}
        <table className="w-full table-fixed border-collapse border border-black text-[11px]">
          <thead>
            <tr>
              <th rowSpan="2" className="w-[38px] text-center font-bold border border-black p-1 align-middle text-[12px]">
                ลำดับ
              </th>
              <th rowSpan="2" className="text-center font-bold border border-black px-2 py-1 align-middle text-[12px]">
                งาน / กิจกรรม ที่ได้รับมอบหมาย
              </th>
              <th colSpan="4" className="w-[84px] text-center font-bold border border-black py-1 text-[11px]">
                เดือนที่ 1
              </th>
              <th colSpan="4" className="w-[84px] text-center font-bold border border-black py-1 text-[11px]">
                เดือนที่ 2
              </th>
              <th colSpan="4" className="w-[84px] text-center font-bold border border-black py-1 text-[11px]">
                เดือนที่ 3
              </th>
              <th colSpan="4" className="w-[84px] text-center font-bold border border-black py-1 text-[11px]">
                เดือนที่ 4
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
                {/* 16 week check columns */}
                {Array.from({ length: 16 }).map((_, wIdx) => {
                  const isChecked = row?.weeks?.[wIdx];
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
      </div>

      <div className="flex justify-between items-center text-[12px] text-black italic font-serif mb-1">
        <span>แบบฟอร์ม สกบ. 02</span>
        <span>(ต่อหน้าถัดไป)</span>
      </div>
    </div>
  );
}
