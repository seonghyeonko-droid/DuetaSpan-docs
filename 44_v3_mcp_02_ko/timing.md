# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "유람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 서울 날씨 어때요? | S2 오, 오전 여덟시 KTX 백일 예매해 줘. | S3 음… '인터스텔라' 보고 싶은데… | S4 그럼 메가박스 강남 오후 다섯시로 예매해 줘.

     0.00s  user  발화 시작: 오늘 서울 날씨 어때요?
     1.18s  <ret> 발화 (turn1 첫 프레임)
     1.57s  agent 발화 시작: <ret> 서울의 현재 날씨는 기온이 섭씨 이십삼 점 영도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로
     1.75s  user  발화 끝
     3.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.29s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
     4.75s  user  발화 시작: 네.
     5.24s  user  발화 끝
     9.80s  user  발화 시작: 흐음… 그럼 내일 모레 부산은 어때요?
     9.86s  agent 발화 끝
    11.46s  <ret> 발화 (turn4 첫 프레임)
    11.86s  agent 발화 시작: <ret> 부산의 내일 모레 날씨는 기온이 섭씨 이십오 점 영도, 습도는 육십팔%, 바람은 시속 칠 점 이킬
    11.87s  user  발화 끝
    13.22s  ⚡SPAN 주입 [d'=1.76s / d_lead=8.57s]: (tool result) 25.0°C, humidity 68%, wind 7.2 km/h
    17.68s  user  발화 시작: 네.
    18.31s  user  발화 끝
    20.43s  agent 발화 끝
    20.57s  user  발화 시작: 부산 가려면 기차 시간표 좀 알아봐 줄래요?
    23.15s  <ret> 발화 (turn7 첫 프레임)
    23.30s  agent 발화 시작: <ret> 서울에서 부산으로 가는 기차는 오전 여덟시에 KTX 백일편, 두시간 삼십분 소요, 오전 열시 삼십
    23.43s  user  발화 끝
    25.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.54s]: (tool result) 08:00 KTX 101 (2h 30m), 10:30 KTX 105 (2h 45m), 13:00 KT
    27.99s  user  발화 시작: 네.
    28.43s  user  발화 끝
    36.84s  agent 발화 끝
    37.49s  user  발화 시작: 오, 오전 여덟시 KTX 백일 예매해 줘.
    40.57s  <ret> 발화 (turn10 첫 프레임)
    40.65s  agent 발화 시작: <ret> 좌석 십이A, 서울역 출발, 부산역 도착, 요금은 오만 구천팔백원이고, 이천이십육년 칠월 십이일 
    40.68s  user  발화 끝
    42.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.87s]: (tool result) Seat 12A, Seoul Station, 부산 Station, KRW 59800, 2026-07-
    44.26s  user  발화 시작: 그렇죠.
    44.89s  user  발화 끝
    52.52s  agent 발화 끝
    53.30s  user  발화 시작: 알았어요. 근데… 영화 예매도 좀 해 줄 수 있어?
    56.95s  user  발화 끝
    57.11s  agent 발화 시작: 영화 예매도 도와드릴 수 있습니다. 어떤 영화를 보고 싶으신가요?
    61.74s  agent 발화 끝
    61.89s  user  발화 시작: 음… '인터스텔라' 보고 싶은데…
    64.79s  user  발화 끝
    66.79s  user  발화 시작: …서울 강남 근처 상영관 있나?
    68.70s  <ret> 발화 (turn16 첫 프레임)
    69.02s  user  발화 끝
    69.10s  agent 발화 시작: <ret> 메가박스 강남관에서 오후 두시, 다섯시, 여덟시에, CGV 강남관에서 오후 세시 삼십분, 여섯시 
    70.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.58s]: (tool result) Megabox Gangnam, 14:00, 17:00, 20:00; CGV Gangnam, 15:30
    77.68s  agent 발화 끝
    78.14s  user  발화 시작: 그럼 메가박스 강남 오후 다섯시로 예매해 줘.
    80.58s  <ret> 발화 (turn18 첫 프레임)
    80.97s  agent 발화 시작: <ret> 성인 두명, 메가박스 강남관, 인터스텔라, 오후 다섯시, 요금은 삼만 원이고, 확인번호는 QW7R
    81.04s  user  발화 끝
    82.26s  ⚡SPAN 주입 [d'=1.68s / d_lead=8.72s]: (tool result) 2 Adult Tickets, Megabox Gangnam, Interstellar, 17:00, K
    84.50s  user  발화 시작: 와.
    85.13s  user  발화 끝
    89.69s  agent 발화 끝
    90.12s  user  발화 시작: 고마워요.
    90.94s  user  발화 끝
    90.94s  agent 발화 시작: 즐거운 여행 되세요.
    92.37s  agent 발화 끝
