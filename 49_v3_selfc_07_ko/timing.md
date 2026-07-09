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

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에서 육월 십오일에 방문 예약을 잡아줘. | S2 그 로프트, 반려동물 동반 가능한가? | S3 음… 새로운 동네가 걱정되긴 해. 특히 병원이 가까운지. | S4 고마워, 텔러. 덕분에 마음이 좀 놓이네.

     0.00s  user  발화 시작: 그랜드뷰 로프트에서 육월 십오일에 방문 예약을 잡아줘.
     3.91s  <ret> 발화 (turn1 첫 프레임)
     4.14s  agent 발화 시작: <ret> 네, 알겠습니다. 그랜드뷰 로프트, 육월 십오일 오후 두시에 방문 예약이 확정됐습니다.
     4.30s  user  발화 끝
     4.95s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.06s]: (tool result) Visit scheduled; Property: The Grandview Lofts; Date: 20
     9.98s  agent 발화 끝
    11.31s  user  발화 시작: 어… 아니, 십오일은 안 돼. 십육일로 바꿔줘.
    14.80s  <ret> 발화 (turn3 첫 프레임)
    15.14s  user  발화 끝
    15.19s  agent 발화 시작: <ret> 잠시만요. 네, 그랜드뷰 로프트 방문 날짜를 육월 십육일 오후 두시로 변경했습니다.
    15.30s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.64s]: (tool result) Visit scheduled; Property: The Grandview Lofts; Date: 20
    19.85s  user  발화 시작: 어.
    20.34s  user  발화 끝
    22.11s  agent 발화 시작: 혹시 다른 궁금한 점 있으세요?
    22.28s  agent 발화 끝
    24.15s  user  발화 시작: 그 로프트, 반려동물 동반 가능한가?
    24.31s  agent 발화 끝
    26.82s  <ret> 발화 (turn7 첫 프레임)
    26.89s  agent 발화 시작: <ret> 네, 그랜드뷰 로프트는 반려동물 동반이 가능하고, 일회성 수수료가 이백오십달러입니다.
    27.01s  user  발화 끝
    27.32s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.38s]: [source: Grandview Lofts website] Pets are welcome at The Grandview Lo
    30.90s  user  발화 시작: 음.
    31.11s  user  발화 끝
    33.07s  user  발화 시작: 이백오십달러나? 좀 비싸네.
    33.10s  agent 발화 끝
    35.24s  agent 발화 시작: 이사 준비는 잘 되어가시나요? 혹시 새로운 동네에 대한 걱정도 있으신가요?
    35.33s  user  발화 끝
    40.35s  user  발화 시작: 음… 새로운 동네가 걱정되긴 해. 특히 병원이 가까운지.
    40.47s  agent 발화 끝
    44.32s  <ret> 발화 (turn12 첫 프레임)
    44.61s  user  발화 끝
    44.64s  agent 발화 시작: <ret> 병원은 중요하죠. 그랜드뷰 로프트 주변에는 시티 제너럴 병원, 세인트 루크스 클리닉, 머시 병원이
    45.12s  ⚡SPAN 주입 [d'=0.80s / d_lead=0.90s]: (tool result) Nearby hospitals: City General Hospital (0.8 miles); St.
    54.10s  agent 발화 끝
    54.18s  user  발화 시작: 영 점 팔마일이면 괜찮네. 그럼 시티 제너럴 병원까지 가는 길 좀 알려줘.
    59.73s  user  발화 끝
    59.80s  <ret> 발화 (turn14 첫 프레임)
    59.86s  agent 발화 시작: <ret> 그랜드뷰 로프트에서 엘름 스트리트를 북쪽으로 영 점 삼마일 이동한 후, 오크 애비뉴로 좌회전하면 
    61.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.94s]: (tool result) Directions: Start at The Grandview Lofts; Head north on 
    65.43s  user  발화 시작: 음.
    65.65s  user  발화 끝
    72.74s  user  발화 시작: 고마워, 텔러. 덕분에 마음이 좀 놓이네.
    72.80s  agent 발화 끝
    75.64s  agent 발화 시작: 도움이 되었다니 기쁩니다. 새로운 시작을 응원할게요.
    75.65s  user  발화 끝
    78.88s  agent 발화 끝
