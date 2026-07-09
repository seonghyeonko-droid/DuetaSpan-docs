# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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


     0.00s  user  발화 시작: 퇴역 군인부(Department of Veterans Affairs)가 언제 만들어졌는지 궁금해.
     5.42s  <ret> 발화 (turn1 첫 프레임)
     5.74s  agent 발화 시작: <ret> 음, 그거 알아보기 전에… 퇴역 군인부는 허버트 후버 대통령의 행정 명령으로 천구백삼십년 팔월구일
     5.88s  user  발화 끝
     6.86s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.54s]: [source: Britannica] The Department of Veterans Affairs was establishe
    14.64s  agent 발화 끝
    15.90s  user  발화 시작: 천구백삼십년이라고? 그게 말이 돼? 그전에 뭐였는데?
    19.96s  agent 발화 시작: 그 전에 여러 기관들이 있었죠. 퇴역 군인들을 위한 지원은 훨씬 이전부터 시작되었어요.
    20.21s  user  발화 끝
    26.27s  user  발화 시작: 그럼 그전 기관들이랑 지금이랑 차이가 뭘까? 규모나 역할 면에서.
    26.39s  agent 발화 끝
    30.47s  <ret> 발화 (turn5 첫 프레임)
    30.76s  user  발화 끝
    30.78s  agent 발화 시작: <ret> 규모 면에서는… 천구백삼십년 이전에는 연금국이나 장애 퇴역 군인 자택 같은 기관들이 각각 담당했지
    30.97s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.18s]: [source: VA.gov] Prior to 1930, veterans’ services were administered b
    40.84s  agent 발화 끝
