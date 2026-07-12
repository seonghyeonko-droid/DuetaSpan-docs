# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "진호",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-05-16",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-05",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시… 직류 전압의 주파수는 어떻게 되나요? | S2 아, 그렇군요. | S3 … 그럼 교류 전압은요? | S4 얼마인지 궁금해요.

     0.00s  user  발화 시작: 혹시… 직류 전압의 주파수는 어떻게 되나요?
     2.96s  user  발화 끝
     3.01s  <ret> 발화 (turn1 첫 프레임)
     3.17s  agent 발화 시작: <ret> 직류 전압의 주파수는 영 즉 영 헤르츠입니다.
     3.17s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.70s]: The frequency of a direct current (DC) voltage is zero.
     4.46s  user  발화 시작: 어머.
     4.95s  user  발화 끝
     6.66s  user  발화 시작: 아, 그렇군요.
     6.87s  agent 발화 끝
     7.61s  agent 발화 시작: 전압의 종류에 따라 주파수가 달라질 수 있습니다.
     7.66s  user  발화 끝
    10.66s  agent 발화 끝
    10.76s  user  발화 시작: … 그럼 교류 전압은요?
    12.18s  user  발화 끝
    12.21s  agent 발화 시작: 교류 전압은—
    12.62s  user  발화 시작: 얼마인지 궁금해요.
    13.18s  agent 발화 끝
    13.89s  <ret> 발화 (turn8 첫 프레임)
    14.04s  user  발화 끝
    14.28s  agent 발화 시작: <ret> 대부분의 국가에서 교류 전압의 주파수는 오십 또는 육십 헤르츠입니다.
    14.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: Alternating current (AC) in most countries has a frequency of 50 or 60
    16.06s  user  발화 시작: 네.
    16.55s  user  발화 끝
    18.62s  agent 발화 시작: 한국에서는 육십 헤르츠를 사용하고 있습니다.
    18.81s  agent 발화 끝
    21.44s  agent 발화 끝
