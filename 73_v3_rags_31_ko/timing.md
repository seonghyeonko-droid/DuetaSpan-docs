# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "준현",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-26",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-30",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 천팔백이십삼년에 제이 미국…
     2.74s  user  발화 시작: …은행의 수장이 누가 됐었는지 알아?
     2.74s  user  발화 끝
     5.92s  <ret> 발화 (turn2 첫 프레임)
     6.16s  agent 발화 시작: <ret> 천팔백이십삼년에 제이 미국 은행의 수장으로 니콜라스 비들 씨가 임명되었답니다. 그분은 천팔백삼십육
     6.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.58s]: Nicholas Biddle assumed leadership of the Second Bank of the United St
     6.16s  user  발화 끝
    15.74s  agent 발화 끝
