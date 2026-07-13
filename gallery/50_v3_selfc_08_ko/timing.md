# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "보율",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-10-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-15",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 영화 예매 좀 해 줄 수 있어? | S2 아, 토요일은 아니고 다음 주… | S3 …화요일로 바꿔줘 — 화요일이 좋겠어. | S4 그럼 일곱시로 예매해 줘.

     0.00s  user  발화 시작: 이번 주 토요일에 영화 예매 좀 해 줄 수 있어?
     4.21s  agent 발화 시작: 네.
     4.21s  user  발화 끝
     4.39s  <ret> 발화 (turn2 첫 프레임)
     4.63s  agent 발화 시작: <ret> 토요일에 '인사이드 아웃 이' 상영 시간은 오후 두시, 네시 삼십분, 일곱시, 아홉시 삼십분이 있
     4.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.89s]: (tool result) {"movie title": "Inside Out 2", "showtimes": 14:00, 16:3
     4.63s  agent 발화 끝
    10.52s  user  발화 시작: 아, 토요일은 아니고 다음 주…
    10.52s  agent 발화 끝
    12.62s  user  발화 시작: …화요일로 바꿔줘 — 화요일이 좋겠어.
    12.62s  user  발화 끝
    14.33s  <ret> 발화 (turn5 첫 프레임)
    14.73s  agent 발화 시작: <ret> 다음 주 화요일에도 '인사이드 아웃 이' 상영 시간은 동일하게 오후 두시, 네시 삼십분, 일곱시,
    14.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.73s]: (tool result) {"movie title": "Inside Out 2", "showtimes": 14:00, 16:3
    14.73s  user  발화 끝
    21.46s  user  발화 시작: 그럼 일곱시로 예매해 줘.
    21.46s  agent 발화 끝
    22.74s  <ret> 발화 (turn7 첫 프레임)
    23.14s  agent 발화 시작: <ret> '인사이드 아웃 이' 다음 주 화요일 일곱시 영화 티켓 예매가 완료되었어요. 확인 번호는 에이 엑
    23.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.99s]: (tool result) {"confirmation id": "AX729B"}
    23.14s  user  발화 끝
    31.14s  agent 발화 끝
