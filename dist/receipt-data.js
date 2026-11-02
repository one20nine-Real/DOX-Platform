// Transcribed from the visible user-provided tax invoice. Missing ERP fields remain blank.
const BID_DOCUMENT_REVISION=3;
const BID_DOCUMENT_VALUES={project_name:'세종은행 노후 서버 교체 사업',ordering_organization:'세종은행 강남금융센터',ordering_department:'',ordering_contact:'',ordering_phone:'',ordering_email:'',delivery_location:'',bidding_method:'',supplier_name:'한국정보시스템 주식회사',supplier_business_number:'123-45-67890',supplier_representative:'김도현',supplier_phone:'02-555-1234',supplier_contact:'',bid_notice_number:'',award_notice_number:'',contract_number:'',purchase_order_number:'',inspection_number:'',tax_invoice_number:'20250531-12345678-00',transaction_statement_number:'',total_amount:'150000000',supply_amount:'136363636',vat_amount:'13636364',inspection_date:'',deliverables:'서버 장비 공급 / 스토리지 장비 공급 / 네트워크 장비 공급 / 서버 구축/설치 용역 / 데이터 이전 / 테스트/교육',proposal_summary:''};
const BID_DOCUMENT_FIELDS=[
 {label:'문서 종류',value:'세금계산서'},{label:'승인번호',value:'20250531-12345678-00'},{label:'작성사유',value:'세종은행 노후 서버 교체 사업'},{label:'작성일자',value:'2025-05-31'},{label:'공급시기',value:'2025-05-31'},
 {label:'공급자 상호',value:'한국정보시스템 주식회사'},{label:'공급자 대표자 (본문)',value:'김도현'},{label:'공급자 사업자등록번호',value:'123-45-67890'},{label:'공급자 주소',value:'서울특별시 강남구 테헤란로 123'},{label:'공급자 업태',value:'정보통신업'},{label:'공급자 종목',value:'컴퓨터시스템 통합 자문 및 구축 서비스'},{label:'공급자 이메일',value:'billing@kis.co.kr'},{label:'공급자 연락처',value:'02-555-1234'},
 {label:'공급받는자 상호',value:'세종은행 강남금융센터'},{label:'공급받는자 대표자',value:'이서연'},{label:'공급받는자 사업자등록번호',value:'110-81-12345'},{label:'공급받는자 주소',value:'서울특별시 강남구 테헤란로 101\n세종은행 강남금융센터'},{label:'공급받는자 업태',value:'금융업'},{label:'공급받는자 종목',value:'은행 및 금융업'},{label:'공급받는자 이메일',value:'ap@sejongbank.co.kr'},{label:'공급받는자 연락처',value:'02-1588-1000'},
 {label:'공급가액 합계',value:'136363636',format:'money'},{label:'세액 합계',value:'13636364',format:'money'},{label:'합계금액',value:'150000000',format:'money'},
 {label:'입금 은행',value:'세종은행'},{label:'입금 계좌번호',value:'100-123-456789'},{label:'예금주',value:'한국정보시스템 주식회사'},{label:'비고',value:'상기 금액은 부가가치세가 포함된 금액입니다.'}
];
const BID_DOCUMENT_ITEMS=[
 {date:'05-31',name:'서버 장비 공급',spec:'x86 Server',quantity:4,unitPrice:20000000,supply:80000000,vat:8000000},
 {date:'05-31',name:'스토리지 장비 공급',spec:'Storage Array',quantity:1,unitPrice:15000000,supply:15000000,vat:1500000},
 {date:'05-31',name:'네트워크 장비 공급',spec:'Switch / Firewall',quantity:2,unitPrice:10000000,supply:20000000,vat:2000000},
 {date:'05-31',name:'서버 구축/설치 용역',spec:'설치 및 구성',quantity:1,unitPrice:10000000,supply:10000000,vat:1000000},
 {date:'05-31',name:'데이터 이전',spec:'Data Migration',quantity:1,unitPrice:5000000,supply:5000000,vat:500000},
 {date:'05-31',name:'테스트/교육',spec:'Test / Training',quantity:1,unitPrice:6363636,supply:6363636,vat:636364}
];

