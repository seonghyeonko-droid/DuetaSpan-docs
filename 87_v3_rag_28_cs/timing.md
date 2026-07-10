# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Hannah",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-09-25",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-07-18",
#       "category": "home",
#       "text": "User's home address is 428 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음, 궁금한 게 있었는데요. | S2 영화 *Titanic* 만드는 데 얼마 들었어요? 엄청 많이  | S3 이억 달러요? 와, 정말 엄청난 금액이네요. 음, 그때 기준으 | S4 정말 대단하네요. 혹시 지금은 그거보다 더 비싼 영화가 나올 

     0.00s  user  발화 시작: 음, 궁금한 게 있었는데요.
     1.90s  user  발화 시작: 영화 *Titanic* 만드는 데 얼마 들었어요? 엄청 많이 들었을 것 같아요.
     2.07s  user  발화 끝
     6.38s  <ret> 발화 (turn2 첫 프레임)
     6.76s  agent 발화 시작: <ret> 뭐, 그렇게 웅장한 걸 만드는 데 돈이 안 들 수가 없죠. 제작비가 대략 이백 달러 정도 됐습니다
     6.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.78s]: The 1997 film Titanic had a production budget of approximately $200 mi
     6.90s  user  발화 끝
    14.54s  agent 발화 시작: 그 규모의 영화에 얼마나 많은 노력이 들어가는지 정말 놀랍지 않아요?
    14.55s  agent 발화 끝
    16.86s  user  발화 시작: 아.
    17.49s  user  발화 끝
    19.43s  user  발화 시작: 이억 달러요? 와, 정말 엄청난 금액이네요. 음, 그때 기준으로도 기록이었나요?
    19.73s  agent 발화 끝
    25.27s  <ret> 발화 (turn6 첫 프레임)
    25.34s  agent 발화 시작: <ret> 사실, 기록이었어요. 개봉했을 때 *Titanic*은 역대 가장 비싼 영화였답니다.
    25.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.67s]: At the time of its release, Titanic was the most expensive film ever m
    25.54s  user  발화 끝
    27.82s  user  발화 시작: 와.
    28.31s  user  발화 끝
    32.02s  agent 발화 끝
    32.06s  agent 발화 시작: 그 프로젝트의 야심이 얼마나 컸는지 알 수 있네요. 영화 제작자들이 그런 비전을 어떻게 현실로 만드는지 항상
    39.54s  user  발화 시작: 예.
    40.03s  user  발화 끝
    42.62s  user  발화 시작: 정말 대단하네요. 혹시 지금은 그거보다 더 비싼 영화가 나올 수 있을까요?
    43.05s  agent 발화 끝
    48.04s  user  발화 끝
    48.15s  agent 발화 시작: 물가 상승과 현대 특수 효과를 생각하면 충분히 가능할 것 같아요! 새로운 블록버스터가 나올 때마다 예산이 점
    59.24s  agent 발화 끝
