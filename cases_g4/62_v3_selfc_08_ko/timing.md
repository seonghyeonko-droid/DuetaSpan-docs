# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 나 다음 달에 뉴욕 가는데, 팔월 십이일— 아니, 팔월 십오일 | S2 그럼 팔월 십육일은 어때? | S3 로스앤젤레스 가면 만리장성 같은 유명한 곳 가고 싶은데, 거기 | S4 거기 가려면 얼마나 걸려?

     0.00s  user  발화 시작: 나 다음 달에 뉴욕 가는데, 팔월 십이일— 아니, 팔월 십오일 출발하는 로스앤젤레스행 편도 항공권 좀 찾아줘
     7.09s  <ret> 발화 (turn1 첫 프레임)
     8.30s  ⚡SPAN 주입 [d'=1.21s / d_lead=2.12s]: (tool result) (no information found)
     8.34s  user  발화 끝
     8.44s  agent 발화 시작: <ret> 말씀하신 날짜로 항공권을 찾아봤는데요. 아쉽게도 팔월 십오일에 이용 가능한 항공편 정보가 없습니다
    17.41s  user  발화 시작: 그럼 팔월 십육일은 어때?
    17.44s  agent 발화 끝
    18.67s  <ret> 발화 (turn3 첫 프레임)
    19.23s  agent 발화 시작: <ret> 팔월 십육일에는 이용 가능한 항공편이 있네요. 오전 열시에 출발하는 에이 에이 백이십삼편이 있고,
    19.27s  ⚡SPAN 주입 [d'=0.60s / d_lead=3.47s]: (tool result) Flight AA123, Departure 10:00 AM, Price 450 dollars
    19.43s  user  발화 끝
    22.45s  user  발화 시작: 응응.
    23.03s  user  발화 끝
    27.89s  agent 발화 끝
    28.69s  user  발화 시작: 로스앤젤레스 가면 만리장성 같은 유명한 곳 가고 싶은데, 거기서 가볼 만한 곳 추천해 줘.
    34.69s  agent 발화 시작: [happy] 로스앤젤레스라면 할리우드 사인이나 그리피스 천문대가 유명해요. 특히 천문대는 야경이 정말 멋져
    34.85s  user  발화 끝
    41.35s  user  발화 시작: 거기 가려면 얼마나 걸려?
    41.97s  agent 발화 끝
    43.14s  <ret> 발화 (turn8 첫 프레임)
    43.47s  user  발화 끝
    43.65s  agent 발화 시작: <ret> 시내 중심에서 출발하신다고 가정하면, 차로 이동하실 경우 약 팔 점 오킬로미터 거리이며 이십분 정
    44.13s  ⚡SPAN 주입 [d'=0.99s / d_lead=1.98s]: (tool result) 8.5 kilometers, 20 minutes by car
    51.06s  agent 발화 끝
