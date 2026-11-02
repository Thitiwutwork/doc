export const INITIAL_DATA = {
  // 1. หน้าปก & ข้อมูลทั่วไป
  general: {
    academicYear: '2569',
    faculty: 'คณะวิทยาศาสตร์และศิลปศาสตร์',
    university: 'มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี',
    trainingPeriod: '1 กรกฎาคม 2569 ถึง 31 ธันวาคม 2569',
    studentName: 'นายฐิติวุฒิ พุกภิญโญ',
    studentId: '67310069',
    curriculum: 'หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศและวิทยาการข้อมูล',
    major: 'เทคโนโลยีสารสนเทศและวิทยาการข้อมูล',
    companyName: 'บริษัท ซี เค ชูส์ (ประเทศไทย) จำกัด',
    companyAddress: '111/1 หมู่ 2 ตำบลคลองพลู อำเภอเขาคิชฌกูฏ จังหวัดจันทบุรี 22210',
  },

  // 2. ข้อมูลอาจารย์ที่ปรึกษา (ตามหน้า 2 ของ PDF เป๊ะ 100%)
  advisor: {
    name: 'อาจารย์ ดร.สิริสุดา บัวทองเกื้อ',
    email: 'sirisuda@buu.ac.th',
    phone: '099-182-0303',
  },

  // 3. ข้อมูลตำแหน่งงาน (สกบ. 01/1)
  jobDesc: {
    position: 'โปรแกรมเมอร์ / นักพัฒนาซอฟต์แวร์ (Programmer & Software Developer Intern)',
    responsibilities: `1. พัฒนา Web Dashboard แสดงข้อมูลของเสียจากการผลิต (Defect / Scrap Dashboard) แยกตามแต่ละไลน์การผลิต
2. ออกแบบและพัฒนาระบบบริหารจัดการทะเบียนทรัพย์สินและครุภัณฑ์ไอที (AssetCK / AssetLogix) พร้อมระบบสแกนบาร์โค้ดตรวจนับสต๊อก (PWA) และฟอร์มมาตรฐาน ISO (QF-IT-007, QF-IT-006)
3. พัฒนาและติดตั้งระบบชั่งน้ำหนักและยิงบาร์โค้ดผ่านพอร์ตสื่อสารอนุกรม RS-232 (Web Serial API & PySerial) ใช้งานจริงในสายการผลิต (เริ่มใช้งานจริง 17 ส.ค. 2569)
4. พัฒนาระบบบริการ API กลาง (Fastify Central API Service) เชื่อมต่อ Multi-Database Connection Pool และระบบแจ้งซ่อมบำรุงโรงงาน ShoesBox RepairCK
5. พัฒนาและปรับปรุงระบบจัดการแม่พิมพ์และมีดตัด STOCKLIN & STOCKLIN-FRONTEND แปลงเป็น TypeScript และระบบพิมพ์บาร์โค้ดสต๊อก
6. โครงการวิศวกรรมย้อนกลับและพัฒนายกระดับระบบจัดซื้อสู่ออนไลน์ (PR/PO & ERP Modernization จาก VB6 สู่ Angular 18 + Fastify v5 + MSSQL)
7. ติดตั้งระบบและดูแลความเสถียรบน Linux Enterprise Server ด้วย Docker Containers และ Nginx Reverse Proxy`,
    mentor: {
      name: 'นายสามศักดิ์ บุญจวง',
      position: 'หัวหน้าพัฒนาซอฟแวร์',
      email: 'samsak.b@ckshoes.co.th',
      phone: '081-999-1234',
    },
    supervisor: {
      name: 'นายจิรกานต์ วาทกิจ',
      position: 'ผู้ช่วยรองกรรมการผู้จัดการ',
      email: 'jirakan.w@ckshoes.co.th',
      phone: '089-888-5678',
    },
  },

  // 4. โครงสร้างองค์กร (สกบ. 01/2)
  orgChart: {
    imageUrl: '/org-chart.jpg',
    departmentInfo: 'สังกัด: ฝ่ายเทคโนโลยีสารสนเทศ ส่วน Software Development แผนกพัฒนาซอฟต์แวร์',
  },

  // 5. แผนปฏิบัติงานสหกิจศึกษา (สกบ. 02)
  workPlan: {
    tasks: [
      {
        id: 1,
        title: 'ปฐมนิเทศ และพัฒนา Web Dashboard แสดงข้อมูลของเสียจากการผลิต (Defect / Scrap Dashboard) แต่ละไลน์ผลิต',
        weeks: [true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      },
      {
        id: 2,
        title: 'วิเคราะห์ ออกแบบ และพัฒนาระบบบริหารจัดการทะเบียนทรัพย์สินและครุภัณฑ์ไอที (AssetCK / AssetLogix: คลังอุปกรณ์ & ทะเบียนทรัพย์สิน)',
        weeks: [false, false, false, true, true, true, true, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      },
      {
        id: 3,
        title: 'พัฒนาและติดตั้งระบบชั่งน้ำหนักและยิงบาร์โค้ดผ่านพอร์ตสื่อสารอนุกรม RS-232 เร่งด่วน (เริ่มใช้งานจริง 17-22 ส.ค. 2569)',
        weeks: [false, false, false, false, false, false, true, true, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      },
      {
        id: 4,
        title: 'พัฒนาระบบบริการ API กลาง (Fastify Central API Service) และเว็บแอปพลิเคชันระบบแจ้งซ่อมบำรุงโรงงาน ShoesBox RepairCK',
        weeks: [false, false, false, false, false, false, false, false, false, true, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      },
      {
        id: 5,
        title: 'พัฒนาระบบคลังมีดตัดและแม่พิมพ์ STOCKLIN & STOCKLIN-FRONTEND แปลงเป็น TypeScript และ QA Audit',
        weeks: [false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      },
      {
        id: 6,
        title: 'ปรับปรุงระบบพิมพ์บาร์โค้ดแบบชุด (Chunked Batch Printing), ปลดระวาง Electron, และจัดทำฟอร์ม QF-IT-007 / QF-IT-006',
        weeks: [false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      },
      {
        id: 7,
        title: 'โครงการวิศวกรรมย้อนกลับและพัฒนายกระดับระบบจัดซื้อสู่ออนไลน์ (PR/PO & ERP Modernization จาก VB6 สู่ Angular 18 + Fastify)',
        weeks: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false],
      },
      {
        id: 8,
        title: 'ทดสอบระบบบูรณาการ (End-to-End Testing), ตรวจสอบความเสถียร, จัดทำเอกสารคู่มือ และสรุปผลรายงานสหกิจศึกษา',
        weeks: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false],
      },
    ],
    studentSignDate: '1 กรกฎาคม 2569',
    mentorSignDate: '1 กรกฎาคม 2569',
  },

  // 6. บันทึกการปฏิบัติงานประจำสัปดาห์ (สกบ. 04/1) - กรอกครบถ้วน 19 สัปดาห์ตามเอกสารและโครงการจริง
  weeklyLogs: [
    // Week 1: 1 - 4 ก.ค. 2569
    {
      weekNumber: 1,
      startDate: '1 ก.ค. 2569',
      endDate: '4 ก.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '', content: '' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '', content: '' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '1 ก.ค. 2569', content: '- รายงานตัวและเข้าร่วมการปฐมนิเทศนิสิตสหกิจศึกษาวันแรก รับฟังนโยบายความปลอดภัยและกฎระเบียบของ บริษัท ซี เค ชูส์ (ประเทศไทย) จำกัด\n- รับมอบอุปกรณ์คอมพิวเตอร์ประจำตัว และติดตั้งสภาพแวดล้อมการพัฒนา (VS Code, Node.js, React, Tailwind CSS, Git)' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '2 ก.ค. 2569', content: '- เข้าพบพี่เลี้ยง นายสามศักดิ์ บุญจวง (หัวหน้าพัฒนาซอฟแวร์) เพื่อรับมอบหมายงานแรก: การพัฒนา Dashboard แสดงข้อมูลของเสียจากการผลิต (Defect / Scrap Dashboard) แยกตามแต่ละไลน์ผลิต\n- ลงพื้นที่ไลน์การผลิต (Production Line 1, 2, 3) เพื่อศึกษาจุดตรวจสอบและจำแนกประเภทของเสียในกระบวนการผลิตรองเท้า' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '3 ก.ค. 2569', content: '- รวบรวม Requirement ของหน้า Dashboard: ต้องการแสดงยอดผลิตรวม, จำนวนของเสีย (NG Count), อัตราของเสีย (% Defect Rate) แยกตามไลน์ผลิตและกะการทำงาน (Day/Night Shift)\n- ออกแบบร่าง UI Layout ร่วมกับพี่เลี้ยง' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '4 ก.ค. 2569', content: '- ศึกษาระบบจัดเก็บข้อมูลของเสียเดิมในฐานข้อมูลโรงงาน และโครงสร้างตารางข้อมูลการตรวจสอบคุณภาพในไลน์ผลิต' },
      ],
      feedback: 'นิสิตมีความกระตือรือร้นในการลงพื้นที่ศึกษาหน้างานไลน์ผลิต และเข้าใจโจทย์การทำ Dashboard ของเสียได้รวดเร็ว',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 2: 6 - 11 ก.ค. 2569
    {
      weekNumber: 2,
      startDate: '6 ก.ค. 2569',
      endDate: '11 ก.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '6 ก.ค. 2569', content: '- เริ่มต้นพัฒนาส่วนติดต่อผู้ใช้งาน (UI) ของ Dashboard แสดงข้อมูลผลิตเสียด้วย React และ Tailwind CSS\n- สร้างการ์ดแสดงผลสรุป KPI: Total Output, Good Count, Scrap/NG Count, Overall Defect Rate (%)' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '7 ก.ค. 2569', content: '- พัฒนาคอมโพเนนต์แสดงข้อมูลแยกตามไลน์ผลิต (Line 1, Line 2, Line 3) และติดตั้ง Chart.js เพื่อสร้างกราฟแท่งเปรียบเทียบของเสียในแต่ละไลน์ และกราฟวงกลมแสดงสัดส่วนประเภทข้อบกพร่อง' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '8 ก.ค. 2569', content: '- พัฒนาระบบตัวกรองข้อมูล (Filter Component) สำหรับเลือกดูข้อมูลตามช่วงเวลา (วัน/สัปดาห์/เดือน), กะการทำงาน (Day/Night Shift) และไลน์การผลิต' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '9 ก.ค. 2569', content: '- เชื่อมต่อหน้า Dashboard กับ RESTful API เพื่อดึงข้อมูลสถิติของเสียจากฐานข้อมูลการผลิต และจัดการ State การโหลดข้อมูล (Loading Indicator)' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '10 ก.ค. 2569', content: '- นำเสนอหน้า Dashboard ให้พี่เลี้ยงและวิศวกรฝ่ายผลิตทดลองใช้งาน, รับข้อเสนอแนะเรื่องการเพิ่มแถบสีแจ้งเตือนเมื่ออัตราของเสียเกินเกณฑ์มาตรฐาน (Threshold Alert)' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '11 ก.ค. 2569', content: '- สรุปข้อปรับปรุงและวางแผนทดสอบระบบแจ้งเตือนของเสียแบบเรียลไทม์' },
      ],
      feedback: 'Dashboard ออกแบบได้สวยงาม เข้าใจง่าย กราฟแสดงผลชัดเจน ช่วยให้มองเห็นปัญหาของเสียแต่ละไลน์ได้อย่างรวดเร็ว',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 3: 13 - 18 ก.ค. 2569
    {
      weekNumber: 3,
      startDate: '13 ก.ค. 2569',
      endDate: '18 ก.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '13 ก.ค. 2569', content: '- เพิ่มระบบแจ้งเตือนสี (Visual Threshold Alert) บนหน้า Dashboard เมื่อไลน์ผลิตใดมีอัตราของเสียสูงเกิน 3% ของกำลังการผลิต' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '14 ก.ค. 2569', content: '- ปรับปรุงประสิทธิภาพการดึงข้อมูลและการเรนเดอร์กราฟให้เสถียรและลื่นไหล รองรับการเปิดหน้าจอแสดงผลทิ้งไว้ตลอดวันบนจอมอนิเตอร์ห้องควบคุมการผลิต' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '15 ก.ค. 2569', content: '- ทดสอบเปิดใช้งาน Dashboard ในสายการผลิตจริง และตรวจสอบความถูกต้องของข้อมูลเปรียบเทียบกับเอกสารบันทึกของเสียหน้างาน' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '16 ก.ค. 2569', content: '- ส่งมอบระบบ Dashboard แสดงข้อมูลของเสียจากการผลิตให้แก่ฝ่ายผลิตใช้งาน และจัดทำคู่มือการใช้งานระบบเบื้องต้น' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '17 ก.ค. 2569', content: '- ประชุมรับฟังปัญหาและวิเคราะห์ความต้องการใหม่ของแผนกไอที: ปัญหาความยุ่งยากในการบันทึกและติดตามอุปกรณ์คอมพิวเตอร์และครุภัณฑ์ในโรงงาน' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '18 ก.ค. 2569', content: '- สำรวจเอกสารและกระบวนการทำงานเดิมในการยืม-คืนและส่งซ่อมอุปกรณ์คอมพิวเตอร์ในโรงงาน' },
      ],
      feedback: 'ส่งมอบระบบ Defect Dashboard ได้ตรงเวลา ฝ่ายผลิตนำไปเปิดมอนิเตอร์หน้างานจริงแล้ว',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 4: 20 - 25 ก.ค. 2569 (24 ก.ค. เริ่มต้น AssetLogix Repository)
    {
      weekNumber: 4,
      startDate: '20 ก.ค. 2569',
      endDate: '25 ก.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '20 ก.ค. 2569', content: '- รวบรวมข้อมูลรายการอุปกรณ์ไอทีและคอมพิวเตอร์ทั้งหมดในโรงงานที่บันทึกอยู่ในไฟล์ Excel เดิม เพื่อศึกษาโครงสร้างข้อมูล' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '21 ก.ค. 2569', content: '- สรุปปัญหาการจัดการครุภัณฑ์เดิม: ข้อมูลกระจายหลายไฟล์, ไม่ทราบผู้ถือครองปัจจุบัน, การตรวจนับสต๊อกประจำปีล่าช้าและผิดพลาด' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '22 ก.ค. 2569', content: '- ออกแบบขอบเขตระบบบริหารจัดการทรัพย์สินและครุภัณฑ์ไอทีองค์กร (AssetCK / AssetLogix) ร่วมกับพี่เลี้ยง' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '23 ก.ค. 2569', content: '- ออกแบบสถาปัตยกรรมระบบ Web Application: Frontend (React/TypeScript, Tailwind CSS), Backend (Node.js, Express), Database (Microsoft SQL Server)' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '24 ก.ค. 2569', content: '- จัดตั้งโครงสร้างโปรเจกต์ (Initial Repository Setup) Assetmanagement.git, ออกแบบตารางข้อมูลหลักแยกตาม Category (PC, Notebook, Tablet) พร้อมฟิลด์ Specification เฉพาะ' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '25 ก.ค. 2569', content: '- ติดตั้งและทดสอบการเชื่อมต่อฐานข้อมูล SQL Server เบื้องต้นสำหรับระบบ AssetCK' },
      ],
      feedback: 'วางโครงสร้างโปรเจกต์ AssetCK ได้เป็นระเบียบตามมาตรฐาน ออกแบบโครงสร้างตารางได้ครอบคลุมประเภทอุปกรณ์ไอที',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 5: 27 ก.ค. - 1 ส.ค. 2569
    {
      weekNumber: 5,
      startDate: '27 ก.ค. 2569',
      endDate: '1 ส.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '27 ก.ค. 2569', content: '- พัฒนาระบบ Data Model สำหรับอุปกรณ์คอมพิวเตอร์ (PC, Notebook, Tablet) และความสัมพันธ์ของตารางอุปกรณ์' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '28 ก.ค. 2569', content: '- ออกแบบระบบความปลอดภัย LAN Guard: ตรวจสอบ IP Address ให้อนุญาตเฉพาะผู้ใช้งานในวงแลนโรงงาน (RFC 1918) เพื่อความปลอดภัย' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '29 ก.ค. 2569', content: '- พัฒนาหน้าจอแสดงรายการทรัพย์สินเบื้องต้น พร้อมระบบคัดกรองและแบ่งหน้า (Pagination)' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '30 ก.ค. 2569', content: '- พัฒนาฟอร์มบันทึกข้อมูลอุปกรณ์ใหม่ รองรับการกรอกข้อมูลสเปก (CPU, RAM, Storage, OS, Serial Number)' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '31 ก.ค. 2569', content: '- ทดสอบการบันทึกข้อมูลและตรวจสอบการ Validation ฟิลด์ข้อมูลที่จำเป็นในฝั่ง Backend' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '1 ส.ค. 2569', content: '- ทบทวนโค้ดและปรับปรุงการจัดการ Error Handling ในการติดต่อฐานข้อมูล' },
      ],
      feedback: 'ระบบความปลอดภัย LAN Guard มีประโยชน์มาก ช่วยป้องกันการเข้าถึงข้อมูลครุภัณฑ์จากภายนอกโรงงานได้อย่างรัดกุม',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 6: 3 - 8 ส.ค. 2569 (5 ส.ค. พัฒนา Dashboard & Possessor Records)
    {
      weekNumber: 6,
      startDate: '3 ส.ค. 2569',
      endDate: '8 ส.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '3 ส.ค. 2569', content: '- พัฒนาหน้าจอ Dashboard ของระบบ AssetCK แสดงผลสถิติจำนวนอุปกรณ์แยกตามประเภทและสถานะ' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '4 ส.ค. 2569', content: '- พัฒนาเมนูนําทาง (Sidebar Navigation) และจัดกลุ่มฟังก์ชันงานหลักของระบบทรัพย์สิน' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '5 ส.ค. 2569', content: '- สร้างโครงร่างหน้า Dashboard แสดงสถิติจำนวนอุปกรณ์แยกตามสถานะ (พร้อมใช้, ถูกยืม, ส่งซ่อม, จำหน่าย), จัดเตรียมโมดูลบันทึกข้อมูลและประวัติการถือครองอุปกรณ์ (Possessor Records)' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '6 ส.ค. 2569', content: '- พัฒนาระบบค้นหาและกรองข้อมูลอุปกรณ์ตามชื่อผู้ถือครอง, แผนก, และประเภทอุปกรณ์' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '7 ส.ค. 2569', content: '- ปรับปรุง UI ให้รองรับการแสดงผลแบบตารางและแบบการ์ด เพื่อให้ผู้ใช้งานเลือกดูได้ตามความสะดวก' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '8 ส.ค. 2569', content: '- สรุปสถานะการพัฒนา AssetCK โมดูลคลังอุปกรณ์และเตรียมขึ้นระบบทดสอบ' },
      ],
      feedback: 'โครงสร้าง UI ของระบบ AssetCK ใช้งานง่าย จัดหมวดหมู่อุปกรณ์ได้ชัดเจน',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 7: 10 - 15 ส.ค. 2569 (งานด่วน RS232 เข้ามา)
    {
      weekNumber: 7,
      startDate: '10 ส.ค. 2569',
      endDate: '15 ส.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '10 ส.ค. 2569', content: '- พัฒนาระบบประวัติการถือครองอุปกรณ์ (Possessor History) ในระบบ AssetCK ต่อเนื่อง' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '11 ส.ค. 2569', content: '- ได้รับมอบหมายงานด่วนพิเศษจากหัวหน้าแผนก: ให้หยุดงาน AssetCK ชั่วคราว และมาพัฒนา "ระบบชั่งน้ำหนักและยิงบาร์โค้ด RS-232 ในสายการผลิต" เพื่อนำไปใช้งานจริงวันที่ 17 สิงหาคม' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '12 ส.ค. 2569', content: '- ศึกษาระเบียบวิธีสื่อสารผ่าน Serial Port RS-232 ของเครื่องชั่งน้ำหนักดิจิทัลในสายการผลิต และโปรโตคอลการส่งค่า Baud rate / Parity bit' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '13 ส.ค. 2569', content: '- เริ่มต้นพัฒนาโปรเจกต์ Rs232 ด้วย Python, FastAPI, PySerial และ JavaScript Web Serial API เพื่ออ่านค่าน้ำหนักจากเครื่องชั่งโดยตรงผ่านเบราว์เซอร์' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '14 ส.ค. 2569', content: '- พัฒนาระบบดักจับสัญญาณบาร์โค้ดจากเครื่องยิง Barcode Scanner และแมปปิ้งค่าน้ำหนักที่ชั่งได้เข้ากับรหัสกล่องและออเดอร์ใน MSSQL' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '15 ส.ค. 2569', content: '- ทดสอบโปรแกรม RS-232 ร่วมกับเครื่องชั่งตัวอย่างในห้องทดลองไอที ปรับแต่ง Buffer การอ่านค่าไม่ให้เกิดข้อมูลขาดหาย' },
      ],
      feedback: 'นิสิตปรับตัวและสลับมาทำงานด่วน RS-232 ได้อย่างรวดเร็ว มีความเข้าใจในพอร์ตสื่อสารฮาร์ดแวร์เป็นอย่างดี',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 8: 17 - 22 ส.ค. 2569 (17 ส.ค. RS232 ใช้งานจริง, 19 ส.ค. กลับมาทำ AssetCK + Barcode Scanner)
    {
      weekNumber: 8,
      startDate: '17 ส.ค. 2569',
      endDate: '22 ส.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '17 ส.ค. 2569', content: '- นำระบบชั่งน้ำหนักและยิงบาร์โค้ด RS232 ไปติดตั้งและเปิดใช้งานจริงหน้างานสายการผลิตตามกำหนดการ, มอนิเตอร์การอ่านค่าน้ำหนักและการบันทึกข้อมูลลงฐานข้อมูลจริง' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '18 ส.ค. 2569', content: '- ติดตามการใช้งานหน้างาน พบปัญหาการหลุดการเชื่อมต่อ Serial Port เมื่อพนักงานปิด-เปิดสวิตช์เครื่องชั่ง จึงเพิ่มระบบ Auto-Reconnect' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '19 ส.ค. 2569', content: '- กลับมาพัฒนาโปรเจกต์ AssetCK ต่อตามแผนงาน: ได้รับโจทย์เพิ่มให้พัฒนาระบบสแกนบาร์โค้ด (Barcode Scanner Module) เพื่อใช้ตรวจนับครุภัณฑ์' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '20 ส.ค. 2569', content: '- พัฒนาโมดูลสแกนบาร์โค้ดใน AssetCK รองรับทั้งเครื่องยิงบาร์โค้ดแบบ USB และการสแกนผ่านกล้องอุปกรณ์พกพา' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '21 ส.ค. 2569', content: '- ทดสอบการสแกนค้นหาอุปกรณ์ในคลังครุภัณฑ์เพื่อดูข้อมูลสเปกและผู้ถือครองได้ทันที' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '22 ส.ค. 2569', content: '- ปรับปรุงระบบชั่งน้ำหนักและยิงบาร์โค้ด RS232: อัปเดตการอ่านค่า RS-232 ให้เสถียรยิ่งขึ้น, รองรับการดึงข้อมูลจาก SQL Server 172.24.0.43:1433, ปรับแก้ปัญหากล่องที่มีน้ำหนักซ้ำและบันทึกผลการทดสอบ' },
      ],
      feedback: 'ระบบ RS232 นำไปใช้งานจริงในสายการผลิตตั้งแต่วันที่ 17 ส.ค. ได้สำเร็จอย่างราบรื่น ช่วยลดข้อผิดพลาดในการบันทึกน้ำหนักได้อย่างมาก',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 9: 24 - 29 ส.ค. 2569 (QF-IT-007, Sell Record, Automated Test Suite 19/19)
    {
      weekNumber: 9,
      startDate: '24 ส.ค. 2569',
      endDate: '29 ส.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '24 ส.ค. 2569', content: '- ออกแบบระบบออกเอกสารส่งมอบ-รับคืนอุปกรณ์คอมพิวเตอร์ตามแบบฟอร์มมาตรฐานบริษัท' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '25 ส.ค. 2569', content: '- พัฒนาระบบทะเบียนประวัติผู้ถือครองและสิทธิ์ผู้ใช้งาน (Possessor Records): ผูกอุปกรณ์เข้ากับรหัสพนักงานและชื่อผู้ถือครอง, บันทึกการส่งมอบอุปกรณ์คอมพิวเตอร์' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '26 ส.ค. 2569', content: '- พัฒนาระบบพิมพ์เอกสารส่งมอบ-รับคืนอุปกรณ์คอมพิวเตอร์ตามแบบฟอร์มมาตรฐาน QF-IT-007 จัดหน้าตาราง 20 แถวต่อหน้า A4' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '27 ส.ค. 2569', content: '- พัฒนาระบบบันทึกการตัดขายอุปกรณ์ (Sell Record) บันทึกข้อมูลคอมพิวเตอร์ที่ปลดระวางเข้าสู่ตาราง IT_COMPUTER_SELL' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '28 ส.ค. 2569', content: '- พัฒนาชุดทดสอบอัตโนมัติ (Automated Test Suite) 19 ข้อ ครอบคลุมการคำนวณอายุเครื่อง, Pagination, และการจำกัดสิทธิ์ผู้ใช้' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '29 ส.ค. 2569', content: '- รันการทดสอบ Unit Tests ผ่านครบถ้วน 19/19 ข้อ และคอนฟิก Dockerfile สำหรับระบบ AssetCK' },
      ],
      feedback: 'ระบบเอกสาร QF-IT-007 จัดรูปแบบได้ตรงตามฟอร์มทางการของบริษัท และชุดทดสอบอัตโนมัติช่วยเพิ่มความเชื่อมั่นในระบบได้อย่างดี',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 10: 31 ส.ค. - 5 ก.ย. 2569 (Fastify API, Service Request, Multi-DB Pool)
    {
      weekNumber: 10,
      startDate: '31 ส.ค. 2569',
      endDate: '5 ก.ย. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '31 ส.ค. 2569', content: '- ออกแบบสถาปัตยกรรมบริการ API กลาง (Fastify Central API Service) สำหรับรองรับงานแจ้งซ่อมบำรุงและเชื่อมต่อหลายระบบ' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '1 ก.ย. 2569', content: '- พัฒนา REST API และตัวกรองประเภทอุปกรณ์ใน AssetCK: เชื่อมต่อ API ดึงข้อมูลคอมพิวเตอร์, ปรับปรุงระบบค้นหาและฟิลเตอร์ประเภทอุปกรณ์ (PC, Notebook, Tablet)' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '2 ก.ย. 2569', content: '- เซ็ตอัปโปรเจกต์ fastify-api ติดตั้ง Knex.js จัดการ Connection Pool เชื่อมต่อฐานข้อมูลระบบแจ้งซ่อมและฐานข้อมูลกลางพร้อมกัน' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '3 ก.ย. 2569', content: '- พัฒนา Service Request Endpoint ใน Fastify API และทดสอบระบบสิทธิ์ Role-Based Access Control (Technician, Requester, Admin)' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '4 ก.ย. 2569', content: '- กำหนด Business Rules ใน Fastify: จำกัดเงื่อนไขการเปลี่ยนช่างได้เฉพาะสถานะ รอเข้าซ่อม และป้องกันการแก้ข้อมูลผิดสถานะ' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '5 ก.ย. 2569', content: '- ทดสอบประสิทธิภาพการทำงานของ Fastify Central API ภายใต้การเรียกใช้งานพร้อมกันหลายจุด' },
      ],
      feedback: 'การเลือกใช้ Fastify API ช่วยให้การตอบสนองรวดเร็วมาก การจัดการสิทธิ์และ Business Rules มีความรัดกุม',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 11: 7 - 12 ก.ย. 2569 (Double-weighing, RepairCK, Maintenance History)
    {
      weekNumber: 11,
      startDate: '7 ก.ย. 2569',
      endDate: '12 ก.ย. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '7 ก.ย. 2569', content: '- พัฒนาระบบตรวจเช็คน้ำหนักกล่องรอบที่ 1 และรอบที่ 2 (Double-weighing logic) ในระบบ RS232: คำนวณส่วนต่างน้ำหนักและแจ้งเตือนเมื่อน้ำหนักผิดปกติ' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '8 ก.ย. 2569', content: '- ทดสอบระบบ Double-weighing ร่วมกับฝ่ายควบคุมคุณภาพสายการผลิตเพื่อสอบเทียบความแม่นยำ' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '9 ก.ย. 2569', content: '- พัฒนาระบบประวัติการซ่อมบำรุงและการโยกย้ายอุปกรณ์ใน AssetCK: เพิ่มโมดูล Maintenance History และ Transfer History แสดงประวัติการซ่อมและย้ายแผนก' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '10 ก.ย. 2569', content: '- เริ่มต้นพัฒนาเว็บแอปพลิเคชันระบบแจ้งซ่อมบำรุงโรงงาน ShoesBox RepairCK (repairck_web) ด้วย FastAPI และ Docker' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '11 ก.ย. 2569', content: '- พัฒนาหน้าจอแจ้งซ่อมที่ยืดหยุ่น รองรับการแจ้งซ่อมทั้งอุปกรณ์ที่มีและไม่มีหมายเลขเครื่องจักรประจำตัว (eqno optional)' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '12 ก.ย. 2569', content: '- พัฒนาระบบ Request Service และจัดโครงสร้างโฟลเดอร์รูปภาพแจ้งซ่อม: จัดการอัปโหลดและแยกหมวดหมู่รูปภาพตามวันและแผนก' },
      ],
      feedback: 'ระบบ Double-weighing ช่วยป้องกันการส่งกล่องน้ำหนักไม่มาตรฐานได้อย่างมีประสิทธิภาพ และระบบประวัติซ่อมใน AssetCK บันทึกข้อมูลได้ละเอียด',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 12: 14 - 19 ก.ย. 2569 (Mobile Stock Audit PWA, Bun-Node Hybrid, IT Hardware Fixes)
    {
      weekNumber: 12,
      startDate: '14 ก.ย. 2569',
      endDate: '19 ก.ย. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '14 ก.ย. 2569', content: '- พัฒนาระบบติดตามสถานะงานซ่อมแบบ Real-time บนระบบ ShoesBox RepairCK สำหรับทีมช่างซ่อมบำรุง' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '15 ก.ย. 2569', content: '- บันทึกการตรวจนับสต๊อกและตรวจสอบประวัติการยืม-คืนใน AssetCK: พัฒนาระบบ Mobile Audit ผ่านกล้องมือถือ (PWA) พร้อมระบบเสียงตอบสนองและอัปเดตสต๊อกทันที' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '16 ก.ย. 2569', content: '- ทดสอบนำโทรศัพท์มือถือไปสแกนบาร์โค้ดตรวจนับสต๊อกเครื่องคอมพิวเตอร์จริงในแต่ละแผนก พบว่าลดเวลาตรวจนับได้กว่า 70%' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '17 ก.ย. 2569', content: '- ตรวจสอบและแก้ไขปัญหาฮาร์ดแวร์และเสถียรภาพระบบเครื่องคอมพิวเตอร์ในโรงงาน: ร่วมกับทีมไอทีเข้าแก้ไขคอมพิวเตอร์และระบบเครือข่ายหน้างาน' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '18 ก.ย. 2569', content: '- พัฒนาระบบคะแนนรีวิวและความพึงพอใจของงานแจ้งซ่อมบำรุง (Rating & Feedback) ใน RepairCK' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '19 ก.ย. 2569', content: '- พัฒนาฟังก์ชันให้คะแนนรีวิวงานซ่อม และคอนฟิกสภาพแวดล้อม Bun-Node.js Hybrid เพื่อเพิ่มความเร็วในการประมวลผลเซิร์ฟเวอร์' },
      ],
      feedback: 'ระบบ Mobile Stock Audit ผ่านมือถือใช้งานได้ดีมาก พนักงานสแกนตรวจนับสต๊อกได้อย่างรวดเร็วและเสียงแจ้งเตือนช่วยให้ทำงานง่ายขึ้น',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 13: 21 - 26 ก.ย. 2569 (Hybrid Possessor, Smart Spec Copy, QF-IT-006 PDF)
    {
      weekNumber: 13,
      startDate: '21 ก.ย. 2569',
      endDate: '26 ก.ย. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '21 ก.ย. 2569', content: '- วิเคราะห์ปัญหาข้อมูลผู้ถือครองอุปกรณ์ที่มีความหลากหลาย (เช่น ถือครองโดยบุคคล, แผนก, หรือเป็นเครื่องส่วนกลาง)' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '22 ก.ย. 2569', content: '- พัฒนาระบบรองรับการระบุตัวผู้ถือครองแบบผสม (Hybrid Possessor Record) ใน AssetCK: รองรับทั้งชื่อพนักงานและชื่อแผนกส่วนกลาง' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '23 ก.ย. 2569', content: '- ออกแบบระบบคัดลอกสเปกอุปกรณ์อัจฉริยะ (Smart Spec Copy) เพื่อให้เจ้าหน้าที่ไม่ต้องกรอกข้อมูลสเปกซ้ำซ้อนเมื่อเพิ่มเครื่องรุ่นเดียวกัน' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '24 ก.ย. 2569', content: '- พัฒนาระบบ Smart Spec Copy และระบบพิมพ์รายงานการซ่อมบำรุงมาตรฐาน QF-IT-006 เป็นไฟล์ PDF พร้อมตัวกรองตามเดือนและปี' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '25 ก.ย. 2569', content: '- ทดสอบการส่งออกเอกสาร QF-IT-006 PDF และตรวจสอบความถูกต้องของสถิติค่าใช้จ่ายในการซ่อมบำรุง' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '26 ก.ย. 2569', content: '- ออกแบบสถาปัตยกรรมเครือข่ายเซิร์ฟเวอร์โรงงานเพื่อเตรียมรวมการทำงานของระบบต่างๆ เข้าด้วยกัน' },
      ],
      feedback: 'ฟังก์ชัน Smart Spec Copy ช่วยลดเวลาในการลงทะเบียนอุปกรณ์ใหม่ลงได้มาก และรายงาน QF-IT-006 ตรงตามเกณฑ์มาตรฐาน ISO',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 14: 28 ก.ย. - 3 ต.ค. 2569 (Central Reverse Proxy Nginx, RepairCK Container, External Repair)
    {
      weekNumber: 14,
      startDate: '28 ก.ย. 2569',
      endDate: '3 ต.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '28 ก.ย. 2569', content: '- ออกแบบสถาปัตยกรรม Central Reverse Proxy รวมเซิร์ฟเวอร์: จัดการ Routing ด้วย Nginx รวมโดเมนภายใน (asset.ck.local, repair.ck.local, scale.ck.local)' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '29 ก.ย. 2569', content: '- พัฒนาโมดูลบันทึกการส่งซ่อมภายนอกและการรับเครื่องคืนใน AssetCK: บันทึกชื่อร้าน/บริษัทที่ส่งซ่อม, เลขที่ใบส่งซ่อม, และราคาค่าซ่อม' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '30 ก.ย. 2569', content: '- คอนฟิก Nginx Reverse Proxy บนเซิร์ฟเวอร์ Linux Enterprise (172.24.0.145) และจัดการ SSL Certificate โดเมนภายใน' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '1 ต.ค. 2569', content: '- สร้าง Containerization ระบบ RepairCK และปรับปรุง Logger ใน Fastify: คอนฟิก docker-compose.yml แยกพอร์ตและเครือข่าย Docker ภายในอย่างอิสระ' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '2 ต.ค. 2569', content: '- ทดสอบการเรียกใช้งานระบบผ่าน URL โดเมนเสมือนจริง และตรวจสอบการทำงานของ Docker Containers' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '3 ต.ค. 2569', content: '- มอนิเตอร์การทำงานของ Nginx และบันทึกผลการทดสอบการกระจายทราฟฟิก' },
      ],
      feedback: 'การจัดวาง Nginx Reverse Proxy และ Docker แยกบริการช่วยให้ระบบเป็นระเบียบ ปลอดภัย และดูแลรักษาง่ายขึ้นมาก',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 15: 5 - 10 ต.ค. 2569 (Purchase Module, Chunked Print, STOCKLIN TS Migration)
    {
      weekNumber: 15,
      startDate: '5 ต.ค. 2569',
      endDate: '10 ต.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '5 ต.ค. 2569', content: '- พัฒนาโมดูล Purchase และระบบตรวจสอบเวอร์ชันระบบ (Version Check): บันทึกข้อมูลการจัดซื้ออุปกรณ์ วันที่ซื้อ และระยะเวลารับประกัน' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '6 ต.ค. 2569', content: '- ย้ายสเปกอุปกรณ์ไปยังรายละเอียดคอมพิวเตอร์และทำความสะอาดโค้ด: ย้ายข้อมูลสเปกเฉพาะเข้าโมดูลเฉพาะเพื่อลดความซ้ำซ้อนของโค้ด' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '7 ต.ค. 2569', content: '- แก้ปัญหาการพิมพ์ค้าง (Chunked Print Generation) ใน AssetCK: แบ่งการสร้างภาพบาร์โค้ดเป็นชุดๆ พร้อมแถบ Progress Bar และทำ Print CSS Isolation' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '8 ต.ค. 2569', content: '- ทำงานกับโปรเจกต์ STOCKLIN & STOCKLIN-FRONTEND (ระบบคลังมีดตัดหนัง มีดตัดซับ และแม่พิมพ์): แปลงโค้ดเป็น TypeScript และทำ QA Audit' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '9 ต.ค. 2569', content: '- ปรับปรุงระบบพิมพ์สติกเกอร์หลายแถว (Multi-row Batch Printing) ปรับขนาดฟอนต์และระยะขอบให้พอดีกับกระดาษสติกเกอร์บาร์โค้ด 3 ดวงต่อแถว' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '10 ต.ค. 2569', content: '- พัฒนาระบบพิมพ์บาร์โค้ดแบบเลือกหลายรายการ (Multi-Select & Batch Printing): ทำ Checklist พร้อมตัวกรองหมวดหมู่และปุ่มสั่งพิมพ์ชุด' },
      ],
      feedback: 'การแก้ไขปัญหาเบราว์เซอร์ค้างด้วย Chunked Print และระบบ Multi-Select พิมพ์บาร์โค้ดช่วยประหยัดกระดาษสติกเกอร์และเวลาทำงานได้ยอดเยี่ยม',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 16: 12 - 17 ต.ค. 2569 (RS232 Focus Lock, Response Time Audit, 15 ต.ค. เริ่ม ERP Modernization VB6)
    {
      weekNumber: 16,
      startDate: '12 ต.ค. 2569',
      endDate: '17 ต.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '12 ต.ค. 2569', content: '- ปรับปรุงระบบ RS232: ปรับปรุงตัวนับกล่องรายวัน (Daily Box Counter), พัฒนาระบบ Focus Lock & Navigation ป้องกันช่องยิงบาร์โค้ดหลุดโฟกัส' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '13 ต.ค. 2569', content: '- ทดสอบประสิทธิภาพระบบเครือข่ายและเวลาตอบสนอง API (Response Time <100-200ms), พัฒนาระบบพิมพ์บาร์โค้ดสต๊อกมีดใน STOCKLIN' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '14 ต.ค. 2569', content: '- ตรวจสอบความเรียบร้อยของโปรเจกต์ AssetCK, RS232, RepairCK, STOCKLIN และสรุปผลการส่งมอบงานระยะที่ 1' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '15 ต.ค. 2569', content: '- เข้ารับมอบหมายโครงการใหญ่ระยะที่ 2: โครงการศึกษาวิศวกรรมย้อนกลับและพัฒนายกระดับระบบจัดซื้อสู่ออนไลน์ (PR/PO & ERP Modernization จาก VB6 สู่ Web App)\n- ติดตั้ง Windows XP VM บน VirtualBox เพื่อเปิดโปรเจกต์ Dev_PR2010 และ Dev_PO2010, ทดสอบเชื่อมต่อฐานข้อมูล UNIX_BK_VN (172.24.0.43:1433)' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '16 ต.ค. 2569', content: '- วางโครงสร้างสถาปัตยกรรมโปรเจกต์ web-app ด้วย Angular 18 (Standalone Components), ติดตั้ง TailwindCSS 3.4, และริเริ่ม Backend API ด้วย Fastify v5 และ TypeScript' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '17 ต.ค. 2569', content: '- พัฒนา 7 คอมโพเนนต์หลักฝั่งผลิตและ QC ใน Angular 18: style-master, formula-management, inspection, supplier-qc, vendor-return, material-lock, po-payment' },
      ],
      feedback: 'นิสิตมีความสามารถในการเรียนรู้เทคโนโลยีใหม่อย่าง Angular 18 ได้รวดเร็ว และสามารถแกะซอร์สโค้ดเดิมของระบบ VB6 ได้อย่างละเอียดรอบคอบ',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 17: 19 - 24 ต.ค. 2569 (Security Audit, CAL_CARTON VB6 Reverse Eng, QF-IT-007 Form Sync, Electron Deprecation)
    {
      weekNumber: 17,
      startDate: '19 ต.ค. 2569',
      endDate: '24 ต.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '19 ต.ค. 2569', content: '- Security Audit: เคลียร์ DB Credentials ออกจากโค้ด, วิเคราะห์แม่แบบรายงาน Crystal Reports / JasperReports (CR_PO_0101, CR_PO_DETAIL, REPORT_PR_1) และพัฒนาระบบแบ่งหน้ารายงาน (20 แถวต่อ A4)' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '20 ต.ค. 2569', content: '- พัฒนา Backend Routes: service_request.ts, tools_route.ts, inline_qc.ts, ปรับแต่ง Knex & Tedious Connection Pool เพื่อลด Latency ในการดึงข้อมูลจาก SQL Server' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '21 ต.ค. 2569', content: '- วิศวกรรมย้อนกลับฟังก์ชัน CAL_CARTON ใน VB6 ถอดสมการคำนวณกล่องใน (Inner Box) และลังกระดาษบรรจุรวม (Master Carton)\n- ทำการคลีนระบบ AssetCK กำจัด Dead Code และปลดระวาง Electron (-536 MB, ลดไป 404 packages)' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '22 ต.ค. 2569', content: '- พัฒนาตรรกะคำนวณบรรจุภัณฑ์เป็น TypeScript Service ใน Angular 18 สร้าง carton-calc.component.ts, ตรวจสอบผลลัพธ์เทียบกับ VB6 เดิมตรงกัน 100%\n- ศึกษาและบันทึกภาพถ่ายฟอร์มจริง QF-IT-007 (แบบฟอร์มขอยืม-คืนอุปกรณ์คอมพิวเตอร์)' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '23 ต.ค. 2569', content: '- ปรับปรุง UX/UI ทั่วระบบ AssetCK ให้ฟอร์มยืม-คืน QF-IT-007 ตรงตามแบบฟอร์มกระดาษจริง 100%, เชื่อมโยง carton-calc.component.ts เข้ากับตารางออเดอร์ผลิตจริง TSOMAS_TAB' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '24 ต.ค. 2569', content: '- ประชุมทดสอบฟังก์ชันคำนวณกล่องและบรรจุภัณฑ์ร่วมกับฝ่ายวางแผนการผลิต และทดสอบการสร้างเอกสาร QF-IT-007 PDF' },
      ],
      feedback: 'การถอดสมการคำนวณบรรจุภัณฑ์จาก VB6 มาเป็น TypeScript ทำได้ถูกต้องแม่นยำ 100% และการคลีนโค้ดปลดระวาง Electron ช่วยให้ระบบเร็วขึ้นมาก',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 18: 26 - 31 ต.ค. 2569 (PR/PO System, JWT RBAC, Thai BahtText, DB Schema & Table Mapping)
    {
      weekNumber: 18,
      startDate: '26 ต.ค. 2569',
      endDate: '31 ต.ค. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '26 ต.ค. 2569', content: '- พัฒนาหน้าจอสร้างใบขอซื้อ pr-create.component.ts ตามสูตร BOM, พัฒนาคอมโพเนนต์แสดงสถิติสต็อกคงคลัง stock-chart.component.ts, ปรับปรุง Report Center (Zoom, Quick Autofill Filter)' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '27 ต.ค. 2569', content: '- วิเคราะห์ระบบความปลอดภัยเดิมในตาราง USER_TAB, KKBM_USER_PERMIT_TAB, ถอดรหัสโครงสร้างบิตสิทธิ์ ALLOW_PROGRAM, ออกแบบสถาปัตยกรรม JWT Authentication & RBAC' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '28 ต.ค. 2569', content: '- พัฒนาระบบยืนยันตัวตน JWT Authentication (Guard & Interceptor), พัฒนาโมดูลคลังสินค้า: ตรวจรับสินค้า goods-receipt.component.ts, เบิกจ่ายวัตถุดิบ material-requisition.component.ts, บัตรสต็อก stock-card.component.ts' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '29 ต.ค. 2569', content: '- PO Phase 1: พัฒนาระบบใบสั่งซื้อครบวงจร, คำนวณ VAT 7%, สะกดเงินบาทไทย thai-baht-text.ts, อนุมัติ 2 ระดับ (P->B->A), แจ้งเตือน Overdue, PR Phase 2 (Send Back, Recall), ยกเลิก PO คืนสถานะ PR, ปรับฟอนต์ Prompt ทั่วระบบ และจัดทำ Data Dictionary 12 ตาราง' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '30 ต.ค. 2569', content: '- วิศวกรรมย้อนกลับหน้าจอและคอนโทรลทั้งหมดของ VB6 (u_pr_new, ListView4), แมปปิ้งทุกคอลัมน์ลง PR_PO_FORM_AND_TABLE_MAPPING.md, แปลงเป็นเอกสาร PDF มาตรฐาน table.pdf (1.09 MB)' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '31 ต.ค. 2569', content: '- ทดสอบระบบแบบบูรณาการ (Integration & End-to-End Testing) ทุกโมดูล: สร้าง PR -> อนุมัติ PR -> เปิด PO -> รับสินค้า GRN -> เบิกจ่ายวัตถุดิบ, จัดทำรายงานบันทึกการฝึกงานฉบับสมบูรณ์ (Markdown & PDF)' },
      ],
      feedback: 'ระบบ ERP Modernization และการทำ Reverse Engineering จาก VB6 สู่ Web Application ประสบความสำเร็จอย่างสมบูรณ์แบบ ทั้งระบบสิทธิ์ การคำนวณเงินบาท และเอกสารแมปปิ้งมีความเป็นมืออาชีพสูง',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },

    // Week 19: 2 - 7 พ.ย. 2569 (Final Integration, Staging Verification, Knowledge Transfer)
    {
      weekNumber: 19,
      startDate: '2 พ.ย. 2569',
      endDate: '7 พ.ย. 2569',
      days: [
        { dayIndex: 1, dayLabel: 'วันจันทร์', date: '2 พ.ย. 2569', content: '- ทดสอบการทำงานร่วมกันระหว่างระบบใหม่และฐานข้อมูล UNIX_BK_VN ในสภาพแวดล้อม Staging Server ตรวจสอบความถูกต้องของการบันทึกข้อมูลทุกตาราง' },
        { dayIndex: 2, dayLabel: 'วันอังคาร', date: '3 พ.ย. 2569', content: '- ประชุมสรุปผลสัมฤทธิ์การดำเนินงานโครงการทั้ง 6 ระบบร่วมกับหัวหน้างาน (นายสามศักดิ์ บุญจวง) และผู้บังคับบัญชา (นายจิรกานต์ วาทกิจ)' },
        { dayIndex: 3, dayLabel: 'วันพุธ', date: '4 พ.ย. 2569', content: '- จัดทำเอกสารคู่มือผู้ดูแลระบบ (System Administrator Manual) และเอกสาร API Reference ของ Fastify Gateway และ Nginx Reverse Proxy' },
        { dayIndex: 4, dayLabel: 'วันพฤหัสบดี', date: '5 พ.ย. 2569', content: '- ปรับแต่งประสิทธิภาพฐานข้อมูล SQL Server (Indexing & Query Optimization) และจัดทำแนวทางการสำรองข้อมูลระบบ' },
        { dayIndex: 5, dayLabel: 'วันศุกร์', date: '6 พ.ย. 2569', content: '- ประเมินผลสมรรถนะการปฏิบัติงานสหกิจศึกษาร่วมกับพี่เลี้ยง สรุปผลการเรียนรู้และข้อเสนอแนะในการพัฒนาระบบระยะต่อไป' },
        { dayIndex: 6, dayLabel: 'วันเสาร์', date: '7 พ.ย. 2569', content: '- รวบรวมเอกสารรายงานโครงงานและผลการปฏิบัติงานสหกิจศึกษา สกบ. 01 - 07 ครบถ้วน พร้อมส่งต่อมหาวิทยาลัยบูรพา' },
      ],
      feedback: 'นิสิตมีผลการปฏิบัติงานสหกิจศึกษาในระดับดีเยี่ยม มีความรับผิดชอบสูง พัฒนาระบบงานจริงสำเร็จถึง 6 โครงการ สร้างประโยชน์อย่างยิ่งแก่องค์กร',
      studentSignature: 'นายฐิติวุฒิ พุกภิญโญ',
      supervisorSignature: 'นายสามศักดิ์ บุญจวง',
    },
  ],

  // 7. รายงานผลการดำเนินงานโครงการสหกิจศึกษา (สกบ. 07)
  summaryReport: {
    workTypes: [
      'งานพัฒนา Production Defect Dashboard แสดงข้อมูลของเสียจากการผลิตของแต่ละไลน์ผลิตแบบ Real-time',
      'งานออกแบบและพัฒนาระบบบริหารจัดการทะเบียนทรัพย์สินและครุภัณฑ์ไอที (AssetCK / AssetLogix) รองรับ PWA Barcode Scanner และเอกสาร ISO (QF-IT-007, QF-IT-006)',
      'งานพัฒนาและติดตั้งระบบชั่งน้ำหนักและยิงบาร์โค้ดผ่านพอร์ตสื่อสารอนุกรม RS-232 (Web Serial API & PySerial) ใช้งานจริงในสายการผลิตโรงงาน (17 ส.ค. 2569)',
      'งานพัฒนาระบบบริการ API กลาง (Fastify Central API Service) เชื่อมต่อ Multi-Database Pool (Knex.js) และระบบแจ้งซ่อม ShoesBox RepairCK',
      'งานพัฒนาและปรับปรุงระบบจัดการแม่พิมพ์และมีดตัด STOCKLIN & STOCKLIN-FRONTEND ยกระดับเป็น TypeScript',
      'งานวิศวกรรมย้อนกลับและพัฒนายกระดับระบบจัดซื้อและสั่งซื้อสู่ออนไลน์ (PR/PO & ERP Modernization จาก VB6 สู่ Angular 18, Fastify v5 และ MSSQL)',
      'งานวางสถาปัตยกรรมโครงสร้างพื้นฐานเซิร์ฟเวอร์โรงงาน Central Nginx Reverse Proxy และ Docker Containerization',
    ],
    learningOutcomes: [
      'ได้รับความรู้และทักษะด้านสถาปัตยกรรมเว็บสมัยใหม่ระดับองค์กร (Angular 18/22 Standalone Components, Signal State, Fastify v5, Node.js, Express)',
      'เชี่ยวชาญการติดต่อสื่อสารกับอุปกรณ์ฮาร์ดแวร์อุตสาหกรรมผ่าน Web Serial API, PySerial และ RS-232 Communication บนสภาพแวดล้อมการผลิตจริง',
      'พัฒนาทักษะการทำวิศวกรรมย้อนกลับ (Reverse Engineering) ซอร์สโค้ดและโครงสร้างฐานข้อมูลเก่า (Legacy VB6 และ Microsoft SQL Server) เพื่อยกระดับสู่ระบบเว็บ',
      'เชี่ยวชาญการออกแบบฐานข้อมูลเชิงสัมพันธ์, การเขียน Stored Procedure, Indexing และการจัดการ Connection Pool ข้ามฐานข้อมูลด้วย Knex.js',
      'ฝึกฝนทักษะการพัฒนา Progressive Web Apps (PWA) และระบบตรวจนับสต๊อกผ่านกล้องมือถือและการประมวลผลบาร์โค้ด',
      'ได้รับทักษะด้าน DevOps และ Infrastructure: Docker, Docker Compose, Linux Enterprise Administration และ Zero-Downtime Nginx Reverse Proxy',
      'พัฒนาทักษะการทำงานร่วมกับผู้ใช้งานจริง (Production, QC, Store, Purchasing, IT) การรับมือกับสถานการณ์เร่งด่วน และการส่งมอบงานตรงตามกำหนดเวลา',
    ],
    startDate: '1 กรกฎาคม 2569',
    endDate: '31 ธันวาคม 2569',
  },
};
