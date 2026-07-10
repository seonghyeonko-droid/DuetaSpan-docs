# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Casey",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-22",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어, 공중 보건에 대해 읽다가 궁금한 게 생겼어요. 미국에서는 | S2 아, 여기 오는 길에 교통 체증이 장난 아니었어요. | S3 죄송해요, 잠깐 누구랑 통화했어요. 뉴버그라고요? | S4 그렇군요. 그냥… 큰 변화였던 것 같아요.

     0.00s  user  발화 시작: 어, 공중 보건에 대해 읽다가 궁금한 게 생겼어요. 미국에서는 언제부터 물에 불소소를 넣기 시작했나요?
     7.23s  user  발화 끝
     7.28s  <ret> 발화 (turn1 첫 프레임)
     7.60s  agent 발화 시작: <ret> 음, 천구백사십오 년 1월 25일에 뉴욕 뉴버그에서 시작했어. 예방 조치가 시간이 지나면서 어떻게
     7.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.20s]: Fluoridation began in the United States on January 25, 1945, in Newbur
    11.77s  user  발화 시작: 진짜요?
    12.73s  user  발화 끝
    17.80s  agent 발화 끝
    17.93s  user  발화 시작: 아, 여기 오는 길에 교통 체증이 장난 아니었어요.
    21.43s  user  발화 시작: 죄송해요, 잠깐 누구랑 통화했어요. 뉴버그라고요?
    21.54s  user  발화 끝
    24.94s  <ret> 발화 (turn5 첫 프레임)
    25.34s  agent 발화 시작: <ret> 미안한데, 물 불소화 시작과 관련해서 뉴버그에 대한 다른 정보는 없어.
    25.34s  ⚡SPAN 주입 [d'=1.28s / d_lead=5.83s]: (no information found)
    25.46s  user  발화 끝
    30.65s  user  발화 시작: 그렇군요. 그냥… 큰 변화였던 것 같아요.
    31.18s  agent 발화 끝
    34.62s  user  발화 끝
    34.71s  agent 발화 시작: 확실히 중요한 공중 보건 결정이었지. 좋은 의도라도 첫 발을 내딛는 게 무서울 때도 있잖아.
    41.00s  agent 발화 끝
