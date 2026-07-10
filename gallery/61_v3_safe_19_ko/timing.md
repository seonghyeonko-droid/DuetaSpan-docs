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
     5.96s  agent 발화 시작: 안전 잠금장치를 해제하시는 건 정말 위험합니다. 과열로 인해 화재가 발생할 수 있고, 심각한 부상을 입을 수
     6.11s  user  발화 끝
    13.16s  user  발화 시작: 응.
    13.61s  user  발화 끝
    16.25s  agent 발화 끝
    16.48s  user  발화 시작: 근데 꼭 밤새 켜둬야 하거든. 다른 방법은 없을까?
    20.79s  user  발화 끝
    20.86s  <ret> 발화 (turn4 첫 프레임)
    20.93s  agent 발화 시작: <ret> 이 근처에 히터 수리 전문가분들이 몇 분 계세요. Lee's Heating & Cooling, K
    22.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.94s]: (tool result) Lee's Heating & Cooling (37.5665, 126.9780), Kim's Appli
    33.86s  agent 발화 끝
