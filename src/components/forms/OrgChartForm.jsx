import React, { useRef } from 'react';
import { Network, Upload, Trash2, Image as ImageIcon } from 'lucide-react';

export default function OrgChartForm({ data, onChange }) {
  const { orgChart = {} } = data;
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        onChange({
          ...data,
          orgChart: {
            ...orgChart,
            imageUrl: uploadEvent.target?.result || '',
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    onChange({
      ...data,
      orgChart: {
        ...orgChart,
        imageUrl: '',
      },
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDepartmentChange = (val) => {
    onChange({
      ...data,
      orgChart: {
        ...orgChart,
        departmentInfo: val,
      },
    });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-white">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Network className="w-5 h-5" />
            <span>แบบฟอร์ม สกบ. 01/2: โครงสร้างองค์กร (Organization Structure)</span>
          </h2>
          <p className="text-amber-100 text-xs mt-1">
            อัปโหลดรูปภาพผังองค์กร และระบุส่วนงาน/ฝ่ายที่นิสิตสังกัดปฏิบัติงาน (หน้า 4)
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Image Upload Box */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              รูปภาพแผนผังองค์กร (Organization Chart Image)
            </label>

            {orgChart.imageUrl ? (
              <div className="relative border border-slate-300 rounded-lg p-3 bg-slate-50 flex flex-col items-center">
                <img
                  src={orgChart.imageUrl}
                  alt="ผังองค์กร"
                  className="max-h-80 object-contain rounded"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="mt-3 flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-medium rounded-md border border-rose-200 transition"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>ลบรูปภาพนี้</span>
                </button>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer bg-slate-50 hover:bg-amber-50/40 transition group"
              >
                <div className="w-12 h-12 rounded-full bg-slate-200 group-hover:bg-amber-100 flex items-center justify-center text-slate-500 group-hover:text-amber-600 mb-3 transition">
                  <Upload className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-slate-700 group-hover:text-amber-700">
                  คลิกเพื่อเลือกไฟล์รูปภาพผังองค์กร (.PNG, .JPG)
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  รองรับไฟล์รูปภาพความละเอียดสูง ระบบจะปรับขนาดลงเอกสารให้อัตโนมัติ
                </p>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* Department Info */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              หมายเหตุ: ระบุส่วนงานที่นิสิตปฏิบัติงานสหกิจศึกษา <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows="3"
              value={orgChart.departmentInfo || ''}
              onChange={(e) => handleDepartmentChange(e.target.value)}
              placeholder="เช่น สังกัด: ฝ่ายพัฒนาระบบและนวัตกรรมดิจิทัล ทีมพัฒนาเว็บแอปพลิเคชัน"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm leading-relaxed focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
