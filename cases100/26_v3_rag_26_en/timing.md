# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Leo",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-01",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 19°C."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "schedule",
#       "text": "User has a 9-to-6 weekday schedule."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "allergy",
#       "text": "User is allergic to gluten."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "partner",
#       "text": "User's partner is named Emma."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-19",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-02-18",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-01-23",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hey Ele, I was just watching Robin Hood: Prince of Thieves a
     6.90s  <ret> 발화 (turn1 첫 프레임)
     7.43s  agent 발화 시작: <ret> The Sheriff of Nottingham was brilliantly played by Al
     7.46s  user  발화 끝
     7.72s  ⚡SPAN 주입 [d'=1.41s / d_lead=6.35s]: Alan Rickman portrayed the Sheriff of Nottingham in the 1991 film Robi
     9.69s  user  발화 시작: Yeah.
    10.09s  user  발화 끝
    13.68s  user  발화 시작: Alan Rickman! Of course! He was so good. I completely forgot
    13.78s  agent 발화 끝
    16.48s  agent 발화 시작: Yeah.
    16.97s  agent 발화 끝
    20.46s  agent 발화 시작: [happy] I’m glad you remembered! Alan Rickman really brought
    20.63s  user  발화 끝
    25.83s  agent 발화 끝
    26.84s  user  발화 시작: He really did. Okay, back to movies… Do you know what year *
    33.29s  <ret> 발화 (turn7 첫 프레임)
    33.59s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.09s]: Jurassic Park, directed by Steven Spielberg, was first released in the
    33.76s  agent 발화 시작: <ret> *Jurassic Park* first roared onto the big screen on Ju
    33.78s  user  발화 끝
    40.85s  agent 발화 끝
