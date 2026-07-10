# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Lucia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 820 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어, 정부 부처에 대해 읽고 있었는데… | S2 혹시, 재향군인부(Department of Veterans A | S3 천구백삼십년? 그거 좀… 최근 같아. 훨씬 더 예전에 다른 이 | S4 천팔백팔십오년… 그러니까, 이름은 천구백삼십년에 바뀐 거고, 

     0.00s  user  발화 시작: 어, 정부 부처에 대해 읽고 있었는데…
     2.49s  user  발화 끝
     4.08s  user  발화 시작: 혹시, 재향군인부(Department of Veterans Affairs)는 언제 만들어졌어?
     8.56s  <ret> 발화 (turn2 첫 프레임)
     8.96s  agent 발화 시작: <ret> 음, 재향군인부는 천구백삼십년 삼월 삼일에 설립되었어요. 국가를 위해 봉사하신 분들을 지원한 역사
     9.03s  user  발화 끝
    10.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.06s]: The Department of Veterans Affairs was established on March 3, 1930.
    21.02s  agent 발화 끝
    21.43s  user  발화 시작: 천구백삼십년? 그거 좀… 최근 같아. 훨씬 더 예전에 다른 이름으로 시작하지 않았어?
    27.16s  <ret> 발화 (turn4 첫 프레임)
    27.32s  agent 발화 시작: <ret> 네, 사실은 천팔백팔십오년에 국립 장애 퇴역 군인 및 선원 자택(National Home for 
    27.49s  user  발화 끝
    29.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=15.86s]: It originated as the National Home for Disabled Soldiers and Sailors i
    43.18s  agent 발화 끝
    44.25s  user  발화 시작: 천팔백팔십오년… 그러니까, 이름은 천구백삼십년에 바뀐 거고, 아이디어는 훨씬 더 오래됐다는 거네. 원래 목적
    54.08s  user  발화 끝
    54.11s  agent 발화 시작: 처음에는 남북 전쟁 참전 용사들에게 집과 보살핌을 제공하기 위해 만들어졌어요. 당시에는 매우 구체적인 필요였
    64.27s  agent 발화 끝
