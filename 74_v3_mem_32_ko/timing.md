# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Manon",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-25",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-06-14",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 투날로님, 혹시 제가 예전에 얘기했던 교토 여행 계획 기 | S2 맞아요! 그런데 갑자기 일정이 좀 바뀌었는데, 혹시 제가 그때 | S3 사실은… 여행 날짜를 좀 더 앞당기려고 하는데, 이월 말쯤으로 | S4 아, 그러셨군요… 혹시 제가 그때 맛집을 물어봤었나?

     0.00s  agent 발화 시작: 안녕하세요, 마농님. 저는 투날로예요. 창의적인 막힘이나 자신감 문제로 고민이실 때, 제가 함께 고민하고 도
     6.43s  user  발화 시작: 그러니까요.
     7.06s  user  발화 끝
     8.67s  agent 발화 끝
     9.36s  user  발화 시작: 음… 투날로님, 혹시 제가 예전에 얘기했던 교토 여행 계획 기억하시나요?
    14.01s  <ret> 발화 (turn3 첫 프레임)
    14.08s  agent 발화 시작: <ret> 네, 마농님. 다음 달에 교토 여행을 계획하고 계시죠. 삼월에 가신다고 말씀하셨어요.
    14.31s  user  발화 끝
    14.89s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.24s]: [2026-07-25] User is planning a trip to Kyoto in March.
    16.56s  user  발화 시작: 그렇죠.
    17.05s  user  발화 끝
    20.89s  agent 발화 끝
    21.14s  user  발화 시작: 맞아요! 그런데 갑자기 일정이 좀 바뀌었는데, 혹시 제가 그때 뭐라고 말씀드렸었는지 기억나세요?
    26.95s  agent 발화 시작: 물론이죠, 마농님. 삼월에 교토 여행을 가신다고 하셨고, 혹시 일정이 어떻게 바뀌었는지 좀 더 자세히 말씀해
    26.97s  user  발화 끝
    35.16s  agent 발화 끝
    36.20s  user  발화 시작: 사실은… 여행 날짜를 좀 더 앞당기려고 하는데, 이월 말쯤으로요. 그때 제가 뭘 부탁드렸었는지 기억하실까요?
    42.95s  <ret> 발화 (turn8 첫 프레임)
    43.02s  agent 발화 시작: <ret> 아, 날짜를 변경하시는군요. 그때 교토 여행에 대해 특별히 부탁하신 사항은 없으셨던 걸로 기억해요
    43.06s  user  발화 끝
    44.39s  ⚡SPAN 주입 [d'=1.44s / d_lead=1.55s]: [2026-07-25] User is planning a trip to Kyoto in March.
    49.74s  agent 발화 끝
    49.85s  user  발화 시작: 아, 그러셨군요… 혹시 제가 그때 맛집을 물어봤었나?
    53.50s  <ret> 발화 (turn10 첫 프레임)
    53.57s  agent 발화 시작: <ret> 마농님, 음식에 대한 취향은 기억하고 있어요.
    53.59s  user  발화 끝
    54.70s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.93s]: [2026-03-10] User's favorite cuisine is sushi.
    57.46s  agent 발화 시작: 스시를 가장 좋아하신다고 말씀하셨었어요. 혹시 교토에서 스시 맛집을 찾으시는 건가요?
    57.50s  agent 발화 끝
    64.22s  agent 발화 끝
