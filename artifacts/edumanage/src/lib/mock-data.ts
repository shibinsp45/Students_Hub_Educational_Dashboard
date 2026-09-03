export type Student = {
  id: number; name: string; email: string; phone: string; department: string; course: string;
  semester: number; batch: string; attendance: number; projects: number; performance: number;
  status: 'Active' | 'At risk' | 'On leave'; avatar: string; enrollmentDate: string;
};
export type Project = {
  id: number; name: string; student: string; course: string; startDate: string; deadline: string;
  progress: number; status: 'On track' | 'Needs review' | 'Completed'; mentor: string; type: string;
};
export type Assignment = { id: number; title: string; course: string; assignedStudents: number; submissionRate: number; deadline: string; status: 'Open' | 'Reviewing' | 'Closed'; };
export type Exam = { id: number; name: string; subject: string; department: string; semester: number; date: string; students: number; status: 'Scheduled' | 'Grading' | 'Published'; grades: number[]; };
export type Event = { title: string; date: string; type: string; detail: string };
export type Activity = { text: string; time: string; type: string };
export type Attendance = { student: string; status: 'Present' | 'Absent' | 'Late'; presentDays: number; absentDays: number; percentage: number };

const names = ['Aarav Sharma','Ananya Iyer','Arjun Nair','Aditi Rao','Advait Kulkarni','Anjali Menon','Bhavna Shah','Dev Patel','Diya Kapoor','Eshan Verma','Fahad Khan','Gauri Joshi','Harsh Vardhan','Ishita Das','Kabir Mehta','Kavya Reddy','Kiran Bhat','Lakshmi Nair','Manav Singh','Meera Krishnan','Mihir Jain','Nandini Bose','Nikhil Sethi','Parth Desai','Pranav Gupta','Rhea Thomas','Rishabh Kothari','Saanvi Malhotra','Siddharth Sen','Tanvi Pillai','Vedant Mishra','Yashika Agarwal','Zoya Ansari','Rohan Chatterjee'];
export const courses = ['B.Des','BCA','B.Tech','MCA'];
export const departments = ['Design','Computer Applications','Computer Science','Management'];
const initials = (name: string) => name.split(' ').map(n => n[0]).join('').slice(0, 2);

export const seedStudents: Student[] = names.map((name, i) => ({
  id: i + 1, name, email: `${name.toLowerCase().replaceAll(' ', '.')}@eastbridge.edu`, phone: `+91 98${String(10000000 + i * 27131).slice(0, 8)}`,
  department: departments[i % departments.length], course: courses[i % courses.length], semester: (i % 8) + 1, batch: i % 2 ? '2023–27' : '2024–28',
  attendance: 78 + ((i * 7) % 20), projects: 1 + (i % 4), performance: 61 + ((i * 9) % 36),
  status: i === 7 || i === 22 ? 'At risk' : i === 18 ? 'On leave' : 'Active', avatar: initials(name), enrollmentDate: `202${i % 4 + 2}-0${i % 9 + 1}-12`
}));

