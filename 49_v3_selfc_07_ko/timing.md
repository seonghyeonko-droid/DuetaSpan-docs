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

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 육월 십오일에 방문 예약 좀 잡아줘. | S2 아니, 그 시간대로 괜찮아. 근데 그 로프트, 반려동물 동반  | S3 음… 다른 곳도 한번 찾아봐 줄래? 좀 더 저렴한 곳으로. | S4 오, 거기가 가깝네.

     0.00s  user  발화 시작: 그랜드뷰 로프트에 육월 십오일에 방문 예약 좀 잡아줘.
     3.47s  <ret> 발화 (turn1 첫 프레임)
     3.70s  agent 발화 시작: <ret> 네, 알겠습니다. 그랜드뷰 로프트 육월 십오일 오후 두시에 방문 예약을 잡아드렸어요.
     3.89s  user  발화 끝
     4.51s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.14s]: (tool result) Viewing scheduled for The Grandview Lofts on June 15th a
     9.96s  agent 발화 끝
    11.26s  user  발화 시작: 어… 잠깐만, 십오일이 아니라 십육일로 바꿔줘. 십오일은 좀…
    15.38s  <ret> 발화 (turn3 첫 프레임)
    15.77s  agent 발화 시작: <ret> 아, 그러셨군요. 그랜드뷰 로프트 방문 날짜를 육월 십육일 오후 두시로 변경해 드렸어요.
    15.88s  user  발화 끝
    16.50s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.14s]: (tool result) Viewing scheduled for The Grandview Lofts on June 16th a
    20.23s  user  발화 시작: 어.
    20.77s  user  발화 끝
    22.41s  agent 발화 시작: 혹시 다른 조건은 필요 없으신가요? 예를 들어, 특정 시간대를 원하시거나…
    22.58s  agent 발화 끝
    25.31s  user  발화 시작: 응응.
    25.94s  user  발화 끝
    27.68s  user  발화 시작: 아니, 그 시간대로 괜찮아. 근데 그 로프트, 반려동물 동반 가능한가?
    27.82s  agent 발화 끝
    32.73s  <ret> 발화 (turn8 첫 프레임)
    32.95s  agent 발화 시작: <ret> 그랜드뷰 로프트는 반려동물 동반이 가능하고, 일회성 수수료가 이백오십달러예요.
    33.01s  user  발화 끝
    34.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.20s]: [source: Grandview Lofts website] Pets are welcome at The Grandview Lo
    39.15s  user  발화 시작: 아, 이백오십달러? 생각보다 비싸네.
    39.16s  agent 발화 끝
    41.94s  agent 발화 시작: 이사 준비에 드는 비용은 여러 가지가 있으니, 미리 꼼꼼히 알아보시는 게 좋겠어요. 혹시 다른 로프트도 알아
    42.02s  user  발화 끝
    49.82s  user  발화 시작: 음… 다른 곳도 한번 찾아봐 줄래? 좀 더 저렴한 곳으로.
    49.96s  agent 발화 끝
    53.73s  <ret> 발화 (turn12 첫 프레임)
    53.96s  agent 발화 시작: <ret> 물론이죠. 리버워크 레지던스는 반려동물 수수료가 백오십달러이고, 육월 이십일에 입주 가능해요.
    53.98s  user  발화 끝
    54.29s  ⚡SPAN 주입 [d'=0.56s / d_lead=0.69s]: (tool result) Found: Riverwalk Residences - pet fee $150, available Ju
    60.91s  agent 발화 끝
    60.97s  user  발화 시작: 리버워크 레지던스? 그곳 위치가 어디야?
    64.03s  user  발화 끝
    64.04s  <ret> 발화 (turn14 첫 프레임)
    64.11s  agent 발화 시작: <ret> 리버워크 레지던스는 애니타운 메인 스트리트 백이십삼번지에 위치해 있어요.
    65.56s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.18s]: [source: Google Maps] Riverwalk Residences is located at 123 Main Stre
    66.26s  user  발화 시작: 음.
    66.57s  user  발화 끝
    69.25s  user  발화 시작: 오, 거기가 가깝네.
    69.29s  agent 발화 끝
    70.67s  agent 발화 시작: 새로운 환경에 적응하는 건 쉽지 않지만, 긍정적인 마음으로 준비하시면 분명 잘 해내실 수 있을 거예요.
    70.86s  user  발화 끝
    73.40s  user  발화 시작: 맞아.
    73.84s  user  발화 끝
    77.62s  agent 발화 끝
    78.46s  user  발화 시작: 고마워, 텔러. 덕분에 좀 안심이 돼.
    81.41s  agent 발화 시작: 언제든 힘든 일이 있으면 저에게 말씀하세요. 제가 옆에서 든든하게 응원해 드릴게요.
    81.51s  user  발화 끝
    87.52s  agent 발화 끝
