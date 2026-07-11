# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Ethan",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-10-19",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Um, I was wondering… when did the last convicts arrive in Au
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.16s  agent 발화 시작: <ret> That’s a thoughtful question. The last convict ship, t
     0.16s  ⚡SPAN 주입 [d'=0.25s / d_lead=0.25s]: The last convict ship, the Hougoumont, arrived in Western Australia on
     0.16s  user  발화 끝
     0.41s  user  발화 시작: Wow, January tenth, 1868… that’s… a long time ago.
     0.41s  agent 발화 끝
     0.45s  <ret> 발화 (turn5 첫 프레임)
     0.48s  agent 발화 시작: It truly is a long time ago! Time has a way of softening the
     0.48s  user  발화 끝
     0.67s  user  발화 시작: I guess so. Could you… find me some information about the Ho
     0.67s  agent 발화 끝
     0.77s  agent 발화 시작: <ret> The Hougoumont was a British ship used to transport co
     0.77s  ⚡SPAN 주입 [d'=0.23s / d_lead=0.23s]: (tool result) The Hougoumont was a British merchant ship converted int
     0.77s  user  발화 끝
     1.00s  agent 발화 끝
