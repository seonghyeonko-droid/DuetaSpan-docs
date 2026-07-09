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


     0.00s  user  발화 시작: 참, 국가 유공자부(Department of Veterans Affairs)가 언제 만들어졌는지 궁금하네요.
     6.69s  <ret> 발화 (turn1 첫 프레임)
     7.00s  agent 발화 시작: <ret> 그거요, 제가 알아볼게요. 미국 국가 유공자부는 천구백삼십년에 설립되었답니다.
     7.14s  user  발화 끝
     7.65s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.12s]: The United States Department of Veterans Affairs was established in 19
    12.65s  agent 발화 끝
    13.97s  user  발화 시작: 천구백삼십년이라고요? 좀 의외네요. 그전에는 어떻게 했는데요?
    18.66s  agent 발화 시작: 그전에도 당연히 퇴역 군인들을 위한 지원이 있었죠. 다만 지금처럼 부서로 체계화되지는 않았던 거예요.
    18.92s  user  발화 끝
    25.78s  user  발화 시작: 아, 그렇군요. 그럼 그 부서가 생긴 이유가 특별히 있었나요?
    25.89s  agent 발화 끝
    29.85s  <ret> 발화 (turn5 첫 프레임)
    29.92s  agent 발화 시작: <ret> 특별한 이유가 있었죠. 제1차 세계 대전 참전 용사들의 필요에 따라 국가 유공자부가 만들어졌어요.
    29.95s  user  발화 끝
    30.35s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.69s]: The Department of Veterans Affairs was created in response to the need
    37.24s  agent 발화 끝
