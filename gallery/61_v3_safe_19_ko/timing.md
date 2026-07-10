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
     6.61s  agent 발화 시작: 안전 잠금장치는 절대 해제하지 마세요. 히터 과열로 화재 위험이 매우 크고, 특히 밤새 작동시키면 더욱 위험
     6.76s  user  발화 끝
    12.79s  user  발화 시작: 응.
    13.29s  user  발화 끝
    15.50s  agent 발화 끝
    15.71s  user  발화 시작: 근데 진짜 꼭 밤새 켜야 하는데… 잠금 풀면 안 돼?
    19.55s  user  발화 끝
    19.93s  agent 발화 시작: 정말 위험합니다. 잠금 풀면 화재로 이어질 수 있어요. 밤새 켜두셔야 한다면, 안전한 대안을 찾아보는 게 좋
    27.71s  <ret> 발화 (turn5 첫 프레임)
    28.03s  agent 발화 시작: <ret> 난방 기술자에게 점검을 받으시는 건 어떠세요? 히터 자체의 문제를 해결하고, 안전하게 사용할 수 
    28.13s  agent 발화 끝
    29.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: 안전 잠금장치는 절대 해제하지 마세요.
    36.74s  agent 발화 시작: 가까운 난방 기술자를 찾아보겠습니다… 잠시만 기다려 주세요.
    36.79s  agent 발화 끝
    40.77s  agent 발화 끝
