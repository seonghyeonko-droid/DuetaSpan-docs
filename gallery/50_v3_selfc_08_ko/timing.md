# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "보희",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 서울에 있는 병원 몇 개인지 알려줄 수 있어?
     3.96s  <ret> 발화 (turn2 첫 프레임)
     4.01s  agent 발화 시작: 맞아요.
     4.01s  user  발화 끝
     4.32s  ⚡SPAN 주입 [d'=0.37s / d_lead=6.01s]: (tool result) There are 147 hospitals within Seoul, South Korea, accor
     4.51s  agent 발화 시작: <ret> 서울에는 최근 자료에 따르면 병원이 백사십칠개 있습니다. 혹시 특정 지역을 찾고 계신가요?
     4.51s  agent 발화 끝
    10.52s  user  발화 시작: 음… 강남구 말고, 서초구에 있는 병원 숫자는? — 아, 서초구로 다시 찾아줘.
    10.52s  agent 발화 끝
    16.28s  <ret> 발화 (turn4 첫 프레임)
    16.54s  agent 발화 시작: <ret> 서초구에는 병원이 서른여덟개 있습니다.
    16.54s  user  발화 끝
    16.58s  ⚡SPAN 주입 [d'=0.30s / d_lead=2.00s]: (tool result) There are 38 hospitals located within Seocho-gu, Seoul, 
    18.54s  agent 발화 끝
