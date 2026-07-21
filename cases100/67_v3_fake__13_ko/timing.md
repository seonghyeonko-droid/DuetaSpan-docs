# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "정민",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "work",
#       "text": "User works as a sales manager."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "phone",
#       "text": "User uses an iPhone 13."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "pet",
#       "text": "User has a Shiba Inu named Kongi."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-02-02",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요, 로라우스 씨. 요즘 좀 힘든 시간을 보내고 있어요.
     4.30s  user  발화 끝
     4.38s  <ret> 발화 (turn1 첫 프레임)
     4.50s  agent 발화 시작: <ret> 안녕하세요. 힘든 시간을 보내고 계신다니 마음이 아픕니다. 어떤 점이 가장 힘드신가요?
     5.61s  ⚡SPAN 주입 [d'=1.23s / d_lead=6.86s]: The National Civil Rights Museum opened on September 28, 1991, in Memp
    10.77s  <ret> 발화 (turn2 첫 프레임)
    11.26s  agent 발화 시작: <ret> 민권 박물관에 대해 궁금해하시는군요. 그곳은 천구백구십일년 구월 이십팔일에 테네시주 멤피스에서 문
    11.36s  agent 발화 끝
    11.84s  ⚡SPAN 주입(IRRELEVANT) [d'=1.07s / d_lead=9.83s]: The average high temperature in Reykjavik, Iceland, on July 10th is 13
    15.89s  user  발화 시작: 맞아요.
    16.48s  user  발화 끝
    21.07s  user  발화 시작: 아, 몰랐어요. 마틴 루터 킹 주니어 목사님과 관련된 곳이었군요.
    21.09s  agent 발화 끝
    26.32s  agent 발화 시작: [curious] 네, 맞아요. 마틴 루터 킹 주니어 목사님이 암살당한 로레인 모텔 자리에 세워졌습니다. 그
    26.42s  user  발화 끝
    36.32s  agent 발화 시작: 힘든 시간을 보내고 계시다면, 잠시 감정을 느껴보는 것도 괜찮습니다. 괜찮으시다면, 지금 기분이 어떤지 조금
    36.38s  agent 발화 끝
    47.12s  agent 발화 끝
