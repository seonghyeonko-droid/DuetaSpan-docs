# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 소피아 로드리게스 선생님과 3월 22일 오전 11시 15분에 진료 예약을 하고 싶습니다.
     3.11s  <ret> 발화 (turn1 첫 프레임)
     3.70s  agent 발화 시작: <ret> 네, 확인해 보겠습니다. 로드리게스 선생님과의 진료 예약은 3월 22일 오전 11시 15분으로 확
     3.84s  user  발화 끝
     4.11s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.24s]: (tool result) Appointment with Dr. Sofia Rodriguez scheduled for March
     8.56s  agent 발화 끝
     9.01s  user  발화 시작: 잘 됐네요. 음, 선생님 사무실 주소가 어떻게 되나요?
    12.91s  <ret> 발화 (turn3 첫 프레임)
    13.17s  user  발화 끝
    13.50s  agent 발화 시작: <ret> 알겠습니다, 찾아볼게요. 로드리게스 선생님 사무실은 노스캐롤라이나 주 애쉬빌 오크 스트리트 7번지
    13.87s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.39s]: (tool result) Dr. Rodriguez’s office is located at 7 Oak Street, Ashev
    18.46s  user  발화 시작: 알겠습니다. 혹시 그 근처에 괜찮은 꽃집이 있나요? 음… 어머니께 꽃을 보내고 싶어서요.
    18.59s  agent 발화 끝
    21.97s  user  발화 끝
    22.36s  agent 발화 시작: 애쉬빌은 사실 꽃으로 유명한 예쁜 도시예요.
    27.26s  agent 발화 끝
    27.47s  user  발화 시작: 네, 그렇지만 오크 스트리트 7번지 근처에 있는 곳을 알고 싶어요.
    31.57s  <ret> 발화 (turn7 첫 프레임)
    32.16s  agent 발화 시작: <ret> 주변에 있는 곳들을 알아봐 드릴게요. Bloom Room은 0.3마일 떨어져 있고, 오후 6시까지
    32.37s  user  발화 끝
    32.57s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.52s]: (tool result) Bloom Room is 0.3 miles away, open until 6 PM. Petal & S
    37.30s  user  발화 시작: 흠, Bloom Room이 더 가까운 것 같네요. 전화번호를 찾아주시겠어요?
    37.71s  agent 발화 끝
    40.33s  <ret> 발화 (turn9 첫 프레임)
    40.92s  agent 발화 시작: <ret> 네, 찾아봐 드릴게요. Bloom Room의 전화번호는 828-555-1212입니다.
    41.13s  user  발화 끝
    41.33s  ⚡SPAN 주입 [d'=1.00s / d_lead=6.77s]: (tool result) Bloom Room's phone number is 828-555-1212.
    47.68s  agent 발화 끝
    48.38s  user  발화 시작: 좋아요. [sigh] 어머니께 백합 꽃다발을 배달해 주시겠어요? 어머니 주소는 사우스캐롤라이나 주 그린빌 메
    51.24s  <ret> 발화 (turn11 첫 프레임)
    51.84s  agent 발화 시작: <ret> 네, 도와드릴 수 있습니다. 백합 꽃다발은 사우스캐롤라이나 주 그린빌 메이플 드라이브 12번지로 
    51.94s  user  발화 끝
    52.24s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.76s]: (tool result) Order placed. Lilies delivered to 12 Maple Drive, Greenv
    55.95s  agent 발화 끝
