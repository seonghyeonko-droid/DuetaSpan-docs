# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Maya",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "home",
#       "text": "User's home address is 198 Cedar Lane."
#     },
#     {
#       "date": "2025-09-29",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-06",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음, 뭘 해야 할지 좀 헷갈려. 완전 정신 없어. | S2 시애틀을 생각하고 있었는데, 거긴 날씨가 어떤지 잘 모르겠어. | S3 음, 그건… 괜찮은 것 같기도 하고. 그럼 시애틀 물가는 어때 | S4 알아둬서 좋네. 좀 더 알아봐야 할 것 같아…

     0.00s  user  발화 시작: 음, 뭘 해야 할지 좀 헷갈려. 완전 정신 없어.
     4.71s  agent 발화 시작: 변화가 크면 그럴 수 있어. 지금 제일 급한 게 뭔데?
     4.71s  user  발화 끝
     9.95s  user  발화 시작: 응.
     9.95s  agent 발화 끝
    10.47s  user  발화 시작: 뭐, 새로운 도시로 이사 가는 걸 생각 중인데, 뭘 먼저 해야 할지 도통 모르겠어.
    10.47s  user  발화 끝
    17.80s  agent 발화 시작: 좋은 생각이야! 새로운 가능성을 생각하는 건 정말 설레는 일이지. 어디로 가고 싶은데?
    17.80s  user  발화 끝
    24.09s  user  발화 시작: 음.
    24.09s  agent 발화 끝
    24.61s  user  발화 시작: 시애틀을 생각하고 있었는데, 거긴 날씨가 어떤지 잘 모르겠어.
    24.61s  user  발화 끝
    28.64s  <ret> 발화 (turn7 첫 프레임)
    28.80s  agent 발화 시작: <ret> 지금 시애틀 날씨는 십팔 점 삼도이고, 습도는 육십팔퍼센트, 바람은 시속 팔 킬로미터야.
    28.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.28s]: (tool result) The current weather in Seattle, Washington is 18.3°C, wi
    28.80s  user  발화 끝
    35.08s  agent 발화 시작: 온화한 날씨를 좋아하면 방문하기 좋은 시기야!
    35.08s  agent 발화 끝
    38.22s  user  발화 시작: 음, 그건… 괜찮은 것 같기도 하고. 그럼 시애틀 물가는 어때?
    38.22s  agent 발화 끝
    43.30s  <ret> 발화 (turn10 첫 프레임)
    43.46s  agent 발화 시작: <ret> 시애틀 물가는 전국 평균보다 이십삼퍼센트 더 비싼데, 특히 주택 비용 때문에 그래.
    43.46s  ⚡SPAN 주입 [d'=1.44s / d_lead=6.28s]: (tool result) The cost of living in Seattle, Washington is 23% higher 
    43.46s  user  발화 끝
    49.74s  user  발화 시작: 오.
    49.74s  agent 발화 끝
    50.27s  user  발화 시작: 이십삼퍼센트? 와, 진짜 많이 차이 나는구나. 덴버랑 비교하면 얼마나 달라?
    50.27s  user  발화 끝
    55.18s  <ret> 발화 (turn13 첫 프레임)
    55.50s  agent 발화 시작: <ret> 덴버 물가는 전국 평균보다 칠퍼센트 더 비싼데, 주택 비용이 주된 이유야.
    55.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.76s]: (tool result) Denver, Colorado’s cost of living is 7% higher than the 
    55.50s  user  발화 끝
    61.26s  agent 발화 시작: 그러니까 시애틀보다 훨씬 저렴한 편인 것 같아.
    61.26s  agent 발화 끝
    64.93s  user  발화 시작: 알아둬서 좋네. 좀 더 알아봐야 할 것 같아…
    64.93s  agent 발화 끝
    69.12s  agent 발화 시작: 시간을 갖고 정보를 모으는 건 정말 현명한 방법이야. 특히 큰 결정을 내릴 때는 더 그렇지.
    69.12s  user  발화 끝
    76.97s  agent 발화 끝
