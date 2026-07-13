# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "소율",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-14",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 혹시 내 문서 폴더 안에 뭐가 있는지 알려줄 수 있어? | S2 아니, 그건 됐어. 그럼 이번 주 토요일에 서울에서 날씨가 어 | S3 그럼, 혹시 토요일에 영화 볼 만한 거 있어? | S4 음… 저녁 일곱시로 해 줘.

     0.00s  user  발화 시작: 음… 혹시 내 문서 폴더 안에 뭐가 있는지 알려줄 수 있어?
     4.74s  agent 발화 시작: 음.
     4.74s  user  발화 끝
     5.07s  <ret> 발화 (turn2 첫 프레임)
     5.17s  agent 발화 시작: <ret> 네, 문서 폴더 안에 보고서, 프레젠테이션, 메모장 파일, 이미지 파일이 있어요.
     5.17s  agent 발화 끝
     5.49s  ⚡SPAN 주입 [d'=0.42s / d_lead=4.74s]: /home/user/Documents is a directory. It contains: report.pdf, presenta
     9.91s  user  발화 시작: 아, 보고서 파일 크기가 얼마나 돼?
     9.91s  agent 발화 끝
    11.90s  <ret> 발화 (turn4 첫 프레임)
    12.49s  agent 발화 시작: <ret> 보고서 파일 크기는 이 점 삼메가바이트예요.
    12.49s  user  발화 끝
    12.98s  ⚡SPAN 주입 [d'=1.08s / d_lead=2.58s]: report.pdf is 2.3 megabytes in size.
    15.08s  user  발화 시작: 오.
    15.08s  agent 발화 끝
    15.51s  agent 발화 시작: 혹시 다른 파일 크기도 궁금하신가요?
    15.51s  user  발화 끝
    17.66s  user  발화 시작: 아니, 그건 됐어. 그럼 이번 주 토요일에 서울에서 날씨가 어때?
    17.66s  agent 발화 끝
    21.50s  <ret> 발화 (turn8 첫 프레임)
    21.97s  agent 발화 시작: <ret> 이번 주 토요일 서울 날씨는 이십팔 점 오도이고, 습도는 육십오퍼센트, 바람은 시속 칠 점 이킬로
    21.97s  user  발화 끝
    22.99s  ⚡SPAN 주입 [d'=1.49s / d_lead=8.19s]: (tool result) {"city": "Seoul", "date": "2026-07-11", "temperature": "
    30.16s  user  발화 시작: 응.
    30.16s  agent 발화 끝
    30.59s  user  발화 시작: 이십팔 점 오도면 좀 더운 편이겠다…
    30.59s  user  발화 끝
    33.17s  agent 발화 시작: 네, 조금 더울 수 있겠네요. 시원한 옷차림을 준비하시는 게 좋겠어요.
    33.17s  user  발화 끝
    37.48s  user  발화 시작: 응응.
    37.48s  agent 발화 끝
    37.91s  user  발화 시작: 그럼, 혹시 토요일에 영화 볼 만한 거 있어?
    37.91s  user  발화 끝
    40.87s  <ret> 발화 (turn14 첫 프레임)
    41.36s  agent 발화 시작: <ret> 토요일 서울에서 상영하는 영화로는 '인사이드 아웃 이', '배드 보이즈: 라이드 오어 다이', '
    41.36s  user  발화 끝
    42.02s  ⚡SPAN 주입 [d'=1.14s / d_lead=11.20s]: (tool result) {"movies": Inside Out 2, Bad Boys: Ride or Die, The Garf
    52.56s  user  발화 시작: '인사이드 아웃 이'… 그 영화 예매해 줘. 씨 지 브이 강남으로.
    52.56s  agent 발화 끝
    57.30s  agent 발화 시작: '인사이드 아웃 이'를 씨 지 브이 강남에서 예매해 드릴게요. 몇 시로 예매하시겠어요?
    57.30s  user  발화 끝
    62.47s  user  발화 시작: 응.
    62.47s  agent 발화 끝
    62.90s  user  발화 시작: 음… 저녁 일곱시로 해 줘.
    62.90s  user  발화 끝
    65.04s  <ret> 발화 (turn19 첫 프레임)
    65.05s  agent 발화 시작: <ret> 네, '인사이드 아웃 이' 씨 지 브이 강남 저녁 일곱시, 에이 십이, 에이 십삼 좌석으로 예매 
    65.05s  user  발화 끝
    65.56s  ⚡SPAN 주입 [d'=0.52s / d_lead=12.49s]: (tool result) {"confirmation id": "AX7294", "movie": "Inside Out 2", "
    77.54s  user  발화 시작: 고마워, 지오.
    77.54s  agent 발화 끝
    78.41s  agent 발화 시작: 천만에요.
    78.41s  user  발화 끝
    78.84s  agent 발화 끝
