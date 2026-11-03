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
