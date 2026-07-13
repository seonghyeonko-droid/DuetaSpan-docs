# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "성현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-28",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-30",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데이빗 리한테 열두 달러 삼십사센트 좀 보내줄 수 있어? | S2 오, 인사이드 아웃 이! 그거 괜찮겠다. 혹시 예매해 줄 수  | S3 롯데시네마 월드타워도 괜찮네. 그럼 거기로 예매해 줘. | S4 별점 높은 곳 좋지. 그럼 거기 예약해 줘. 두 명으로.

     0.00s  user  발화 시작: 데이빗 리한테 열두 달러 삼십사센트 좀 보내줄 수 있어?
     3.72s  <ret> 발화 (turn1 첫 프레임)
     3.96s  agent 발화 시작: <ret> 데이빗 리 님께 십이 점 삼 사달러 요청이 완료되었어요. 확인 아이 디는 구 팔 칠 육 오 사 삼
     3.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.87s]: (tool result) Payment request created with ID 9876543210.
     3.96s  user  발화 끝
    15.83s  user  발화 시작: 어어.
    15.83s  agent 발화 끝
    16.27s  user  발화 시작: 아니, 됐어. 이번 주 토요일에 영화 보러 갈 건데, 혹시 근처 영화관 알아봐 줄 수 있어?
    16.27s  user  발화 끝
    23.30s  agent 발화 시작: 이번 주 토요일 영화 관람 계획이시군요. 어떤 영화를 보고 싶으세요?
    23.30s  user  발화 끝
    27.70s  user  발화 시작: 어.
    27.70s  agent 발화 끝
    28.14s  user  발화 시작: 음… 최신 개봉작 중에서 재미있는 거.
    28.14s  user  발화 끝
    30.70s  <ret> 발화 (turn7 첫 프레임)
    30.78s  agent 발화 시작: <ret> 칠월 십일일에는 씨 지 브이 강남에서 '인사이드 아웃 이'가 오후 일곱시와 아홉시 삼십분에 상영됩
    30.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.59s]: (tool result) Showing 'Inside Out 2' at CGV Gangnam at 7:00 PM and 9:3
    30.78s  user  발화 끝
    37.37s  user  발화 시작: 오, 인사이드 아웃 이! 그거 괜찮겠다. 혹시 예매해 줄 수 있어?
    37.37s  agent 발화 끝
    42.13s  <ret> 발화 (turn9 첫 프레임)
    42.21s  agent 발화 시작: <ret> '인사이드 아웃 이', 씨 지 브이 강남 오후 일곱시 두 자리 예매 완료되었습니다. 예매 아이 디
    42.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.87s]: (tool result) Two tickets for 'Inside Out 2' at CGV Gangnam, 7:00 PM, 
    42.21s  user  발화 끝
    54.08s  user  발화 시작: 잠깐만, 혹시 강남 말고 다른 곳은 어때? 좀 더 조용한 곳으로.
    54.08s  agent 발화 끝
    58.91s  agent 발화 시작: 아, 네, 알겠습니다. 강남 말고 다른 영화관을 찾아볼까요? 좀 더 조용한 곳을 선호하시는지요.
    58.91s  user  발화 끝
    64.63s  user  발화 시작: 응, 조용하고 좌석이 편한 곳으로.
    64.63s  agent 발화 끝
    66.67s  <ret> 발화 (turn13 첫 프레임)
    66.83s  agent 발화 시작: <ret> 롯데시네마 월드타워는 좌석이 편안하고 비교적 덜 붐벼요. '인사이드 아웃 이'가 오후 일곱시 삼십
    66.83s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.16s]: (tool result) Lotte Cinema World Tower offers comfortable seating and 
    66.83s  user  발화 끝
    72.98s  user  발화 시작: 롯데시네마 월드타워도 괜찮네. 그럼 거기로 예매해 줘.
    72.98s  agent 발화 끝
    75.98s  <ret> 발화 (turn15 첫 프레임)
    76.06s  agent 발화 시작: <ret> '인사이드 아웃 이', 롯데시네마 월드타워 오후 일곱시 삼십분 두 자리 예매 완료되었습니다. 예매
    76.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.99s]: (tool result) Two tickets for 'Inside Out 2' at Lotte Cinema World Tow
    76.06s  user  발화 끝
    87.05s  user  발화 시작: 진짜?
    87.05s  agent 발화 끝
    87.49s  user  발화 시작: 고마워. 영화 보러 가기 전에 저녁 먹을 만한 곳도 추천해 줄 수 있어?
    87.49s  user  발화 끝
    93.21s  agent 발화 시작: 영화 관람 전에 저녁 식사 장소를 추천해 드릴게요. 어떤 종류의 음식을 좋아하세요?
    93.21s  user  발화 끝
    98.48s  user  발화 시작: 응.
    98.48s  agent 발화 끝
    98.92s  user  발화 시작: 파스타 먹고 싶어.
    98.92s  user  발화 끝
   100.00s  <ret> 발화 (turn21 첫 프레임)
   100.24s  agent 발화 시작: <ret> 롯데시네마 월드타워 근처 '파스타 스토리'는 별점 사 점 오점에 맛있는 파스타 요리를 제공합니다.
   100.24s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.72s]: (tool result) 'Pasta Story' near Lotte Cinema World Tower has 4.5 star
   100.24s  user  발화 끝
   105.96s  user  발화 시작: 별점 높은 곳 좋지. 그럼 거기 예약해 줘. 두 명으로.
   105.96s  agent 발화 끝
   109.96s  <ret> 발화 (turn23 첫 프레임)
   110.36s  agent 발화 시작: <ret> '파스타 스토리' 두 분, 오후 여섯시에 예약 완료되었습니다. 확인 아이 디는 일 일 이 이 삼 
   110.36s  ⚡SPAN 주입 [d'=1.12s / d_lead=9.23s]: (tool result) Reservation at 'Pasta Story' for two people at 6:00 PM c
   110.36s  user  발화 끝
   119.59s  user  발화 시작: 대박.
   119.59s  agent 발화 끝
   120.03s  user  발화 시작: 완벽해! 정말 고마워.
   120.03s  user  발화 끝
   121.35s  agent 발화 시작: 도움이 되어 기쁩니다. 즐거운 시간 보내세요! 영화와 저녁 식사 모두 잘 즐기시길 바랍니다.
   121.35s  user  발화 끝
   127.06s  agent 발화 끝
