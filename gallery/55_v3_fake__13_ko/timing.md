# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "성희",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2026-03-28",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 멕시코 영토를 누가 넘겨받았지?
     1.97s  <ret> 발화 (turn1 첫 프레임)
     2.13s  agent 발화 시작: <ret> 미국이 천팔백사십팔년에 멕시코로부터 영토를 넘겨받았어요. 그런 역사가 있었군요.
     2.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: Mexico ceded it to the United States in 1848.
     2.30s  user  발화 끝
     7.66s  <ret> 발화 (turn2 첫 프레임)
     8.06s  agent 발화 시작: <ret> 요즘은 어떤 게 가장 마음을 편안하게 해 주나요?
     8.06s  ⚡SPAN 주입(IRRELEVANT) [d'=1.44s / d_lead=2.54s]: The current stock price of Tesla is $251.48 as of 10:30 AM PST.
     8.06s  agent 발화 끝
    10.59s  agent 발화 끝
    11.48s  user  발화 시작: 아, 그냥 궁금해서 그랬어.
    13.69s  user  발화 끝
    14.11s  agent 발화 시작: 궁금한 건 언제든 물어보세요. 제가 도울 수 있는 건 다 할게요.
    15.99s  user  발화 시작: 음.
    16.40s  user  발화 끝
    17.76s  agent 발화 끝
    17.86s  agent 발화 시작: 혹시 가족이나 관계에 대해 이야기하고 싶은 부분이 있으세요?
    21.33s  agent 발화 끝
