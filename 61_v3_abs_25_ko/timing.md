# v3_abs_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요. 서머싯 독립 중등학교의 평균 학급 규모가 어떻게 되나요?
     4.36s  <ret> 발화 (turn1 첫 프레임)
     4.96s  agent 발화 시작: <ret> 네, 꽤 구체적인 질문이시네요. 그 정확한 수치는 지금 바로 말씀드리기는 어렵습니다.
     5.14s  user  발화 끝
     5.32s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.68s]: (no information found)
     7.64s  agent 발화 끝
     9.05s  user  발화 시작: 아, 그렇군요. 음, 그럼 서머싯의 인구는 얼마나 되나요?
    17.49s  <ret> 발화 (turn3 첫 프레임)
    18.08s  agent 발화 시작: <ret> 알려 드릴게요. 서머싯의 인구는 2021년 기준으로 93만 4893명입니다. 정말 전원적인 카운티
    18.17s  user  발화 끝
    18.49s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.19s]: Somerset has a population of 934,893 as of 2021.
    22.06s  user  발화 시작: 그렇군요… 좋네요. [sigh] 오늘 날씨는 어떤가요?
    22.10s  agent 발화 끝
    31.36s  <ret> 발화 (turn5 첫 프레임)
    31.84s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.54s]: Current conditions in Somerset are 14 degrees Celsius, partly cloudy, 
    31.95s  agent 발화 시작: <ret> 날씨가 꽤 온화한 것 같아요. 오늘 서머싯은 섭씨 14도이고 부분적으로 흐리며, 서풍이 불고 있습
    32.12s  user  발화 끝
    36.43s  user  발화 시작: 그러네요. 방문할 만한 역사적인 건물이 있나요?
    36.59s  agent 발화 끝
    45.51s  <ret> 발화 (turn7 첫 프레임)
    45.98s  user  발화 끝
    46.10s  agent 발화 시작: <ret> 맞아요, 몇 군데 떠오르네요. 글래스턴버리 토어는 글래스턴버리 근처의 언덕으로, 중세 탑의 잔해가
    46.47s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.39s]: Glastonbury Tor is an iconic hill near Glastonbury, Somerset, topped b
    51.10s  agent 발화 끝
    51.91s  user  발화 시작: 글래스턴버리 토어… 흥미로운데요. 탑의 역사는 무엇인가요?
    60.63s  <ret> 발화 (turn9 첫 프레임)
    61.22s  agent 발화 시작: <ret> 꽤 복잡한 이야기입니다. 탑은 14세기로 거슬러 올라가지만, 언덕 자체는 수천 년 동안 신성한 곳
    61.28s  user  발화 끝
    61.63s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.53s]: The tower on Glastonbury Tor was built in the 14th century, though the
    67.33s  agent 발화 끝
    67.63s  user  발화 시작: 수천 년이나요? 와우. 음, 글래스턴버리로 가는 교통편은 어떤가요?
    68.92s  <ret> 발화 (turn11 첫 프레임)
    69.00s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.44s]: The nearest train station to Glastonbury is Castle Cary, with frequent
    69.52s  agent 발화 시작: <ret> 거기 가는 것은 꽤 간단합니다. 가장 가까운 기차역은 캐슬 캐리이고, 거기서 글래스턴버리로 가는 
    69.70s  user  발화 끝
    74.99s  agent 발화 끝
    75.70s  user  발화 시작: 알겠습니다, 캐슬 캐리. 글래스턴버리에 좋은 펍이 있나요?
    77.54s  <ret> 발화 (turn13 첫 프레임)
    78.12s  agent 발화 시작: <ret> 물론입니다. 훌륭한 선택지가 여러 곳 있습니다. 조지 앤 드래곤은 15세기에 지어진 펍으로, 전통
    78.33s  user  발화 끝
    78.54s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.53s]: The George & Dragon in Glastonbury is a 15th-century pub known for its
    87.25s  user  발화 시작: 15세기에 지어진 펍… 완벽하네요. 우편번호가 어떻게 되나요?
    87.39s  agent 발화 끝
    90.89s  <ret> 발화 (turn15 첫 프레임)
    91.49s  agent 발화 시작: <ret> 찾아 드릴게요. 조지 앤 드래곤 펍의 우편번호는 BA6 9LL입니다. 내비게이션 시스템을 위해 알
    91.69s  user  발화 끝
    91.89s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.36s]: The George & Dragon pub in Glastonbury has the postcode BA6 9LL.
    99.32s  agent 발화 끝
    99.51s  user  발화 시작: BA6 9LL. 좋습니다. 문을 닫는 시간은 언제인가요?
   104.02s  <ret> 발화 (turn17 첫 프레임)
   104.62s  agent 발화 시작: <ret> 시간은 충분히 있으시겠네요. 조지 앤 드래곤은 오늘 밤 11시에 문을 닫습니다. 저를 위해 맥주 
   104.70s  user  발화 끝
   105.02s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.00s]: The George & Dragon in Glastonbury is open until 11:00 PM today.
   113.18s  user  발화 시작: [laugh] 그렇게 할 수도 있겠네요. 등록된 건물인가요?
   113.61s  agent 발화 끝
   116.36s  <ret> 발화 (turn19 첫 프레임)
   116.92s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.64s]: The George & Dragon is a Grade II listed building, recognized for its 
   116.96s  agent 발화 시작: <ret> 그렇습니다. 조지 앤 드래곤은 역사와 건축 양식으로 인해 2등급으로 지정된 건물입니다. 보존이 중
   117.11s  user  발화 끝
   124.05s  agent 발화 끝
   124.17s  user  발화 시작: 좋네요. 건축 양식은 무엇인가요?
   127.53s  <ret> 발화 (turn21 첫 프레임)
   128.12s  agent 발화 시작: <ret> 아주 멋진 예시입니다. 후기 중세 목조 구조와 짚으로 덮인 지붕을 가지고 있습니다. 정말 고전적인
   128.19s  user  발화 끝
   128.53s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.47s]: The George & Dragon features late medieval timber framing and a thatch
   137.39s  agent 발화 끝
   137.57s  user  발화 시작: 목조 구조… 정말 전통적이네요. 글래스턴버리 근처에 좋은 산책로가 있나요?
   142.55s  <ret> 발화 (turn23 첫 프레임)
   142.87s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.95s]: The Chalice Well Gardens offer peaceful walks and stunning views of Gl
   143.14s  agent 발화 시작: <ret> 좋은 산책을 즐길 수 있는 곳이 많습니다. 챌리스 웰 가든은 평화로운 산책로와 글래스턴버리 토어의
   143.22s  user  발화 끝
   146.00s  user  발화 시작: 챌리스 웰 가든… 평화로운 소리가 들리네요. 웹사이트 주소가 어떻게 되나요?
   146.00s  agent 발화 끝
   155.00s  <ret> 발화 (turn25 첫 프레임)
   155.24s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.98s]: The Chalice Well Gardens website is https://www.chalicewellgardens.com
   155.59s  agent 발화 시작: <ret> 여기 있습니다. 웹사이트 주소는 https://www.chalicewellgardens.com/ 
   155.69s  user  발화 끝
   159.85s  agent 발화 끝
   160.73s  user  발화 시작: 감사합니다! 정말 도움이 됩니다.
   168.95s  agent 발화 시작: 도와드릴 수 있어서 기쁩니다. 서머싯의 아름다움을 공유하는 것은 언제나 보람 있는 일입니다.
   169.07s  user  발화 끝
   173.35s  agent 발화 끝
