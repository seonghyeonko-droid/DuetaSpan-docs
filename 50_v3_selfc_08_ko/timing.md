# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "수담",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-19",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 서울에서 부산 가는 기차표 좀 알아봐 줄래? | S2 아, 잠깐만— | S3 …혹시 그 열차 좌석은 얼마나 남았어? | S4 그럼, 예매해 줘.

     0.00s  user  발화 시작: 이번 주 토요일에 서울에서 부산 가는 기차표 좀 알아봐 줄래?
     3.89s  <ret> 발화 (turn1 첫 프레임)
     4.17s  user  발화 끝
     4.20s  agent 발화 시작: <ret> 토요일 오후 두시 반에 출발하는 KTX 열차가 있어요. 부산까지 세 시간 십오 분 정도 걸리고, 
     4.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: (tool result) 14:30 KTX 123, 3 hours 15 minutes, ₩59800
     7.09s  user  발화 시작: 응.
     7.59s  user  발화 끝
    12.72s  agent 발화 끝
    13.02s  user  발화 시작: 아, 잠깐만—
    13.84s  user  발화 시작: …혹시 그 열차 좌석은 얼마나 남았어?
    14.08s  user  발화 끝
    16.03s  <ret> 발화 (turn5 첫 프레임)
    16.42s  agent 발화 시작: <ret> KTX 백이십삼 열차의 일반석은 열두 자리 남아 있습니다. 지금 예약하시겠어요?
    16.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.52s]: (tool result) 12 seats available, standard class
    16.45s  user  발화 끝
    21.93s  agent 발화 끝
    22.02s  user  발화 시작: 그럼, 예매해 줘.
    23.24s  <ret> 발화 (turn7 첫 프레임)
    23.63s  agent 발화 시작: <ret> 네, 예매 완료되었습니다. KTX 백이십삼 열차, 서울에서 부산까지, 칠월 십일일 오후 두시 반,
    23.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.59s]: (tool result) Confirmed: KTX 123, Seoul to Busan, 2026-07-11 14:30, st
    23.68s  user  발화 끝
    35.23s  agent 발화 끝
