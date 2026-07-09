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


     0.00s  user  발화 시작: 야, 정부 부처들 읽다가… 참전용사부 언제 시작했는지 궁금해졌어.
     4.42s  <ret> 발화 (turn1 첫 프레임)
     4.82s  agent 발화 시작: <ret> 아, 좋은 질문이세요. 참전용사부는 천구백삼십칠월 이십일일에 설립되었어요.
     4.90s  user  발화 끝
     6.02s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.81s]: The United States Department of Veterans Affairs was established on Ju
    10.31s  user  발화 시작: 천구백삼십칠 년? 그거… 생각보다 엄청 최근이네, 그렇지? 훨씬 오래됐을 줄 알았어.
    10.43s  agent 발화 끝
    16.79s  agent 발화 시작: 그렇죠, 좀 최근에 느껴지실 수도 있겠네요. 아마 이전의 참전용사들을 위한 기관들을 생각하고 계신 것 같아요
    17.02s  user  발화 끝
    25.10s  agent 발화 끝
    25.84s  user  발화 시작: 음, 당연히 그 전에도 뭔가 있었겠지. 천구백삼십칠 년 전에 참전용사들한테 뭘 해 줬어?
    32.03s  <ret> 발화 (turn5 첫 프레임)
    32.10s  agent 발화 시작: <ret> 천구백삼십 년 이전에는— 천구백이십일년에 설립된 참전용사국에서 혜택과 서비스를 제공했어요.
    32.28s  user  발화 끝
    34.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.80s]: Prior to 1930, the Veterans Bureau, established in 1921, provided bene
    39.55s  agent 발화 끝
