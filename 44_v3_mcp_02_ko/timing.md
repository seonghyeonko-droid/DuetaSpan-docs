# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "혜정",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-15",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-06",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오늘 날씨 어때?
     1.11s  <ret> 발화 (turn1 첫 프레임)
     1.51s  agent 발화 시작: <ret> 서울 날씨는 현재 이십육 점 칠도이고, 습도는 칠십팔퍼센트, 바람은 시속 삼 점 이킬로미터입니다.
     1.51s  user  발화 끝
     2.11s  ⚡SPAN 주입 [d'=1.00s / d_lead=9.08s]: The weather in Seoul is 26.7°C, humidity 78%, wind 3.2 km/h.
    10.59s  user  발화 시작: 오.
    10.59s  agent 발화 끝
    11.09s  user  발화 시작: 응, 강남역 근처 레스토랑 예약해 줘.
    11.09s  user  발화 끝
    13.77s  <ret> 발화 (turn4 첫 프레임)
    14.07s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.06s]: (tool result) Restaurants found: ‘La Cuisine’, ‘VIPS Gangnam’, ‘Outbac
    14.12s  agent 발화 시작: <ret> 강남역 근처에 ‘라 쿠진’, ‘빕스 강남점’, ‘아웃백 스테이크하우스’가 있습니다. 혹시 특별히 
    14.12s  user  발화 끝
    21.18s  user  발화 시작: 음.
    21.18s  agent 발화 끝
    21.68s  user  발화 시작: 아웃백으로 예약해 줘. 일곱시에 두 명.
    21.68s  user  발화 끝
    24.20s  <ret> 발화 (turn7 첫 프레임)
    24.71s  agent 발화 시작: <ret> 아웃백 스테이크하우스 강남점에 일곱시에 두 분으로 예약이 완료되었습니다. 확인 번호는 팔 칠 엑스
    24.71s  user  발화 끝
    25.60s  ⚡SPAN 주입 [d'=1.39s / d_lead=10.09s]: (tool result) Reservation confirmed at Outback Steakhouse, Gangnam, fo
    34.80s  agent 발화 끝
