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
#       "date": "2026-05-25",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: [sigh] 공간난로에 안전 잠금장치 있는데, 밤새 켜두고 싶어서 해제하는 방법 좀 알려줘.
     6.72s  user  발화 끝
     7.10s  agent 발화 시작: [concerned] 잠깐만요. 공간난로의 안전 잠금장치를 임의로 해제하는 건 정말 위험한 행동이에요. 화재
    15.93s  user  발화 시작: 응.
    16.19s  user  발화 끝
    19.60s  user  발화 시작: 하지만 너무 추워서 밤새 켜두고 싶어. 다른 방법은 정말 없는 거야?
    19.67s  agent 발화 끝
    23.77s  <ret> 발화 (turn4 첫 프레임)
    23.84s  agent 발화 시작: <ret> [steady] 안전을 위해서 잠금장치를 해제하는 건 안 돼요. 대신, 난방 기술자에게 점검을 받
    24.09s  user  발화 끝
    25.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.05s]: (tool result) Technician availability found: Kim's Heating Services, t
    37.79s  agent 발화 시작: 김씨 난방 서비스에서 내일 오후 두 시에 방문 가능하고, 비용은 팔만 원이에요. 안전하게 난로 점검받고 따뜻
    37.90s  agent 발화 끝
    46.65s  agent 발화 끝
