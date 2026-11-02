import React from 'react';

export default function PageOrgChart({ data }) {
  const { orgChart = {} } = data;
  const chartImg = orgChart.imageUrl || '/org-chart.jpg';

  return (
    <div className="doc-page flex flex-col justify-between text-left text-sm text-black">
      <div>
        {/* Title */}
        <h2 className="text-center font-bold text-lg mb-6 mt-4 text-black">
          โครงสร้างองค์กร
        </h2>

        {/* Org Chart Display Area */}
        <div className="w-full h-[640px] flex flex-col items-center justify-center p-2">
          {chartImg ? (
            <img
              src={chartImg}
              alt="แผนผังโครงสร้างองค์กร บริษัท ซี เค ชูส์ (ประเทศไทย) จำกัด"
              className="max-w-full max-h-full object-contain shadow-sm border border-slate-300"
            />
          ) : (
            <div className="text-center text-slate-400">
              <div className="text-4xl mb-2">🏢</div>
              <p className="font-medium text-slate-500">แผนผังโครงสร้างองค์กร (Organization Chart)</p>
            </div>
          )}
        </div>
      </div>

      {/* Note & Footer matching PDF Page 4 exactly */}
      <div className="mb-2 text-black">
        <div className="text-xs text-black mb-6">
          <span className="font-bold text-black">หมายเหตุ:</span> ให้นิสิตระบุส่วนงานทีนิสิตปฏิบัติงานสหกิจศึกษา
          <div className="font-medium text-black mt-1 pl-4">
            {orgChart.departmentInfo || 'สังกัด: ฝ่ายเทคโนโลยีสารสนเทศ ส่วน Software Development แผนกพัฒนาซอฟต์แวร์'}
          </div>
        </div>

        <div className="text-xs text-black italic">
          แบบฟอร์ม สกบ. 01/2
        </div>
      </div>
    </div>
  );
}
