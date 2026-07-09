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

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 6월 15일에 방문 예약을 잡아줘. | S2 혹시 그 로프트 주변에 괜찮은 카페도 알아봐 줄 수 있어? | S3 오, 괜찮네. 혹시 그 카페에 주차 공간도 있어? | S4 그랜드뷰 로프트 방문 예약 말이야.

     0.00s  user  발화 시작: 그랜드뷰 로프트에 6월 15일에 방문 예약을 잡아줘.
     3.36s  <ret> 발화 (turn1 첫 프레임)
     3.60s  agent 발화 시작: <ret> 네, 그랜드뷰 로프트 방문 예약, 도와드릴게요. 6월 15일 오후 2시 또는 3시 30분에 그랜드
     3.74s  user  발화 끝
     5.12s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.99s]: (tool result) The Grandview Lofts has availability on June 15th at 2:0
    14.08s  agent 발화 끝
    15.39s  user  발화 시작: 음… 2시보다는 3시 30분이 더 좋을 것 같아. 근데 잠깐만, 6월 15일이 아니라 6월 16일로 다시 잡
    22.71s  <ret> 발화 (turn3 첫 프레임)
    22.98s  user  발화 끝
    23.01s  agent 발화 시작: <ret> 알겠어요, 6월 16일 오후 3시 30분으로 변경할게요.
    24.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.98s]: (tool result) The Grandview Lofts has availability on June 16th at 3:3
    26.81s  agent 발화 시작: 네, 6월 16일 오후 3시 30분에 그랜드뷰 로프트 방문이 확정되었어요. 확인 번호는 GH7892입니다.
    26.99s  agent 발화 끝
    32.35s  user  발화 시작: 예.
    32.71s  user  발화 끝
    35.03s  user  발화 시작: 혹시 그 로프트 주변에 괜찮은 카페도 알아봐 줄 수 있어?
    35.20s  agent 발화 끝
    38.54s  <ret> 발화 (turn7 첫 프레임)
    38.77s  agent 발화 시작: <ret> 물론이죠. 주변 카페를 검색해 드릴게요.
    38.87s  user  발화 끝
    39.50s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.01s]: (tool result) Three cafes are near The Grandview Lofts: Bean Scene (4.
    41.69s  agent 발화 시작: 그랜드뷰 로프트 근처에 빈 씬, 커피 코너, 아로마 카페가 있어요. 빈 씬이 평점이 가장 높네요.
    41.78s  agent 발화 끝
    45.93s  user  발화 시작: 그렇죠.
    46.52s  user  발화 끝
    49.42s  agent 발화 끝
    49.80s  user  발화 시작: 빈 씬은 영업시간이 어떻게 돼?
    51.97s  <ret> 발화 (turn11 첫 프레임)
    52.04s  agent 발화 시작: <ret> 잠시만요, 빈 씬 영업시간을 확인해 볼게요.
    52.24s  user  발화 끝
    53.41s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.19s]: (tool result) Bean Scene is open from 7:00 AM to 7:00 PM daily.
    55.05s  agent 발화 시작: 빈 씬은 매일 아침 7시부터 저녁 7시까지 영업해요.
    55.23s  agent 발화 끝
    59.12s  agent 발화 끝
    59.60s  user  발화 시작: 오, 괜찮네. 혹시 그 카페에 주차 공간도 있어?
    62.95s  <ret> 발화 (turn14 첫 프레임)
    63.18s  agent 발화 시작: <ret> 빈 씬에 주차 공간이 있는지 알아봐 드릴게요.
    63.26s  user  발화 끝
    64.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.23s]: (tool result) Bean Scene offers limited street parking. A paid parking
    66.24s  agent 발화 시작: 빈 씬은 길가 주차가 제한적이고, 한 블록 거리에 유료 주차장이 있어요.
    66.42s  agent 발화 끝
    71.29s  user  발화 시작: 그렇군요. 예약 잡아줘.
    71.52s  agent 발화 끝
    73.13s  user  발화 끝
    73.63s  agent 발화 시작: 어떤 예약을 도와드릴까요?
    75.50s  user  발화 시작: 그랜드뷰 로프트 방문 예약 말이야.
    75.61s  agent 발화 끝
    77.95s  agent 발화 시작: [interrupting] 아, 그랜드뷰 로프트 방문 예약 확인 말씀하시는 거죠?
    78.03s  user  발화 끝
    82.68s  agent 발화 시작: 네, 6월 16일 오후 3시 30분으로 예약이 확정되었어요. 혹시 다른 도움이 필요하신가요?
    82.90s  agent 발화 끝
    89.91s  agent 발화 끝
