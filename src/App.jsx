import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CoverForm from './components/forms/CoverForm';
import JobDescForm from './components/forms/JobDescForm';
import OrgChartForm from './components/forms/OrgChartForm';
import WorkPlanForm from './components/forms/WorkPlanForm';
import WeeklyLogForm from './components/forms/WeeklyLogForm';
import SummaryForm from './components/forms/SummaryForm';
import DocumentPreview from './components/preview/DocumentPreview';
import { loadSavedData, saveDataToStorage } from './utils/storage';
import { INITIAL_DATA } from './types/schema';

export default function App() {
  const [data, setData] = useState(() => loadSavedData());
  const [activeTab, setActiveTab] = useState('cover');
  const [activeWeek, setActiveWeek] = useState(1);
  const [viewMode, setViewMode] = useState('edit'); // 'edit' or 'preview'

  // Auto-migrate old address if cached in browser state
  useEffect(() => {
    const currentAddr = data.general?.companyAddress || '';
    if (
      !currentAddr ||
      currentAddr.includes('คลองพลู') ||
      currentAddr.includes('เขาคิชฌกูฏ') ||
      currentAddr.includes('22210')
    ) {
      setData((prev) => ({
        ...prev,
        general: {
          ...prev.general,
          companyAddress: '499 หมู่ที่ 7 ถนนมะลิวัลย์ ตำบลบ้านทุ่ม อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40000',
        },
      }));
    }

    // Auto-migrate Week 19 Day 6, ensure Week 20, and clear feedback
    setData((prev) => {
      let updated = false;
      let logs = prev.weeklyLogs ? [...prev.weeklyLogs] : [...INITIAL_DATA.weeklyLogs];

      // 1. Update Week 19 Day 6 if still containing old default text
      if (logs[18]?.days) {
        const d6 = logs[18].days.find((d) => d.dayIndex === 6);
        if (d6 && d6.content?.includes('ตรวจสอบความครบถ้วนของเอกสาร')) {
          logs[18] = {
            ...logs[18],
            days: logs[18].days.map((d) =>
              d.dayIndex === 6
                ? {
                    ...d,
                    content:
                      '- พัฒนาและเชื่อมต่อระบบ Nginx Reverse Proxy และ Fastify API ร่วมกับ Frontend จนเสร็จสมบูรณ์และพร้อมใช้งาน',
                  }
                : d
            ),
          };
          updated = true;
        }
      }

      // 2. Ensure Week 20 exists
      if (logs.length < 20 && INITIAL_DATA.weeklyLogs[19]) {
        logs[19] = INITIAL_DATA.weeklyLogs[19];
        updated = true;
      }

      // 3. Update Week 20 Day 3 (11 พ.ย. 2569) if empty
      if (logs[19]?.days) {
        const d3 = logs[19].days.find((d) => d.dayIndex === 3);
        if (d3 && (!d3.content || d3.content.trim() === '')) {
          logs[19] = {
            ...logs[19],
            days: logs[19].days.map((d) =>
              d.dayIndex === 3
                ? {
                    ...d,
                    content:
                      '- รวบรวมข้อมูลผลการดำเนินงาน สรุปฟังก์ชันระบบ และจัดเตรียมภาพตัวอย่างหน้าจอ เพื่อจัดทำสไลด์นำเสนอโครงงาน (Project Presentation)',
                  }
                : d
            ),
          };
          updated = true;
        }
      }

      // 4. Clear any feedback text
      const hasFeedback = logs.some((w) => w.feedback && w.feedback.trim() !== '');
      if (hasFeedback) {
        logs = logs.map((w) => ({ ...w, feedback: '' }));
        updated = true;
      }

      if (!updated) return prev;
      return {
        ...prev,
        weeklyLogs: logs,
      };
    });
  }, []);

  // Auto-save on change
  useEffect(() => {
    saveDataToStorage(data);
  }, [data]);

  const handleDataChange = (newData) => {
    setData(newData);
  };

  const handleReset = () => {
    setData(INITIAL_DATA);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 selection:bg-amber-300 selection:text-slate-900">
      {/* Top Navigation */}
      <Navbar
        data={data}
        onChange={handleDataChange}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onReset={handleReset}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden">
        {viewMode === 'preview' ? (
          <div className="flex-1 h-[calc(100vh-4rem)]">
            <DocumentPreview
              data={data}
              activeWeek={activeWeek}
              onChange={handleDataChange}
            />
          </div>
        ) : (
          <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-4rem)] overflow-hidden">
            {/* Sidebar Form Navigation */}
            <Sidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              activeWeek={activeWeek}
              setActiveWeek={setActiveWeek}
              data={data}
            />

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-100">
              {activeTab === 'cover' && (
                <CoverForm data={data} onChange={handleDataChange} />
              )}
              {activeTab === 'jobDesc' && (
                <JobDescForm data={data} onChange={handleDataChange} />
              )}
              {activeTab === 'orgChart' && (
                <OrgChartForm data={data} onChange={handleDataChange} />
              )}
              {activeTab === 'workPlan' && (
                <WorkPlanForm data={data} onChange={handleDataChange} />
              )}
              {activeTab === 'weeklyLog' && (
                <WeeklyLogForm
                  data={data}
                  onChange={handleDataChange}
                  activeWeek={activeWeek}
                  onSelectWeek={setActiveWeek}
                />
              )}
              {activeTab === 'summary' && (
                <SummaryForm data={data} onChange={handleDataChange} />
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
