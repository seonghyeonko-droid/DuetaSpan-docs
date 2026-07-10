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

# EXAMINER(FDB-v2) 단계: S1 어, 그러게. | S2 1919년에 시작됐다고? 진짜 그런가? | S3 뭔데 그럼? 그 기사에서는 완전 확신하는 것처럼 말하던데, 흐 | S4 1930년? 완전 다르네. 1930년 되기 전에는 뭘로 했어?

     0.00s  user  발화 시작: 어, 그러게.
     0.89s  user  발화 시작: 1919년에 시작됐다고? 진짜 그런가?
     1.01s  user  발화 끝
     3.92s  <ret> 발화 (turn2 첫 프레임)
     4.12s  user  발화 끝
     4.31s  agent 발화 시작: <ret> 음, 재향군인부 자체가 1919년에 정식으로 세워진 건 아니고요… 삼월 일일 운동을 말하는 것인가
     5.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.08s]: 1919년에 시작되었다는 것은 3.1 운동을 말하는 것인가요?
    13.39s  agent 발화 끝
    13.81s  user  발화 시작: 뭔데 그럼? 그 기사에서는 완전 확신하는 것처럼 말하던데, 흐음…
    17.75s  <ret> 발화 (turn4 첫 프레임)
    17.99s  agent 발화 시작: <ret> 그 기관의 기원은 1930년으로 거슬러 올라가는데, 의회에서 공식적으로 그걸 창설한 게… 천구백삼
    18.12s  user  발화 끝
    19.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.67s]: 재향군인부 자체가 1919년에 정식으로 세워진 건 아니고요…
    28.66s  agent 발화 끝
    29.76s  user  발화 시작: 1930년? 완전 다르네. 1930년 되기 전에는 뭘로 했어?
    35.05s  <ret> 발화 (turn6 첫 프레임)
    35.21s  agent 발화 시작: <ret> 1930년 이전에는 전쟁 위험 보험국과 재향군인국에서 퇴역 군인들을 위한 서비스를 담당했는데, 그
    35.31s  user  발화 끝
    37.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.38s]: 그 기관의 기원은 1930년으로 거슬러 올라가는데, 의회에서 공식적으로 그걸 창설한 게 천구백삼십년에 이루어졌습니다.
    47.59s  agent 발화 끝
