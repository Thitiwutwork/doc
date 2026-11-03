import React from 'react';
import BuuLogo from '../../BuuLogo';

export default function PageSummary({ data }) {
  const { general = {}, jobDesc = {}, summaryReport = {} } = data;
  const workTypes = summaryReport.workTypes || [];
  const learningOutcomes = summaryReport.learningOutcomes || [];

  return (
    <div className="doc-page flex flex-col justify-between text-left text-xs text-black">
      <div>
        {/* Top Right Tag matching template Page 46 */}
        <div className="flex justify-end mb-1">
          <div className="border border-black px-4 py-0.5 text-xs font-bold">
            สำหรับนิสิต
          </div>
        </div>

        {/* Center Header */}
        <div className="flex flex-col items-center mb-4">
          <BuuLogo className="w-12 h-12 mb-1" />
          <h2 className="text-base font-bold text-black text-center">
            แบบรายงานผลการดำเนินงานโครงการสหกิจศึกษา
          </h2>
          <h3 className="text-xs font-bold text-black text-center">
            คณะวิทยาศาสตร์และศิลปศาสตร์ มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี
          </h3>
        </div>

        {/* Student and Job Info */}
        <div className="space-y-1.5 mb-3.5 text-xs leading-normal">
          <div className="flex items-baseline">
            <span className="font-bold mr-2 whitespace-nowrap">ชื่อนิสิต – นามสกุล (นิสิต)</span>
            <span className="flex-1 border-b border-dotted border-black px-2 font-normal">
              {general.studentName}
            </span>
            <span className="font-bold mx-2 whitespace-nowrap">รหัสประจำตัว</span>
            <span className="w-40 border-b border-dotted border-black px-2 font-normal text-center">
              {general.studentId}
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="font-bold mr-2 whitespace-nowrap">คณะวิทยาศาสตร์และศิลปศาสตร์ สาขา</span>
            <span className="flex-1 border-b border-dotted border-black px-2 font-normal">
              {general.major || 'เทคโนโลยีสารสนเทศและวิทยาการข้อมูล'}
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="font-bold mr-2 whitespace-nowrap">ชื่อสถานประกอบการ</span>
            <span className="flex-1 border-b border-dotted border-black px-2 font-normal">
              {general.companyName}
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="font-bold mr-2 whitespace-nowrap">ตำแหน่งงาน</span>
            <span className="flex-1 border-b border-dotted border-black px-2 font-normal">
              {jobDesc.position}
            </span>
          </div>
        </div>

        {/* Section 1: ประเภทของงานที่ปฏิบัติสหกิจศึกษา */}
        <div className="mb-3.5">
          <div className="font-bold text-black text-xs mb-1">
            ประเภทของงานที่ปฏิบัติสหกิจศึกษา
          </div>
          <div className="space-y-1 pl-3 text-[11px]">
            {workTypes.map((item, idx) => (
              <div key={idx} className="flex items-baseline">
                <span className="mr-1.5 font-bold">{idx + 1}.</span>
                <span className="flex-1 border-b border-dotted border-black pb-0.5 leading-snug">
                  {item}
                </span>
              </div>
            ))}
            {/* Blank dotted lines if fewer items */}
            {Array.from({ length: Math.max(0, 7 - workTypes.length) }).map((_, i) => (
              <div key={i} className="border-b border-dotted border-black h-4.5"></div>
            ))}
          </div>
        </div>

        {/* Section 2: สิ่งที่ได้รับจากการปฏิบัติงานสหกิจศึกษา */}
        <div className="mb-3.5">
          <div className="font-bold text-black text-xs mb-1">
            สิ่งที่ได้รับจากการปฏิบัติงานสหกิจศึกษา
          </div>
          <div className="space-y-1 pl-3 text-[11px]">
            {learningOutcomes.map((item, idx) => (
              <div key={idx} className="flex items-baseline">
                <span className="mr-1.5 font-bold">{idx + 1}.</span>
                <span className="flex-1 border-b border-dotted border-black pb-0.5 leading-snug">
                  {item}
                </span>
              </div>
            ))}
            {/* Blank dotted lines if fewer items */}
            {Array.from({ length: Math.max(0, 7 - learningOutcomes.length) }).map((_, i) => (
              <div key={i} className="border-b border-dotted border-black h-4.5"></div>
            ))}
          </div>
        </div>

        {/* Period */}
        <div className="flex items-baseline text-xs mb-1">
          <span className="font-bold mr-2 whitespace-nowrap">ระยะเวลาปฏิบัติสหกิจศึกษา ตั้งแต่วันที่</span>
          <span className="flex-1 border-b border-dotted border-black px-2 font-normal text-center">
            {summaryReport.startDate || general.trainingPeriod?.split('ถึง')[0] || ''}
          </span>
          <span className="font-bold mx-2 whitespace-nowrap">ถึงวันที่</span>
          <span className="flex-1 border-b border-dotted border-black px-2 font-normal text-center">
            {summaryReport.endDate || general.trainingPeriod?.split('ถึง')[1] || ''}
          </span>
        </div>
      </div>

      {/* Footer matching template Page 46 */}
      <div className="text-xs text-slate-500 italic mb-1">
        แบบฟอร์ม สกบ. 07
      </div>
    </div>
  );
}
