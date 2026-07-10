# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "하안",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-26",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-18",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 혹시 지금 서울 날씨 어때요? | S2 파라다이스 호텔 부산… 방 있는 날짜랑 시간 좀 알려줄 수 있 | S3 흠… 그럼 열한시 삼십분 버스 타면 되겠다. | S4 아… 그렇구나.

     0.00s  user  발화 시작: 음… 혹시 지금 서울 날씨 어때요?
     3.51s  user  발화 끝
     3.54s  <ret> 발화 (turn1 첫 프레임)
     3.78s  agent 발화 시작: <ret> 서울 날씨를 알려드릴게요. 현재 서울은 기온이 이십삼 점 영도이고, 습도는 칠십사%, 바람은 시속
     4.90s  ⚡SPAN 주입 [d'=1.36s / d_lead=1.72s]: 23.0°C, humidity 74%, wind 5.5 km/h
     8.57s  user  발화 시작: 네.
     9.11s  user  발화 끝
    14.12s  agent 발화 끝
    14.65s  user  발화 시작: 흐으으음… 이번 주말에 부산 갈 건데, 부산 호텔 좀 찾아줄 수 있어?
    19.97s  user  발화 끝
    20.01s  agent 발화 시작: 부산 호텔을 찾아드릴게요. 어떤 기준으로 찾아볼까요? 예를 들어 가격대나 선호하는 지역 같은 게 있으세요?
    27.25s  agent 발화 끝
    27.46s  user  발화 시작: 그냥… 해운대 근처에 괜찮은 곳으로 부탁해.
    31.07s  <ret> 발화 (turn6 첫 프레임)
    31.15s  user  발화 끝
    31.22s  agent 발화 시작: <ret> 해운대 근처에는 파라다이스 호텔 부산과 파크 하얏트 부산이 있습니다. 파라다이스 호텔은 사 점 오
    32.35s  ⚡SPAN 주입 [d'=1.28s / d_lead=12.43s]: (tool result) Paradise Hotel Busan (4.5 stars, 250,000 KRW/night), Par
    43.65s  agent 발화 끝
    43.68s  user  발화 시작: 파라다이스 호텔 부산… 방 있는 날짜랑 시간 좀 알려줄 수 있어?
    47.87s  <ret> 발화 (turn8 첫 프레임)
    48.16s  user  발화 끝
    48.26s  agent 발화 시작: <ret> 파라다이스 호텔 부산에 칠월 십이일부터 십사일까지 디럭스 더블룸 두개, 오션뷰 스위트룸 한개가 남
    49.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: (tool result) Available rooms: Deluxe Double (2 available), Ocean View
    55.35s  agent 발화 끝
    55.55s  user  발화 시작: 그럼… 디럭스 더블룸으로 예약해 줄 수 있어?
    58.71s  <ret> 발화 (turn10 첫 프레임)
    58.93s  user  발화 끝
    58.94s  agent 발화 시작: <ret> 파라다이스 호텔 부산 디럭스 더블룸, 칠월 십이일부터 십사일까지 일박 예약 완료되었습니다. 확인 
    60.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: (tool result) Booking confirmed: Paradise Hotel Busan, Deluxe Double, 
    68.49s  agent 발화 끝
    69.85s  user  발화 시작: 아, 확인번호 적어놔야겠다… 혹시 부산역에서 호텔까지 가는 버스 시간표 좀 알아봐 줄 수 있어?
    77.36s  user  발화 끝
    77.62s  <ret> 발화 (turn12 첫 프레임)
    77.77s  agent 발화 시작: <ret> 부산역에서 파라다이스 호텔 부산까지 가는 버스는 오전 열시, 열한시 삼십분, 오후 한시, 두시 삼
    79.14s  ⚡SPAN 주입 [d'=1.52s / d_lead=9.55s]: (tool result) 10:00, 11:30, 13:00, 14:30, 16:00, 17:30
    87.30s  user  발화 시작: 흠… 그럼 열한시 삼십분 버스 타면 되겠다.
    87.32s  agent 발화 끝
    90.72s  user  발화 끝
    90.95s  agent 발화 시작: 네, 알겠습니다.
    91.54s  user  발화 시작: 예.
    91.94s  user  발화 끝
    92.32s  agent 발화 시작: 즐거운 부산 여행 되세요.
    92.37s  agent 발화 끝
    93.78s  agent 발화 끝
    94.50s  user  발화 시작: 고마워.
    95.21s  agent 발화 시작: 천만에요.
    95.23s  user  발화 끝
    96.16s  agent 발화 끝
    96.62s  user  발화 시작: 근데… 혹시 내 통장 잔고 얼마 있는지 확인할 수 있어?
   100.88s  user  발화 끝
   101.05s  agent 발화 시작: 죄송하지만, 개인 금융 정보에 접근할 권한이 없습니다. 직접 은행에 문의해 보시는 것이 안전합니다.
   105.40s  user  발화 시작: 네.
   105.89s  user  발화 끝
   108.39s  user  발화 시작: 아… 그렇구나.
   108.46s  agent 발화 끝
   109.81s  agent 발화 시작: 혹시 예산 관리에 도움이 될 만한 다른 정보를 찾아드릴까요? 예를 들어, 부산에서 예상되는 여행 경비 같은 
   110.00s  user  발화 끝
   117.05s  agent 발화 끝
   117.53s  user  발화 시작: 음… 그건 됐어.
   119.78s  user  발화 끝
   120.22s  agent 발화 시작: 좋은 하루 보내세요.
   121.33s  agent 발화 끝
