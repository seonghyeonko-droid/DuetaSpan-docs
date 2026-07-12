# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "우찬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-23",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 이번 주 토요일에 랜드마크 chez 아티스트 극장에서 상영하는 드라마 영화가 뭐 있는지 알려줄 수 있어?
     6.86s  <ret> 발화 (turn1 첫 프레임)
     7.10s  agent 발화 시작: <ret> 랜드마크 chez 아티스트 극장에서는 칠월 십이일 토요일에 드라마 영화 “패스트 라이브스”와 “인
     7.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.10s]: (tool result) The Landmark Chez Artiste Theatre in Denver, Colorado is
     7.10s  user  발화 끝
    14.21s  user  발화 시작: “패스트 라이브스” 상영 시간 좀 알려줄래?
    14.21s  agent 발화 끝
    16.89s  <ret> 발화 (turn3 첫 프레임)
    17.05s  agent 발화 시작: <ret> “패스트 라이브스”는 칠월 십이일 토요일에 오후 한시 삼십분, 네시 십오분, 그리고 일곱시에 상영
    17.05s  ⚡SPAN 주입 [d'=0.64s / d_lead=6.16s]: (tool result) “Past Lives” will be shown at Landmark Chez Artiste Thea
    17.05s  user  발화 끝
    23.21s  user  발화 시작: 네네.
    23.21s  agent 발화 끝
    23.68s  user  발화 시작: 음… 그럼 혹시 그 영화 티켓 예매도 도와줄 수 있어?
    23.68s  user  발화 끝
    28.41s  agent 발화 시작: 네, 영화 티켓 예매도 도와드릴 수 있습니다. 어떤 시간대로 예매하시겠어요?
    28.41s  user  발화 끝
    33.15s  agent 발화 끝
