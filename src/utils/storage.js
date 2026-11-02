import { INITIAL_DATA } from '../types/schema';

const STORAGE_KEY = 'buu_coop_logbook_data_v7';

export function loadSavedData() {
  try {
    // Clear old versions if existing
    localStorage.removeItem('buu_coop_logbook_data_v1');
    localStorage.removeItem('buu_coop_logbook_data_v2');
    localStorage.removeItem('buu_coop_logbook_data_v3');
    localStorage.removeItem('buu_coop_logbook_data_v4');
    localStorage.removeItem('buu_coop_logbook_data_v5');
    localStorage.removeItem('buu_coop_logbook_data_v6');

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      
      parsed.general = parsed.general || {};
      parsed.general.studentName = 'นายฐิติวุฒิ พุกภิญโญ';
      parsed.general.studentId = '67310069';
      parsed.general.companyName = 'บริษัท ซี เค ชูส์ (ประเทศไทย) จำกัด';
      parsed.general.companyAddress = '111/1 หมู่ 2 ตำบลคลองพลู อำเภอเขาคิชฌกูฏ จังหวัดจันทบุรี 22210';

      parsed.jobDesc = parsed.jobDesc || {};
      parsed.jobDesc.mentor = {
        ...parsed.jobDesc.mentor,
        name: 'นายสามศักดิ์ บุญจวง',
        position: 'หัวหน้าพัฒนาซอฟแวร์',
      };
      parsed.jobDesc.supervisor = {
        ...parsed.jobDesc.supervisor,
        name: 'นายจิรกานต์ วาทกิจ',
        position: 'ผู้ช่วยรองกรรมการผู้จัดการ',
      };

      parsed.orgChart = {
        imageUrl: '/org-chart.jpg',
        departmentInfo: 'สังกัด: ฝ่ายเทคโนโลยีสารสนเทศ ส่วน Software Development แผนกพัฒนาซอฟต์แวร์',
      };

      // Ensure weekly logs have full 19 weeks and content
      if (!parsed.weeklyLogs || parsed.weeklyLogs.length < 19 || !parsed.weeklyLogs[0]?.days?.some((d) => d.content && d.content.trim() !== '')) {
        parsed.weeklyLogs = INITIAL_DATA.weeklyLogs;
      }

      // Ensure workPlan tasks match projects
      if (!parsed.workPlan?.tasks || parsed.workPlan.tasks.length < 7) {
        parsed.workPlan = INITIAL_DATA.workPlan;
      }

      return { ...INITIAL_DATA, ...parsed };
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
