# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Anton",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-26",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "home",
#       "text": "User's home address is 437 Elm Street."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-06",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m moving to Seoul next month, an | S2 That’s… a lot more… | S3 …than I was expecting. | S4 …Do they have good cafes there? I 

     0.00s  user  발화 시작: I’m moving to Seoul next month, and I’m a bit overwhelmed wi
     5.56s  agent 발화 시작: Moving to a new city is a big step, but you’ve got this! It’
     5.56s  user  발화 끝
    12.61s  user  발화 시작: I’ve been looking at apartments in Gangnam, but it’s so expe
    12.61s  agent 발화 끝
    16.37s  <ret> 발화 (turn3 첫 프레임)
    16.69s  agent 발화 시작: <ret> It sounds like you’re exploring a popular area; Gangna
    16.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.39s]: Gangnam is known as one of Seoul's most affluent districts, with an av
    16.69s  user  발화 끝
    27.08s  user  발화 시작: That’s… a lot more…
    27.08s  agent 발화 끝
    28.56s  user  발화 시작: …than I was expecting.
    28.56s  user  발화 끝
    30.05s  agent 발화 시작: It definitely can be! Perhaps we could explore some neighbor
    30.05s  user  발화 끝
    35.98s  user  발화 시작: Actually, I was reading about Hongdae. Hongdae sounds a litt
    35.98s  agent 발화 끝
    40.65s  <ret> 발화 (turn8 첫 프레임)
    40.81s  agent 발화 시작: <ret> Hongdae is a fantastic choice; it’s a lively district 
    40.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.76s]: Hongdae is a district in Seoul known for its thriving indie music scen
    40.81s  user  발화 끝
    51.56s  user  발화 시작: Oh.
    51.56s  agent 발화 끝
    51.94s  agent 발화 시작: It's a great area for young professionals and students, offe
    51.94s  user  발화 끝
    57.13s  user  발화 시작: …Do they have good cafes there? I need a good place to work.
    57.13s  agent 발화 끝
    61.87s  <ret> 발화 (turn12 첫 프레임)
    61.95s  agent 발화 시작: <ret> There are lots of options! Thanks Nature Cafe at Wausa
    61.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: (tool result) {"restaurants": [{"name": "Thanks Nature Cafe", "address
    61.95s  user  발화 끝
    70.86s  agent 발화 끝
