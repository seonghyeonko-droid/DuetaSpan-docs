# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Rennora",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-08-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-07-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-04-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘. | S2 음… 주변에 괜찮은 카페가 있을까? | S3 아, 고마워. 혹시 그 로프트, 반려동물 동반 가능한 곳이야? | S4 [happy] 알았어, 정말 고마워.

     0.00s  user  발화 시작: 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘.
     3.73s  <ret> 발화 (turn1 첫 프레임)
     3.97s  agent 발화 시작: <ret> 네, 그랜드뷰 로프트 방문 예약을 잡아드릴게요.
     4.16s  user  발화 끝
     5.65s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.23s]: (tool result) Visit scheduled for June 15th at 2:00 PM.
     7.08s  agent 발화 시작: 육월 십오일 오후 두시에 그랜드뷰 로프트 방문 예약이 완료됐습니다.
     7.21s  agent 발화 끝
    11.79s  user  발화 시작: 음… 두시 말고, 혹시 늦게 갈 수 있을까? 네시쯤으로— 아니, 다섯시로 바꿔줘.
    11.81s  agent 발화 끝
    16.68s  <ret> 발화 (turn4 첫 프레임)
    16.75s  agent 발화 시작: <ret> 다섯시로 변경해 드릴게요.
    16.78s  user  발화 끝
    18.12s  ⚡SPAN 주입 [d'=1.44s / d_lead=1.89s]: (tool result) Visit rescheduled for June 15th at 5:00 PM.
    18.46s  agent 발화 시작: 육월 십오일 오후 다섯시로 방문 예약 시간이 변경되었습니다.
    18.64s  agent 발화 끝
    21.29s  user  발화 시작: 어.
    21.64s  user  발화 끝
    22.77s  agent 발화 시작: 혹시 그랜드뷰 로프트에 대해 더 궁금한 점이 있으신가요?
    22.87s  agent 발화 끝
    24.90s  user  발화 시작: 응응.
    25.39s  user  발화 끝
    26.79s  agent 발화 끝
    27.12s  user  발화 시작: 음… 주변에 괜찮은 카페가 있을까?
    29.31s  <ret> 발화 (turn10 첫 프레임)
    29.62s  agent 발화 시작: <ret> 주변 카페 정보는 쉽게 찾을 수 있습니다. 그랜드뷰 로프트 근처에 빈씬(영 점 이마일)과 커피 헤
    29.76s  user  발화 끝
    30.51s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.52s]: (tool result) Nearby cafes: BeanScene (0.2 miles), Coffee Haven (0.5 m
    39.03s  user  발화 시작: 빈씬은 영업시간이 어떻게 돼?
    39.16s  agent 발화 끝
    40.87s  user  발화 끝
    40.95s  <ret> 발화 (turn12 첫 프레임)
    41.02s  agent 발화 시작: <ret> 빈씬의 영업시간을 바로 알려드릴게요. 빈씬은 매일 오전 일곱시부터 오후 여덟시까지 영업합니다.
    42.15s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.54s]: (tool result) BeanScene hours: 7:00 AM - 8:00 PM daily.
    47.96s  user  발화 시작: 아, 고마워. 혹시 그 로프트, 반려동물 동반 가능한 곳이야?
    48.01s  agent 발화 끝
    53.37s  <ret> 발화 (turn14 첫 프레임)
    53.38s  user  발화 끝
    53.45s  agent 발화 시작: <ret> 네, 그랜드뷰 로프트는 반려동물 동반이 가능합니다.
    54.41s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.46s]: [source: Grandview Lofts Website] Pets are welcome at The Grandview Lo
    56.68s  agent 발화 시작: 그랜드뷰 로프트는 반려동물 동반이 가능하며, 일회 청소비가 오십달러입니다.
    56.91s  agent 발화 끝
    61.83s  user  발화 시작: 오, 좋네. 그럼 혹시 육월 십오일 다섯시에 방문 예약한 거, 다시 한 번 확인해 줄 수 있어?
    62.01s  agent 발화 끝
    67.93s  agent 발화 시작: 물론입니다. 육월 십오일 오후 다섯시에 그랜드뷰 로프트 방문 예약이 확정되어 있습니다.
    67.95s  user  발화 끝
    70.45s  user  발화 시작: 음.
    70.76s  user  발화 끝
    73.96s  agent 발화 끝
    74.06s  user  발화 시작: [happy] 알았어, 정말 고마워.
    75.81s  user  발화 끝
