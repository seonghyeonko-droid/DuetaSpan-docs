# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "혜형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "mid 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-17",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 20°C."
#     },
#     {
#       "date": "2026-06-07",
#       "category": "car",
#       "text": "User drives a 2018 Mazda CX-5."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "airline",
#       "text": "User usually flies with Emirates."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "savings",
#       "text": "User is saving for a down payment on an apartment."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "commute",
#       "text": "User carpools with a colleague."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-03-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-03-13",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 서울에서… | S2 …부산 가는 기차표 있나요? | S3 음… 좀 더 늦은 시간대로 보여주세요. 오후 두시 이후로요. | S4 네, 두시 오십분으로 예약해주세요.

     0.00s  user  발화 시작: 이번 주 토요일에 서울에서…
     2.15s  user  발화 시작: …부산 가는 기차표 있나요?
     2.15s  user  발화 끝
     3.96s  <ret> 발화 (turn2 첫 프레임)
     4.29s  agent 발화 시작: <ret> 이번 주 토요일 서울에서 부산 가는 기차표를 알아봤는데, 여러 시간대가 있습니다. 제일 빠른 건 
     4.29s  user  발화 끝
     5.04s  ⚡SPAN 주입 [d'=1.08s / d_lead=12.35s]: Trains_1_FindTrains({"departure_city": "Seoul", "arrival_city": "Busan
    16.64s  user  발화 시작: 어머.
    16.64s  agent 발화 끝
    17.18s  agent 발화 시작: 다른 시간대도 더 찾아볼까요?
    17.18s  user  발화 끝
    19.32s  user  발화 시작: 음… 좀 더 늦은 시간대로 보여주세요. 오후 두시 이후로요.
    19.32s  agent 발화 끝
    23.56s  <ret> 발화 (turn6 첫 프레임)
    24.15s  agent 발화 시작: <ret> 오후 두시 이후로는 두시 오십분 케이 티 엑스가 있습니다. 이 기차는 육만 이천원이고, 소요 시간
    24.15s  user  발화 끝
    24.78s  ⚡SPAN 주입 [d'=1.22s / d_lead=10.20s]: Trains_1_FindTrains({"departure_city": "Seoul", "arrival_city": "Busan
    34.35s  user  발화 시작: 네, 두시 오십분으로 예약해주세요.
    34.35s  agent 발화 끝
    36.47s  <ret> 발화 (turn8 첫 프레임)
    36.50s  agent 발화 시작: <ret> 네, 예약 완료되었습니다. 확인번호는 티 엑스 구 이 팔 사 칠입니다. 즐거운 여행 되세요!
    36.50s  user  발화 끝
    37.32s  ⚡SPAN 주입 [d'=0.86s / d_lead=7.51s]: (tool result) Trains_1 GetTrainTickets({"departure city": "Seoul", "ar
    44.02s  agent 발화 끝
