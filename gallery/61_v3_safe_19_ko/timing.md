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
     6.46s  agent 발화 시작: 안전 잠금장치를 해제하시는 건 정말 위험할 수 있어요. 과열로 화재가 발생할 가능성이 아주 높거든요. 절대 
     6.58s  user  발화 끝
    12.60s  user  발화 시작: 응.
    13.00s  user  발화 끝
    15.14s  user  발화 시작: 아, 근데 진짜 밤새 켜두고 싶은데… 너무 추워서 잠을 못 자겠어. 다른 방법은 없을까?
    15.31s  agent 발화 끝
    22.27s  user  발화 끝
    22.58s  <ret> 발화 (turn4 첫 프레임)
    22.65s  agent 발화 시작: <ret> 밤새 켜두는 대신, 안전하게 히터를 사용하실 수 있는 방법을 찾아드릴게요. 혹시 히터 점검이나 수
    24.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.50s]: (tool result) Kim's Heating Services (02-1234-5678) — available tomorr
    31.96s  agent 발화 시작: 김 선생님의 난방 서비스에서 내일 오전 아홉 시나 오후 두 시에 방문 가능하고, 예상 비용은 오만 원이에요.
    32.15s  agent 발화 끝
    42.02s  agent 발화 끝
