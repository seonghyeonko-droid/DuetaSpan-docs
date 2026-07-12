# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "노민",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-09-29",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 골든 나이츠가 엔 에이치 엘에 언제 합류했는지 궁금해요.
     3.26s  <ret> 발화 (turn1 첫 프레임)
     3.42s  agent 발화 시작: <ret> 골든 나이츠는 이 공 일 칠 일 팔 시즌에 엔 에이치 엘에 확장 팀으로 처음 참가했어요.
     3.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.83s]: The Vegas Golden Knights began play in the National Hockey League in t
     3.42s  user  발화 끝
    10.25s  agent 발화 끝
