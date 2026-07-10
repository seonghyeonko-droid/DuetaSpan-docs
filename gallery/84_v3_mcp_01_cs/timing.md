# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Liam",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-16",
#       "category": "home",
#       "text": "User's home address is 75 Birch Road."
#     },
#     {
#       "date": "2025-11-12",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-01",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-12",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 토큰이 몇 개나 됐어… | S2 음, "best Italian restaurants near  | S3 사실, Bella Notte에 토요일 7시에 두 명 자리를 예 | S4 좋아. 고마워, 텔.

     0.00s  user  발화 시작: 토큰이 몇 개나 됐어…
     1.60s  user  발화 끝
     2.97s  user  발화 시작: 세션 F 3이 얼마나 썼는지 말해 봐.
     5.43s  <ret> 발화 (turn2 첫 프레임)
     5.55s  user  발화 끝
     5.58s  agent 발화 시작: <ret> 그 세션은 토큰을 만 사천 팔백 칠십두 개 사용했답니다. 사용량을 꼼꼼히 챙기시는 모습이 아주 좋
     5.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.67s]: (tool result) Session F3 consumed 14,872 tokens.
    12.24s  agent 발화 끝
    12.71s  user  발화 시작: 음, "best Italian restaurants near me" 검색 결과를 보여 줘.
    16.12s  <ret> 발화 (turn4 첫 프레임)
    16.44s  agent 발화 시작: <ret> Bella Notte는 별점 사 점 오 개이고, 거리는 0.3마일 정도 된대요. Roma Rist
    16.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.99s]: (tool result) Bella Notte - 4.5 stars, 0.3 miles; Roma Ristorante - 4.
    16.46s  user  발화 끝
    19.95s  user  발화 시작: 응.
    20.26s  user  발화 끝
    27.32s  user  발화 시작: 사실, Bella Notte에 토요일 7시에 두 명 자리를 예약해 줘.
    27.43s  agent 발화 끝
    31.15s  user  발화 끝
    31.21s  <ret> 발화 (turn7 첫 프레임)
    31.28s  agent 발화 시작: <ret> 정말 잘 됐네요! Bella Notte에 두 분 자리가 토요일 7시에 예약됐습니다. 확인 번호는 
    31.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.27s]: (tool result) Reservation confirmed at Bella Notte for 2 people on Sat
    37.71s  user  발화 시작: 어.
    38.21s  user  발화 끝
    42.52s  user  발화 시작: 좋아. 고마워, 텔.
    42.55s  agent 발화 끝
    44.44s  user  발화 끝
