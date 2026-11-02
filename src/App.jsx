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

  // Guarantee that mentor, supervisor, student, company names, orgChart, and weeklyLogs are populated
  useEffect(() => {
    const hasLogData = data.weeklyLogs?.[0]?.days?.some((d) => d.content && d.content.trim() !== '');

    if (
      !hasLogData ||
      data.jobDesc?.mentor?.name !== 'นายสามศักดิ์ บุญจวง' ||
      data.jobDesc?.supervisor?.name !== 'นายจิรกานต์ วาทกิจ' ||
      data.general?.studentName !== 'นายฐิติวุฒิ พุกภิญโญ' ||
      data.general?.companyName !== 'บริษัท ซี เค ชูส์ (ประเทศไทย) จำกัด' ||
      !data.orgChart?.imageUrl
    ) {
      setData((prev) => {
        const prevHasLogData = prev.weeklyLogs?.[0]?.days?.some((d) => d.content && d.content.trim() !== '');
        return {
          ...prev,
          general: {
            ...prev.general,
            studentName: 'นายฐิติวุฒิ พุกภิญโญ',
            studentId: '67310069',
            companyName: 'บริษัท ซี เค ชูส์ (ประเทศไทย) จำกัด',
            companyAddress: '111/1 หมู่ 2 ตำบลคลองพลู อำเภอเขาคิชฌกูฏ จังหวัดจันทบุรี 22210',
          },
          jobDesc: {
            ...prev.jobDesc,
            mentor: {
              ...prev.jobDesc?.mentor,
              name: 'นายสามศักดิ์ บุญจวง',
              position: 'หัวหน้าพัฒนาซอฟแวร์',
            },
            supervisor: {
              ...prev.jobDesc?.supervisor,
              name: 'นายจิรกานต์ วาทกิจ',
              position: 'ผู้ช่วยรองกรรมการผู้จัดการ',
            },
          },
          orgChart: {
            imageUrl: '/org-chart.jpg',
            departmentInfo: 'สังกัด: ฝ่ายเทคโนโลยีสารสนเทศ ส่วน Software Development แผนกพัฒนาซอฟต์แวร์',
          },
          weeklyLogs: prevHasLogData ? prev.weeklyLogs : INITIAL_DATA.weeklyLogs,
        };
      });
    }
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
            <DocumentPreview data={data} activeWeek={activeWeek} />
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
