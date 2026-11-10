import React from 'react';

export default function PageJobDesc({ data }) {
  const { general = {}, jobDesc = {} } = data;
  const { mentor = {}, supervisor = {} } = jobDesc;

  // Helper to split/wrap text across dotted lines
  const wrapText = (text, maxChars = 75) => {
    if (!text) return [];
    const rawLines = text.split('\n').filter(Boolean);
    const wrapped = [];
    rawLines.forEach((l) => {
      let rem = l;
      while (rem.length > maxChars) {
        let sp = rem.lastIndexOf(' ', maxChars);
        if (sp === -1 || sp < 45) sp = maxChars;
        wrapped.push(rem.substring(0, sp));
        rem = rem.substring(sp).trim();
      }
      if (rem) wrapped.push(rem);
    });
    return wrapped;
  };

  // Address: 2 dotted lines under header (matching template Page 3)
  const wrappedAddress = wrapText(general.companyAddress || '', 75);
  const addressLines = [
    wrappedAddress[0] || '',
    wrappedAddress[1] || '',
  ];

  // Responsibilities: 9 dotted lines under header (matching template Page 3)
  const wrappedResp = wrapText(jobDesc.responsibilities || '', 75);
  const totalRespLines = 9;
  const respLines = [];
  for (let i = 0; i < totalRespLines; i++) {
    respLines.push(wrappedResp[i] || '');
  }

  return (
    <div className="doc-page flex flex-col justify-between text-left text-black font-sarabun text-[14px] leading-normal">
      <div>
        {/* Title */}
        <h2 className="text-center font-bold text-[17px] mb-3 text-black">
          ข้อมูลตำแหน่งงาน (Job Description) สำหรับนิสิตโครงการสหกิจศึกษา
        </h2>

        {/* Box 1: ข้อมูลนิสิต (Table 1) */}
        <table className="w-full table-fixed border-collapse border border-black mb-3 text-[14px]">
          <tbody>
            <tr className="border-b border-black">
              <td className="w-[62%] border-r border-black px-3 py-1 font-bold">
                ชื่อ-นามสกุล: <span className="font-normal ml-1">{general.studentName}</span>
              </td>
              <td className="w-[38%] px-3 py-1 font-bold">
                รหัสนิสิต: <span className="font-normal ml-1">{general.studentId}</span>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td colSpan="2" className="px-3 py-1 font-bold">
                สาขา: <span className="font-normal ml-1">{general.major}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="px-3 py-1 font-bold">
                {general.faculty || 'คณะวิทยาศาสตร์และศิลปศาสตร์'} {general.university || 'มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี'}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Box 2: ข้อมูลสถานประกอบการและตำแหน่งงาน (Table 2) */}
        <table className="w-full table-fixed border-collapse border border-black mb-3 text-[14px]">
          <tbody>
            <tr className="border-b border-black">
              <td className="px-3 py-1 font-bold">
                ชื่อสถานประกอบการ: <span className="font-normal ml-1">{general.companyName}</span>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td className="px-3 pt-1.5 pb-1 font-bold">
                <div className="font-bold mb-0.5">สถานที่ตั้ง:</div>
                <div className="w-full">
                  {addressLines.map((line, idx) => (
                    <div
                      key={idx}
                      className="border-b border-dotted border-black h-[24px] text-[13.5px] text-black px-1 flex items-end pb-0.5 leading-none font-normal"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td className="px-3 py-1 font-bold">
                ตำแหน่งงาน: <span className="font-normal ml-1">{jobDesc.position}</span>
              </td>
            </tr>
            <tr>
              <td className="px-3 pt-1.5 pb-1 font-bold">
                <div className="font-bold mb-0.5">ความรับผิดชอบ:</div>
                <div className="w-full">
                  {respLines.map((line, idx) => (
                    <div
                      key={idx}
                      className="border-b border-dotted border-black h-[24px] text-[13px] text-black px-1 flex items-end pb-0.5 leading-none font-normal overflow-hidden whitespace-nowrap text-ellipsis"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Box 3: ข้อมูลพี่เลี้ยงและผู้บังคับบัญชา (Table 3) */}
        <table className="w-full table-fixed border-collapse border border-black mb-4 text-[14px]">
          <tbody>
            {/* Mentor Section */}
            <tr className="border-b border-dotted border-black">
              <td colSpan="2" className="px-3 py-1 font-bold">
                ชื่อ-นามสกุล (พี่เลี้ยง): <span className="font-normal ml-1">{mentor.name}</span>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td colSpan="2" className="px-3 py-1 font-bold">
                ตำแหน่งงาน: <span className="font-normal ml-1">{mentor.position}</span>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td className="w-[62%] border-r border-black px-3 py-1 font-bold">
                Email: <span className="font-normal ml-1">{mentor.email}</span>
              </td>
              <td className="w-[38%] px-3 py-1 font-bold">
                โทรศัพท์: <span className="font-normal ml-1">{mentor.phone}</span>
              </td>
            </tr>

            {/* Supervisor Section */}
            <tr className="border-b border-dotted border-black">
              <td colSpan="2" className="px-3 py-1 font-bold">
                ชื่อ-นามสกุล (ผู้บังคับบัญชา): <span className="font-normal ml-1">{supervisor.name}</span>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td colSpan="2" className="px-3 py-1 font-bold">
                ตำแหน่งงาน: <span className="font-normal ml-1">{supervisor.position}</span>
              </td>
            </tr>
            <tr>
              <td className="w-[62%] border-r border-black px-3 py-1 font-bold">
                Email: <span className="font-normal ml-1">{supervisor.email}</span>
              </td>
              <td className="w-[38%] px-3 py-1 font-bold">
                โทรศัพท์: <span className="font-normal ml-1">{supervisor.phone}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Signature Section & Footer Code (Anchored at the bottom) */}
      <div className="mt-4 mb-1">
        <div className="grid grid-cols-2 gap-8 text-center text-[14px]">
          <div>
            <div className="flex items-baseline justify-center mb-1.5 text-black">
              <span>ลงชื่อ</span>
              <span className="inline-block border-b border-black w-44 mx-2"></span>
              <span>พี่เลี้ยง</span>
            </div>
            <div className="text-black">
              (&nbsp;<span className="inline-block w-40 text-center font-normal">{mentor.name || ''}</span>&nbsp;)
            </div>
          </div>
          <div>
            <div className="flex items-baseline justify-center mb-1.5 text-black">
              <span>ลงชื่อ</span>
              <span className="inline-block border-b border-black w-44 mx-2"></span>
              <span>ผู้บังคับบัญชา</span>
            </div>
            <div className="text-black">
              (&nbsp;<span className="inline-block w-40 text-center font-normal">{supervisor.name || ''}</span>&nbsp;)
            </div>
          </div>
        </div>

        {/* Footer Document Code */}
        <div className="text-[12px] text-black italic font-serif mt-4 text-left">
          แบบฟอร์ม สกบ. 01/1
        </div>
      </div>
    </div>
  );
}
