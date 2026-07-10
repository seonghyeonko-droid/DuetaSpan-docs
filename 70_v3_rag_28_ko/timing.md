# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "도원",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-07-18",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 타이타닉 영화가 만들어질 때… | S2 …돈이 얼마나 들었는지 궁금해요. | S3 이억 달러요? 좀 많이 들었네요. 그 돈으로 뭘 그렇게 많이  | S4 아, 촬영 기간도 엄청 길었군요. 혹시 지금 서울 날씨는 어때

     0.00s  user  발화 시작: 타이타닉 영화가 만들어질 때…
     2.96s  user  발화 끝
     4.15s  user  발화 시작: …돈이 얼마나 들었는지 궁금해요.
     5.78s  <ret> 발화 (turn2 첫 프레임)
     6.09s  agent 발화 시작: <ret> 영화를 만드는 데에는 이억 달러가 들었다고 해요. 당시 기준으로 정말 굉장한 금액이었죠.
     6.10s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.60s]: The film cost $200 million to produce, making it one of the most expen
     6.27s  user  발화 끝
     8.22s  user  발화 시작: 그렇군요.
     9.04s  user  발화 끝
    11.69s  agent 발화 끝
    11.76s  user  발화 시작: 이억 달러요? 좀 많이 들었네요. 그 돈으로 뭘 그렇게 많이 했는데요?
    13.57s  user  발화 시작: 네.
    14.21s  user  발화 끝
    15.38s  <ret> 발화 (turn6 첫 프레임)
    15.66s  agent 발화 시작: <ret> 촬영은 천구백구십육년 십이월 일일에 멕시코 로사리토에서 시작해서, 백육십일 동안 진행됐다고 해요.
    15.70s  ⚡SPAN 주입 [d'=0.96s / d_lead=9.55s]: Principal photography began in Rosarito, Mexico, on December 1, 1996, 
    15.83s  user  발화 끝
    22.17s  user  발화 시작: 와.
    22.80s  user  발화 끝
    25.21s  agent 발화 끝
    26.39s  user  발화 시작: 아, 촬영 기간도 엄청 길었군요. 혹시 지금 서울 날씨는 어때요?
    30.73s  <ret> 발화 (turn9 첫 프레임)
    30.96s  agent 발화 시작: <ret> 지금 서울은 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 있어요.
    30.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    31.02s  user  발화 끝
    37.73s  agent 발화 끝
