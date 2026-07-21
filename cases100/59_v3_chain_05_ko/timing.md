# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "윤우",
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
#       "date": "2026-06-24",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-05-25",
#       "category": "work",
#       "text": "User works as a product manager."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "bloodtype",
#       "text": "User's blood type is AB+."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "employer",
#       "text": "User works at a consulting firm."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "medication",
#       "text": "User takes an inhaler for asthma."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "partner",
#       "text": "User's partner is named Ava."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-02-11",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2025-12-21",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요, 오레린 씨. 다음 주 토요일에 부산에서 서울까지 기차표 세 장 예매하고 싶은데요.
     2.62s  user  발화 시작: 네.
     2.99s  user  발화 끝
     5.21s  <ret> 발화 (turn2 첫 프레임)
     5.57s  user  발화 끝
     5.59s  agent 발화 시작: <ret> 오후 두 시 아이 티 엑스-새마을은 오만 오천 원인데, 좌석이 이자리만 남았어요. 그리고 저녁 여
     6.38s  ⚡SPAN 주입 [d'=1.17s / d_lead=10.48s]: (tool result) 10:30 KTX, ₩98,000, 3 seats available; 14:00 ITX-새마을, ₩5
    11.24s  user  발화 시작: 네.
    11.49s  user  발화 끝
    16.07s  agent 발화 끝
    17.03s  user  발화 시작: 케이 티 엑스로 예매해 주세요.
    18.70s  <ret> 발화 (turn5 첫 프레임)
    19.10s  agent 발화 시작: <ret> 케이 티 엑스 오전 열 시 반 세 장, 총 이십구만 사천 원으로 예매 완료되었습니다. 예약번호는 
    19.18s  user  발화 끝
    20.12s  ⚡SPAN 주입 [d'=1.42s / d_lead=8.03s]: (tool result) 부산→서울, KTX 10:30, 3 tickets, ₩294,000, CONFIRMED, bookin
    27.13s  agent 발화 끝
