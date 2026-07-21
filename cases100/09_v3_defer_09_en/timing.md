# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Samuel",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "allergy",
#       "text": "User is allergic to tree nuts."
#     },
#     {
#       "date": "2026-06-04",
#       "category": "phone",
#       "text": "User uses a Galaxy S24."
#     },
#     {
#       "date": "2026-05-24",
#       "category": "car",
#       "text": "User drives a 2020 Kia Niro."
#     },
#     {
#       "date": "2026-05-17",
#       "category": "work",
#       "text": "User works as a midwife."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "trip",
#       "text": "User is planning a trip to Portugal in November."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "partner",
#       "text": "User's partner is named Emma."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "home",
#       "text": "User's home address is 39 Alder Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-15",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-04-04",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hi Frona, I’m trying to plan some healthy meals for the week
     5.22s  agent 발화 시작: Good morning! Breakfast can be tricky, but we can definitely
     5.32s  user  발화 끝
    12.87s  agent 발화 끝
    13.01s  user  발화 시작: Well, I like fruit, but I need something with a bit more pro
    15.59s  agent 발화 시작: Yeah.
    16.23s  agent 발화 끝
    20.00s  <ret> 발화 (turn4 첫 프레임)
    20.24s  ⚡SPAN 주입 [d'=1.09s / d_lead=13.57s]: (tool result) Oatmeal with berries and nuts provides a balanced mix of
    20.29s  agent 발화 시작: <ret> Oatmeal with berries and nuts is a fantastic option, p
    20.59s  user  발화 끝
    32.63s  ⚡지연 SPAN 주입(선제발표 직전): [2024-07-06] I'm training for a half marathon.
    33.82s  agent 발화 시작: <ret> I remembered you mentioned training for a half maratho
    33.87s  agent 발화 끝
    43.51s  agent 발화 끝
