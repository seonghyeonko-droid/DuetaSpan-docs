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


     0.00s  user  발화 시작: 야, 정부 부처들 읽다가… 참전용사부(Veterans Affairs)는 언제 시작했어?
     5.41s  <ret> 발화 (turn1 첫 프레임)
     5.81s  agent 발화 시작: <ret> 음, 참전용사부는 천구백삼십년 칠월 이십일일에 설립되었어요.
     5.93s  user  발화 끝
     7.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.25s]: [source: Wikipedia] The United States Department of Veterans Affairs w
     9.95s  user  발화 시작: 천구백삼십년? 솔직히 생각보다 엄청 최근인데. 훨씬 오래됐을 줄 알았어.
    10.06s  agent 발화 끝
    15.84s  <ret> 발화 (turn3 첫 프레임)
    16.00s  agent 발화 시작: <ret> 네, 천구백삼십년 이전에는 연금국에서 참전용사 관련 업무를 담당했었는데, 연금국은 천팔백십일년에 
    16.25s  user  발화 끝
    17.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.41s]: [source: VA.gov] Prior to 1930, veterans’ affairs were handled by the 
    25.41s  agent 발화 끝
    26.21s  user  발화 시작: 천팔백십일… 생각보다 일찍부터 참전용사들을 챙겼네, 그냥 부서가 따로 없었던 거구나?
    32.14s  <ret> 발화 (turn5 첫 프레임)
    32.38s  agent 발화 시작: <ret> 네, 연금국은 독립전쟁 참전용사와 그들의 미망인들에게 처음으로 연금을 지급했어요.
    32.55s  user  발화 끝
    34.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: [source: History.com] The Bureau of Pensions initially focused on prov
    38.73s  agent 발화 끝
