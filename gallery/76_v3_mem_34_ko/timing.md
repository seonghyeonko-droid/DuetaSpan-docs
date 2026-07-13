# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "예준",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 에랜님. 혹시 집에서 출발해서 광안리까지 가는 길 | S2 케이 티 엑스는 얼마나 걸릴까요? | S3 아, 케이 티 엑스가 훨씬 빠르네요. — | S4 네, 알겠습니다. 감사합니다, 에랜님.

     0.00s  agent 발화 시작: 안녕하세요, 예준님. 저는 에이전트 에랜입니다. 오늘 하루 어떻게 도와드릴까요?
     4.38s  user  발화 시작: 안녕하세요, 에랜님. 혹시 집에서 출발해서 광안리까지 가는 길 좀 알려주실 수 있을까요?
     4.38s  agent 발화 끝
    10.23s  agent 발화 시작: 네.
    10.23s  user  발화 끝
    10.63s  <ret> 발화 (turn3 첫 프레임)
    10.72s  agent 발화 시작: <ret> 네, 물론입니다. 예준님의 집 주소는 서울 종로구 세종대로 백칠십오번지이시죠. 서울에서 광안리까지
    10.72s  agent 발화 끝
    11.33s  ⚡SPAN 주입 [d'=0.70s / d_lead=13.64s]: [2026-01-31] User's home address is 서울 종로구 세종대로 175.
    24.36s  user  발화 시작: 네시간 넘게 걸린다니, 좀 멀네요.
    24.36s  agent 발화 끝
    26.18s  <ret> 발화 (turn5 첫 프레임)
    26.79s  agent 발화 시작: <ret> 네, 부산까지는 꽤 거리가 됩니다. 혹시 다른 이동 수단을 고려해 보시겠어요? 예를 들어 케이 티
    26.79s  user  발화 끝
    26.82s  ⚡SPAN 주입 [d'=0.65s / d_lead=10.23s]: (tool result) {"distance": "389.2 km", "duration": "4h 32m", "route": 
    37.02s  user  발화 시작: 케이 티 엑스는 얼마나 걸릴까요?
    37.02s  agent 발화 끝
    39.27s  <ret> 발화 (turn7 첫 프레임)
    39.46s  agent 발화 시작: <ret> 서울에서 부산까지 케이 티 엑스는 두시간 삼십분 정도 소요됩니다. 요금은 오만 구천팔백원입니다.
    39.46s  user  발화 끝
    40.43s  ⚡SPAN 주입 [d'=1.15s / d_lead=5.85s]: (tool result) {"trains": [{"departure time": "08:00", "arrival time": 
    45.30s  user  발화 시작: 네.
    45.30s  agent 발화 끝
    45.79s  user  발화 시작: 아, 케이 티 엑스가 훨씬 빠르네요. —
    45.79s  user  발화 끝
    49.20s  user  발화 시작: …혹시 광안리 근처에 맛있는 비건 식당도 있을까요?
    49.20s  user  발화 끝
    52.07s  <ret> 발화 (turn11 첫 프레임)
    52.61s  agent 발화 시작: <ret> 광안리 근처에는 '채식하는 사람들'이라는 비건 식당이 있습니다. 수영구 광안해변로 이백사십오번지에
    52.61s  user  발화 끝
    52.67s  ⚡SPAN 주입 [d'=0.60s / d_lead=7.79s]: (tool result) {"restaurants": [{"name": "채식하는 사람들", "address": "부산 수영구
    60.40s  user  발화 시작: 네.
    60.40s  agent 발화 끝
    60.89s  agent 발화 시작: 채식하는 사람들의 메뉴는 다양하다고 하니, 한번 방문해 보시는 것도 좋을 것 같아요.
    60.89s  user  발화 끝
    66.74s  user  발화 시작: 네, 알겠습니다. 감사합니다, 에랜님.
    66.74s  agent 발화 끝
    68.69s  agent 발화 시작: [happy] 도움이 되었다니 기쁩니다, 예준님. 즐거운 여행 되세요!
    68.69s  user  발화 끝
    72.58s  agent 발화 끝
