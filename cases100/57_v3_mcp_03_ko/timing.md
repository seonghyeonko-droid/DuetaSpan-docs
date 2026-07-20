# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "가원",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "mid 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-06",
#       "category": "car",
#       "text": "User drives a 2015 Toyota Corolla."
#     },
#     {
#       "date": "2026-05-02",
#       "category": "music",
#       "text": "User likes listening to 90s hip-hop."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "commute",
#       "text": "User drives about 40 minutes each way."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "emergency",
#       "text": "User's emergency contact is Clara."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-21",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-01-11",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데이비드 브라운에게 내 위치를 보내고 싶어. | S2 제 와이프, 김민지에게도 보내줘. | S3 … 지금 데이비드한테 연락해서 어디쯤 가고 있는지 물어봐야 하 | S4 …혹시 데이비드의 전화번호 알아?

     0.00s  user  발화 시작: 데이비드 브라운에게 내 위치를 보내고 싶어.
     2.45s  <ret> 발화 (turn1 첫 프레임)
     3.03s  agent 발화 시작: <ret> 데이비드 브라운 님께 위치 정보가 공유됐어요. 확인 번호는 칠 팔 구 이 에이 비입니다. [hap
     3.23s  user  발화 끝
     3.25s  ⚡SPAN 주입 [d'=0.80s / d_lead=9.46s]: (tool result) Location shared with David Brown. Confirmation ID: 7892a
     7.17s  user  발화 시작: 네.
     7.57s  user  발화 끝
    12.17s  user  발화 시작: 응.
    12.49s  agent 발화 끝
    12.62s  user  발화 끝
    13.13s  agent 발화 시작: 네, 누구에게 보내드릴까요?
    15.20s  agent 발화 끝
    15.20s  user  발화 시작: 제 와이프, 김민지에게도 보내줘.
    17.44s  <ret> 발화 (turn6 첫 프레임)
    17.71s  agent 발화 시작: <ret> 김민지 님께도 위치 정보가 공유됐습니다. 확인 번호는 씨 디 삼 사 이 에프입니다. [happy]
    17.86s  ⚡SPAN 주입 [d'=0.43s / d_lead=9.97s]: (tool result) Location shared with 김민지. Confirmation ID: cd34ef
    17.92s  user  발화 끝
    27.52s  agent 발화 시작: 혹시 김민지 님께 보내는 위치가 정확한지 확인하고 싶으신가요 —
    27.68s  agent 발화 끝
    31.41s  agent 발화 끝
    31.95s  user  발화 시작: … 지금 데이비드한테 연락해서 어디쯤 가고 있는지 물어봐야 하는데…
    36.49s  user  발화 끝
    37.76s  user  발화 시작: …혹시 데이비드의 전화번호 알아?
    39.59s  <ret> 발화 (turn10 첫 프레임)
    39.87s  agent 발화 시작: <ret> 데이비드 브라운 님의 전화번호는 공 일 공 일 이 삼 사 오 육 칠 팔입니다. [happy] 바로
    39.88s  user  발화 끝
    40.60s  ⚡SPAN 주입 [d'=1.01s / d_lead=10.52s]: David Brown's phone number is 010-1234-5678.
    43.67s  user  발화 시작: 네.
    44.07s  user  발화 끝
    50.28s  agent 발화 시작: 천만에요.
    50.39s  agent 발화 끝
    51.33s  agent 발화 끝
