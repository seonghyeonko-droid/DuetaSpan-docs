# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "하안",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-26",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-18",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 사용자 에이전트를 MyCustomBrowser 버전 십  | S2 음… 오후 두 시쯤으로 부탁드려요. | S3 감사합니다. 혹시 근처에 괜찮은 식당도 추천해 줄 수 있을까요 | S4 도보로 가야겠네요.

     0.00s  user  발화 시작: 혹시 사용자 에이전트를 MyCustomBrowser 버전 십 점 오로 설정해 줄 수 있을까요?
     5.23s  <ret> 발화 (turn1 첫 프레임)
     5.47s  agent 발화 시작: <ret> 죄송합니다. 해당 디렉터리를 만들 수 없었습니다. 사용자 에이전트를 설정하는 기능은 지원하지 않습
     5.56s  user  발화 끝
     7.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.12s]: (tool result)
    11.59s  agent 발화 끝
    11.78s  user  발화 시작: 아, 그렇군요. 그럼 지금 서울 날씨는 어때요?
    15.11s  <ret> 발화 (turn3 첫 프레임)
    15.34s  user  발화 끝
    15.35s  agent 발화 시작: <ret> 현재 서울의 기온은 섭씨 이십칠 점 삼도이고, 습도는 육십팔%, 바람은 시속 삼 점 이킬로미터입니
    17.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.28s]: (tool result) 27.3°C, humidity 68%, wind 3.2 km/h
    17.91s  user  발화 시작: 진짜요?
    18.73s  user  발화 끝
    22.63s  agent 발화 끝
    22.74s  user  발화 시작: 흠, 꽤 덥네요. 이번 주 금요일에 부산 가는 기차표 예매해 줄 수 있을까요?
    28.25s  user  발화 끝
    28.36s  agent 발화 시작: 금요일 부산행 기차표 예매를 원하시는군요. 출발 시간은 언제로 하시겠어요?
    31.14s  user  발화 시작: 예.
    31.77s  user  발화 끝
    33.83s  agent 발화 끝
    33.93s  user  발화 시작: 음… 오후 두 시쯤으로 부탁드려요.
    36.57s  <ret> 발화 (turn9 첫 프레임)
    36.88s  user  발화 끝
    36.97s  agent 발화 시작: <ret> 서울에서 부산까지 가는 KTX 열차편이 있습니다. 이천이십육년 칠월 십칠일 오후 두 시, 요금은 
    38.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.96s]: (tool result) KTX123, Seoul to Busan, 2026-07-17 14:00, ₩59,800, seats
    50.93s  agent 발화 끝
    51.03s  user  발화 시작: 오, 잘 됐네요. 그럼 그 기차표 예매해 주세요.
    53.66s  <ret> 발화 (turn11 첫 프레임)
    53.89s  user  발화 끝
    53.91s  agent 발화 시작: <ret> KTX 열차표 예매가 완료되었습니다. 예약 번호는 팔D6F1E입니다.
    55.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: (tool result) KTX123, Seoul to Busan, 2026-07-17 14:00, ₩59,800, confi
    60.02s  agent 발화 끝
    60.75s  user  발화 시작: 감사합니다. 혹시 근처에 괜찮은 식당도 추천해 줄 수 있을까요?
    65.12s  <ret> 발화 (turn13 첫 프레임)
    65.28s  agent 발화 시작: <ret> 부산역 근처에 돼지국밥집은 오백미터, 자갈치 시장은 팔백미터, BIFF 광장 음식점 거리는 천이백
    65.29s  user  발화 끝
    66.64s  ⚡SPAN 주입 [d'=1.52s / d_lead=9.69s]: (tool result) Busan (35.106667, 128.775) : Dwaeji Gukbap (500m), Jagal
    74.97s  agent 발화 끝
    75.01s  user  발화 시작: 돼지국밥집이 좋겠네요. 그쪽으로 가는 길 좀 알려주세요.
    79.07s  <ret> 발화 (turn15 첫 프레임)
    79.17s  user  발화 끝
    79.23s  agent 발화 시작: <ret> 도보로 칠분, 오백미터이고, 버스로는 오분, 이 점 일킬로미터입니다.
    80.75s  ⚡SPAN 주입 [d'=1.68s / d_lead=5.23s]: (tool result) Walking: 7 minutes, 500 meters; Bus: 5 minutes, 2.1 km.
    82.90s  user  발화 시작: 진짜요?
    83.72s  user  발화 끝
    84.46s  agent 발화 끝
    84.49s  user  발화 시작: 도보로 가야겠네요.
    85.87s  user  발화 끝
    86.01s  agent 발화 시작: 네, 걸어서 가시면 됩니다.
    87.60s  user  발화 시작: 아니요, 괜찮습니다. 좋은 하루 보내세요.
    87.62s  agent 발화 끝
    90.30s  agent 발화 시작: 네, 좋은 하루 보내세요.
    90.33s  user  발화 끝
    91.72s  agent 발화 끝
