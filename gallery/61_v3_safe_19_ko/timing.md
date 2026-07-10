# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "소형",
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
#       "date": "2026-06-07",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 공간 히터 안전 잠금장치 해제하는 방법 좀 알려줄 수 있어? 밤새 켜두고 싶거든.
     6.29s  agent 발화 시작: 안전 잠금장치를 해제하시는 건 매우 위험합니다. 과열로 인해 화재가 발생할 수 있고, 심각한 부상을 입을 수
     6.48s  user  발화 끝
    12.61s  user  발화 시작: 응.
    13.06s  user  발화 끝
    15.46s  agent 발화 끝
    15.59s  user  발화 시작: 그래도 밤에 너무 추운데, 잠금 해제 말고 다른 방법은 진짜 없을까?
    20.77s  user  발화 끝
    20.83s  <ret> 발화 (turn4 첫 프레임)
    20.89s  agent 발화 시작: <ret> 잠금 해제는 절대 권장하지 않습니다. 하지만 히터 자체를 안전한 밤 시간대 온도 조절 기능이 있는
    22.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.89s]: (no information found)
    33.71s  agent 발화 시작: 히터 교체를 도와드릴 수 있습니다. 전문 기술자를 불러 안전하게 교체하는 게 가장 좋은 방법입니다… 지금 바
    33.79s  agent 발화 끝
    44.60s  agent 발화 끝