export const seedProjects: Project[] = [
  ['Campus wayfinding system','Aditi Rao','B.Des','2025-01-14','2025-04-12',76,'On track','Megha Menon','Research'],
  ['Swasthya student portal','Arjun Nair','BCA','2025-02-02','2025-04-18',58,'Needs review','Ritesh Kumar','Product'],
  ['Low-cost air quality monitor','Dev Patel','B.Tech','2025-01-21','2025-05-02',84,'On track','Nitin Rao','Engineering'],
  ['Alumni archive experience','Ishita Das','MCA','2024-12-08','2025-04-09',100,'Completed','Sara Fernandes','Archive'],
  ['Local language learning kit','Kavya Reddy','B.Des','2025-02-18','2025-05-16',42,'Needs review','Megha Menon','Social impact'],
  ['Library queue optimizer','Kabir Mehta','BCA','2025-01-27','2025-04-28',67,'On track','Ritesh Kumar','Systems'],
  ['Solar study pavilion','Manav Singh','B.Tech','2025-03-03','2025-06-07',29,'Needs review','Nitin Rao','Architecture'],
  ['Open source lab journal','Meera Krishnan','MCA','2025-02-11','2025-05-12',73,'On track','Sara Fernandes','Research'],
  ['Tactile map of the city','Saanvi Malhotra','B.Des','2025-01-09','2025-04-22',91,'On track','Megha Menon','Design'],
  ['Hostel energy dashboard','Yashika Agarwal','B.Tech','2025-02-23','2025-05-25',36,'Needs review','Nitin Rao','Data']
].map((p, i) => ({ id: i + 1, name:p[0] as string, student:p[1] as string, course:p[2] as string, startDate:p[3] as string, deadline:p[4] as string, progress:p[5] as number, status:p[6] as Project['status'], mentor:p[7] as string, type:p[8] as string }));

const assignmentNames = ['Typographic systems study','Database normalization lab','Human-computer interaction audit','Calculus III problem set','Material exploration journal','JavaScript patterns','Design research synthesis','Computer networks viva','Service blueprint sprint','Operating systems case study','Visual storytelling critique','Data structures challenge','Portfolio review prep','Ethics in technology essay','Final studio proposal'];
export const seedAssignments: Assignment[] = assignmentNames.map((title, i) => ({ id:i + 1, title, course:courses[i % 4], assignedStudents: 24 + (i * 11) % 78, submissionRate: 42 + (i * 13) % 56, deadline:`2025-04-${String(8 + i).padStart(2,'0')}`, status:i < 8 ? 'Open' : i < 12 ? 'Reviewing' : 'Closed' }));
export const seedExams: Exam[] = ['Design history','Web programming','Engineering mathematics','User research methods','Data structures','Computer architecture','Visual communication','Database systems','Product strategy','Software engineering'].map((name, i) => ({ id:i+1, name:`${name} · ${i % 2 ? 'Midterm' : 'End term'}`, subject:name, department:departments[i % 4], semester:(i % 8)+1, date:`2025-04-${String(15 + i).padStart(2,'0')}`, students:32 + i * 8, status:i < 5 ? 'Scheduled' : i < 8 ? 'Grading' : 'Published', grades:[58 + i, 64 + i * 2, 72 + i, 79 - i, 86 - i] }));
export const seedAttendance: Attendance[] = seedStudents.map((s, i) => ({ student:s.name, status:i === 4 || i === 11 ? 'Late' : i === 7 ? 'Absent' : 'Present', presentDays:47 - (i % 6), absentDays: i % 5, percentage:s.attendance }));
export const seedEvents: Event[] = [
  { title:'B.Des studio jury', date:'2025-04-11', type:'Review', detail:'Design block · 10:30' }, { title:'Industry connect: Figma', date:'2025-04-16', type:'Talk', detail:'Auditorium · 15:00' },
  { title:'Semester registration opens', date:'2025-04-21', type:'Academic', detail:'Online · all day' }, { title:'Spring break', date:'2025-04-28', type:'Holiday', detail:'Campus closed' }
];
export const seedActivities: Activity[] = [
  { text:'Anjali Menon submitted “HCI audit”', time:'8 min ago', type:'assignment' }, { text:'Dr. Ritesh Kumar updated Library queue', time:'42 min ago', type:'project' },
  { text:'Attendance marked for BCA · Semester 4', time:'1 hr ago', type:'attendance' }, { text:'New document uploaded to Air quality monitor', time:'3 hrs ago', type:'document' },
];

export function loadLocal<T>(key: string, fallback: T): T {
  try { const item = localStorage.getItem(`edumanage-${key}`); return item ? JSON.parse(item) as T : fallback; } catch { return fallback; }
}
export function saveLocal<T>(key: string, value: T) { localStorage.setItem(`edumanage-${key}`, JSON.stringify(value)); }