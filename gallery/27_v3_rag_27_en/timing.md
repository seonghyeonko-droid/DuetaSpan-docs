# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Robin",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2025-10-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "home",
#       "text": "User's home address is 815 Elm Street."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I’m trying to remember a movie… it was Korean, a thriller, a
     4.92s  agent 발화 시작: It sounds like you’re recalling a significant film. Perhaps 
     4.92s  user  발화 끝
    10.19s  user  발화 시작: Yeah.
    10.19s  agent 발화 끝
    10.54s  user  발화 시작: Um, yeah, I think it had zombies? And it was… uh… pretty rec
    10.54s  user  발화 끝
    15.41s  <ret> 발화 (turn4 첫 프레임)
    15.81s  agent 발화 시작: <ret> That sounds like *Train to Busan*, a 2016 film directe
    15.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.73s]: Train to Busan is a 2016 South Korean zombie thriller film directed by
    15.81s  user  발화 끝
    23.54s  user  발화 시작: Wow.
    23.54s  agent 발화 끝
    23.90s  user  발화 시작: That’s it! Do you know if Kim Yool-ho was in that one?
    23.90s  user  발화 끝
    28.03s  <ret> 발화 (turn7 첫 프레임)
    28.11s  agent 발화 시작: <ret> Yes, Kim Yool-ho did indeed star in *Train to Busan* w
    28.11s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.33s]: Kim Yool-ho starred in the 2016 film Train to Busan, alongside Gong Yo
    28.11s  user  발화 끝
    34.44s  agent 발화 끝
