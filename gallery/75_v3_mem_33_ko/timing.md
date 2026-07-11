# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "노영",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-19",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-10-26",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 노영님. 저는 풀이에요. 건강과 일상 습관을 도와드리는 상담사입니다.
     5.05s  agent 발화 끝
     5.57s  user  발화 시작: 아, 네, 안녕하세요. 지금 부산 시간 몇 시예요?
     8.69s  <ret> 발화 (turn2 첫 프레임)
     8.77s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 세시 십칠분이에요. 오늘 하루도 잘 보내세요.
     8.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Seoul rig
     8.80s  user  발화 끝
    14.54s  user  발화 시작: 혹시 제가 시월에 리스본 여행을 간다고 말씀드렸었죠?
    14.57s  agent 발화 끝
    17.75s  <ret> 발화 (turn4 첫 프레임)
    17.98s  agent 발화 시작: <ret> 네, 시월에 리스본 여행을 계획하고 있다고 말씀해주셨어요. 즐거운 여행 준비하세요.
    17.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: [2026-04-06] User is planning a trip to Lisbon in October.
    18.19s  user  발화 끝
    22.93s  agent 발화 끝
