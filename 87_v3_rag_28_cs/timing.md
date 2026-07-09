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


     0.00s  user  발화 시작: 어, 정부 부처들 읽다가… 참전용사부 언제 시작했는지 궁금해.
     5.01s  <ret> 발화 (turn1 첫 프레임)
     5.33s  user  발화 끝
     5.40s  agent 발화 시작: <ret> 네, 역사 공부는 현재 시스템을 이해하는 데 도움이 되죠. 참전용사부는 천구백삼십 년 7월 21일
     7.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.00s]: [source: Britannica] The Department of Veterans Affairs was establishe
    14.88s  user  발화 시작: 1930년이라고? 왠지… 생각보다 엄청 최근인데. 남북전쟁 이후부터 훨씬 오래 전부터 있었을 줄 알았어.
    14.95s  agent 발화 끝
    23.08s  agent 발화 시작: 물론, 그 공식적인 설립 이전에 베테랑 지원이 존재했던 건 사실이에요.
    23.27s  user  발화 끝
    28.64s  agent 발화 끝
    29.40s  user  발화 시작: 근데 지원이 있었으면, 1930년 이전에 이름이 뭐였어? 다른 부처가 있었어?
    34.00s  <ret> 발화 (turn5 첫 프레임)
    34.24s  agent 발화 시작: <ret> 음, 천구백삼십 년 이전에 참전용사 혜택은 여러 기관에 분산되어 있었어요. 1930년 이전에는 연
    34.40s  user  발화 끝
    36.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.39s]: [source: VA.gov] Prior to 1930, veteran programs were administered by 
    45.74s  agent 발화 끝
