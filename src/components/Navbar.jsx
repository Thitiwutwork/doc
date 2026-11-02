import React, { useRef } from 'react';
import {
  FileText,
  Eye,
  Printer,
  Download,
  Upload,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  Edit3,
} from 'lucide-react';
import BuuLogo from './BuuLogo';
import { exportDataAsJSON, importDataFromJSON } from '../utils/storage';
import { SAMPLE_DATA } from '../utils/sampleData';
import { INITIAL_DATA } from '../types/schema';

export default function Navbar({
  data,
  onChange,
  viewMode,
  setViewMode,
  onReset,
}) {
  const fileInputRef = useRef(null);

  const handleExport = () => {
    exportDataAsJSON(data);
  };

  const handleImportFile = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const loaded = await importDataFromJSON(file);
        onChange(loaded);
        alert('นำเข้าข้อมูลสำเร็จแล้ว!');
      } catch (err) {
        alert(err.message || 'ไม่สามารถเปิดไฟล์ JSON นี้ได้');
      }
    }
  };

  const handleLoadSample = () => {
    if (
      window.confirm(
        'ต้องการโหลด "ชุดข้อมูลตัวอย่าง" ใช่หรือไม่? (ข้อมูลที่กรอกอยู่จะถูกแทนที่ด้วยข้อมูลตัวอย่างสำหรับทดสอบ)'
      )
    ) {
      onChange(SAMPLE_DATA);
    }
  };

  const handleResetData = () => {
    if (
      window.confirm(
        'ต้องการล้างข้อมูลทั้งหมดและเริ่มใหม่ใช่หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้'
      )
    ) {
      onChange(INITIAL_DATA);
    }
  };

  const handlePrint = () => {
    // If not in preview mode, switch to preview mode first, then print
    if (viewMode !== 'preview') {
      setViewMode('preview');
      setTimeout(() => {
        window.print();
      }, 300);
    } else {
      window.print();
    }
  };

  return (
    <header className="no-print bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <BuuLogo className="w-9 h-9 text-amber-400" />
          <div>
            <h1 className="font-bold text-sm sm:text-base text-slate-100 flex items-center gap-2">
              <span>บันทึกสหกิจศึกษา BUU</span>
              <span className="bg-amber-500/20 text-amber-300 text-[11px] px-2 py-0.5 rounded-full font-medium border border-amber-400/30 hidden sm:inline-block">
                ม.บูรพา จันทบุรี
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              ระบบกรอกข้อมูลและสร้างรายงาน PDF ตามแบบฟอร์ม 100%
            </p>
          </div>
        </div>

        {/* Center: View Mode Toggle */}
        <div className="bg-slate-800 p-1 rounded-xl border border-slate-700 flex items-center gap-1 shadow-inner">
          <button
            type="button"
            onClick={() => setViewMode('edit')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              viewMode === 'edit'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>กรอกข้อมูล (Form)</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('preview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              viewMode === 'preview'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>ดูตัวอย่าง PDF (A4)</span>
          </button>
        </div>

        {/* Right: Quick Actions */}
        <div className="flex items-center gap-2">
          {/* Load Sample Button */}
          <button
            type="button"
            onClick={handleLoadSample}
            className="hidden md:flex items-center gap-1 text-xs font-medium text-amber-300 bg-amber-950/40 hover:bg-amber-900/60 px-2.5 py-1.5 rounded-lg border border-amber-500/30 transition"
            title="โหลดข้อมูลตัวอย่างนิสิตไอทีสำหรับทดสอบ"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ใส่ข้อมูลตัวอย่าง</span>
          </button>

          {/* Backup / Export JSON */}
          <button
            type="button"
            onClick={handleExport}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
            title="สำรองข้อมูลเป็นไฟล์ JSON (Export)"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Import JSON */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition"
            title="นำเข้าไฟล์ข้อมูล JSON (Import)"
          >
            <Upload className="w-4 h-4" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleImportFile}
            className="hidden"
          />

          {/* Reset Button */}
          <button
            type="button"
            onClick={handleResetData}
            className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition"
            title="ล้างข้อมูลทั้งหมด"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {/* Print PDF Button */}
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:from-amber-600 active:to-amber-700 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-lg shadow-md transition"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">พิมพ์ / บันทึก PDF</span>
            <span className="sm:hidden">PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
}
