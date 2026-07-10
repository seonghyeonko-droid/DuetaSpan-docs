# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "수경",
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
#       "date": "2026-06-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-30",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 날씨 어때? | S2 그냥 아무거나 괜찮아. 최신 개봉작 중에서. | S3 … 이번 주말에 서울 근교로… | S4 북한산은 좀 멀 것 같은데.

     0.00s  user  발화 시작: 오늘 날씨 어때?
     0.88s  <ret> 발화 (turn1 첫 프레임)
     0.96s  agent 발화 시작: <ret> 오늘 날씨는 섭씨 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 있어요.
     0.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: 23.0°C, humidity 74%, wind 5.5 km/h
     1.20s  user  발화 끝
     9.35s  agent 발화 끝
     9.40s  user  발화 시작: 그럼 내일은 어때?
    10.09s  <ret> 발화 (turn3 첫 프레임)
    10.48s  agent 발화 시작: <ret> 내일은 섭씨 이십오도로 조금 더 따뜻하고, 습도는 육십팔%, 바람은 시속 칠킬로미터로 조금 더 강
    10.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: 25.0°C, humidity 68%, wind 7.0 km/h
    10.68s  user  발화 끝
    15.12s  user  발화 시작: 음.
    15.61s  user  발화 끝
    19.66s  agent 발화 끝
    20.29s  user  발화 시작: 이번 주말에 영화 보러 가고 싶은데, 상영 시간 좀 알아봐 줄래?
    24.12s  <ret> 발화 (turn6 첫 프레임)
    24.44s  agent 발화 시작: <ret> 오펜하이머 영화 상영 시간은 오후 두시, 다섯시 삼십분, 아홉시에 있어요.
    24.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: (tool result) Oppenheimer — 14:00, 17:30, 21:00
    24.55s  user  발화 끝
    29.39s  agent 발화 끝
    30.68s  user  발화 시작: 오펜하이머… 음, 아니, 그냥 액션 영화 보고 싶어.
    34.38s  user  발화 끝
    34.69s  agent 발화 시작: 액션 영화를 찾으시는군요. 어떤 영화를 좋아하시나요?
    37.81s  user  발화 시작: 그냥 아무거나 괜찮아. 최신 개봉작 중에서.
    37.83s  agent 발화 끝
    40.18s  <ret> 발화 (turn10 첫 프레임)
    40.58s  agent 발화 시작: <ret> 미션 임파서블: 데드 레코닝 파트 원이 한시, 네시, 일곱시, 열시에 상영 중이에요.
    40.58s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.46s]: (tool result) Mission: Impossible - Dead Reckoning Part One — 13:00, 1
    40.77s  user  발화 끝
    46.04s  agent 발화 끝
    47.30s  user  발화 시작: 일곱시 표 예매해 줘.
    48.57s  <ret> 발화 (turn12 첫 프레임)
    48.88s  agent 발화 시작: <ret> 미션 임파서블 일곱시 표 예매 완료되었고, 확인 번호는 칠 사 구 이 팔 삼번입니다.
    48.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: (tool result) Confirmation ID: 749283
    49.10s  user  발화 끝
    56.23s  user  발화 시작: 고마워. — 혹시…
    56.29s  agent 발화 끝
    58.02s  user  발화 끝
    59.60s  user  발화 시작: … 이번 주말에 서울 근교로…
    61.87s  user  발화 끝
    63.80s  user  발화 시작: …드라이브 갈 만한 곳 있어?
    65.40s  agent 발화 시작: 서울 근교 드라이브 코스를 찾으시는군요. 어떤 분위기를 원하세요?
    65.55s  user  발화 끝
    66.78s  user  발화 시작: 그치.
    67.42s  user  발화 끝
    69.56s  agent 발화 끝
    69.58s  agent 발화 시작: 조용하고 한적한 곳을 좋아하시는지, 아니면 활기차고 볼거리가 많은 곳을 선호하시는지 알려주시면 더 좋은 곳을
    72.14s  user  발화 시작: 그치.
    72.54s  user  발화 끝
    77.26s  user  발화 시작: 음… 경치 좋은 곳으로.
    77.36s  agent 발화 끝
    78.58s  <ret> 발화 (turn21 첫 프레임)
    78.90s  agent 발화 시작: <ret> 남이섬은 아름다운 경치를 자랑하는 섬이고, 북한산 국립공원은 하이킹 코스와 산 풍경이 멋진 곳이에
    78.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.20s]: (tool result) Nami Island — Scenic island with beautiful views; Bukhan
    79.01s  user  발화 끝
    85.10s  agent 발화 끝
    85.82s  user  발화 시작: 남이섬… 거긴 가봤어.
    87.61s  user  발화 끝
    87.61s  agent 발화 시작: 남이섬에 가보셨군요. 그럼 북한산 국립공원은 어떠세요? 등산도 즐기실 수 있고, 멋진 풍경을 감상하실 수 있
    95.42s  user  발화 시작: 북한산은 좀 멀 것 같은데.
    95.45s  agent 발화 끝
    97.41s  user  발화 끝
    97.61s  agent 발화 시작: 북한산이 조금 멀다고 느끼시는군요. 좀 더 가까운 곳을 알아볼까요?
   100.40s  user  발화 시작: 음.
   100.81s  user  발화 끝
   101.64s  user  발화 시작: 응, 좀 더 가까운 곳으로.
   101.82s  agent 발화 끝
   102.90s  <ret> 발화 (turn28 첫 프레임)
   103.21s  agent 발화 시작: <ret> 관악산은 가벼운 하이킹 코스와 멋진 경치를 즐길 수 있고, 서울숲은 넓은 공원으로 산책로와 정원이
   103.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: (tool result) Mount Gwanak — Easy hiking trails and scenic views; Seou
   103.39s  user  발화 끝
   111.33s  agent 발화 끝
   111.36s  user  발화 시작: 서울숲 좋아 보여.
   112.86s  agent 발화 시작: 서울숲이 마음에 드시는군요. 편안하게 산책하기 좋은 곳이에요.
   113.02s  user  발화 끝
   116.75s  agent 발화 끝
