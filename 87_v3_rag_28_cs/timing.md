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

# EXAMINER(FDB-v2) 단계: S1 어, 정부 부처에 대해 읽고 있었는데…… | S2 재향군인부 언제 시작했어? | S3 1930년? 생각보다 엄청 최근인데. 그 전에 아무것도 없었어 | S4 재향군인국에서 다 했어? 부서 전체를 만드는 건 큰 변화 같아

     0.00s  user  발화 시작: 어, 정부 부처에 대해 읽고 있었는데……
     3.42s  user  발화 끝
     5.04s  user  발화 시작: 재향군인부 언제 시작했어?
     6.58s  <ret> 발화 (turn2 첫 프레임)
     6.98s  agent 발화 시작: <ret> 네, 재향군인부는 후버 대통령에 의해 천구백삼십 년 3월 3일에 만들어졌습니다. 이런 기관에 대해
     7.09s  user  발화 끝
     8.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.48s]: [source: Wikipedia] The Department of Veterans Affairs was established
    17.46s  agent 발화 끝
    17.89s  user  발화 시작: 1930년? 생각보다 엄청 최근인데. 그 전에 아무것도 없었어?
    22.73s  <ret> 발화 (turn4 첫 프레임)
    22.97s  agent 발화 시작: <ret> 네, 오늘날의 부서가 만들어지기 전에는 재향군인국에서 재향군인 업무를 처리했는데요, 천구백삼십 년
    23.17s  user  발화 끝
    24.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.38s]: [source: U.S. Department of Veterans Affairs History] Prior to 1930, t
    35.36s  agent 발화 끝
    36.46s  user  발화 시작: 재향군인국에서 다 했어? 부서 전체를 만드는 건 큰 변화 같아.
    41.23s  <ret> 발화 (turn6 첫 프레임)
    41.39s  agent 발화 시작: <ret> 네, 천구백삼십 년 법안으로 여러 기관을 통합했고, 부서에 장관급 지위를 부여했습니다. 더 큰 구
    41.46s  user  발화 끝
    43.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.20s]: [source: Congressional Research Service] The 1930 act consolidated var
    53.59s  agent 발화 끝
