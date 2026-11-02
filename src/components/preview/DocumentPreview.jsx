import React, { useState } from 'react';
import { Printer, ZoomIn, ZoomOut, Eye, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
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

export default function DocumentPreview({ data, activeWeek = 1 }) {
  const [zoom, setZoom] = useState(85);
  const [previewFilter, setPreviewFilter] = useState('all'); // 'all', 'current-week', 'cover', 'job-desc', 'work-plan', 'summary'
  const [selectedWeek, setSelectedWeek] = useState(activeWeek);

  const weeklyLogs = data.weeklyLogs || [];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 text-slate-100">
      {/* Top Floating Preview Bar (Hidden during Print) */}
      <div className="no-print bg-slate-800 border-b border-slate-700 px-4 py-3 flex flex-wrap items-center justify-between gap-3 shadow-md z-10 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-sm">
            <Eye className="w-4 h-4" />
            <span>ตัวอย่างเอกสาร A4 (Live Preview)</span>
          </div>

          <div className="h-4 w-px bg-slate-600"></div>

          {/* Filter selection */}
          <div className="flex items-center gap-2 text-xs">
            <label className="text-slate-300">แสดงผล:</label>
            <select
              value={previewFilter}
              onChange={(e) => setPreviewFilter(e.target.value)}
              className="bg-slate-700 text-white rounded px-2.5 py-1 border border-slate-600 focus:outline-none focus:border-amber-400"
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
            <div className="flex items-center gap-1 bg-slate-700 rounded px-2 py-0.5 border border-slate-600 text-xs">
              <button
                onClick={() => setSelectedWeek(Math.max(1, selectedWeek - 1))}
                disabled={selectedWeek <= 1}
                className="p-1 hover:text-amber-400 disabled:opacity-30"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="px-1 font-medium">สัปดาห์ที่ {selectedWeek}</span>
              <button
                onClick={() => setSelectedWeek(Math.min(19, selectedWeek + 1))}
                disabled={selectedWeek >= 19}
                className="p-1 hover:text-amber-400 disabled:opacity-30"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Controls: Zoom & Print */}
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1 bg-slate-700 rounded px-2 py-1 border border-slate-600">
            <button
              onClick={() => setZoom(Math.max(40, zoom - 10))}
              className="p-1 hover:text-amber-400"
              title="ย่อขนาด"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="w-10 text-center font-mono font-medium">{zoom}%</span>
            <button
              onClick={() => setZoom(Math.min(130, zoom + 10))}
              className="p-1 hover:text-amber-400"
              title="ขยายขนาด"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-bold px-4 py-1.5 rounded shadow transition"
          >
            <Printer className="w-4 h-4" />
            <span>สั่งพิมพ์ / บันทึกเป็น PDF</span>
          </button>
        </div>
      </div>

      {/* Pages Canvas Area */}
      <div className="flex-1 overflow-auto p-8 flex justify-center bg-slate-900/90">
        <div
          className="flex flex-col gap-8 items-center origin-top transition-transform duration-150"
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
              <PageOrgChart data={data} />
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
