# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "보아",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-24",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-08-12",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 바다 전망 호텔, 샌디에이고에서 이월 십일부터 칠박 세개 방  | S2 아, 그리고 그 호텔 근처에 괜찮은 레스토랑도 좀 찾아줘. | S3 본 앤 레이즈드는 어떤 곳인데. | S4 고마워, 혹시 렌터카도 같이 알아봐 줄 수 있을까?

     0.00s  user  발화 시작: 바다 전망 호텔, 샌디에이고에서 이월 십일부터 칠박 세개 방 예약해 줘.
     4.67s  <ret> 발화 (turn1 첫 프레임)
     4.82s  agent 발화 시작: <ret> 확인되었습니다. 오션 뷰 호텔에서 이월 십일부터 칠박 세개 방이 예약되었고, 확인 번호는 팔 오 
     4.86s  user  발화 끝
     6.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.57s]: (tool result) Confirmation number is 85297-XMJ, three rooms at Ocean V
    12.15s  user  발화 시작: 어어.
    12.78s  user  발화 끝
    17.38s  agent 발화 끝
    17.81s  user  발화 시작: 혹시 그 호텔에 수영장이 있는지 알아봐 줄 수 있어?
    20.13s  <ret> 발화 (turn4 첫 프레임)
    20.45s  agent 발화 시작: <ret> 네, 오션 뷰 호텔에는 야외 수영장, 피트니스 센터, 스파가 있습니다. 편의시설도 잘 갖춰져 있어
    20.68s  user  발화 끝
    22.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.51s]: (tool result) Ocean View Hotel, San Diego, has an outdoor pool, a fitn
    27.96s  agent 발화 끝
    28.57s  user  발화 시작: 아, 그리고 그 호텔 근처에 괜찮은 레스토랑도 좀 찾아줘.
    31.61s  <ret> 발화 (turn6 첫 프레임)
    32.01s  agent 발화 시작: <ret> 샌디에이고, 오션 뷰 호텔 근처에는 더 피쉬 마켓(이백오십미터), 주니퍼 앤 아이비(오백미터), 
    32.22s  user  발화 끝
    33.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.48s]: (tool result) San Diego, Ocean View Hotel: The Fish Market (250m), Jun
    42.49s  agent 발화 끝
    42.71s  user  발화 시작: 본 앤 레이즈드는 어떤 곳인데.
    44.98s  agent 발화 시작: 본 앤 레이즈드는 스테이크 전문점으로—
    45.16s  user  발화 끝
    47.18s  user  발화 시작: … 거기는 예약이 얼마나 밀려? 지금 당장 예약할 수 있을까?
    47.80s  agent 발화 끝
    51.08s  <ret> 발화 (turn10 첫 프레임)
    51.16s  agent 발화 시작: <ret> 네, 본 앤 레이즈드에서 이월 십이일 일곱시에 두명으로 예약이 완료되었습니다. 확인 번호는 사십구
    51.34s  user  발화 끝
    53.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.79s]: (tool result) Reservation confirmed at Born & Raised, San Diego, on Fe
    56.95s  user  발화 시작: 와.
    57.58s  user  발화 끝
    58.94s  agent 발화 끝
    59.98s  user  발화 시작: 고마워, 혹시 렌터카도 같이 알아봐 줄 수 있을까?
    63.44s  <ret> 발화 (turn13 첫 프레임)
    63.67s  agent 발화 시작: <ret> 샌디에이고에서 이월 십일부터 십칠일까지 렌터카를 검색해 본 결과, 허츠 컴팩트 차량은 하루 사십오
    63.86s  user  발화 끝
    65.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.13s]: (tool result) San Diego, 2026-02-10 to 2026-02-17: Hertz - Compact, $4
    76.80s  agent 발화 끝
