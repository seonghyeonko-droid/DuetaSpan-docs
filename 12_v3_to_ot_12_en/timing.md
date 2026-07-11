# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Ruby",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-28",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-05-25",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-03-28",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-08-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Who kept a famous diary… | S2 …about the Great Fire of London? | S3 Oh, interesting. Was he actually * | S4 …did he write about what caused th

     0.00s  user  발화 시작: Who kept a famous diary…
     0.00s  <ret> 발화 (turn2 첫 프레임)
     0.00s  <ret> 발화 (turn5 첫 프레임)
     0.04s  user  발화 시작: …about the Great Fire of London?
     0.04s  user  발화 끝
     0.09s  agent 발화 시작: <ret> It’s fascinating to look back at history through perso
     0.09s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: Samuel Pepys was an English naval administrator and Member of Parliame
     0.09s  user  발화 끝
     0.10s  <ret> 발화 (turn6 첫 프레임)
     0.25s  user  발화 시작: Mm-hmm.
     0.25s  agent 발화 끝
     0.26s  user  발화 시작: Oh, interesting. Was he actually *there* during the fire?
     0.26s  user  발화 끝
     0.33s  agent 발화 시작: <ret> Yes, he was—Pepys recorded the events of the Great Fir
     0.33s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: Pepys recorded the events of the Great Fire of London in his diary, de
     0.33s  user  발화 끝
     0.50s  agent 발화 시작: <ret> It’s remarkable how vividly he captured the experience
     0.50s  agent 발화 끝
     0.50s  <ret> 발화 (turn8 첫 프레임)
     0.56s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: The diary covers the years 1660 to 1669, and provides a detailed and p
     0.72s  user  발화 시작: …did he write about what caused the fire, or just what it *d
     0.72s  agent 발화 끝
     0.82s  agent 발화 시작: <ret> He didn't focus on the cause, but more on the unfoldin
     0.82s  ⚡SPAN 주입 [d'=0.18s / d_lead=0.18s]: Pepys’s diary entries about the fire do not specifically detail its ca
     0.82s  user  발화 끝
     1.00s  agent 발화 끝
