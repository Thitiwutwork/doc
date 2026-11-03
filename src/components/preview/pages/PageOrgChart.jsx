import React, { useState } from 'react';
import { Maximize2, RotateCw, ZoomIn, ZoomOut, X, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function PageOrgChart({ data, onChange }) {
  const { orgChart = {} } = data;
  const rawImg = orgChart.imageUrl || '/org-chart.jpg';
  const displayMode = orgChart.displayMode || 'landscape'; // 'landscape' | 'portrait' | 'vector'
  const isCustomImage = rawImg.startsWith('data:');

  const [modalOpen, setModalOpen] = useState(false);
  const [modalZoom, setModalZoom] = useState(100);
  const [modalRotate, setModalRotate] = useState(0);

  const handleModeChange = (mode) => {
    if (onChange) {
      onChange({
        ...data,
        orgChart: {
          ...orgChart,
          displayMode: mode,
        },
      });
    }
  };

  // Image source depending on orientation mode
  let displayImgSrc = rawImg;
  if (!isCustomImage) {
    if (displayMode === 'landscape') {
      displayImgSrc = '/org-chart-rotated-cw.jpg';
    } else {
      displayImgSrc = '/org-chart.jpg';
    }
  }

  return (
    <div className="doc-page flex flex-col justify-between text-left text-sm text-black relative">
      {/* Top Floating Control Bar (Visible in Screen Preview only, hidden in Print/PDF) */}
      <div className="no-print absolute -top-12 left-0 right-0 flex items-center justify-between bg-slate-900/95 backdrop-blur text-white px-3 py-1.5 rounded-lg border border-slate-700/80 shadow-md text-xs z-10">
        <div className="flex items-center gap-1.5 font-semibold text-amber-400">
          <span>📐 โหมดแสดงผลหน้า 4:</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleModeChange('landscape')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition flex items-center gap-1 ${
              displayMode === 'landscape'
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
            title="หมุน 90° แนวนอนขยายเต็มหน้า A4 ให้อ่านชัดเจนที่สุด (แนะนำสำหรับเล่มรายงาน)"
          >
            <RotateCw className="w-3 h-3" />
            <span>แนวนอนเต็มหน้า (90° ชัดสุด)</span>
          </button>

          <button
            type="button"
            onClick={() => handleModeChange('portrait')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition flex items-center gap-1 ${
              displayMode === 'portrait'
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
            title="แสดงตามแนวตั้งแบบขยายเต็มความกว้าง"
          >
            <ImageIcon className="w-3 h-3" />
            <span>แนวตั้งปกติ</span>
          </button>

          <button
            type="button"
            onClick={() => handleModeChange('vector')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition flex items-center gap-1 ${
              displayMode === 'vector'
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
            title="ผังองค์กรแบบเวกเตอร์ คมชัด 100% ตัวอักษรอ่านง่าย พร้อมเน้นตำแหน่งนิสิต"
          >
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>ผังเวกเตอร์คมชัด</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setModalZoom(100);
              setModalRotate(0);
              setModalOpen(true);
            }}
            className="ml-1 px-2 py-1 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 rounded text-[11px] font-medium transition flex items-center gap-1 border border-slate-700"
            title="คลิกเพื่อขยายดูภาพขนาดเต็ม (Zoom / Lightbox)"
          >
            <Maximize2 className="w-3 h-3" />
            <span>ซูมดูรูปใหญ่</span>
          </button>
        </div>
      </div>

      <div>
        {/* Title */}
        <h2 className="text-center font-bold text-lg mb-2 mt-1 text-black tracking-tight">
          โครงสร้างองค์กร
        </h2>

        {/* --- MODE 1: LANDSCAPE (หมุน 90° ขยายเต็มหน้า A4 - ชัดเจนและอ่านง่ายที่สุด) --- */}
        {displayMode === 'landscape' && (
          <div className="w-full h-[760px] flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden rounded bg-white">
            <div
              className="w-full h-full flex items-center justify-center"
              onClick={() => {
                setModalZoom(100);
                setModalRotate(0);
                setModalOpen(true);
              }}
              title="คลิกเพื่อดูภาพขยายขนาดเต็มความละเอียดสูง"
            >
              <img
                src={displayImgSrc}
                alt="ผังองค์กร บริษัท ซี เค ชูส์ (ประเทศไทย) จำกัด"
                className={`max-w-full max-h-full object-contain ${
                  isCustomImage ? 'rotate-[-90deg] scale-125' : ''
                }`}
              />
            </div>

            {/* Hover Tooltip in preview (Screen only) */}
            <div className="no-print absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur text-white text-[11px] px-2.5 py-1 rounded shadow pointer-events-none opacity-0 group-hover:opacity-100 transition">
              🔍 คลิกที่รูปภาพเพื่อขยายขนาดเต็ม (Zoom Modal)
            </div>
          </div>
        )}

        {/* --- MODE 2: PORTRAIT (แนวตั้งปกติ ขยายเต็มความกว้าง) --- */}
        {displayMode === 'portrait' && (
          <div className="w-full h-[760px] flex flex-col items-center justify-center relative group cursor-pointer bg-white">
            <div
              className="w-full h-full flex items-center justify-center"
              onClick={() => {
                setModalZoom(100);
                setModalRotate(0);
                setModalOpen(true);
              }}
              title="คลิกเพื่อดูภาพขยายขนาดเต็มความละเอียดสูง"
            >
              <img
                src="/org-chart.jpg"
                alt="ผังองค์กร บริษัท ซี เค ชูส์ (ประเทศไทย) จำกัด"
                className="w-full h-auto max-h-[740px] object-contain"
              />
            </div>

            <div className="no-print absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur text-white text-[11px] px-2.5 py-1 rounded shadow pointer-events-none opacity-0 group-hover:opacity-100 transition">
              🔍 คลิกที่รูปภาพเพื่อขยายขนาดเต็ม (Zoom Modal)
            </div>
          </div>
        )}

        {/* --- MODE 3: VECTOR RECREATION (แผนผังองค์กรแบบเวกเตอร์ คมชัด 100% ตัวอักษรอ่านง่าย) --- */}
        {displayMode === 'vector' && (
          <div className="w-full border border-black p-3 bg-white text-black font-sans text-xs">
            {/* Header Box */}
            <div className="border border-black p-2 mb-3 bg-slate-50 text-center">
              <div className="font-bold text-sm tracking-wide text-blue-900">
                บริษัท ซี เค ชูส์ (ประเทศไทย) จำกัด (CK SHOES (THAILAND) CO., LTD.)
              </div>
              <div className="text-xs font-semibold text-slate-700 mt-0.5">
                เอกสารอ้างอิง: ผังองค์กรฝ่ายเทคโนโลยีสารสนเทศ (QR-IT-002)
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-300 text-[10px] text-slate-600">
                <div>จัดทำโดย: หัวหน้าส่วนคอมพิวเตอร์</div>
                <div>ทบทวนโดย: ผู้ช่วยกรรมการผู้จัดการ</div>
                <div>อนุมัติโดย: รองกรรมการผู้จัดการ</div>
              </div>
            </div>

            {/* Tree Nodes */}
            <div className="flex flex-col items-center space-y-2">
              {/* Level 1: รองกรรมการผู้จัดการ */}
              <div className="border border-blue-700 bg-blue-50 text-blue-950 font-bold px-4 py-1.5 rounded shadow-sm text-center min-w-[220px]">
                <div className="text-[11px] text-blue-700 font-semibold">รองกรรมการผู้จัดการ</div>
                <div className="text-xs">นายธนธร เอื้อเจริญรุ่งโรจน์</div>
              </div>

              <div className="w-px h-3 bg-black"></div>

              {/* Level 2: ผู้ช่วยกรรมการผู้จัดการ */}
              <div className="border border-emerald-700 bg-emerald-50 text-emerald-950 font-bold px-4 py-1.5 rounded shadow-sm text-center min-w-[220px]">
                <div className="text-[11px] text-emerald-700 font-semibold">ผู้ช่วยกรรมการผู้จัดการ</div>
                <div className="text-xs">นายศิวกร พงษ์วรภัทร์</div>
              </div>

              <div className="w-px h-3 bg-black"></div>

              {/* Level 3: ผู้จัดการฝ่ายเทคโนโลยีสารสนเทศ */}
              <div className="border border-purple-700 bg-purple-50 text-purple-950 font-bold px-4 py-1.5 rounded shadow-sm text-center min-w-[220px]">
                <div className="text-[11px] text-purple-700 font-semibold">ผู้จัดการฝ่ายเทคโนโลยีสารสนเทศ</div>
                <div className="text-xs text-slate-500 italic">(ว่าง)</div>
              </div>

              <div className="w-px h-3 bg-black"></div>

              {/* Level 4: 3 Branches Grid */}
              <div className="w-full grid grid-cols-3 gap-2 pt-1 border-t-2 border-black">
                {/* Branch 1: IT Infrastructure (CK-BKK) */}
                <div className="border border-slate-300 bg-slate-50 p-2 rounded flex flex-col space-y-2">
                  <div className="bg-fuchsia-100 border border-fuchsia-400 p-1 rounded text-center">
                    <div className="font-bold text-[11px] text-fuchsia-900">หัวหน้าส่วน IT Infra (CK-BKK)</div>
                    <div className="text-[10px]">นายสุพจน์ แซ่เฮ้ง</div>
                  </div>
                  <div className="bg-sky-50 border border-sky-300 p-1 rounded text-center text-[10px]">
                    <div className="font-semibold text-sky-900">เจ้าหน้าที่ระบบคอมพิวเตอร์</div>
                    <div>น.ส.หทัยภัทร์ ศิริชัย</div>
                  </div>
                  <div className="bg-sky-50 border border-sky-300 p-1 rounded text-center text-[10px]">
                    <div className="font-semibold text-sky-900">ช่างคอมพิวเตอร์</div>
                    <div>นายชาญณุภูมิ บุญรัตน์</div>
                  </div>
                </div>

                {/* Branch 2: Software Development (ส่วนงานที่นิสิตสังกัด) */}
                <div className="border-2 border-amber-500 bg-amber-50/60 p-2 rounded flex flex-col space-y-1.5 relative shadow-sm">
                  <div className="absolute -top-2.5 right-1 bg-amber-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded shadow">
                    ⭐ ส่วนงานที่นิสิตสังกัด
                  </div>

                  <div className="bg-fuchsia-100 border border-fuchsia-400 p-1 rounded text-center">
                    <div className="font-bold text-[11px] text-fuchsia-900">หัวหน้าส่วน Software Dev</div>
                    <div className="text-[10px] text-slate-500 italic">(ว่าง)</div>
                  </div>

                  <div className="bg-orange-100 border border-orange-400 p-1 rounded text-center">
                    <div className="font-bold text-[10px] text-orange-900">หัวหน้าแผนกพัฒนาซอฟต์แวร์</div>
                    <div className="text-[10px]">นายอดิศักดิ์ บุญถาวร</div>
                  </div>

                  <div className="bg-sky-50 border border-sky-300 p-1 rounded text-center text-[10px]">
                    <div className="font-semibold text-sky-900">เจ้าหน้าที่ Programmer</div>
                    <div>นายกฤษณะ คงเซียงสา</div>
                  </div>

                  <div className="bg-sky-50 border border-sky-300 p-1 rounded text-center text-[10px]">
                    <div className="font-semibold text-sky-900">เจ้าหน้าที่ Programmer (CKL)</div>
                    <div>นายณัฐวุฒิ สมสีดา</div>
                  </div>

                  {/* นิสิตสหกิจศึกษา Highlight Box */}
                  <div className="bg-amber-100 border-2 border-amber-600 p-1.5 rounded text-center text-[10.5px] font-bold shadow-sm">
                    <div className="text-amber-900">เจ้าหน้าที่ Programmer (นิสิตสหกิจศึกษา)</div>
                    <div className="text-amber-950 font-extrabold text-[11px]">นายฐิติวัฒิ พุกภิญโญ</div>
                    <div className="text-[9px] text-amber-800 font-normal">รหัสนิสิต 67310069</div>
                  </div>
                </div>

                {/* Branch 3: IT Infrastructure */}
                <div className="border border-slate-300 bg-slate-50 p-2 rounded flex flex-col space-y-2">
                  <div className="bg-fuchsia-100 border border-fuchsia-400 p-1 rounded text-center">
                    <div className="font-bold text-[11px] text-fuchsia-900">หัวหน้าส่วน IT Infrastructure</div>
                    <div className="text-[10px]">นายธีรภัทร์ ตอนสุทัศน์</div>
                  </div>

                  <div className="bg-orange-100 border border-orange-300 p-1 rounded text-center text-[10px]">
                    <div className="font-semibold text-orange-950">แผนกช่างเทคนิค CK-KK</div>
                    <div>นายเฉลิมพงษ์ มูลพงษ์</div>
                    <div className="text-[9px] text-slate-600 mt-0.5">ช่างซ่อม: นายโกวิทย์ / นายพงษ์ภัทร</div>
                  </div>

                  <div className="bg-orange-100 border border-orange-300 p-1 rounded text-center text-[10px]">
                    <div className="font-semibold text-orange-950">แผนกช่างเทคนิค CKL</div>
                    <div>นายสิริรักษ์ ลำพอง</div>
                    <div className="text-[9px] text-slate-600 mt-0.5">ช่างซ่อม: นายสมภพ / นายคณาพร</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Note & Footer matching PDF Template (แบบฟอร์ม สกบ. 01/2) */}
      <div className="mt-2 text-black pt-2 border-t border-slate-300">
        <div className="text-xs text-black mb-1">
          <span className="font-bold text-black">หมายเหตุ:</span> ให้นิสิตระบุส่วนงานทีนิสิตปฏิบัติงานสหกิจศึกษา
          <div className="font-semibold text-black mt-1 pl-4 text-xs">
            {orgChart.departmentInfo || 'สังกัด: ฝ่ายเทคโนโลยีสารสนเทศ ส่วน Software Development แผนกพัฒนาซอฟต์แวร์'}
          </div>
        </div>

        <div className="text-xs text-slate-600 italic font-serif text-left mt-2">
          แบบฟอร์ม สกบ. 01/2
        </div>
      </div>

      {/* Lightbox / Zoom Modal (Screen only) */}
      {modalOpen && (
        <div
          className="no-print fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          {/* Modal Header */}
          <div
            className="w-full max-w-5xl flex items-center justify-between text-white pb-3 border-b border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold text-sm">
                🔍 แผนผังโครงสร้างองค์กร (ความละเอียดสูง Full Resolution)
              </span>
              <span className="text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                ซูม {modalZoom}%
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setModalZoom((prev) => Math.max(50, prev - 25))}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded transition"
                title="ย่อขนาด"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setModalZoom(100)}
                className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded transition font-mono"
                title="ขนาดปกติ 100%"
              >
                100%
              </button>
              <button
                type="button"
                onClick={() => setModalZoom((prev) => Math.min(250, prev + 25))}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded transition"
                title="ขยายขนาด"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setModalRotate((prev) => (prev + 90) % 360)}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded transition"
                title="หมุน 90 องศา"
              >
                <RotateCw className="w-4 h-4" />
              </button>
              <div className="h-5 w-px bg-slate-700 mx-1"></div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded transition"
                title="ปิดหน้าต่างขยาย (ESC)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Image Area */}
          <div
            className="flex-1 w-full max-w-5xl overflow-auto flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/org-chart.jpg"
              alt="ผังองค์กรขนาดเต็ม"
              className="transition-transform duration-200 select-none shadow-2xl rounded bg-white"
              style={{
                transform: `scale(${modalZoom / 100}) rotate(${modalRotate}deg)`,
                maxWidth: modalZoom <= 100 ? '100%' : 'none',
                maxHeight: modalZoom <= 100 ? '80vh' : 'none',
              }}
            />
          </div>

          <div
            className="text-xs text-slate-400 pt-2 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            💡 เลื่อนล้อเมาส์เพื่อเลื่อนดูข้อความ หรือกดปุ่ม ESC / คลิกนอกกรอบเพื่อปิด
          </div>
        </div>
      )}
    </div>
  );
}
