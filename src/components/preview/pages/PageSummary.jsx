import React from 'react';
import BuuLogo from '../../BuuLogo';

export default function PageSummary({ data }) {
  const { general = {}, jobDesc = {}, summaryReport = {} } = data || {};
  const workTypes = summaryReport.workTypes || [];
  const learningOutcomes = summaryReport.learningOutcomes || [];

  // Section 1: Exactly 10 lines matching template
  const sec1Items = workTypes.map((item, idx) => `${idx + 1}. ${item}`);
  const sec1Lines = [];
  for (let i = 0; i < 10; i++) {
    sec1Lines.push(sec1Items[i] || '');
  }

  // Section 2: Exactly 5 lines matching template
  const sec2Items = learningOutcomes.map((item, idx) => `${idx + 1}. ${item}`);
  const sec2Lines = [];
  for (let i = 0; i < 5; i++) {
    sec2Lines.push(sec2Items[i] || '');
  }

  const startDate = summaryReport.startDate || general.trainingPeriod?.split('ถึง')[0]?.trim() || '';
  const endDate = summaryReport.endDate || general.trainingPeriod?.split('ถึง')[1]?.trim() || '';

  return (
    <div className="doc-page flex flex-col justify-between text-left text-black font-sarabun text-[13.5px] leading-normal">
      <div>
        {/* Top Right Box matching template exactly */}
        <div className="flex justify-end mb-2">
          <div className="border-2 border-black w-[130px] h-[34px] flex items-center justify-center text-[13.5px] font-bold text-black">
            สำหรับนิสิต
          </div>
        </div>

        {/* Center Header: Logo & Title */}
        <div className="flex flex-col items-center mb-6">
          <BuuLogo className="w-14 h-14 mb-2.5" />
          <h2 className="text-[15.5px] font-bold text-black text-center leading-normal">
            แบบรายงานผลการดำเนินงานโครงการสหกิจศึกษา
          </h2>
          <h3 className="text-[14px] font-bold text-black text-center leading-normal">
            คณะวิทยาศาสตร์และศิลปศาสตร์ มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี
          </h3>
        </div>

        {/* Student and Job Info matching reference image */}
        <div className="space-y-2 mb-6 text-[13.5px] leading-normal text-black">
          <div className="flex items-baseline">
            <span className="font-bold mr-2 whitespace-nowrap">
              ชื่อนิสิต – นามสกุล (นิสิต)
            </span>
            <span className="flex-1 border-b-[1.5px] border-dotted border-black px-2 font-normal">
              {general.studentName}
            </span>
            <span className="font-bold mx-2 whitespace-nowrap">รหัสประจำตัว</span>
            <span className="w-48 border-b-[1.5px] border-dotted border-black px-2 font-normal text-center">
              {general.studentId}
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="font-bold whitespace-nowrap">
              คณะวิทยาศาสตร์และศิลปศาสตร์ สาขา{general.major || 'เทคโนโลยีสารสนเทศ'}
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="font-bold mr-2 whitespace-nowrap">
              ชื่อสถานประกอบการ
            </span>
            <span className="flex-1 border-b-[1.5px] border-dotted border-black px-2 font-normal">
              {general.companyName}
            </span>
          </div>

          <div className="flex items-baseline">
            <span className="font-bold mr-2 whitespace-nowrap">ตำแหน่งงาน</span>
            <span className="flex-1 border-b-[1.5px] border-dotted border-black px-2 font-normal">
              {jobDesc.position}
            </span>
          </div>
        </div>

        {/* Section 1: ประเภทของงานที่ปฏิบัติสหกิจศึกษา (Exactly 10 dotted lines) */}
        <div className="mb-6">
          <div className="font-bold text-black text-[14px] mb-2">
            ประเภทของงานที่ปฏิบัติสหกิจศึกษา
          </div>
          <div className="w-full">
            {sec1Lines.map((lineText, idx) => (
              <div
                key={idx}
                className="w-full border-b-[1.5px] border-dotted border-black h-[25px] flex items-end pb-0.5 text-[12.5px] text-black font-normal"
              >
                <span className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
                  {lineText}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: สิ่งที่ได้รับจากการปฏิบัติงานสหกิจศึกษา (Exactly 5 dotted lines) */}
        <div className="mb-6">
          <div className="font-bold text-black text-[14px] mb-2">
            สิ่งที่ได้รับจากการปฏิบัติงานสหกิจศึกษา
          </div>
          <div className="w-full">
            {sec2Lines.map((lineText, idx) => (
              <div
                key={idx}
                className="w-full border-b-[1.5px] border-dotted border-black h-[25px] flex items-end pb-0.5 text-[12.5px] text-black font-normal"
              >
                <span className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
                  {lineText}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Period of Internship */}
        <div className="flex items-baseline text-[13.5px] mt-6 mb-2">
          <span className="font-bold mr-2 whitespace-nowrap">
            ระยะเวลาปฏิบัติสหกิจศึกษา ตั้งแต่วันที่
          </span>
          <span className="flex-1 border-b-[1.5px] border-dotted border-black px-2 font-normal text-center">
            {startDate}
          </span>
          <span className="font-bold mx-3 whitespace-nowrap">ถึงวันที่</span>
          <span className="flex-1 border-b-[1.5px] border-dotted border-black px-2 font-normal text-center">
            {endDate}
          </span>
        </div>
      </div>

      {/* Footer matching template image at bottom left */}
      <div className="text-[12.5px] text-black italic font-serif mt-auto pt-2 text-left">
        แบบฟอร์ม สกบ. 07
      </div>
    </div>
  );
}
