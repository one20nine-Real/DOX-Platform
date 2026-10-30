const fs=require('fs'),vm=require('vm'),assert=require('assert');
const XLSX=require('./dist/assets/xlsx.full.min.js');
const elements=new Map();
function element(s){if(!elements.has(s))elements.set(s,{value:'',textContent:'',innerHTML:'',style:{},classList:{add(){},remove(){},toggle(){}},addEventListener(){},close(){},showModal(){}});return elements.get(s);}
const context={XLSX,console,document:{querySelector:element,querySelectorAll:()=>[],addEventListener(){}},window:{addEventListener(){},scrollTo(){}},localStorage:{getItem:()=>null},setTimeout,clearTimeout,fetch:async()=>({ok:true,arrayBuffer:async()=>fs.readFileSync('./dist/assets/bid-template.xlsx')})};
vm.createContext(context);vm.runInContext(fs.readFileSync('./dist/app.js','utf8').replace(/init\(\);\s*$/,''),context);
context.wb=XLSX.read(fs.readFileSync('./dist/assets/bid-template.xlsx'),{type:'buffer'});
vm.runInContext(`state=parseWorkbook(wb,'test.xlsx');render();`,context);
assert.equal(element('#totalCount').textContent,'26개 항목');assert.equal(element('#warningCount').textContent,'3건');assert.equal(element('#percent').textContent,'88%');assert(element('#metrics').innerHTML.includes('150,000,000'));
vm.runInContext(`wb.Sheets['최종확인'].B24.v=200000000; wb.Sheets['최종확인'].C24.v='정상'; wb.Sheets['최종확인'].B4.v='변경 사업';state=parseWorkbook(wb,'changed.xlsx');render();`,context);
assert.equal(element('#projectName').textContent,'변경 사업');assert.equal(element('#warningCount').textContent,'2건');assert(element('#metrics').innerHTML.includes('200,000,000'));assert(element('#reconcile').innerHTML.includes('불일치'));
vm.runInContext(`filter='warning';renderTable();`,context);assert.equal((element('#tableBody').innerHTML.match(/<tr /g)||[]).length,2);
vm.runInContext(`filter='all';`,context);element('#search').value='공급업체';vm.runInContext('renderTable()',context);assert.equal((element('#tableBody').innerHTML.match(/<tr /g)||[]).length,5);
vm.runInContext(`wb.Sheets['최종확인'].B4.v='<img src=x onerror=alert(1)>';state=parseWorkbook(wb,'escaped.xlsx');render();`,context);element('#search').value='';vm.runInContext('renderTable()',context);assert(!element('#tableBody').innerHTML.includes('<img'));assert(element('#tableBody').innerHTML.includes('&lt;img'));
vm.runInContext(`wb.Sheets['최종확인'].A4.v='없는항목';`,context);assert.throws(()=>vm.runInContext(`parseWorkbook(wb,'invalid.xlsx')`,context),/필요한 항목/);
console.log('PASS: original values; changed amount, project and status; reconciliation; filters; search; HTML escaping; invalid template rejection.');
