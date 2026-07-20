# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Elena",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "mid 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "dish",
#       "text": "User's go-to comfort dish is mushroom risotto."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "bloodtype",
#       "text": "User's blood type is AB+."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "medication",
#       "text": "User takes medication for migraines."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "trip",
#       "text": "User is planning a trip to Georgia in June."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-23",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hey, who played bass on "Sympathy for…
     3.33s  user  발화 끝
     4.46s  user  발화 시작: …the Devil"? I'm trying to settle a bet.
     6.71s  <ret> 발화 (turn2 첫 프레임)
     7.31s  agent 발화 시작: <ret> That would be Keith Richards, actually! He stepped in 
     7.42s  user  발화 끝
     8.08s  ⚡SPAN 주입 [d'=1.37s / d_lead=14.15s]: Keith Richards played bass on The Rolling Stones' "Sympathy for the De
    20.93s  <ret> 발화 (turn3 첫 프레임)
    21.34s  ⚡SPAN 주입(IRRELEVANT) [d'=0.41s / d_lead=9.18s]: The average high temperature in Fairbanks, Alaska in January is -11.1°
    21.46s  agent 발화 끝
    21.47s  agent 발화 시작: <ret> [happy] It’s good to know a bit of music trivia, isn't
    30.61s  user  발화 시작: Wow, that’s interesting! So, he usually played guitar, right
    30.66s  agent 발화 끝
    36.72s  agent 발화 시작: Yes, Keith Richards is primarily known as the guitarist for 
    36.76s  user  발화 끝
    50.27s  agent 발화 끝
