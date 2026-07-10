# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "수서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-26",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-07-13",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-02-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-29",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 스타벅스 아이디 사칠팔사사 이이구구삼구오아투 찾아서 자세한 정 | S2 아, 잠깐만. 사칠팔사사 이이구구삼구오아투가 아니라… | S3 …사칠팔사사 이이구구삼구오아삼이 맞는 것 같아. | S4 오, 별점도 좋네.

     0.00s  user  발화 시작: 스타벅스 아이디 사칠팔사사 이이구구삼구오아투 찾아서 자세한 정보 좀 알려줘.
     5.07s  <ret> 발화 (turn1 첫 프레임)
     5.18s  user  발화 끝
     5.30s  agent 발화 시작: <ret> 서울 강남구 대치동 선릉로 이십팔에 있는 스타벅스에 대한 정보를 찾으셨네요. 그곳은 커피 전문점이
     5.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.42s]: (tool result) Starbucks, 28 Seolleung-ro, Daechi-dong, Gangnam-gu, Seo
     9.07s  user  발화 시작: 응응.
     9.47s  user  발화 끝
    12.71s  agent 발화 끝
    12.84s  user  발화 시작: 아, 잠깐만. 사칠팔사사 이이구구삼구오아투가 아니라…
    16.68s  user  발화 끝
    18.09s  user  발화 시작: …사칠팔사사 이이구구삼구오아삼이 맞는 것 같아.
    21.45s  user  발화 끝
    21.46s  <ret> 발화 (turn5 첫 프레임)
    21.70s  agent 발화 시작: <ret> 서울 강남구 대치동 선릉로 이십팔에 있는 스타벅스는 별점 사 점 이점의 커피 전문점입니다.
    21.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: (tool result) Starbucks, 28 Seolleung-ro, Daechi-dong, Gangnam-gu, Seo
    28.48s  user  발화 시작: 오, 별점도 좋네.
    28.51s  agent 발화 끝
    29.62s  agent 발화 시작: 네, 많은 분들이 좋아하시는 곳이랍니다.
    29.63s  user  발화 끝
    32.20s  agent 발화 끝
