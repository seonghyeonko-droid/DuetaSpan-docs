# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "주원",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-28",
#       "category": "bloodtype",
#       "text": "User's blood type is B+."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "learning",
#       "text": "User is studying for the CPA exam."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "dislike",
#       "text": "User can't stand bell peppers."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "streaming",
#       "text": "User subscribes to Apple Music and Coupang Play."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "commute",
#       "text": "User takes a shuttle bus."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Spanish tapas."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-23",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-04-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 서울 날씨 어때요? | S2 아, 경주 말고 부산 날씨는요? | S3 아, 밀면 말고 다른 거 먹고 싶어.. | S4 혹시 씨앗호떡 주변에 카페도 찾아줄 수 있어?

     0.00s  user  발화 시작: 오늘 서울 날씨 어때요?
     1.91s  <ret> 발화 (turn1 첫 프레임)
     1.91s  user  발화 끝
     2.25s  agent 발화 시작: <ret> 지금 서울 시간은 이천이십육년 칠월 십일 오후 두시 삼십삼분입니다.
     3.00s  ⚡SPAN 주입 [d'=1.09s / d_lead=4.99s]: It is Friday, July 10, 2026 at 2:33 PM in Asia/Seoul right now.
     7.24s  agent 발화 끝
     7.47s  user  발화 시작: 그럼 내일 모레 날씨는요?
     9.43s  <ret> 발화 (turn3 첫 프레임)
     9.49s  user  발화 끝
     9.55s  agent 발화 시작: <ret> 내일 모레, 칠월 십이일 서울 날씨는 이십팔 점 일도, 습도 육십삼퍼센트, 풍속은 시속 팔 점 삼
    10.50s  ⚡SPAN 주입 [d'=1.08s / d_lead=8.61s]: 28.1°C, humidity 63%, wind 8.3 km/h
    18.05s  user  발화 시작: 이번 주말에 경주 갈 건데, 경주 날씨는 어때요?
    18.16s  agent 발화 끝
    20.21s  agent 발화 시작: 네.
    20.80s  agent 발화 끝
    21.23s  <ret> 발화 (turn6 첫 프레임)
    21.84s  agent 발화 시작: <ret> 죄송합니다. 경주 날씨 정보는 찾을 수 없습니다.
    21.86s  user  발화 끝
    22.21s  ⚡SPAN 주입 [d'=0.97s / d_lead=3.30s]: (no information found)
    23.24s  user  발화 시작: 음.
    23.68s  user  발화 끝
    25.14s  agent 발화 끝
    25.72s  user  발화 시작: 아, 경주 말고 부산 날씨는요?
    27.78s  <ret> 발화 (turn9 첫 프레임)
    28.16s  user  발화 끝
    28.20s  agent 발화 시작: <ret> 부산 날씨는 이십육 점 오도, 습도 칠십팔퍼센트, 풍속은 시속 십일 점 이킬로미터입니다.
    28.89s  ⚡SPAN 주입 [d'=1.11s / d_lead=6.71s]: 26.5°C, humidity 78%, wind 11.2 km/h
    34.91s  agent 발화 끝
    34.97s  user  발화 시작: 부산 해운대 근처 맛집 좀 찾아줘.
    37.31s  <ret> 발화 (turn11 첫 프레임)
    37.51s  user  발화 끝
    37.63s  agent 발화 시작: <ret> 부산 해운대구에 가야밀면이 백이십미터, 해운대 암소국밥이 이백삼십미터 거리에 있습니다.
    38.86s  ⚡SPAN 주입 [d'=1.55s / d_lead=5.41s]: (tool result) Busan, Haeundae-gu: Gaya Milmyeon (120 m), Haeundae Amso
    41.55s  user  발화 시작: 네.
    42.14s  user  발화 끝
    42.70s  user  발화 시작: 가야밀면 예약해줘. 내일 저녁 일곱시에 두명.
    43.04s  agent 발화 끝
    47.01s  <ret> 발화 (turn14 첫 프레임)
    47.16s  agent 발화 시작: <ret> 가야밀면, 부산, 칠월 십일일 열아홉시, 두명 예약이 완료되었습니다. 예약번호는 알 이 에스 일 
    47.21s  user  발화 끝
    48.46s  ⚡SPAN 주입 [d'=1.46s / d_lead=8.71s]: (tool result) Gaya Milmyeon, Busan, 19:00, 2026-07-11, RES1-002345, co
    50.05s  user  발화 시작: 네.
    50.50s  user  발화 끝
    55.87s  agent 발화 끝
    55.93s  user  발화 시작: 아, 밀면 말고 다른 거 먹고 싶어..
    58.36s  <ret> 발화 (turn17 첫 프레임)
    58.77s  user  발화 끝
    58.89s  agent 발화 시작: <ret> — 해운대 씨앗호떡이 사백오십미터, 금수복국이 오백팔십미터 거리에 있습니다.
    59.38s  ⚡SPAN 주입 [d'=1.01s / d_lead=3.78s]: Busan, Haeundae-gu: Ssiat Hotteok (450 m), Geumsu Bokguk (580 m)
    63.93s  agent 발화 끝
    64.03s  user  발화 시작: … 씨앗호떡은 얼마나 걸려?
    66.15s  user  발화 끝
    66.23s  agent 발화 시작: 씨앗호떡까지는 도보로 약 칠분 정도 걸립니다.
    69.41s  agent 발화 끝
    70.85s  user  발화 시작: 그럼 씨앗호떡으로 예약해줘. 내일 저녁 일곱시, 두명.
    75.95s  <ret> 발화 (turn21 첫 프레임)
    75.97s  agent 발화 시작: <ret> 씨앗호떡, 부산, 칠월 십일일 열아홉시, 두명 예약이 완료되었습니다. 예약번호는 알 이 에스 이 
    76.01s  user  발화 끝
    76.79s  ⚡SPAN 주입 [d'=0.84s / d_lead=9.27s]: (tool result) Ssiat Hotteok, Busan, 19:00, 2026-07-11, RES2-005039, co
    85.25s  agent 발화 끝
    86.30s  user  발화 시작: 혹시 씨앗호떡 주변에 카페도 찾아줄 수 있어?
    89.55s  <ret> 발화 (turn23 첫 프레임)
    89.63s  agent 발화 시작: <ret> 씨앗호떡 주변에 커피스미스가 백오십미터, 모드커피가 이백팔십미터 거리에 있습니다.
    89.76s  user  발화 끝
    90.93s  ⚡SPAN 주입 [d'=1.38s / d_lead=5.74s]: (tool result) Busan, Haeundae-gu: Coffee Smith (150 m), Mod Coffee (28
    95.37s  agent 발화 끝
    96.63s  user  발화 시작: 커피스미스까지 가는 길 알려줘.
    98.53s  <ret> 발화 (turn25 첫 프레임)
    98.98s  agent 발화 시작: <ret> 도보로 백오십미터, 약 이분 정도 걸립니다.
    99.03s  user  발화 끝
    99.29s  ⚡SPAN 주입 [d'=0.76s / d_lead=2.95s]: (tool result) 150 m, 2 min by walking
   101.64s  user  발화 시작: 고마워.
   101.93s  agent 발화 끝
   102.41s  user  발화 끝
   102.76s  agent 발화 시작: [happy] 도움이 되어서 기쁩니다. 즐거운 시간 보내세요!
   106.22s  agent 발화 끝
