# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Zoe",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Zoe, I'm Klellan. It’s lovely to connect with you today. 
     4.76s  agent 발화 끝
     5.38s  user  발화 시작: Um, well, I was just thinking about that trip I took last ye
    10.08s  <ret> 발화 (turn2 첫 프레임)
    10.16s  agent 발화 시작: <ret> I recall you mentioned your travel preferences last Ma
    10.16s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.18s]: [2026-05-17] User prefers an aisle seat when traveling.
    10.29s  user  발화 끝
    13.84s  user  발화 시작: Okay.
    14.61s  user  발화 끝
    15.34s  agent 발화 끝
    15.38s  user  발화 시작: Oh, yes! That’s right.
    17.24s  agent 발화 시작: It's good to remember those little comforts when we plan, is
    17.27s  user  발화 끝
    20.15s  user  발화 시작: Yeah, yeah.
    21.62s  user  발화 끝
    23.42s  agent 발화 시작: I'm glad that detail resonated with you. Perhaps we could di
    23.54s  agent 발화 끝
    29.92s  user  발화 시작: Actually, could you tell me what the weather is like in Pari
    30.00s  agent 발화 끝
    33.06s  <ret> 발화 (turn9 첫 프레임)
    33.30s  agent 발화 시작: <ret> The weather in Paris today is quite pleasant — it’s 22
    33.30s  ⚡SPAN 주입 [d'=1.20s / d_lead=6.02s]: (tool result) 22.0°C, humidity 68%, wind 3.2 km/h
    33.48s  user  발화 끝
    39.32s  agent 발화 끝
