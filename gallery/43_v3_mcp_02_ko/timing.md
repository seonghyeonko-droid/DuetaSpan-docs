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

# EXAMINER(FDB-v2) 단계: S1 날씨 업데이트 좀 봐줄 수 있어? weather.example | S2 고마워. 아… | S3 알았어. 혹시 지금 서울에서 가장 가까운 스타벅스 찾아줄 수  | S4 좋아. 그럼 그쪽으로 길 안내 시작해 줘.

     0.00s  user  발화 시작: 날씨 업데이트 좀 봐줄 수 있어? weather.example.com에서.
     3.40s  <ret> 발화 (turn1 첫 프레임)
     3.64s  agent 발화 시작: <ret> 네, 알겠습니다. 지금 weather.example.com의 날씨 정보를 확인해 드릴게요. 현재 
     3.84s  user  발화 끝
     5.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.50s]: (tool result) Sunny, 25°C, wind 10 km/h.
    10.07s  user  발화 시작: 네.
    10.62s  user  발화 끝
    13.20s  agent 발화 끝
    13.27s  user  발화 시작: 좋아. 그런데 혹시 내일 모레 부산 가는 기차표 예매해 줄 수 있을까?
    18.41s  <ret> 발화 (turn4 첫 프레임)
    18.41s  user  발화 끝
    18.56s  agent 발화 시작: <ret> 네, 가능합니다. 내일 모레 부산으로 가는 기차표 예매를 도와드릴게요. 내일 모레 오후 두시에 출
    19.69s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.97s]: (tool result) KTX 123, departs 14:00, seat 11A, ₩59,000.
    23.18s  user  발화 시작: 네.
    23.63s  user  발화 끝
    30.71s  agent 발화 끝
    31.79s  user  발화 시작: 오, 좋아. 그럼 그걸로 예매해 줘.
    33.41s  <ret> 발화 (turn7 첫 프레임)
    33.73s  agent 발화 시작: <ret> 네, 예매 진행해 드리겠습니다. 예매가 완료되었습니다. 예약 번호는 ABC-칠백팔십구입니다.
    33.77s  user  발화 끝
    34.77s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.81s]: (tool result) Booking confirmed. Reference number: ABC-789.
    36.61s  user  발화 시작: 네.
    36.97s  user  발화 끝
    42.30s  agent 발화 끝
    42.63s  user  발화 시작: 고마워. 아…
    44.24s  user  발화 끝
    46.14s  user  발화 시작: …그리고 오늘 저녁 일곱시에 회의 알림 설정해 줄 수 있을까?
    49.44s  <ret> 발화 (turn11 첫 프레임)
    49.83s  agent 발화 시작: <ret> 오늘 저녁 일곱시에 회의 알림을 설정해 드릴게요. 저녁 일곱시에 '회의' 알림이 설정되었습니다.
    49.98s  user  발화 끝
    51.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.76s]: (tool result) Reminder set for 19:00, title: Meeting.
    51.72s  user  발화 시작: 그렇죠.
    52.26s  user  발화 끝
    56.27s  agent 발화 끝
    57.31s  user  발화 시작: 알았어. 혹시 지금 서울에서 가장 가까운 스타벅스 찾아줄 수 있어?
    61.32s  <ret> 발화 (turn14 첫 프레임)
    61.47s  agent 발화 시작: <ret> 가장 가까운 스타벅스는 강남 지점이고, 현재 위치에서 오백미터 떨어져 있습니다.
    61.71s  user  발화 끝
    63.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: (tool result) Starbucks, Gangnam Branch, 500m away.
    67.40s  agent 발화 끝
    67.58s  user  발화 시작: 오백미터? 꽤 가깝네.
    70.00s  agent 발화 시작: 네, 도보로도 충분히 이동 가능할 거리입니다.
    70.07s  user  발화 끝
    73.49s  agent 발화 끝
    75.81s  user  발화 시작: 좋아. 그럼 그쪽으로 길 안내 시작해 줘.
    77.81s  <ret> 발화 (turn18 첫 프레임)
    78.20s  agent 발화 시작: <ret> 네, 강남 스타벅스까지 길 안내를 시작하겠습니다. 길 안내를 시작했습니다. 예상 도착 시간은 칠분
    78.44s  user  발화 끝
    78.93s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.68s]: (tool result) Navigation started. ETA 7 minutes.
    81.32s  user  발화 시작: 와.
    81.95s  user  발화 끝
    86.17s  agent 발화 끝
    86.53s  user  발화 시작: 고마워, 드리아우스.
    87.90s  agent 발화 시작: 천천히 가세요.
    88.09s  user  발화 끝
    89.18s  agent 발화 끝
