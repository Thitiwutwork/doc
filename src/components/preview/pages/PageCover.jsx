import React from 'react';
import BuuLogo from '../../BuuLogo';

export default function PageCover({ data }) {
  const { general = {} } = data;

  return (
    <div className="doc-page flex flex-col justify-between items-center text-center text-black">
      {/* Top Section */}
      <div className="w-full flex flex-col items-center pt-8 text-black">
        <BuuLogo className="w-28 h-28 mb-8" />
        
        <h1 className="text-2xl font-bold tracking-wide text-black mb-2">
          บันทึกการปฏิบัติงานโครงการสหกิจศึกษา {general.academicYear || '2569'}
        </h1>
        <h2 className="text-xl font-bold text-black mb-2">
          {general.faculty || 'คณะวิทยาศาสตร์และศิลปศาสตร์'}
        </h2>
        <h2 className="text-xl font-bold text-black mb-6">
          {general.university || 'มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี'}
        </h2>

        <div className="flex items-center justify-center text-lg mt-2 w-full max-w-xl text-black">
          <span className="font-bold mr-2 whitespace-nowrap text-black">ระหว่างวันที่</span>
          <span className="flex-1 text-center font-semibold border-b-2 border-black min-h-[1.5em] px-2 text-black">
            {general.trainingPeriod || '______________________'}
          </span>
        </div>
      </div>

      {/* Middle/Author Section */}
      <div className="w-full max-w-xl pb-16 text-left text-black">
        <div className="text-center font-bold text-xl mb-8 text-black">โดย</div>

        {/* Name and ID */}
        <div className="grid grid-cols-12 gap-2 items-baseline mb-4 text-base text-black">
          <div className="col-span-3 font-bold whitespace-nowrap text-black">ชื่อ-นามสกุล:</div>
          <div className="col-span-5 border-b border-black font-semibold px-2 text-black min-h-[1.5em]">
            {general.studentName || ''}
          </div>
          <div className="col-span-2 font-bold text-right whitespace-nowrap text-black">รหัสนิสิต:</div>
          <div className="col-span-2 border-b border-black font-semibold px-2 text-black text-center min-h-[1.5em]">
            {general.studentId || ''}
          </div>
        </div>

        {/* Curriculum */}
        <div className="grid grid-cols-12 gap-2 items-baseline mb-6 text-base text-black">
          <div className="col-span-3 font-bold whitespace-nowrap text-black">หลักสูตร:</div>
          <div className="col-span-9 border-b border-black font-semibold px-2 text-black min-h-[1.5em]">
            {general.curriculum || ''}
          </div>
        </div>

        {/* Company Name */}
        <div className="flex flex-col mb-4 text-base text-black">
          <div className="font-bold mb-1 text-black">ชื่อสถานประกอบการ</div>
          <div className="w-full border-b border-black font-semibold px-2 text-black min-h-[1.6em]">
            {general.companyName || ''}
          </div>
        </div>

        {/* Company Address */}
        <div className="flex flex-col text-base text-black">
          <div className="font-bold mb-1 text-black">สถานที่ตั้ง</div>
          <div className="w-full border-b border-black font-semibold px-2 text-black min-h-[1.6em] mb-3">
            {general.companyAddress ? general.companyAddress.slice(0, 60) : ''}
          </div>
          <div className="w-full border-b border-black font-semibold px-2 text-black min-h-[1.6em] mb-3">
            {general.companyAddress && general.companyAddress.length > 60 ? general.companyAddress.slice(60, 120) : ''}
          </div>
          <div className="w-full border-b border-black font-semibold px-2 text-black min-h-[1.6em]">
            {general.companyAddress && general.companyAddress.length > 120 ? general.companyAddress.slice(120, 180) : ''}
          </div>
        </div>
      </div>
    </div>
  );
}
