# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Sky",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-09-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "home",
#       "text": "User's home address is 442 Elm Street."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hi Feen, I was wondering when Bombay officially became Mumba
     4.31s  <ret> 발화 (turn1 첫 프레임)
     4.54s  agent 발화 시작: <ret> The city officially became Mumbai in nineteen ninety-f
     4.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: The city of Bombay was officially renamed Mumbai in 1995 by the Mahara
     4.63s  user  발화 끝
     9.40s  user  발화 시작: …was there a particular reason for the name change?
    10.15s  agent 발화 끝
    12.09s  <ret> 발화 (turn3 첫 프레임)
    12.33s  agent 발화 시작: <ret> The name “Mumbai” actually comes from Mumba, a local n
    12.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: The name "Mumbai" is derived from Mumba, the local Koli name for the i
    12.49s  user  발화 끝
    16.73s  user  발화 시작: Yeah.
    17.18s  user  발화 끝
    20.27s  <ret> 발화 (turn5 첫 프레임)
    20.58s  agent 발화 끝
    20.59s  agent 발화 시작: <ret> It’s wonderful when cities honor their history, isn’t 
    20.59s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.99s]: The current temperature in Reykjavik, Iceland is 8.2°C, with partly cl
    27.50s  agent 발화 시작: Sometimes a fresh start is just what’s needed, whether it’s 
    27.58s  agent 발화 끝
    32.39s  user  발화 시작: That’s a good point. Thanks, Feen.
    32.40s  agent 발화 끝
    34.79s  user  발화 끝
