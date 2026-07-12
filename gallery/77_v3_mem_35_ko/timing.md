# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "우담",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-10-12",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     },
#     {
#       "date": "2025-08-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-06-02",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 요즘 뭔가 새로운 걸 시작하고 싶은데, 뭘 해야 할지 모 | S2 어, 맞아. 베트남 여행 가기로 했어. 근데 어디로 가면 좋을 | S3 하롱베이? 거긴 너무 관광객 많지 않아? 좀 조용한 곳 없을까 | S4 오, 한국 바비큐? 완전 좋아! 그럼 랑비엔에 있는 한국식 바

     0.00s  agent 발화 시작: 안녕하세요, 우담님. 저는 트호온이라고 해요.
     2.93s  user  발화 시작: 음… 요즘 뭔가 새로운 걸 시작하고 싶은데, 뭘 해야 할지 모르겠어.
     2.93s  agent 발화 끝
     9.23s  <ret> 발화 (turn2 첫 프레임)
     9.39s  agent 발화 시작: <ret> 새로운 시작을 위한 고민이시군요. 혹시 최근에 계획하고 계신 여행이 있으신가요?
     9.39s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.87s]: [2025-10-12] User is planning a trip to Vietnam in December.
     9.39s  user  발화 끝
    15.26s  agent 발화 시작: 베트남 여행을 십이월에 계획하고 계시는군요. 여행 계획을 세우는 데 도움을 드릴 수 있을까요?
    15.26s  agent 발화 끝
    22.89s  user  발화 시작: 어.
    22.89s  agent 발화 끝
    23.47s  user  발화 시작: 어, 맞아. 베트남 여행 가기로 했어. 근데 어디로 가면 좋을지…
    23.47s  user  발화 끝
    29.10s  <ret> 발화 (turn6 첫 프레임)
    29.34s  agent 발화 시작: <ret> 베트남 여행이라면 정말 멋지겠네요. 혹시 어떤 스타일의 여행을 선호하시나요? 액티비티를 좋아하시는
    29.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.22s]: [2025-06-02] User is into rock climbing.
    29.34s  user  발화 끝
    37.56s  agent 발화 시작: 암벽 등반에 관심이 많으시군요. 베트남에는 멋진 암벽 등반 장소가 꽤 있답니다.
    37.56s  agent 발화 끝
    44.01s  user  발화 시작: 그래.
    44.01s  agent 발화 끝
    44.60s  agent 발화 시작: 네, 정말이에요. 하롱베이 근처에 암벽 등반을 즐길 수 있는 곳이 유명해요.
    44.60s  user  발화 끝
    51.05s  user  발화 시작: 응.
    51.05s  agent 발화 끝
    51.64s  user  발화 시작: 하롱베이? 거긴 너무 관광객 많지 않아? 좀 조용한 곳 없을까?
    51.64s  user  발화 끝
    57.35s  <ret> 발화 (turn12 첫 프레임)
    57.51s  agent 발화 시작: <ret> 하롱베이는 관광객이 많은 편이죠. 좀 더 조용한 곳을 원하신다면, 랑비엔 지역을 추천해 드릴게요.
    57.51s  ⚡SPAN 주입 [d'=1.84s / d_lead=7.63s]: {"location": "Lang Bien, Vietnam", "cuisine": "Korean BBQ", "outdoor_s
    57.51s  user  발화 끝
    65.14s  agent 발화 시작: 랑비엔 지역에서 야외 좌석이 있는 한국식 바비큐 식당 여섯 곳을 찾았습니다. 괜찮으시다면 자세한 정보를 알려
    65.14s  agent 발화 끝
    73.94s  user  발화 시작: 오, 한국 바비큐? 완전 좋아! 그럼 랑비엔에 있는 한국식 바비큐 식당 정보 좀 알려줘.
    73.94s  agent 발화 끝
    82.16s  agent 발화 시작: 한국식 바비큐를 좋아하시는군요. 랑비엔 지역에 있는 식당들을 살펴볼까요?
    82.16s  user  발화 끝
    86.85s  agent 발화 끝
