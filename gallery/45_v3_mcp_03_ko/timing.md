# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "수영",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "schedule",
#       "text": "User has a fully remote setup."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "skill",
#       "text": "User is quite experienced with urban sketching."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "diet",
#       "text": "User is halal."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "airline",
#       "text": "User usually flies with Delta."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "anniversary",
#       "text": "User's anniversary is October 4."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-04-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-02-21",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2025-12-20",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 시카고 뮤지컬 티켓 네 장 예매해 줘. 팔월 이십일, 시애틀에서.
     4.63s  <ret> 발화 (turn1 첫 프레임)
     5.10s  agent 발화 시작: <ret> [happy] 네, 시카고 뮤지컬 티켓 네 장, 팔월 이십일 시애틀 공연으로 예매 완료됐습니다. 
     5.10s  user  발화 끝
     5.39s  ⚡SPAN 주입 [d'=0.76s / d_lead=14.28s]: (tool result) Confirmation ID: 7492-XJ5-831. Four tickets to Chicago i
    19.38s  user  발화 시작: 어.
    19.38s  agent 발화 끝
    19.89s  user  발화 시작: 그럼, 시애틀 근처에 괜찮은 호텔 좀 찾아줘.
    19.89s  user  발화 끝
    22.97s  <ret> 발화 (turn4 첫 프레임)
    23.46s  agent 발화 시작: <ret> [curious] 시애틀에는 맥스웰 호텔이 있어요. 사성급이고, 일박에 평균 이백이십달러, 평점은
    23.46s  user  발화 끝
    24.25s  ⚡SPAN 주입 [d'=1.28s / d_lead=7.14s]: (tool result) The Maxwell Hotel is a 4-star hotel in Seattle, WA. Aver
    30.60s  user  발화 시작: 응.
    30.60s  agent 발화 끝
    31.11s  user  발화 시작: 음… 그 호텔 예약해 줘. 팔월 십구일부터 이십일일까지.
    31.11s  user  발화 끝
    35.11s  <ret> 발화 (turn8 첫 프레임)
    35.20s  agent 발화 시작: 예.
    35.20s  user  발화 끝
    35.41s  ⚡SPAN 주입 [d'=0.30s / d_lead=14.79s]: (tool result) Reservation confirmed at The Maxwell Hotel, Seattle, fro
    35.71s  agent 발화 시작: <ret> [happy] 네, 맥스웰 호텔, 팔월 십구일부터 이십일일까지 예약 완료됐습니다. 확인 번호는 구
    35.71s  agent 발화 끝
    50.50s  agent 발화 끝
