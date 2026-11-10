import React, { useState } from 'react';
import {
  Printer,
  ZoomIn,
  ZoomOut,
  Eye,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  FileText,
  RotateCcw,
} from 'lucide-react';
import PageCover from './pages/PageCover';
import PageInstructions from './pages/PageInstructions';
import PageJobDesc from './pages/PageJobDesc';
import PageOrgChart from './pages/PageOrgChart';
import PageWorkPlan1 from './pages/PageWorkPlan1';
import PageWorkPlan2 from './pages/PageWorkPlan2';
import PageWeeklyDivider from './pages/PageWeeklyDivider';
import PageWeeklyLog1 from './pages/PageWeeklyLog1';
import PageWeeklyLog2 from './pages/PageWeeklyLog2';
import PageSummary from './pages/PageSummary';

export default function DocumentPreview({ data, activeWeek = 1, onChange }) {
  const [zoom, setZoom] = useState(85);
  const [previewFilter, setPreviewFilter] = useState('all'); // 'all', 'current-week', 'cover', 'job-desc', 'work-plan', 'summary'
  const [selectedWeek, setSelectedWeek] = useState(activeWeek);

  const weeklyLogs = data.weeklyLogs || [];

  const handlePrint = () => {
    window.print();
  };

  const totalPages = 8 + weeklyLogs.length * 2;

  const getPageInfoText = () => {
    switch (previewFilter) {
      case 'all':
        return `📚 เอกสารทั้งเล่ม (${totalPages} หน้า A4)`;
      case 'current-week':
        return `📝 สัปดาห์ที่ ${selectedWeek} (หน้า ${selectedWeek * 2 + 6} - ${selectedWeek * 2 + 7})`;
      case 'cover':
        return '📋 หน้าปก & คำแนะนำ (หน้า 1 - 2)';
      case 'job-desc':
        return '🏢 ข้อมูลตำแหน่งงาน สกบ.01/1-2 (หน้า 3 - 4)';
      case 'work-plan':
        return '📅 แผนปฏิบัติงาน สกบ.02 (หน้า 5 - 6)';
      case 'summary':
        return `📊 สรุปผล สกบ.07 (หน้า ${totalPages})`;
      default:
        return `${totalPages} หน้า`;
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 text-slate-100">
      {/* Top Floating Preview Bar (Hidden during Print) */}
      <div className="no-print bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-lg z-10 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm">
            <Eye className="w-4 h-4" />
            <span>ตัวอย่างเอกสาร A4 (Live Preview)</span>
          </div>

          <div className="h-4 w-px bg-slate-700 hidden sm:block"></div>

          {/* Filter selection */}
          <div className="flex items-center gap-2 text-xs">
            <label className="text-slate-400 hidden md:inline">มุมมอง:</label>
            <select
              value={previewFilter}
              onChange={(e) => setPreviewFilter(e.target.value)}
              className="bg-slate-800 text-slate-100 font-medium rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none focus:border-amber-400 text-xs shadow-sm cursor-pointer"
            >
              <option value="all">📚 เอกสารทั้งหมด (ทั้งเล่ม 46 หน้า)</option>
              <option value="current-week">📝 เฉพาะบันทึกสัปดาห์ที่ {selectedWeek}</option>
              <option value="cover">📋 หน้าปก & คำแนะนำ (หน้า 1-2)</option>
              <option value="job-desc">🏢 ข้อมูลตำแหน่งงาน สกบ.01/1-2 (หน้า 3-4)</option>
              <option value="work-plan">📅 แผนปฏิบัติงาน สกบ.02 (หน้า 5-6)</option>
              <option value="summary">📊 สรุปผลการดำเนินงาน สกบ.07 (หน้า 46)</option>
            </select>
          </div>

          {previewFilter === 'current-week' && (
            <div className="flex items-center gap-1 bg-slate-800 rounded-lg px-2 py-0.5 border border-slate-700 text-xs shadow-inner">
              <button
                onClick={() => setSelectedWeek(Math.max(1, selectedWeek - 1))}
                disabled={selectedWeek <= 1}
                className="p-1 hover:text-amber-400 disabled:opacity-30 transition"
                title="สัปดาห์ก่อนหน้า"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="px-1.5 font-bold text-amber-300">สัปดาห์ที่ {selectedWeek}</span>
              <button
                onClick={() => setSelectedWeek(Math.min(19, selectedWeek + 1))}
                disabled={selectedWeek >= 19}
                className="p-1 hover:text-amber-400 disabled:opacity-30 transition"
                title="สัปดาห์ถัดไป"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <span className="text-[11px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60 hidden lg:inline-block">
            {getPageInfoText()}
          </span>
        </div>

        {/* Controls: Zoom & Print */}
        <div className="flex items-center gap-2.5 text-xs">
          <div className="flex items-center gap-1 bg-slate-800 rounded-lg px-2 py-1 border border-slate-700 shadow-inner">
            <button
              onClick={() => setZoom(Math.max(40, zoom - 10))}
              className="p-1 hover:text-amber-400 transition"
              title="ย่อขนาด"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoom(85)}
              className="w-12 text-center font-mono font-bold text-slate-200 hover:text-amber-300 transition text-[11px]"
              title="รีเซ็ตขนาด 85%"
            >
              {zoom}%
            </button>
            <button
              onClick={() => setZoom(Math.min(130, zoom + 10))}
              className="p-1 hover:text-amber-400 transition"
              title="ขยายขนาด"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:scale-95 text-slate-950 font-bold px-4 py-1.5 rounded-lg shadow-md transition"
          >
            <Printer className="w-4 h-4" />
            <span className="font-bold">พิมพ์ / บันทึก PDF</span>
          </button>
        </div>
      </div>

      {/* Pages Canvas Area */}
      <div className="flex-1 overflow-auto p-4 sm:p-8 flex justify-center bg-slate-950 preview-scroll-area">
        <div
          className="preview-canvas-wrapper flex flex-col gap-8 items-center origin-top transition-transform duration-150"
          style={{ transform: `scale(${zoom / 100})` }}
        >
          {/* Cover & Instructions */}
          {(previewFilter === 'all' || previewFilter === 'cover') && (
            <>
              <PageCover data={data} />
              <PageInstructions data={data} />
            </>
          )}

          {/* Job Description & Org Chart */}
          {(previewFilter === 'all' || previewFilter === 'job-desc') && (
            <>
              <PageJobDesc data={data} />
              <PageOrgChart data={data} onChange={onChange} />
            </>
          )}

          {/* Work Plan (Pages 5 & 6) */}
          {(previewFilter === 'all' || previewFilter === 'work-plan') && (
            <>
              <PageWorkPlan1 data={data} />
              <PageWorkPlan2 data={data} />
            </>
          )}

          {/* Weekly Divider */}
          {previewFilter === 'all' && <PageWeeklyDivider />}

          {/* Weekly Logs */}
          {previewFilter === 'all' &&
            weeklyLogs.map((week, idx) => (
              <React.Fragment key={idx}>
                <PageWeeklyLog1 weekData={week} generalData={data.general} />
                <PageWeeklyLog2
                  weekData={week}
                  generalData={data.general}
                  jobDescData={data.jobDesc}
                />
              </React.Fragment>
            ))}

          {/* Single Week View */}
          {previewFilter === 'current-week' && (
            <>
              <PageWeeklyLog1
                weekData={weeklyLogs[selectedWeek - 1] || { weekNumber: selectedWeek }}
                generalData={data.general}
              />
              <PageWeeklyLog2
                weekData={weeklyLogs[selectedWeek - 1] || { weekNumber: selectedWeek }}
                generalData={data.general}
                jobDescData={data.jobDesc}
              />
            </>
          )}

          {/* Summary Report */}
          {(previewFilter === 'all' || previewFilter === 'summary') && (
            <PageSummary data={data} />
          )}
        </div>
      </div>
    </div>
  );
}
