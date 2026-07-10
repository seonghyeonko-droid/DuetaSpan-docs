# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "유준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 지금 제일 인기 있는 영화가 뭔지 알아볼 수 있을까요? | S2 '미션 임파서블' 예매해 줄 수 있어요? | S3 와, 고마워요! | S4 아니요, 괜찮아요.

     0.00s  user  발화 시작: 혹시 지금 제일 인기 있는 영화가 뭔지 알아볼 수 있을까요?
     3.59s  <ret> 발화 (turn1 첫 프레임)
     3.91s  agent 발화 시작: <ret> 지금 가장 인기 있는 영화는 크리스토퍼 놀란 감독의 '오펜하이머'예요.
     4.16s  user  발화 끝
     4.31s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.83s]: Movies_1_FindMovies: "Oppenheimer is a 2023 biographical thriller film
     8.02s  agent 발화 끝
     8.56s  user  발화 시작: 아, 그거 봤어요. 다른 영화는 없나요?
    11.06s  <ret> 발화 (turn3 첫 프레임)
    11.38s  agent 발화 시작: <ret> '바비'라는 영화도 있어요. 그레타 거윅 감독님이 만드셨고요.
    11.61s  user  발화 끝
    13.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.56s]: Movies_1_FindMovies: "Barbie is a 2023 fantasy comedy film directed by
    14.03s  user  발화 시작: 네.
    14.39s  user  발화 끝
    14.48s  <ret> 발화 (turn5 첫 프레임)
    14.88s  agent 발화 시작: <ret> 많은 분들이 좋아하시더라고요. '미션 임파서블: 데드 레코닝 PART ONE'도 많은 사랑을 받고
    14.94s  agent 발화 끝
    14.98s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.26s]: Movies_3_FindMovies: "Mission: Impossible – Dead Reckoning Part One is
    20.34s  agent 발화 끝
    20.88s  user  발화 시작: '미션 임파서블' 예매해 줄 수 있어요?
    22.93s  <ret> 발화 (turn7 첫 프레임)
    23.33s  agent 발화 시작: <ret> 네, '미션 임파서블' 메가박스 코엑스관, 칠월 십이일 저녁 일곱시 삼십분, 이자리 예매 완료되었
    23.42s  user  발화 끝
    24.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: (tool result) Booking confirmed, theater: Megabox Coex, date: July 12,
    32.37s  agent 발화 끝
    32.37s  user  발화 시작: 와, 고마워요!
    33.71s  agent 발화 시작: 예매 도와드릴 수 있어서 기쁩니다. 혹시 다른 영화도 보시겠어요?
    33.71s  user  발화 끝
    37.73s  agent 발화 끝
    37.85s  user  발화 시작: 아니요, 괜찮아요.
    39.33s  user  발화 끝
    39.44s  agent 발화 시작: 즐거운 영화 관람 되세요!
    41.19s  agent 발화 끝
