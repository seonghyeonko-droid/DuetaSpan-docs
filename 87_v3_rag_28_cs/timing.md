# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-02",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "home",
#       "text": "User's home address is 960 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 어, 정부 부처들 읽다가 궁금해졌는데—재향군인부 언제 시작했어?
     5.27s  <ret> 발화 (turn1 첫 프레임)
     5.67s  agent 발화 시작: <ret> 아, 좋은 질문이세요. 재향군인부는 천구백삼십년 칠월 이십일일에 설립되었어요.
     5.79s  user  발화 끝
     6.87s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.42s]: The United States Department of Veterans Affairs was established on Ju
    12.73s  user  발화 시작: 천구백삼십년? 그거 좀…늦네. 재향군인 지원은 그거보다 훨씬 옛날부터 있었던 줄 알았는데.
    12.90s  agent 발화 끝
    20.07s  agent 발화 시작: 더 오래전부터 있었죠, 분명히. 예전에는 다른 이름으로 다른 부서에서 재향군인 지원을 했어요—진짜 변화의 역
    20.24s  user  발화 끝
    28.60s  agent 발화 끝
    29.31s  user  발화 시작: 근데 천구백삼십년 이전에 아무것도 없었어? 분명히 재향군인 필요를 다루는 연방 부처가 있었을 텐데.
    35.72s  <ret> 발화 (turn5 첫 프레임)
    35.79s  agent 발화 시작: <ret> 사실 있었어요—천구백삼십년 이전에 재향군인국이 있었는데, 천구백이십일년에 설립되었어요.
    35.98s  user  발화 끝
    37.48s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.04s]: Prior to 1930, the Veterans Bureau, established in 1921, handled veter
    42.88s  agent 발화 끝
