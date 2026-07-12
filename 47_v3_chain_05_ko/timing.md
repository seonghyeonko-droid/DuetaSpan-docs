# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "혜서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-31",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-03",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 친구랑 영화 보려고 하는데, 괜찮은 거 있을 | S2 예고편 진짜 멋있다! 그럼 이번 주 토요일에 '존 윅 사' 예 | S3 고마워! 덕분에 영화 데이트… | S4 혹시 그 영화 감독 이름이 뭐였지?

     0.00s  user  발화 시작: 이번 주 토요일에 친구랑 영화 보려고 하는데, 괜찮은 거 있을까?
     5.56s  agent 발화 시작: 음, 어떤 영화를 좋아하세요? 혹시 특별히 보고 싶은 장르가 있나요? 친구분과 함께 즐거운 시간 보내시길 바
     5.56s  user  발화 끝
    14.45s  user  발화 시작: 액션 영화! 요즘 인기 있는 거 찾아줘.
    14.45s  agent 발화 끝
    18.10s  <ret> 발화 (turn3 첫 프레임)
    18.34s  agent 발화 시작: <ret> 요즘 인기 있는 액션 영화는 '익스트랙션 이', '존 윅 사', '더 이퀄라이저 삼'가 있어요. 
    18.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.78s]: (tool result) {"movies": [{"title": "Extraction 2", "year": 2023, "rat
    18.34s  user  발화 끝
    31.12s  user  발화 시작: 응응.
    31.12s  agent 발화 끝
    31.68s  user  발화 시작: '존 윅 사' 예고편 좀 보여줘.
    31.68s  user  발화 끝
    34.77s  <ret> 발화 (turn6 첫 프레임)
    35.01s  agent 발화 시작: <ret> 네, '존 윅 사' 예고편은 유튜브에서 확인하실 수 있습니다. 링크는 이쪽이에요: https://
    35.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.67s]: (tool result) https://www.youtube.com/watch?v=j2ICJeeXw-w | YouTube | 
    35.01s  user  발화 끝
    41.68s  user  발화 시작: 우와.
    41.68s  agent 발화 끝
    42.23s  user  발화 시작: 예고편 진짜 멋있다! 그럼 이번 주 토요일에 '존 윅 사' 예매해 줘.
    42.23s  user  발화 끝
    48.82s  <ret> 발화 (turn9 첫 프레임)
    48.90s  agent 발화 시작: <ret> 네, '존 윅 사' 예매 완료되었습니다. 이천이십육년 칠월 십일일 저녁 일곱시에 씨 지 브이 강남
    48.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.78s]: (tool result) {"confirmation id": "AX789", "movie": "John Wick: Chapte
    48.90s  user  발화 끝
    61.68s  user  발화 시작: 혹시 예매한 영화관까지 가는 버스 정보도 알아봐 줄 수 있어?
    61.68s  agent 발화 끝
    67.08s  <ret> 발화 (turn11 첫 프레임)
    67.24s  agent 발화 시작: <ret> 서울역에서 씨 지 브이 강남까지 가는 사백이십번 버스가 있어요. 예상 시간은 사십오분이고, 요금은
    67.24s  ⚡SPAN 주입 [d'=1.04s / d_lead=7.78s]: (tool result) Bus 420 from Seoul Station, estimated time: 45 minutes, 
    67.24s  user  발화 끝
    75.02s  user  발화 시작: 응.
    75.02s  agent 발화 끝
    75.58s  user  발화 시작: 고마워! 덕분에 영화 데이트…
    75.58s  user  발화 끝
    77.80s  user  발화 시작: …잘 준비할 수 있겠어.
    77.80s  user  발화 끝
    80.02s  agent 발화 시작: 천만에요! 친구분과 즐거운 시간 보내세요.
    80.02s  user  발화 끝
    82.80s  user  발화 시작: 혹시 그 영화 감독 이름이 뭐였지?
    82.80s  agent 발화 끝
    86.06s  <ret> 발화 (turn17 첫 프레임)
    86.14s  agent 발화 시작: <ret> '존 윅 사'는 이천이십삼년에 개봉했고, Chad Stahelski와 David Leitch 감독
    86.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: Chad Stahelski and David Leitch directed John Wick: Chapter 4, which w
    86.14s  user  발화 끝
    92.25s  user  발화 시작: 응.
    92.25s  agent 발화 끝
    92.80s  user  발화 시작: 아, 맞다. 걔네 유명하더라.
    92.80s  user  발화 끝
    95.03s  agent 발화 시작: 네, 두 분 다 액션 영화 연출로 유명하시죠. 좋은 영화 선택하신 것 같아요.
    95.03s  user  발화 끝
   102.25s  agent 발화 끝
