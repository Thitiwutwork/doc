import React from 'react';
import BuuLogo from '../../BuuLogo';

export default function PageSummary({ data }) {
  const { general = {}, jobDesc = {}, summaryReport = {} } = data;
  const workTypes = summaryReport.workTypes || [];
  const learningOutcomes = summaryReport.learningOutcomes || [];

  return (
    <div className="doc-page flex flex-col justify-between text-left text-xs text-slate-900">
      <div>
        {/* Top Right Tag */}
        <div className="flex justify-end mb-2">
          <div className="border border-slate-900 px-4 py-1 text-xs font-medium">
            สำหรับนิสิต
          </div>
        </div>

        {/* Center Header */}
        <div className="flex flex-col items-center mb-6">
          <BuuLogo className="w-16 h-16 mb-2" />
          <h2 className="text-base font-bold text-slate-900">
            แบบรายงานผลการดำเนินงานโครงการสหกิจศึกษา
          </h2>
          <h3 className="text-sm font-medium text-slate-800">
            คณะวิทยาศาสตร์และศิลปศาสตร์ มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี
          </h3>
        </div>

        {/* Student and Job Info */}
        <div className="space-y-2 mb-4 text-xs leading-normal">
          <div className="flex items-baseline">
            <span className="font-medium mr-2 whitespace-nowrap">ชื่อนิสิต – นามสกุล (นิสิต)</span>
            <span className="flex-1 border-b border-dotted border-slate-700 px-2 font-normal">
              {general.studentName}
            </span>
            <span className="font-medium mx-2 whitespace-nowrap">รหัสประจำตัว</span>
            <span className="w-44 border-b border-dotted border-slate-700 px-2 font-normal text-center">
              {general.studentId}
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="font-medium mr-2 whitespace-nowrap">คณะวิทยาศาสตร์และศิลปศาสตร์ สาขา</span>
            <span className="flex-1 border-b border-dotted border-slate-700 px-2 font-normal">
              {general.major || 'เทคโนโลยีสารสนเทศ'}
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="font-medium mr-2 whitespace-nowrap">ชื่อสถานประกอบการ</span>
            <span className="flex-1 border-b border-dotted border-slate-700 px-2 font-normal">
              {general.companyName}
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="font-medium mr-2 whitespace-nowrap">ตำแหน่งงาน</span>
            <span className="flex-1 border-b border-dotted border-slate-700 px-2 font-normal">
              {jobDesc.position}
            </span>
          </div>
        </div>

        {/* Section 1: ประเภทของงานที่ปฏิบัติสหกิจศึกษา */}
        <div className="mb-4">
          <div className="font-bold text-slate-900 mb-2">
            ประเภทของงานที่ปฏิบัติสหกิจศึกษา
          </div>
          <div className="space-y-2 pl-4 text-xs">
            {workTypes.map((item, idx) => (
              <div key={idx} className="flex items-baseline">
                <span className="mr-2 font-medium">{idx + 1}.</span>
                <span className="flex-1 border-b border-dotted border-slate-500 pb-0.5">
                  {item}
                </span>
              </div>
            ))}
            {/* Blank dotted lines if fewer items */}
            {Array.from({ length: Math.max(0, 8 - workTypes.length) }).map((_, i) => (
              <div key={i} className="border-b border-dotted border-slate-400 h-6"></div>
            ))}
          </div>
        </div>

        {/* Section 2: สิ่งที่ได้รับจากการปฏิบัติงานสหกิจศึกษา */}
        <div className="mb-6">
          <div className="font-bold text-slate-900 mb-2">
            สิ่งที่ได้รับจากการปฏิบัติงานสหกิจศึกษา
          </div>
          <div className="space-y-2 pl-4 text-xs">
            {learningOutcomes.map((item, idx) => (
              <div key={idx} className="flex items-baseline">
                <span className="mr-2 font-medium">{idx + 1}.</span>
                <span className="flex-1 border-b border-dotted border-slate-500 pb-0.5">
                  {item}
                </span>
              </div>
            ))}
            {/* Blank dotted lines if fewer items */}
            {Array.from({ length: Math.max(0, 5 - learningOutcomes.length) }).map((_, i) => (
              <div key={i} className="border-b border-dotted border-slate-400 h-6"></div>
            ))}
          </div>
        </div>

        {/* Period */}
        <div className="flex items-baseline text-xs mb-2">
          <span className="font-medium mr-2 whitespace-nowrap">ระยะเวลาปฏิบัติสหกิจศึกษา ตั้งแต่วันที่</span>
          <span className="flex-1 border-b border-dotted border-slate-700 px-2 font-normal text-center">
            {summaryReport.startDate || general.trainingPeriod?.split('ถึง')[0] || ''}
          </span>
          <span className="font-medium mx-2 whitespace-nowrap">ถึงวันที่</span>
          <span className="flex-1 border-b border-dotted border-slate-700 px-2 font-normal text-center">
            {summaryReport.endDate || general.trainingPeriod?.split('ถึง')[1] || ''}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-500 italic mb-2">
        แบบฟอร์ม สกบ. 07
      </div>
    </div>
  );
}
