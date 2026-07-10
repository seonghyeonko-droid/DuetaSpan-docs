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

# EXAMINER(FDB-v2) 단계: S1 어, 정부 부처에 대해 읽고 있었는데…… | S2 그, 보훈처는 언제 시작했어? | S3 7월 1930년? 생각보다 꽤 최근인데. 진짜 그럴까? | S4 그렇구나, 그냥 새로 생긴 게 아니라 합쳐진 거였네? 그게 더

     0.00s  user  발화 시작: 어, 정부 부처에 대해 읽고 있었는데……
     2.58s  user  발화 끝
     3.94s  user  발화 시작: 그, 보훈처는 언제 시작했어?
     5.96s  <ret> 발화 (turn2 첫 프레임)
     6.36s  agent 발화 시작: <ret> 음, 여러 기관이 얼마나 오래되었는지 생각해보면 흥미로운데요, 보훈부는 특정 요구에 대한 대응으로
     6.58s  user  발화 끝
     7.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.71s]: [source: Britannica] The Department of Veterans Affairs was establishe
    12.94s  agent 발화 시작: 보훈부는 공식적으로 1930년 7월 21일에 설립되었습니다.
    13.07s  agent 발화 끝
    17.43s  user  발화 시작: 7월 1930년? 생각보다 꽤 최근인데. 진짜 그럴까?
    17.47s  agent 발화 끝
    21.19s  <ret> 발화 (turn5 첫 프레임)
    21.43s  agent 발화 시작: <ret> 네, 천구백삼십 년 이전에 참전 용사 혜택은 연금국을 포함한 여러 기관에서 처리했습니다.
    21.59s  user  발화 끝
    23.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.73s]: [source: VA.gov] Prior to 1930, veteran benefits were administered by 
    27.17s  agent 발화 끝
    27.31s  user  발화 시작: 그렇구나, 그냥 새로 생긴 게 아니라 합쳐진 거였네? 그게 더 말이 되네. 그럼 보훈국은 정확히 뭘 했어?
    33.10s  user  발화 끝
    33.16s  <ret> 발화 (turn7 첫 프레임)
    33.32s  agent 발화 시작: <ret> 네, 천구백이십일 년에 만들어진 보훈국은 제1차 세계 대전 참전 용사들에게 재활, 의료 서비스, 
    35.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: [source: History.com] The Veterans Bureau, established in 1921, provid
    41.57s  agent 발화 끝
