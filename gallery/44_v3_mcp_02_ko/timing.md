# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "유원",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-08",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오늘 오스틴의 Violet Crown Cinema에서 상영하는…
     3.79s  user  발화 끝
     4.86s  user  발화 시작: …다큐멘터리가 뭐 있는지 알려줄 수 있어요?
     7.07s  <ret> 발화 (turn2 첫 프레임)
     7.46s  agent 발화 시작: <ret> Violet Crown Cinema에서는 지금 “아메리칸 심포니”와 “스틸: 마이클 J. 폭스 무
     7.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: (tool result) Documentary films currently showing at Violet Crown Cine
     7.62s  user  발화 끝
    10.93s  user  발화 시작: 아.
    11.61s  user  발화 끝
    15.27s  user  발화 시작: “아메리칸 심포니” 오늘 몇 시에 상영하나요?
    15.34s  agent 발화 끝
    17.57s  <ret> 발화 (turn5 첫 프레임)
    17.96s  agent 발화 시작: <ret> “아메리칸 심포니”는 오늘 Violet Crown Cinema에서 오후 두시 삼십분, 다섯시 십오
    17.96s  ⚡SPAN 주입 [d'=1.76s / d_lead=9.22s]: (tool result) “American Symphony” is showing at Violet Crown Cinema in
    18.04s  user  발화 끝
    27.18s  agent 발화 끝
    27.33s  agent 발화 시작: 혹시 이 중에서 괜찮은 시간이 있으신가요?
    29.73s  agent 발화 끝
