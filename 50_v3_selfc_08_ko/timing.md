# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "서형",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-26",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 토론토 시내에 있는 약국 좀 찾아줘. | S2 아니, 괜찮아. 그런데— | S3 …길을 알려줄 수 있어? 지금 여기 있거든. | S4 발작스 커피는 괜찮아 보여. 그쪽으로 길을 알려줘.

     0.00s  user  발화 시작: 토론토 시내에 있는 약국 좀 찾아줘.
     2.26s  <ret> 발화 (turn1 첫 프레임)
     2.44s  user  발화 끝
     2.57s  agent 발화 시작: <ret> 토론토 시내에는 사백십육 약국, 렉솔, 슈퍼스 약국이 있어요. 오백오십오 용 스트리트에 사백십육 
     2.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: (tool result) 416 Pharmacy, 555 Yonge St, Toronto, ON M4Y 2V3; Rexall,
     6.95s  user  발화 시작: 맞아요.
     7.68s  user  발화 끝
    10.54s  agent 발화 끝
    10.88s  user  발화 시작: 음… 렉솔은 영업시간이 어떻게 돼?
    14.03s  <ret> 발화 (turn4 첫 프레임)
    14.35s  agent 발화 시작: <ret> 렉솔은 오늘 밤 아홉시까지 영업하고 있어요. 지금 가셔도 괜찮을 것 같아요.
    14.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.77s]: (tool result) Rexall (22 Yonge St, Toronto, ON M5E 1Z8) - Open until 9
    14.42s  user  발화 끝
    16.32s  user  발화 시작: 와.
    16.95s  user  발화 끝
    19.09s  agent 발화 시작: 혹시 다른 약국도 알아봐 드릴까요?
    19.11s  agent 발화 끝
    21.20s  agent 발화 끝
    21.38s  user  발화 시작: 아니, 괜찮아. 그런데—
    23.71s  user  발화 시작: … 혹시 그 렉솔까지 가는 가장 빠른…
    23.78s  user  발화 끝
    26.76s  user  발화 끝
    28.04s  user  발화 시작: …길을 알려줄 수 있어? 지금 여기 있거든.
    30.13s  <ret> 발화 (turn10 첫 프레임)
    30.36s  agent 발화 시작: <ret> 현재 위치에서 렉솔까지 차로 약 일 점 이킬로미터, 오분 정도 걸려요. 용 스트리트를 북쪽으로 가
    30.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.80s]: (tool result) Drive 1.2 km, approx. 5 mins. 1. Head north on Yonge St.
    30.58s  user  발화 끝
    39.15s  user  발화 시작: 그렇죠.
    39.78s  user  발화 끝
    43.17s  agent 발화 끝
    43.86s  user  발화 시작: 고마워. 그 옆에 맛있는 커피숍도 있을까?
    46.87s  <ret> 발화 (turn13 첫 프레임)
    47.02s  agent 발화 시작: <ret> 렉솔 근처에는 팀 호튼스, 스타벅스, 발작스 커피 로스터스가 있어요. 백 용 스트리트에 팀 호튼스
    47.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.42s]: (tool result) Tim Hortons, 100 Yonge St, Toronto, ON M5C 2W1; Starbuck
    47.05s  user  발화 끝
    50.98s  user  발화 시작: 네.
    51.47s  user  발화 끝
    54.44s  agent 발화 끝
    54.52s  user  발화 시작: 발작스 커피는 괜찮아 보여. 그쪽으로 길을 알려줘.
    58.33s  <ret> 발화 (turn16 첫 프레임)
    58.40s  agent 발화 시작: <ret> 현재 위치에서 발작스 커피까지 걸어서 약 칠백오십미터, 십분 정도 걸릴 거예요. 용 스트리트를 계
    58.41s  ⚡SPAN 주입 [d'=1.84s / d_lead=11.35s]: (tool result) Walk 750 m, approx. 10 mins. 1. Head north on Yonge St. 
    58.58s  user  발화 끝
    69.76s  agent 발화 끝
    70.03s  user  발화 시작: 완벽해. 정말 고마워.
    72.00s  user  발화 끝
    72.18s  agent 발화 시작: 천만에요. 잠시 산책하며 기분 전환하면 스트레스 해소에 도움이 될 거예요.
    77.03s  agent 발화 끝
