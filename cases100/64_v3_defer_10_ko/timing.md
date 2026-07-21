# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "은담",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "employer",
#       "text": "User works at a game studio."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "streaming",
#       "text": "User subscribes to Netflix and Spotify."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "plant",
#       "text": "User is growing basil on the windowsill at home."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "trip",
#       "text": "User is planning a trip to Peru in February."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "commute",
#       "text": "User carpools with a colleague."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "work",
#       "text": "User works as a carpenter."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "savings",
#       "text": "User is saving for paying off student loans."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "airline",
#       "text": "User usually flies with Qatar Airways."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-03-22",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2025-12-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 저녁에 영화 볼 건데, 혹시 재밌는 영화 추천해 줄 수  | S2 롯데시네마 월드타워 여섯시 오십분으로 예매해 줘. | S3 —근데 혹시 다른 영화도 같이 볼까? | S4 … 아니, 잠시만, 혹시 지금 서울에서 가장 핫한 연극도 알아

     0.00s  user  발화 시작: 오늘 저녁에 영화 볼 건데, 혹시 재밌는 영화 추천해 줄 수 있어?
     1.59s  agent 발화 시작: 네.
     2.04s  agent 발화 끝
     4.02s  <ret> 발화 (turn2 첫 프레임)
     4.12s  agent 발화 시작: <ret> 네, 어떤 장르를 좋아하세요? 최근 개봉작 중에서 평점이 좋은 영화들을 찾아볼게요.
     4.24s  user  발화 끝
     4.92s  ⚡SPAN 주입 [d'=0.90s / d_lead=7.41s]: Oppenheimer (2023): Christopher Nolan's epic historical thriller, star
    11.53s  agent 발화 끝
    11.70s  agent 발화 시작: 흥미로운 영화를 찾으신다면, 크리스토퍼 놀란 감독의 '오펜하이머'를 추천드려요. 킬리언 머피, 에밀리 블런트
    20.43s  user  발화 시작: 네.
    20.79s  user  발화 끝
    28.58s  agent 발화 끝
    28.68s  user  발화 시작: 오, 그거 괜찮겠다. 혹시 예매할 수 있는 곳도 알려줄 수 있어?
    32.40s  <ret> 발화 (turn6 첫 프레임)
    32.67s  agent 발화 시작: <ret> 네, '오펜하이머' 상영 시간은 씨 지 브이 강남에서 오후 두시, 다섯시 삼십분, 아홉시에 있고,
    32.79s  user  발화 끝
    33.54s  ⚡SPAN 주입 [d'=1.14s / d_lead=21.25s]: (tool result) CGV Gangnam: 14:00, 17:30, 21:00; Lotte Cinema World Tow
    44.87s  user  발화 시작: 네.
    45.22s  user  발화 끝
    53.79s  user  발화 시작: 롯데시네마 월드타워 여섯시 오십분으로 예매해 줘.
    53.92s  agent 발화 끝
    56.85s  <ret> 발화 (turn9 첫 프레임)
    57.05s  agent 발화 시작: <ret> 네, 롯데시네마 월드타워 '오펜하이머' 오후 여섯시 오십분 예매가 완료되었어요. 예매 번호는 티 
    57.20s  user  발화 끝
    58.43s  ⚡SPAN 주입 [d'=1.58s / d_lead=13.17s]: (tool result) Lotte Cinema World Tower, Oppenheimer, 18:50, 2026-07-25
    67.27s  user  발화 시작: 네.
    67.57s  user  발화 끝
    70.23s  agent 발화 끝
    70.28s  user  발화 시작: —근데 혹시 다른 영화도 같이 볼까?
    72.06s  user  발화 시작: … 아니, 잠시만, 혹시 지금 서울에서 가장 핫한 연극도 알아봐 줄 수 있어?
    72.10s  user  발화 끝
    76.78s  user  발화 끝
    76.86s  <ret> 발화 (turn13 첫 프레임)
    76.86s  agent 발화 시작: <ret> 서울에서 가장 인기 있는 연극은 국립극장에서 상연 중인 '햄릿'이에요. 최근 호평을 받고 있고, 
    77.46s  ⚡SPAN 주입 [d'=0.60s / d_lead=11.91s]: Hamlet: The National Theatre of Korea, currently showing at the Nation
    82.41s  user  발화 시작: 네.
    82.79s  user  발화 끝
    88.77s  agent 발화 끝
    88.96s  agent 발화 시작: 혹시 '햄릿'에 관심 있으신가요? 예매 정보를 알아봐 드릴까요?
    94.69s  agent 발화 끝
