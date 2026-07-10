# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "윤율",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 육월 십오일에 방문 예약을 좀 잡아줘. | S2 오, 잘 됐네. 혹시… 그날 날씨는 어때? | S3 저녁 아홉시로 예매해 줘. 두 명. | S4 …일곱시에 알람 맞춰줄 수 있어?

     0.00s  user  발화 시작: 그랜드뷰 로프트에 육월 십오일에 방문 예약을 좀 잡아줘.
     4.35s  user  발화 끝
     4.39s  <ret> 발화 (turn1 첫 프레임)
     4.62s  agent 발화 시작: <ret> 그랜드뷰 로프트 방문 예약을 육월 십오일 오후 두시에 잡아드렸어요. 확인 번호는 GH789KL입니
     6.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.01s]: (tool result) Home visit scheduled for The Grandview Lofts on June 15t
    14.63s  agent 발화 끝
    15.17s  user  발화 시작: 아니, 괜찮아. 근데 혹시 그 근처에 맛있는 식당도 알아봐 줄 수 있어?
    19.22s  <ret> 발화 (turn3 첫 프레임)
    19.53s  agent 발화 시작: <ret> 그랜드뷰 로프트 근처에 서울그릴이 삼백오십미터, 파스타 파라다이스가 오백미터, 스파이시 서울이 육
    19.56s  user  발화 끝
    21.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.92s]: (tool result) Nearby restaurants: Seoul Grill (350m), Pasta Paradise (
    27.45s  user  발화 시작: 음… 파스타 파라다이스가 괜찮겠는데. 거기가 예약 가능한지 한번 확인해 줄래?
    27.45s  agent 발화 끝
    32.24s  <ret> 발화 (turn5 첫 프레임)
    32.40s  agent 발화 시작: <ret> 파스타 파라다이스에 육월 십오일 저녁 일곱시에 두 명으로 예약이 완료됐습니다. 확인 번호는 RP2
    32.44s  user  발화 끝
    33.52s  ⚡SPAN 주입 [d'=1.28s / d_lead=8.39s]: (tool result) Reservation confirmed at Pasta Paradise for two people o
    40.79s  agent 발화 끝
    40.99s  user  발화 시작: 오, 잘 됐네. 혹시… 그날 날씨는 어때?
    43.85s  <ret> 발화 (turn7 첫 프레임)
    43.92s  agent 발화 시작: <ret> 그랜드뷰 로프트 지역의 날씨는 섭씨 이십오 점 오도, 습도 육십팔퍼센트, 바람은 시속 삼 점 이킬
    43.94s  user  발화 끝
    45.21s  ⚡SPAN 주입 [d'=1.36s / d_lead=10.16s]: (tool result) 25.5°C, humidity 68%, wind 3.2 km/h, mostly sunny.
    54.08s  agent 발화 끝
    54.88s  user  발화 시작: 으음… 그럼 혹시… 그날 저녁에 영화 볼 만한 거 있어?
    58.89s  <ret> 발화 (turn9 첫 프레임)
    59.20s  agent 발화 시작: <ret> 그랜드뷰 로프트 근처에서 액션 플릭, 로맨틱 코미디, SF 어드벤처 영화를 상영하고 있어요.
    59.23s  user  발화 끝
    60.41s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.95s]: (tool result) Action Flick – Director X – 2026; Romantic Comedy – Dire
    63.01s  user  발화 시작: 응응.
    63.59s  user  발화 끝
    65.99s  user  발화 시작: SF 어드벤처는 누가 감독이야?
    66.15s  agent 발화 끝
    67.82s  <ret> 발화 (turn12 첫 프레임)
    68.06s  agent 발화 시작: <ret> SF 어드벤처 상영 시간은 저녁 여섯시 삼십분과 아홉시에 있습니다.
    68.07s  user  발화 끝
    69.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: (tool result) Sci-Fi Adventure showtimes: 6:30 PM, 9:00 PM.
    72.41s  agent 발화 끝
    74.34s  user  발화 시작: 저녁 아홉시로 예매해 줘. 두 명.
    77.29s  user  발화 끝
    77.46s  <ret> 발화 (turn14 첫 프레임)
    77.62s  agent 발화 시작: <ret> SF 어드벤처 저녁 아홉시 상영 티켓 두 장을 예매했습니다. 확인 번호는 MT567PQ입니다.
    79.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: (tool result) Two tickets purchased for Sci-Fi Adventure at 9:00 PM, c
    83.80s  user  발화 시작: 와, 정말 고마워. 덕분에 오늘 계획이 다 세워졌네.
    83.97s  agent 발화 끝
    87.31s  user  발화 끝
    87.47s  agent 발화 시작: 천만에요. 즐거운 시간 보내세요.
    90.06s  agent 발화 끝
    90.10s  user  발화 시작: 아, 잠깐만. 혹시… 내일 아침…
    93.75s  user  발화 끝
    95.26s  user  발화 시작: …일곱시에 알람 맞춰줄 수 있어?
    96.85s  <ret> 발화 (turn19 첫 프레임)
    97.17s  agent 발화 시작: <ret> 내일 아침 일곱시에 알람을 설정해 드렸습니다. 편안한 밤 보내세요.
    97.19s  user  발화 끝
    98.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: (tool result) Alarm set for 7:00 AM tomorrow.
   101.47s  user  발화 시작: 응, 고마워. 그럼 이만.
   101.89s  agent 발화 끝
   103.04s  agent 발화 시작: 좋은 하루 보내세요.
   103.07s  user  발화 끝
   104.52s  agent 발화 끝
