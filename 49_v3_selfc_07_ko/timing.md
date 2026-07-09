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

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 방문 예약을 잡아줘. 6월 15일로 해줘. | S2 아니, 그곳만 보면 돼. 혹시 그 근처에 맛있는 커피숍 있을까 | S3 더 북 눅… 이름이 예쁘네. 거기는 영업시간이 어떻게 돼? | S4 도보로 갈게.

     0.00s  user  발화 시작: 그랜드뷰 로프트에 방문 예약을 잡아줘. 6월 15일로 해줘.
     4.06s  <ret> 발화 (turn1 첫 프레임)
     4.30s  agent 발화 시작: <ret> 네, 그랜드뷰 로프트 방문 예약 도와드릴게요. 6월 15일 오후 2시, 3시 30분, 5시에 예약
     4.34s  user  발화 끝
     5.82s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.72s]: (tool result) The Grandview Lofts is available on June 15th at 2:00 PM
    12.93s  agent 발화 끝
    14.20s  user  발화 시작: 음… 3시 30분으로 할게. 근데 잠깐만, 3시로 할까— 3시 30분으로 하자.
    18.74s  <ret> 발화 (turn3 첫 프레임)
    19.05s  agent 발화 시작: <ret> 3시 30분으로 변경하셨네요. 김민지 님, 6월 15일 오후 3시 30분으로 그랜드뷰 로프트 방문
    19.20s  user  발화 끝
    19.54s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.82s]: (tool result) Your visit to The Grandview Lofts is confirmed for June 
    25.09s  user  발화 시작: 예.
    25.53s  user  발화 끝
    27.98s  agent 발화 시작: 예약 확인 문자를 보내드릴게요. 혹시 다른 로프트도 둘러보고 싶으신가요?
    28.14s  agent 발화 끝
    30.68s  user  발화 시작: 그렇죠.
    31.17s  user  발화 끝
    32.95s  user  발화 시작: 아니, 그곳만 보면 돼. 혹시 그 근처에 맛있는 커피숍 있을까?
    33.11s  agent 발화 끝
    37.70s  agent 발화 시작: 그 근처에 괜찮은 커피숍들이 꽤 있어요. 어떤 스타일을 좋아하세요? 조용하고 분위기 있는 곳, 아니면 활기찬
    37.86s  user  발화 끝
    45.34s  agent 발화 끝
    45.34s  user  발화 시작: 음… 조용하고 분위기 있는 곳이 좋겠어. 혼자 가서 책 읽을 수 있는 곳.
    50.04s  <ret> 발화 (turn10 첫 프레임)
    50.19s  agent 발화 시작: <ret> 조용하고 분위기 있는 커피숍을 찾으시는군요. 그랜드뷰 로프트에서 0.5마일 거리에 “더 북 눅”이
    50.34s  user  발화 끝
    51.80s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.95s]: (tool result) “The Book Nook” is a quiet coffee shop 0.5 miles from Th
    61.81s  user  발화 시작: 더 북 눅… 이름이 예쁘네. 거기는 영업시간이 어떻게 돼?
    61.97s  agent 발화 끝
    65.89s  <ret> 발화 (turn12 첫 프레임)
    65.97s  agent 발화 시작: <ret> “더 북 눅” 영업시간을 알아볼게요. “더 북 눅”은 매일 아침 8시부터 저녁 8시까지 영업합니다
    66.06s  user  발화 끝
    66.85s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.45s]: (tool result) The Book Nook is open from 8:00 AM to 8:00 PM, seven day
    72.83s  agent 발화 끝
    72.89s  user  발화 시작: 오, 늦게까지 하네. 그럼 그쪽으로 가는 길은 어떻게 돼?
    76.13s  user  발화 끝
    76.51s  agent 발화 시작: 그쪽으로 가는 길을 안내해 드릴게요. 도보로 가시겠어요, 아니면 대중교통을 이용하시겠어요?
    80.20s  user  발화 시작: 네네.
    80.69s  user  발화 끝
    82.81s  user  발화 시작: 도보로 갈게.
    82.85s  agent 발화 끝
    83.38s  <ret> 발화 (turn17 첫 프레임)
    83.69s  agent 발화 시작: <ret> 도보 경로를 안내해 드릴게요. 엘름 거리를 남쪽으로 0.5마일 걸어가세요. 오크 애비뉴에서 좌회전
    83.91s  user  발화 끝
    84.34s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.38s]: (tool result) Walk 0.5 miles south on Elm Street, then turn left on Oa
    88.46s  user  발화 시작: 어머.
    88.91s  user  발화 끝
    95.61s  agent 발화 끝
    96.48s  user  발화 시작: 정말 고마워요, 텔러. 덕분에 계획이 잘 세워지는 것 같아.
   100.80s  agent 발화 시작: 도움이 되어서 정말 기쁩니다. 언제든지 필요하시면 말씀해주세요.
   100.83s  user  발화 끝
   105.14s  agent 발화 끝
