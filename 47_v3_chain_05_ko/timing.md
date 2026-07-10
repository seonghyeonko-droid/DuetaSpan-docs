# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "유우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 주니 카페 가격대가 어떻게 돼요? | S2 하우스가 제일 가깝네요. 혹시 하우스 예약 가능한가요? | S3 와, 감사합니다. 그럼 하우스까지 가는 길은 어떻게 되나요? | S4 십삼분 정도면 괜찮겠네요.

     0.00s  user  발화 시작: 주니 카페 가격대가 어떻게 돼요?
     1.91s  <ret> 발화 (turn1 첫 프레임)
     2.17s  user  발화 끝
     2.22s  agent 발화 시작: <ret> 주니 카페는 가격대가 조금 높은 편이에요. 세 개의 달러 기호로 표시되어 있네요.
     3.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: Zuni Cafe is in the $$$ price range.
     4.20s  user  발화 시작: 네네.
     4.83s  user  발화 끝
     7.87s  agent 발화 끝
     7.92s  user  발화 시작: 아, 그렇군요. 그럼 근처에 비슷한 가격대의 다른 레스토랑도 있을까요?
    12.55s  <ret> 발화 (turn4 첫 프레임)
    12.86s  agent 발화 시작: <ret> 주니 카페와 비슷한 가격대의 레스토랑은 하우스가 육백팔십육 미터, SPQR이 일점삼 킬로미터, 스
    12.97s  user  발화 끝
    14.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.59s]: (tool result) The House, 1700 Market St, San Francisco, CA 94102 (686m
    24.45s  agent 발화 끝
    25.27s  user  발화 시작: 하우스가 제일 가깝네요. 혹시 하우스 예약 가능한가요?
    29.36s  <ret> 발화 (turn6 첫 프레임)
    29.57s  user  발화 끝
    29.59s  agent 발화 시작: <ret> 하우스에 두 분, 이천십육년 칠월 십일일 저녁 일곱 시로 예약이 완료되었어요. 확인 번호는 칠사팔
    31.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.62s]: (tool result) Reservation confirmed for The House, 1700 Market St, San
    32.84s  user  발화 시작: 그렇죠.
    33.47s  user  발화 끝
    38.21s  agent 발화 끝
    38.65s  user  발화 시작: 와, 감사합니다. 그럼 하우스까지 가는 길은 어떻게 되나요?
    42.05s  <ret> 발화 (turn9 첫 프레임)
    42.34s  user  발화 끝
    42.36s  agent 발화 시작: <ret> 주니 카페에서 하우스까지는 시장가를 남서쪽으로 백사십미터 이동한 다음 십칠번가로 우회전하여 이백오
    44.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.61s]: (tool result) Driving directions from Zuni Cafe to The House: 1. Head 
    49.70s  user  발화 시작: 정말요?
    50.47s  user  발화 끝
    58.87s  user  발화 시작: 십삼분 정도면 괜찮겠네요.
    58.97s  agent 발화 끝
    60.94s  user  발화 끝
    60.98s  agent 발화 시작: 다행이네요.
    61.80s  agent 발화 끝
