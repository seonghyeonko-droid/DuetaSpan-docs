# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "재준",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-23",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-06-18",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-05-19",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 아기 분유가 언제 처음 나왔는지 궁금해.
     2.93s  <ret> 발화 (turn1 첫 프레임)
     3.18s  agent 발화 시작: <ret> 아기 분유가 처음 개발된 건 천팔백육십칠년, 유스투스 폰 리비히라는 분이 만들었어요.
     3.18s  user  발화 끝
     3.23s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.83s]: The first baby formula was developed in 1867 by Justus von Liebig.
     9.02s  user  발화 시작: 음, 그게 언제라고? 천팔백육십칠년이라니 엄청 오래됐네.
     9.02s  agent 발화 끝
    11.72s  <ret> 발화 (turn3 첫 프레임)
    12.02s  ⚡SPAN 주입 [d'=0.30s / d_lead=4.77s]: Justus von Liebig's formula was a powdered preparation of cow's milk, 
    12.20s  agent 발화 시작: <ret> 리비히의 분유는 소젖 가루, 밀가루, 맥아로 만든 가루 형태였대요.
    12.20s  user  발화 끝
    16.97s  user  발화 시작: 그래.
    16.97s  agent 발화 끝
    17.50s  user  발화 시작: 소젖 가루라고? 그건 좀… 지금 분유랑 많이 다르겠네. 요즘 분유는 훨씬 좋잖아.
    17.50s  user  발화 끝
    23.86s  agent 발화 시작: 네.
    23.86s  user  발화 끝
    24.39s  agent 발화 시작: [happy] 그렇죠, 지금은 훨씬 과학적으로 발전했으니까요. 아기에게 필요한 영양소를 더 정확하게 맞춰서 
    24.39s  agent 발화 끝
    32.35s  agent 발화 끝
