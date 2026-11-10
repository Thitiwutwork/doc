import React from 'react';

export default function PageJobDesc({ data }) {
  const { general = {}, jobDesc = {} } = data;
  const { mentor = {}, supervisor = {} } = jobDesc;

  // Helper to wrap long text across dotted lines
  const wrapText = (text, maxChars = 85) => {
    if (!text) return [];
    const rawLines = text.split('\n').filter(Boolean);
    const wrapped = [];
    rawLines.forEach((l) => {
      let rem = l;
      while (rem.length > maxChars) {
        let sp = rem.lastIndexOf(' ', maxChars);
        if (sp === -1 || sp < 50) sp = maxChars;
        wrapped.push(rem.substring(0, sp));
        rem = rem.substring(sp).trim();
      }
      if (rem) wrapped.push(rem);
    });
    return wrapped;
  };

  // Prepare Address lines (2 dotted rows under header)
  const wrappedAddress = wrapText(general.companyAddress || '', 80);
  const addressLines = [
    wrappedAddress[0] || '',
    wrappedAddress[1] || '',
  ];

  // Prepare Responsibility lines (10 dotted rows exactly matching official template Page 3)
  const wrappedResp = wrapText(jobDesc.responsibilities || '', 85);
  const totalRespLines = 10;
  const respLines = [];
  for (let i = 0; i < totalRespLines; i++) {
    respLines.push(wrappedResp[i] || '');
  }

  return (
    <div className="doc-page flex flex-col justify-between text-left text-xs text-black">
      <div>
        {/* Title matching official template */}
        <h2 className="text-center font-bold text-base mb-3.5 text-black">
          ข้อมูลตำแหน่งงาน (Job Description) สำหรับนิสิตโครงการสหกิจศึกษา
        </h2>

        {/* Box 1: ข้อมูลนิสิต (Table 1) */}
        <table className="table-doc table-fixed w-full text-xs mb-3 border-collapse">
          <tbody>
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
          </tbody>
        </table>

        {/* Box 2: ข้อมูลสถานประกอบการและตำแหน่งงาน (Table 2) */}
        <table className="table-doc table-fixed w-full text-xs mb-3 border-collapse">
          <tbody>
            <tr>
              <td className="border border-black px-2.5 py-1.5 font-bold">
                ชื่อสถานประกอบการ: <span className="font-normal ml-1">{general.companyName}</span>
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2.5 py-1.5 font-bold">
                <div className="font-bold mb-0.5">สถานที่ตั้ง:</div>
                <div className="w-full">
                  {addressLines.map((line, idx) => (
                    <div
                      key={idx}
                      className="border-b border-dotted border-black h-[22px] text-xs text-black px-1 flex items-end pb-0.5 leading-none font-normal"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2.5 py-1.5 font-bold">
                ตำแหน่งงาน: <span className="font-normal ml-1">{jobDesc.position}</span>
              </td>
            </tr>
            <tr>
              <td className="border border-black px-2.5 py-1.5 font-bold">
                <div className="font-bold mb-0.5">ความรับผิดชอบ:</div>
                <div className="w-full">
                  {respLines.map((line, idx) => (
                    <div
                      key={idx}
                      className="border-b border-dotted border-black h-[22px] text-[11px] text-black px-1 flex items-end pb-0.5 leading-none font-normal overflow-hidden whitespace-nowrap text-ellipsis"
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
        <table className="table-doc table-fixed w-full text-xs mb-3 border-collapse">
          <tbody>
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

      {/* Signature Section & Footer Form Code matching PDF Page 3 exactly */}
      <div className="mt-3 mb-1">
        <div className="grid grid-cols-2 gap-6 text-center text-xs">
          <div>
            <div className="flex items-baseline justify-center mb-1 text-black">
              <span>ลงชื่อ</span>
              <span className="inline-block border-b border-dotted border-black w-40 mx-2"></span>
              <span>พี่เลี้ยง</span>
            </div>
            <div className="text-black">
              (&nbsp;<span className="inline-block w-40 text-center font-normal">{mentor.name || ''}</span>&nbsp;)
            </div>
          </div>
          <div>
            <div className="flex items-baseline justify-center mb-1 text-black">
              <span>ลงชื่อ</span>
              <span className="inline-block border-b border-dotted border-black w-40 mx-2"></span>
              <span>ผู้บังคับบัญชา</span>
            </div>
            <div className="text-black">
              (&nbsp;<span className="inline-block w-40 text-center font-normal">{supervisor.name || ''}</span>&nbsp;)
            </div>
          </div>
        </div>

        {/* Footer Document Code */}
        <div className="text-xs text-black italic font-serif mt-3 text-left">
          แบบฟอร์ม สกบ. 01/1
        </div>
      </div>
    </div>
  );
}
