# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Emilia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "home",
#       "text": "User's home address is 249 Cedar Lane."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-08-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-05-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 요즘 세계사에 관심이 좀 생겨서요. 혹시 독일 국기는 어 | S2 고맙습니다. 독일 국기 색깔이 뭐죠? 검은색, 빨간색, 노란색 | S3 그런데 그 세 가지 색깔이 각각 무슨 의미를 가지고 있나요?  | S4 아, 네, 좋아요. 근데 잠깐만요. 어제 친구랑 카페에 갔는데

     0.00s  user  발화 시작: 음… 요즘 세계사에 관심이 좀 생겨서요. 혹시 독일 국기는 어떤 색깔로 되어 있나요?
     7.03s  agent 발화 시작: 독일 역사에 관심을 가지시는군요! 궁금한 점이 있다면 언제든 물어보세요.
     7.13s  user  발화 끝
    13.03s  user  발화 시작: 고맙습니다. 독일 국기 색깔이 뭐죠? 검은색, 빨간색, 노란색인가요?
    13.05s  agent 발화 끝
    18.27s  <ret> 발화 (turn3 첫 프레임)
    18.58s  agent 발화 시작: <ret> 네, 맞아요. 독일 국기는 검은색, 빨간색, 그리고 노란색으로 이루어져 있어요.
    18.77s  user  발화 끝
    18.77s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.12s]: The flag of Germany is black, red, and yellow.
    20.59s  user  발화 시작: 음.
    21.22s  user  발화 끝
    24.18s  agent 발화 끝
    24.26s  user  발화 시작: 그런데 그 세 가지 색깔이 각각 무슨 의미를 가지고 있나요? 뭔가 특별한 뜻이 있을까요?
    30.89s  user  발화 끝
    31.00s  agent 발화 시작: 각 색깔이 상징하는 의미는 시대에 따라 조금씩 달랐다고 해요. 역사를 좀 더 깊이 알아볼까요?
    34.66s  user  발화 시작: 그렇죠.
    35.48s  user  발화 끝
    37.49s  user  발화 시작: 아, 네, 좋아요. 근데 잠깐만요. 어제 친구랑 카페에 갔는데, 커피가 너무 맛있었어요!
    37.72s  agent 발화 끝
    44.21s  <ret> 발화 (turn9 첫 프레임)
    44.44s  agent 발화 시작: <ret> 커피 이야기는 좋네요. 독일 국기의 검은색은 결의, 빨간색은 용기, 노란색은 통일성을 상징한다고 
    44.58s  user  발화 끝
    45.65s  ⚡SPAN 주입 [d'=1.44s / d_lead=1.95s]: The black in the German flag represents determination, the red bravery
    52.88s  agent 발화 끝
