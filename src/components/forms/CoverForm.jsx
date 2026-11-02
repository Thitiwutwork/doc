import React from 'react';
import { User, Building, Calendar, Phone, Mail, Award, BookOpen } from 'lucide-react';

export default function CoverForm({ data, onChange }) {
  const { general = {}, advisor = {} } = data;

  const handleGeneralChange = (field, value) => {
    onChange({
      ...data,
      general: {
        ...general,
        [field]: value,
      },
    });
  };

  const handleAdvisorChange = (field, value) => {
    onChange({
      ...data,
      advisor: {
        ...advisor,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Card: ข้อมูลทั่วไป & หน้าปก */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-white">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Award className="w-5 h-5" />
            <span>ข้อมูลหน้าปก และข้อมูลโครงการสหกิจศึกษา</span>
          </h2>
          <p className="text-amber-100 text-xs mt-1">
            ข้อมูลส่วนนี้จะถูกนำไปแสดงในหน้าปก (หน้า 1) และหัวกระดาษของแบบฟอร์มทุกหน้า
          </p>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ปีการศึกษา
              </label>
              <input
                type="text"
                value={general.academicYear || ''}
                onChange={(e) => handleGeneralChange('academicYear', e.target.value)}
                placeholder="เช่น 2569"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ระยะเวลาปฏิบัติงาน (ระหว่างวันที่)
              </label>
              <input
                type="text"
                value={general.trainingPeriod || ''}
                onChange={(e) => handleGeneralChange('trainingPeriod', e.target.value)}
                placeholder="เช่น 1 กรกฎาคม 2569 ถึง 31 ธันวาคม 2569"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ชื่อคณะ
              </label>
              <input
                type="text"
                value={general.faculty || ''}
                onChange={(e) => handleGeneralChange('faculty', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                มหาวิทยาลัย / วิทยาเขต
              </label>
              <input
                type="text"
                value={general.university || ''}
                onChange={(e) => handleGeneralChange('university', e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Card: ข้อมูลนิสิต */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-800 px-6 py-3.5 text-white flex items-center gap-2">
          <User className="w-5 h-5 text-amber-400" />
          <h2 className="text-base font-semibold">ข้อมูลนิสิตผู้ปฏิบัติงาน</h2>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ชื่อ - นามสกุล (พร้อมคำนำหน้า) <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={general.studentName || ''}
                onChange={(e) => handleGeneralChange('studentName', e.target.value)}
                placeholder="เช่น นายฐิติวุฒิ พุกภิญโญ"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                รหัสประจำตัวนิสิต <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={general.studentId || ''}
                onChange={(e) => handleGeneralChange('studentId', e.target.value)}
                placeholder="เช่น 67310069"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-mono focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                หลักสูตร
              </label>
              <input
                type="text"
                value={general.curriculum || ''}
                onChange={(e) => handleGeneralChange('curriculum', e.target.value)}
                placeholder="เช่น หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศและวิทยาการข้อมูล"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                สาขาวิชา
              </label>
              <input
                type="text"
                value={general.major || ''}
                onChange={(e) => handleGeneralChange('major', e.target.value)}
                placeholder="เช่น เทคโนโลยีสารสนเทศและวิทยาการข้อมูล"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Card: ข้อมูลสถานประกอบการ */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-800 px-6 py-3.5 text-white flex items-center gap-2">
          <Building className="w-5 h-5 text-amber-400" />
          <h2 className="text-base font-semibold">ข้อมูลสถานประกอบการ</h2>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              ชื่อสถานประกอบการ / บริษัท <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={general.companyName || ''}
              onChange={(e) => handleGeneralChange('companyName', e.target.value)}
              placeholder="เช่น บริษัท ซี เค ชูส์ (ประเทศไทย) จำกัด"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              สถานที่ตั้ง (ที่อยู่สถานประกอบการ)
            </label>
            <textarea
              rows="3"
              value={general.companyAddress || ''}
              onChange={(e) => handleGeneralChange('companyAddress', e.target.value)}
              placeholder="111/1 หมู่ 2 ตำบลคลองพลู อำเภอเขาคิชฌกูฏ จังหวัดจันทบุรี 22210"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Card: ข้อมูลอาจารย์ที่ปรึกษา */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-800 px-6 py-3.5 text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          <h2 className="text-base font-semibold">ข้อมูลอาจารย์ที่ปรึกษาโครงการสหกิจศึกษา (หน้า 2)</h2>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              ชื่ออาจารย์ที่ปรึกษา
            </label>
            <input
              type="text"
              value={advisor.name || ''}
              onChange={(e) => handleAdvisorChange('name', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={advisor.email || ''}
              onChange={(e) => handleAdvisorChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              โทรศัพท์
            </label>
            <input
              type="text"
              value={advisor.phone || ''}
              onChange={(e) => handleAdvisorChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
