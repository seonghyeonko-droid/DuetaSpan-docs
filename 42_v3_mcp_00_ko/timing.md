# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "소안",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 볼 만한 영화 좀 찾아줘. | S2 오, 꽤 괜찮네. 아, 맞다. 내일 모레 날씨는 어때? | S3 다행이다. 아, 그리고… 내가 칠월 십오일에 중요한 발표가 있 | S4 [happy] 응, 노력해 볼게. 아, 그리고 혹시 내 생일이

     0.00s  user  발화 시작: 이번 주 토요일에 볼 만한 영화 좀 찾아줘.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.00s  <ret> 발화 (turn8 첫 프레임)
     0.03s  agent 발화 시작: <ret> 이번 주 토요일에는 "범죄도시사"가 CGV 강변에서 상영될 예정이에요. 열네시, 열여섯시 삼십분,
     0.03s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: Searching for movies playing this weekend. "범죄도시4" - CGV 강변, 14:00, 16
     0.03s  user  발화 끝
     0.09s  user  발화 시작: 음… 그럼 그 영화 예매해 줘. 토요일 열아홉시로.
     0.09s  agent 발화 끝
     0.12s  agent 발화 시작: <ret> 네, "범죄도시사" 토요일 열아홉시 CGV 강변 예매가 완료되었습니다. 확인 번호는 칠 엑스 구 
     0.12s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Booking confirmed. "범죄도시4" at CGV 강변, July 11, 2026, 19:
     0.12s  user  발화 끝
     0.14s  <ret> 발화 (turn6 첫 프레임)
     0.17s  user  발화 시작: 오.
     0.17s  agent 발화 끝
     0.18s  user  발화 시작: 고마워. 근데, 혹시 그 영화 평점도 알아봐 줄 수 있어?
     0.18s  user  발화 끝
     0.18s  <ret> 발화 (turn11 첫 프레임)
     0.20s  <ret> 발화 (turn13 첫 프레임)
     0.22s  agent 발화 시작: <ret> "범죄도시사"는 현재 네이버 영화에서 십점 만점에 칠 점 팔점을 받았고, 십이만 삼천 사백 쉰여섯
     0.22s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: "범죄도시4" currently has a rating of 7.8/10 based on 123,456 reviews. Sou
     0.22s  user  발화 끝
     0.28s  user  발화 시작: 오, 꽤 괜찮네. 아, 맞다. 내일 모레 날씨는 어때?
     0.28s  agent 발화 끝
     0.31s  agent 발화 시작: <ret> 내일 모레인 칠월 십이일 날씨는 이십팔 점 오도, 습도 육십팔%, 바람은 시속 사 점 이킬로미터로
     0.31s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: The weather on July 12, 2026, will be 28.5°C, humidity 68%, wind 4.2 k
     0.31s  user  발화 끝
     0.37s  user  발화 시작: 응.
     0.37s  agent 발화 끝
     0.37s  user  발화 시작: 으음… 알았어. 그럼, 이번 주 금요일 저녁에 맛있는 저녁 먹을 만한 곳 좀 찾아줄래?
     0.37s  user  발화 끝
     0.42s  agent 발화 시작: <ret> 이번 주 금요일 저녁에 괜찮은 곳으로는 강남역 근처 파스타 맛집이 있습니다. 평점은 사 점 오점이
     0.42s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: Searching for restaurants open Friday evening. "파스타 맛집, 강남역" - 4.5 sta
     0.42s  user  발화 끝
     0.48s  <ret> 발화 (turn23 첫 프레임)
     0.50s  user  발화 시작: 파스타… 괜찮지. 혹시 거기 예약도 가능해?
     0.50s  agent 발화 끝
     0.52s  agent 발화 시작: <ret> 네, "파스타 맛집, 강남역" 금요일 열아홉시에 예약이 완료되었습니다. 확인 번호는 구 비 오 일
     0.52s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Reservation confirmed. "파스타 맛집, 강남역", July 11, 2026, 19:
     0.52s  user  발화 끝
     0.57s  <ret> 발화 (turn16 첫 프레임)
     0.58s  user  발화 시작: 응응.
     0.58s  agent 발화 끝
     0.59s  user  발화 시작: 다행이다. 아, 그리고… 내가 칠월 십오일에 중요한 발표가 있는데, 혹시 그때 날씨도 알아봐 줄 수 있어?
     0.59s  user  발화 끝
     0.65s  agent 발화 시작: <ret> 칠월 십오일 발표 당일 날씨는 삼십 점 이도, 습도 칠십이%이고, 비가 올 확률은 삼십%로 예상됩
     0.65s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: The weather on July 15, 2026, is forecast to be 30.2°C, humidity 72%, 
     0.65s  user  발화 끝
     0.70s  user  발화 시작: 맞아.
     0.70s  agent 발화 끝
     0.71s  user  발화 시작: 으음… 비가 올 수도 있구나. 그럼 우산 챙겨야겠다.
     0.71s  user  발화 끝
     0.74s  agent 발화 시작: 네, 혹시 모르니 우산을 챙기시는 게 좋겠어요. 중요한 발표인 만큼 날씨에 대비하는 게 좋겠죠.
     0.74s  user  발화 끝
     0.79s  user  발화 시작: 맞아. 에레리미, 너 정말 고마워.
     0.79s  agent 발화 끝
     0.81s  agent 발화 시작: 도움이 되었다니 기쁩니다. 발표 잘 하시고, 좋은 결과 있기를 바랍니다.
     0.81s  user  발화 끝
     0.84s  user  발화 시작: [happy] 응, 노력해 볼게. 아, 그리고 혹시 내 생일이 언제인지 기억해?
     0.84s  agent 발화 끝
     0.88s  agent 발화 시작: <ret> 삼월 십오일이라고 말씀해주셨던 것 같아요.
     0.88s  ⚡SPAN 주입 [d'=0.02s / d_lead=0.02s]: [2024-03-15] 내 생일은 3월 15일이야.
     0.88s  user  발화 끝
     0.90s  user  발화 시작: 응.
     0.90s  agent 발화 끝
     0.91s  user  발화 시작: 맞아, 맞아. 잊지 않고 기억해 줘서 고마워.
     0.91s  user  발화 끝
     0.93s  agent 발화 시작: 중요한 날은 잘 기억해 두어야죠.
     0.93s  user  발화 끝
     0.95s  user  발화 시작: 음, 오늘은 딱히 더 필요한 건 없을 것 같아.
     0.95s  agent 발화 끝
     0.99s  agent 발화 시작: 그럼 좋은 하루 보내세요.
     0.99s  user  발화 끝
     1.00s  agent 발화 끝
