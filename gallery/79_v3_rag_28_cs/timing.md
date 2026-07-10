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


     0.00s  user  발화 시작: 야, 정부 부처들 읽다가 갑자기 궁금해졌어… 보훈처는 정확히 언제 시작했어?
     5.16s  <ret> 발화 (turn1 첫 프레임)
     5.32s  agent 발화 시작: <ret> 음, 보훈부는 공식적으로 천구백삼십 년 7월 21일에 설립되었어요.
     5.33s  user  발화 끝
     7.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: [source: Britannica] The United States Department of Veterans Affairs 
    11.62s  agent 발화 끝
    11.97s  user  발화 시작: 7월 1930년? 그거 좀 늦은 것 같은데. 그 전에 뭐라도 있었을 것 같아, 퇴역 군인들을 도울 방법이.
    18.68s  <ret> 발화 (turn3 첫 프레임)
    18.99s  agent 발화 시작: <ret> 맞아요, 의심하시는 게 당연해요. 그 날짜 훨씬 전부터 퇴역 군인들을 지원하기 위한 노력이 있었어
    19.01s  user  발화 끝
    20.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: [source: VA.gov] Prior to 1930, the Veterans Bureau, established in 19
    25.61s  agent 발화 시작: 1930년 이전에 퇴역 군인 지원은… 1921년에 설립된 재향 군인국을 통해 이루어졌어요.
    25.62s  agent 발화 끝
    32.47s  agent 발화 끝
