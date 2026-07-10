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

# EXAMINER(FDB-v2) 단계: S1 어, 국방부 시작이 언제였는지 궁금하네. 뭔가… | S2 계속 있었던 것 같아서. | S3 7월 1930년? 생각보다 엄청 최근이네. 그 전에 뭐 없었어 | S4 그러니까, 부 자체가 만들어지기 한 세기 전에? 엄청난 차이네

     0.00s  user  발화 시작: 어, 국방부 시작이 언제였는지 궁금하네. 뭔가…
     4.54s  user  발화 끝
     6.03s  user  발화 시작: 계속 있었던 것 같아서.
    16.55s  <ret> 발화 (turn2 첫 프레임)
    16.86s  agent 발화 시작: <ret> 음, 국가재향군인부 말씀이시죠? 정식으로 세워진 건 천구백삼십 년 7월 21일이에요.
    16.98s  user  발화 끝
    18.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: [source: Britannica] The Department of Veterans Affairs was establishe
    22.17s  user  발화 시작: 7월 1930년? 생각보다 엄청 최근이네. 그 전에 뭐 없었어?
    22.37s  agent 발화 끝
    34.01s  <ret> 발화 (turn4 첫 프레임)
    34.40s  agent 발화 시작: <ret> 뭐, 국가재향군인부 전에 퇴역 군인 혜택은 연금국에서 담당했는데, 연금국은 천팔백십일 년에 만들어
    34.46s  user  발화 끝
    35.29s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.71s]: [source: VA.gov] Prior to 1930, veteran benefits were administered by 
    41.11s  agent 발화 끝
    41.27s  user  발화 시작: 그러니까, 부 자체가 만들어지기 한 세기 전에? 엄청난 차이네. 연금국은 뭘 했는데?
    53.87s  agent 발화 시작: 연금국은 연금을 제공하는 데 집중했고, 의료 지원이랑 토지 소유권 관련 도움도 드렸어요. 중요한 첫걸음이었답
    53.93s  user  발화 끝
    54.69s  agent 발화 끝
