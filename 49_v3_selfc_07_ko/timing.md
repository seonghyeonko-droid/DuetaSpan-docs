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

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘. | S2 아니, 그냥 가면 되는 거지? | S3 브루클린이었구나. 땡큐. | S4 오, 생각보다 가깝네.

     0.00s  user  발화 시작: 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘.
     3.73s  <ret> 발화 (turn1 첫 프레임)
     3.97s  agent 발화 시작: <ret> 네, 그랜드뷰 로프트 방문 예약을 도와드릴게요. 육월 십오일 오후 두시에 그랜드뷰 로프트 방문 예
     4.17s  user  발화 끝
     5.49s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.85s]: (tool result) visit_id: 78945, home_name: The Grandview Lofts, visit_d
    11.10s  agent 발화 끝
    12.47s  user  발화 시작: 음… 십오일은 좀 어려울 것 같은데, 십육일로 바꿔줄 수 있어?
    16.40s  <ret> 발화 (turn3 첫 프레임)
    16.72s  agent 발화 시작: <ret> 네, 날짜 변경을 도와드릴게요. 육월 십육일 오전 열시에 그랜드뷰 로프트 방문 예약을 변경했습니다
    16.87s  user  발화 끝
    17.68s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.25s]: (tool result) visit_id: 98765, home_name: The Grandview Lofts, visit_d
    21.54s  user  발화 시작: 어.
    22.04s  user  발화 끝
    23.88s  agent 발화 시작: 혹시 다른 특별 요청 사항이 있으신가요? 예를 들어, 특정 담당자를 만나고 싶으신가요?
    24.03s  agent 발화 끝
    26.66s  user  발화 시작: 응응.
    27.16s  user  발화 끝
    28.95s  user  발화 시작: 아니, 그냥 가면 되는 거지?
    29.06s  agent 발화 끝
    31.18s  agent 발화 시작: 네, 예약 시간 맞춰서 방문하시면 됩니다. 담당자는 미리 지정하지 않으셨으니, 현장에서 안내받으실 거예요.
    31.35s  user  발화 끝
    38.32s  agent 발화 끝
    38.37s  user  발화 시작: 아, 그 로프트가… 음… 퀸즈에 있었나? 브루클린에 있었나?
    42.55s  <ret> 발화 (turn10 첫 프레임)
    42.86s  agent 발화 시작: <ret> 그랜드뷰 로프트의 위치를 다시 한번 확인해 드릴게요. 그랜드뷰 로프트는 뉴욕 브루클린, 메이플 스
    43.04s  user  발화 끝
    43.75s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.89s]: (tool result) address: 123 Maple Street, Brooklyn, NY 11201, city: Bro
    51.72s  user  발화 시작: 브루클린이었구나. 땡큐.
    51.75s  agent 발화 끝
    53.37s  user  발화 끝
    53.55s  agent 발화 시작: 브루클린이 맞습니다. 혹시 브루클린까지 가는 가장 빠른 길을 안내해 드릴까요?
    58.92s  agent 발화 끝
    59.03s  user  발화 시작: 응, 부탁해. 지금 출발하면 얼마나 걸릴까?
    62.92s  <ret> 발화 (turn14 첫 프레임)
    63.05s  user  발화 끝
    63.07s  agent 발화 시작: <ret> 현재 위치에서 그랜드뷰 로프트까지 자동차로 약 삼십오분, 십오 점 이마일 정도 소요될 것으로 예상
    64.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: (tool result) distance: 15.2 miles, estimated_time: 35 minutes, route:
    66.07s  user  발화 시작: 음.
    66.57s  user  발화 끝
    70.15s  user  발화 시작: 오, 생각보다 가깝네.
    70.20s  agent 발화 끝
    71.67s  agent 발화 시작: 네, 브루클린까지는 비교적 접근성이 좋은 편입니다. 혹시 다른 도움이 필요하시면 언제든지 말씀해주세요.
    71.80s  user  발화 끝
    78.20s  agent 발화 끝
