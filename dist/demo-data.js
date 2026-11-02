// Explicitly fictional records for dashboard demonstrations; added once per browser.
let demoSeedVersion=0;
const DEMO_SEED_VERSION=1;
function demoContracts(){const year=Number(new Intl.DateTimeFormat('en',{timeZone:'Asia/Seoul',year:'numeric'}).format(new Date()));const month=Number(new Intl.DateTimeFormat('en',{timeZone:'Asia/Seoul',month:'numeric'}).format(new Date()));const spec=[
 ['서버 인프라 증설','한빛테크놀로지',1,32000000,'excel','구매·계약'],
 ['네트워크 장비 교체','코리아네트웍스',2,45000000,'excel','구매·계약'],
 ['업무용 PC 구매','새롬정보시스템',3,18000000,'manual','구매·계약'],
 ['정보보안 솔루션 도입','네오시큐리티',5,65000000,'excel','구매·계약'],
 ['데이터 백업 시스템 구축','이노데이터',6,24000000,'excel','구매·계약'],
 ['본사 스토리지 확장','한빛테크놀로지',7,38000000,'manual','구매·계약'],
 ['지점 네트워크 고도화','코리아네트웍스',9,52000000,'excel','구매·계약'],
 ['업무 자동화 시스템 구축','이노데이터',10,29000000,'excel','구매·계약'],
 ['협업 시스템 라이선스 갱신','새롬정보시스템',10,12000000,'manual','구매·계약'],
 ['보안 장비 유지보수','네오시큐리티',10,8000000,'excel','정산']
 ];return spec.map(([title,supplier,m,supply,method,type],i)=>{const r=blank(),mm=String(Math.min(m,month)).padStart(2,'0'),date=`${year}-${mm}-${String(8+i).padStart(2,'0')}`;r.id='f0d0a100-0000-4000-8000-'+String(i+1).padStart(12,'0');r.title=title;r.type=type;r.owner=['김담당','이담당','박담당'][i%3];r.memo='구매·계약 등록 정보입니다.';r.method=method;r.fileName=method==='excel'?`DOX_AI_수신결과_${String(i+1).padStart(2,'0')}.xlsx`:'';r.status=i<8?'registered':'draft';r.createdAt=date+'T01:00:00.000Z';r.updatedAt=date+'T05:00:00.000Z';r.registrationId=i<8?`FUJI-${year}-${String(i+1).padStart(3,'0')}`:null;r.isDemo=true;r.demoVersion=DEMO_SEED_VERSION;Object.assign(r.values,{project_name:title,ordering_organization:'Fuji 본사',ordering_department:['정보기술부','총무부','디지털사업부'][i%3],ordering_contact:r.owner,delivery_location:'본사 전산실',bidding_method:i%2?'수의계약':'일반경쟁입찰',supplier_name:supplier,supplier_representative:'대표자',supplier_contact:'procurement@example.com',bid_notice_number:`BID-${year}-${String(i+1).padStart(3,'0')}`,award_notice_number:`AWARD-${i+1}`,contract_number:`CONTRACT-${i+1}`,purchase_order_number:`PO-${i+1}`,inspection_number:`CHECK-${i+1}`,tax_invoice_number:`TAX-${i+1}`,transaction_statement_number:`STATEMENT-${i+1}`,total_amount:String(supply+supply/10),supply_amount:String(supply),vat_amount:String(supply/10),inspection_date:i<8?date:'',deliverables:title+' 관련 장비·소프트웨어 및 완료 보고서',proposal_summary:title+' 사업을 위한 구매·설치·검수 정보입니다.'});return r;});}
function ensureDemoContracts(){if(demoSeedVersion>=DEMO_SEED_VERSION)return;const ids=new Set(records.map(r=>r.id));records.push(...demoContracts().filter(r=>!ids.has(r.id)));demoSeedVersion=DEMO_SEED_VERSION;}
