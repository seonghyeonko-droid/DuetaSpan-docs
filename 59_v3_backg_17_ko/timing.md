# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "세경",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-24",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-08",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 고담 시즌 사 십이화 언제 방영했는지 알려줄 수 있을까요? | S2 아니요, 괜찮아요. 그런데 자미님은 뭘 도와주는 분이세요? | S3 아, 그렇군요. 그럼 혹시 제가 지난달에 적어둔 메모 있나요? | S4 아, 오늘따라 날씨가 정말 덥네.

     0.00s  user  발화 시작: 고담 시즌 사 십이화 언제 방영했는지 알려줄 수 있을까요?
     4.09s  <ret> 발화 (turn1 첫 프레임)
     4.24s  agent 발화 시작: <ret> 고담 시즌 사의 십이화는 원래 이천십팔년 삼월 일일에 방영되었습니다.
     4.25s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.28s]: The twelfth episode of Gotham's fourth season originally aired on Marc
     4.34s  user  발화 끝
     9.52s  agent 발화 끝
     9.54s  user  발화 시작: 음…
     9.89s  agent 발화 시작: 혹시 다른 시리즈나 드라마에 대해서도 알아봐 드릴까요? 저는 자미라고 해요.
    10.04s  user  발화 끝
    12.21s  user  발화 시작: 네.
    12.62s  user  발화 끝
    14.89s  agent 발화 끝
    15.82s  user  발화 시작: 아니요, 괜찮아요. 그런데 자미님은 뭘 도와주는 분이세요?
    19.26s  agent 발화 시작: 저는 돈 관리나 예산 짜는 걸 도와드리는 에이전트예요.
    19.43s  user  발화 끝
    20.57s  user  발화 시작: 그렇죠.
    21.06s  user  발화 끝
    23.51s  user  발화 시작: 아, 그렇군요. 그럼 혹시 제가 지난달에 적어둔 메모 있나요?
    23.57s  agent 발화 끝
    26.59s  <ret> 발화 (turn9 첫 프레임)
    26.99s  agent 발화 시작: <ret> 이천이십사년 칠월 오일에 “다음 주 금요일에 친구 생일 선물 사기”라고 적어두셨네요.
    26.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.83s]: [2024-07-05] 다음 주 금요일에 친구 생일 선물 사기.
    27.20s  user  발화 끝
    30.35s  user  발화 시작: 네.
    30.80s  user  발화 끝
    32.54s  user  발화 시작: 아, 오늘따라 날씨가 정말 덥네.
    32.83s  agent 발화 끝
    35.26s  agent 발화 시작: 날씨가 많이 더우시죠? — 혹시 시원한 음료라도 한 잔 드시겠어요?
    35.32s  user  발화 끝
    39.80s  agent 발화 끝
