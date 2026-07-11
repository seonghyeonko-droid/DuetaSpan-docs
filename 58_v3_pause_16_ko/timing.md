# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "준진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-25",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 세인트 마이클이 막스앤스펜서로 바뀐 게 언제였더라…?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.25s  agent 발화 시작: <ret> 세인트 마이클이 막스앤스펜서로 바뀌게 된 건, 이천년 칠월이었답니다.
     0.25s  ⚡SPAN 주입 [d'=0.29s / d_lead=0.29s]: In July 2000, the department store chain Saint Michael was rebranded a
     0.25s  user  발화 끝
     0.43s  <ret> 발화 (turn3 첫 프레임)
     0.54s  user  발화 시작: 음, 그게 아니라… 막스앤스펜서로 바뀐 게…
     0.54s  agent 발화 끝
     0.75s  agent 발화 시작: <ret> 다시 말씀드리면, 이천년 칠월에 막스앤스펜서로 바뀌었습니다.
     0.75s  ⚡SPAN 주입 [d'=0.21s / d_lead=0.21s]: In July 2000, the department store chain Saint Michael was rebranded a
     0.75s  user  발화 끝
     0.96s  user  발화 시작: 맞아.
     0.96s  agent 발화 끝
     1.00s  user  발화 끝
