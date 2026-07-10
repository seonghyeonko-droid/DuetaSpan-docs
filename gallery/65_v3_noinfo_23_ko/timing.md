# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "태연",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-23",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-06-17",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-10",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-02",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 작년 십이월 이십사일 도쿄 날씨가 어땠어? | S2 음… 아침 아홉시에서 열시 사이에 출발하는 걸로 부탁해. | S3 고마워. 아, 그런데 혹시 내일모레 강남역 근처에 괜찮은 레스 | S4 좋아. 그럼… 다음 주 화요일에 김민지 씨랑 미팅 있는데, 김

     0.00s  user  발화 시작: 작년 십이월 이십사일 도쿄 날씨가 어땠어?
     2.60s  <ret> 발화 (turn1 첫 프레임)
     3.00s  agent 발화 시작: <ret> 도쿄의 작년 십이월 이십사일 날씨는 섭씨 십오 점 이도, 습도 육십팔퍼센트, 풍속은 시속 삼 점 
     3.09s  user  발화 끝
     4.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.66s]: (tool result) 15.2°C, humidity 68%, wind 3.1 km/h
    13.53s  user  발화 시작: 흐음… 그럼 이번 주 금요일 뉴욕 날씨는 어때?
    13.67s  agent 발화 끝
    15.79s  <ret> 발화 (turn3 첫 프레임)
    16.03s  agent 발화 시작: <ret> 이번 주 금요일 뉴욕 날씨는 섭씨 이십팔 점 오도, 습도 오십오퍼센트, 풍속은 시속 팔 점 이킬로
    16.11s  user  발화 끝
    17.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: (tool result) 28.5°C, humidity 55%, wind 8.2 km/h
    19.27s  user  발화 시작: 진짜?
    19.90s  user  발화 끝
    26.00s  agent 발화 끝
    26.12s  user  발화 시작: 알았어. 그럼… 내일 서울에서 부산 가는 기차표 예매 좀 해 줄 수 있어?
    31.19s  agent 발화 시작: 내일 서울에서 부산으로 가는 기차표 예매를 도와드릴게요. 몇 시쯤 출발하는 기차를 원하세요?
    31.21s  user  발화 끝
    37.67s  agent 발화 끝
    38.13s  user  발화 시작: 음… 아침 아홉시에서 열시 사이에 출발하는 걸로 부탁해.
    42.23s  <ret> 발화 (turn8 첫 프레임)
    42.46s  agent 발화 시작: <ret> 내일 아침 아홉시 십오분에 서울역에서 출발하는 KTX 백일 열차가 부산역에 두시간 삼십분 뒤 도착
    42.58s  user  발화 끝
    44.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.94s]: (tool result) KTX101, 09:15, Seoul Station, Busan Station, 2 hours 30 
    55.39s  agent 발화 끝
    55.78s  user  발화 시작: 응, 그걸로 해 줘.
    56.53s  <ret> 발화 (turn10 첫 프레임)
    56.76s  agent 발화 시작: <ret> 네, KTX 백일 열차, 서울역에서 부산역까지, 이천이십육년 칠월 십일일 아침 아홉시 십오분, A
    56.92s  user  발화 끝
    58.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.54s]: (tool result) KTX101, Seoul Station to Busan Station, 2026-07-11, 09:1
    70.30s  agent 발화 끝
    70.56s  user  발화 시작: 고마워. 아, 그런데 혹시 내일모레 강남역 근처에 괜찮은 레스토랑 있어?
    75.20s  <ret> 발화 (turn12 첫 프레임)
    75.44s  agent 발화 시작: <ret> 강남역 근처에는 라 쿠진(오백미터), 트라토리아 피제리아(칠백오십미터), 스시 하나(구백미터)가 
    75.55s  user  발화 끝
    77.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.19s]: (tool result) La Cuisine, (37.4979, 127.0276), 500m; Trattoria Pizzeri
    84.63s  agent 발화 끝
    84.92s  user  발화 시작: 이탈리아 음식이 당기네. 트라토리아 피제리아 예약 좀 해 줘. 내일모레 저녁 일곱시에 두명.
    90.83s  <ret> 발화 (turn14 첫 프레임)
    91.22s  agent 발화 시작: <ret> 네, 트라토리아 피제리아에 내일모레 저녁 일곱시에 두명으로 예약이 확정되었습니다. 예약번호는 C4
    91.27s  user  발화 끝
    92.75s  ⚡SPAN 주입 [d'=1.92s / d_lead=7.78s]: (tool result) Trattoria Pizzeria, 2026-07-13, 19:00, 2 people, reserva
    99.00s  agent 발화 끝
    99.08s  user  발화 시작: 좋아. 그럼… 다음 주 화요일에 김민지 씨랑 미팅 있는데, 김민지 씨 연락처 알 수 있을까?
   104.99s  agent 발화 시작: 죄송하지만, 개인 정보 보호 정책상 다른 사람의 연락처는 찾아드릴 수 없습니다.
   105.20s  user  발화 끝
   110.54s  agent 발화 끝
   110.71s  user  발화 시작: 아, 그래? 알았어. 그럼… 오늘 날씨는 어때?
   114.73s  user  발화 끝
   114.76s  <ret> 발화 (turn18 첫 프레임)
   114.99s  agent 발화 시작: <ret> 오늘의 서울 날씨는 섭씨 이십육 점 팔도, 습
   115.26s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.56s]: (tool result) 26.8°C, humidity 70%, wind 4.8 km/h
   118.54s  agent 발화 끝
