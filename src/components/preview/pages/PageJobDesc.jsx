import React from 'react';

export default function PageJobDesc({ data }) {
  const { general = {}, jobDesc = {} } = data;
  const { mentor = {}, supervisor = {} } = jobDesc;

  return (
    <div className="doc-page flex flex-col justify-between text-left text-xs leading-tight text-black">
      <div>
        {/* Title */}
        <h2 className="text-center font-bold text-base mb-3 text-black">
          ข้อมูลตำแหน่งงาน (Job Description) สำหรับนิสิตโครงการสหกิจศึกษา
        </h2>

        {/* Main Form Table with table-fixed */}
        <table className="table-doc table-fixed w-full text-xs">
          <tbody>
            {/* Student Info */}
            <tr>
              <td className="w-[65%] border border-black px-2.5 py-1.5 font-bold">
                ชื่อ-นามสกุล: <span className="font-normal ml-1">{general.studentName}</span>
              </td>
              <td className="w-[35%] border border-black px-2.5 py-1.5 font-bold">
                รหัสนิสิต: <span className="font-normal ml-1">{general.studentId}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="border border-black px-2.5 py-1.5 font-bold">
                สาขา: <span className="font-normal ml-1">{general.major}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="border border-black px-2.5 py-1.5 font-bold">
                {general.faculty || 'คณะวิทยาศาสตร์และศิลปศาสตร์'} {general.university || 'มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี'}
              </td>
            </tr>

            {/* Company Info */}
            <tr>
              <td colSpan="2" className="border border-black px-2.5 py-1.5 font-bold">
                ชื่อสถานประกอบการ: <span className="font-normal ml-1">{general.companyName}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="border border-black px-2.5 py-1.5 font-bold min-h-[46px]">
                <div className="font-bold mb-1">สถานที่ตั้ง:</div>
                <div className="font-normal pl-3 text-xs leading-relaxed">
                  {general.companyAddress}
                </div>
              </td>
            </tr>

            {/* Job Position & Responsibilities */}
            <tr>
              <td colSpan="2" className="border border-black px-2.5 py-1.5 font-bold">
                ตำแหน่งงาน: <span className="font-normal ml-1">{jobDesc.position}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="border border-black px-2.5 py-2 font-bold">
                <div className="font-bold mb-1">ความรับผิดชอบ:</div>
                <div className="font-normal text-[11px] whitespace-pre-line leading-relaxed min-h-[140px] pl-2">
                  {jobDesc.responsibilities}
                </div>
              </td>
            </tr>

            {/* Mentor Info */}
            <tr>
              <td colSpan="2" className="border border-black px-2.5 py-1.5 font-bold">
                ชื่อ-นามสกุล (พี่เลี้ยง): <span className="font-normal ml-1">{mentor.name}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="border border-black px-2.5 py-1.5 font-bold">
                ตำแหน่งงาน: <span className="font-normal ml-1">{mentor.position}</span>
              </td>
            </tr>
            <tr>
              <td className="w-[65%] border border-black px-2.5 py-1.5 font-bold">
                Email: <span className="font-normal ml-1">{mentor.email}</span>
              </td>
              <td className="w-[35%] border border-black px-2.5 py-1.5 font-bold">
                โทรศัพท์: <span className="font-normal ml-1">{mentor.phone}</span>
              </td>
            </tr>

            {/* Supervisor Info */}
            <tr>
              <td colSpan="2" className="border border-black px-2.5 py-1.5 font-bold">
                ชื่อ-นามสกุล (ผู้บังคับบัญชา): <span className="font-normal ml-1">{supervisor.name}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="border border-black px-2.5 py-1.5 font-bold">
                ตำแหน่งงาน: <span className="font-normal ml-1">{supervisor.position}</span>
              </td>
            </tr>
            <tr>
              <td className="w-[65%] border border-black px-2.5 py-1.5 font-bold">
                Email: <span className="font-normal ml-1">{supervisor.email}</span>
              </td>
              <td className="w-[35%] border border-black px-2.5 py-1.5 font-bold">
                โทรศัพท์: <span className="font-normal ml-1">{supervisor.phone}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Signature Section */}
      <div className="mt-4 mb-1">
        <div className="grid grid-cols-2 gap-8 text-center text-xs">
          <div>
            <div className="mb-2">
              ลงชื่อ <span className="inline-block border-b border-black w-44"></span> พี่เลี้ยง
            </div>
            <div>
              ( <span className="inline-block w-40 text-center">{mentor.name || ''}</span> )
            </div>
          </div>
          <div>
            <div className="mb-2">
              ลงชื่อ <span className="inline-block border-b border-black w-44"></span> ผู้บังคับบัญชา
            </div>
            <div>
              ( <span className="inline-block w-40 text-center">{supervisor.name || ''}</span> )
            </div>
          </div>
        </div>

        {/* Footer Document Code */}
        <div className="text-xs text-slate-500 italic mt-3">
          แบบฟอร์ม สกบ. 01/1
        </div>
      </div>
    </div>
  );
}
