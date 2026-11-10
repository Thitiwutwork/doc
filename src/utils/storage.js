import { INITIAL_DATA } from '../types/schema';

const STORAGE_KEY = 'buu_coop_logbook_data_v14';
const NEW_ADDRESS = '499 หมู่ที่ 7 ถนนมะลิวัลย์ ตำบลบ้านทุ่ม อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40000';

export function loadSavedData() {
  try {
    // Clear all previous versions
    for (let i = 1; i <= 13; i++) {
      localStorage.removeItem(`buu_coop_logbook_data_v${i}`);
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);

      // Force update if old address is still present in saved data
      if (
        !parsed.general?.companyAddress ||
        parsed.general.companyAddress.includes('คลองพลู') ||
        parsed.general.companyAddress.includes('เขาคิชฌกูฏ') ||
        parsed.general.companyAddress.includes('22210')
      ) {
        parsed.general = parsed.general || {};
        parsed.general.companyAddress = NEW_ADDRESS;
      }

      return {
        ...INITIAL_DATA,
        ...parsed,
        general: { ...INITIAL_DATA.general, ...(parsed.general || {}) },
        advisor: { ...INITIAL_DATA.advisor, ...(parsed.advisor || {}) },
        jobDesc: {
          ...INITIAL_DATA.jobDesc,
          ...(parsed.jobDesc || {}),
          mentor: { ...INITIAL_DATA.jobDesc.mentor, ...(parsed.jobDesc?.mentor || {}) },
          supervisor: { ...INITIAL_DATA.jobDesc.supervisor, ...(parsed.jobDesc?.supervisor || {}) },
        },
        orgChart: { ...INITIAL_DATA.orgChart, ...(parsed.orgChart || {}) },
        workPlan: {
          ...INITIAL_DATA.workPlan,
          ...(parsed.workPlan || {}),
          tasks: parsed.workPlan?.tasks?.length ? parsed.workPlan.tasks : INITIAL_DATA.workPlan.tasks,
        },
        weeklyLogs: (parsed.weeklyLogs?.length ? parsed.weeklyLogs : INITIAL_DATA.weeklyLogs).map((w) => ({
          ...w,
          feedback: '',
        })),
        summaryReport: {
          ...INITIAL_DATA.summaryReport,
          ...(parsed.summaryReport || {}),
          workTypes: parsed.summaryReport?.workTypes?.length ? parsed.summaryReport.workTypes : INITIAL_DATA.summaryReport.workTypes,
          learningOutcomes: parsed.summaryReport?.learningOutcomes?.length ? parsed.summaryReport.learningOutcomes : INITIAL_DATA.summaryReport.learningOutcomes,
        },
      };
    }
  } catch (e) {
    console.error('Failed to load data from localStorage', e);
  }
  return INITIAL_DATA;
}

export function saveDataToStorage(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save data to localStorage', e);
  }
}

export function exportDataAsJSON(data) {
  const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(data, null, 2)
  )}`;
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', jsonString);
  const studentName = data.general?.studentName || 'coop_student';
  downloadAnchor.setAttribute('download', `บันทึกสหกิจศึกษา_${studentName}_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

export function importDataFromJSON(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        resolve(parsed);
      } catch (err) {
        reject(new Error('ไฟล์ JSON ไม่ถูกต้อง'));
      }
    };
    reader.onerror = () => reject(new Error('เกิดข้อผิดพลาดในการอ่านไฟล์'));
    reader.readAsText(file);
  });
}
