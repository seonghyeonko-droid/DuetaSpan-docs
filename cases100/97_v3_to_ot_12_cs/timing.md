# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Sky",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "work",
#       "text": "User works as a carpenter."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "streaming",
#       "text": "User subscribes to Twitch and Spotify."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "dish",
#       "text": "User's go-to comfort dish is bún chả."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "allergy",
#       "text": "User is allergic to bee stings."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "learning",
#       "text": "User is studying for a driving test."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "airline",
#       "text": "User usually flies with Cathay Pacific."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-15",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-01-06",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-01-04",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕 모시, 궁금한 게 있는데… “Internet of Things”라는 말은 언제부터 나오기 시작했어?
     5.86s  <ret> 발화 (turn1 첫 프레임)
     6.02s  user  발화 끝
     6.06s  agent 발화 시작: <ret> 음, “Internet of Things”라는 용어는 사실 구십구 년도에 케빈 애쉬턴이 프록터 앤
     6.16s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.18s]: Kevin Ashton coined the phrase “Internet of Things” in 1999 while work
    15.23s  agent 발화 끝
    15.27s  user  발화 시작: 아, 잠깐만. 응, 알았어, 미안.
    17.89s  user  발화 시작: 그래, 구십구 년이네. 생각보다 훨씬 빠르다.
    18.13s  user  발화 끝
    20.00s  agent 발화 시작: 네.
    20.82s  agent 발화 끝
    21.10s  user  발화 끝
    21.12s  agent 발화 시작: [curious] 좀 놀랍지 않아? 기술이 그 아이디어에 따라잡히는 데 시간이 좀 걸렸지만, 지금은 우리가 
    26.12s  user  발화 시작: 음.
    26.62s  user  발화 끝
    29.33s  agent 발화 끝
    29.35s  agent 발화 시작: 그리고 가끔, 변화가 너무 빠르면 좀 당황스러울 수도 있어. 파도 같아 – 왔다가 가잖아.
    35.75s  agent 발화 끝
