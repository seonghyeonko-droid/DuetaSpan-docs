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


     0.00s  user  발화 시작: 어, 정부 부처들 읽다가 궁금해졌는데, 재향군인부 언제 시작했어?
     4.92s  <ret> 발화 (turn1 첫 프레임)
     5.32s  agent 발화 시작: <ret> 네, 좋은 질문이세요. 재향군인부는 천구백삼십년 칠월 이십일일에 설립되었어요.
     5.46s  user  발화 끝
     6.52s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.65s]: The United States Department of Veterans Affairs was established on Ju
    11.40s  user  발화 시작: 천구백삼십년? 생각보다 엄청 최근인데, 진짜. 남북전쟁 때는 훨씬 오래됐을 줄 알았어.
    11.53s  agent 발화 끝
    18.13s  agent 발화 시작: 상대적으로 최근에 만들어진 건 맞아요, 퇴역 군인들의 필요를 생각하면요. 혹시 예전에는 지원 방식이 달랐을까
    18.35s  user  발화 끝
    27.40s  agent 발화 끝
    28.18s  user  발화 시작: 근데… 천구백삼십년에 만들어졌으면 그 전에는 뭘 했어? 퇴역 군인들은 그냥… 알아서 해결했어?
    35.40s  <ret> 발화 (turn5 첫 프레임)
    35.48s  agent 발화 시작: <ret> 네, 천구백삼십년 이전에 지원 방식이 달랐어요. 천구백이십일년에 만들어진 재향군인국에서 퇴역 군인
    35.64s  user  발화 끝
    37.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: Prior to 1930, the Veterans Bureau, created in 1921, handled veterans’
    45.31s  agent 발화 끝
