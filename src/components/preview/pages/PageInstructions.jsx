import React from 'react';

export default function PageInstructions({ data }) {
  const { advisor = {} } = data;

  return (
    <div className="doc-page flex flex-col justify-start text-left pt-12">
      {/* Title */}
      <h2 className="text-xl font-bold text-slate-900 mb-8">
        คำแนะนำในการเขียนบันทึกการปฏิบัติงาน
      </h2>

      {/* Numbered List */}
      <div className="space-y-4 text-base leading-relaxed text-slate-800 mb-12">
        <div className="flex">
          <span className="w-8 font-medium">1.</span>
          <p className="flex-1">
            กรอกข้อมูล ชื่อสถานประกอบการ สถานที่ตั้งของสถานประกอบการ ข้อมูลและรายละเอียดเกี่ยวกับนิสิต หน้าที่ความรับผิดชอบ ชื่อ-นามสกุลและตำแหน่งงานของพี่เลี้ยงและผู้บังคับบัญชา ให้ครบถ้วน
          </p>
        </div>

        <div className="flex">
          <span className="w-8 font-medium">2.</span>
          <p className="flex-1">
            นิสิตเขียนบันทึกการปฏิบัติงานทุกวัน ตลอดระยะเวลาการปฏิบัติงานโครงการสหกิจศึกษา
          </p>
        </div>

        <div className="flex">
          <span className="w-8 font-medium">3.</span>
          <p className="flex-1">
            ทุก 1 สัปดาห์ ให้นิสิตนำบันทึกการปฏิบัติงานเสนอต่อพี่เลี้ยงและผู้บังคับบัญชา เพื่อลงนามรับทราบการปฏิบัติงานพร้อมเขียนข้อเสนอแนะการปฏิบัติงานให้แก่นิสิต
          </p>
        </div>

        <div className="flex">
          <span className="w-8 font-medium">4.</span>
          <p className="flex-1">
            นิสิตนำบันทึกการปฏิบัติงานให้อาจารย์ที่ปรึกษาตรวจสอบทุกครั้งที่มีการนิเทศงานโครงการสหกิจศึกษา
          </p>
        </div>

        <div className="flex">
          <span className="w-8 font-medium">5.</span>
          <p className="flex-1">
            นิสิตส่งบันทึกการปฏิบัติงานให้กับอาจารย์ที่ปรึกษาเมื่อสิ้นสุดการปฏิบัติงานโครงการสหกิจศึกษา
          </p>
        </div>
      </div>

      {/* Advisor Section */}
      <div className="mt-8 pt-4">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          การติดต่ออาจารย์ที่ปรึกษาโครงการสหกิจศึกษา
        </h3>
        <div className="space-y-2 text-base text-slate-800 ml-4">
          <p className="font-medium">
            1. {advisor.name || 'อาจารย์ ดร.สิริสุดา บัวทองเกื้อ'}
          </p>
          <p className="ml-5">
            Email: <span className="font-medium">{advisor.email || 'sirisuda@buu.ac.th'}</span>
          </p>
          <p className="ml-5">
            โทรศัพท์: <span className="font-medium">{advisor.phone || '099-182-0303'}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
