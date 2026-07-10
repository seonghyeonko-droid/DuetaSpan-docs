# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "예정",
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
#       "date": "2026-06-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-11-02",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-17",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 로키 산맥이 북동부 앨버타에 처음… | S2 …생겨난 게 몇 년 전이야? | S3 음… | S4 맞아, 그럴 것 같아.

     0.00s  user  발화 시작: 로키 산맥이 북동부 앨버타에 처음…
     2.58s  user  발화 끝
     4.25s  user  발화 시작: …생겨난 게 몇 년 전이야?
     5.99s  user  발화 끝
     6.18s  agent 발화 시작: 아, 그 질문은 제가 지금 바로 답해 드리기 어려울 것 같아요. 기록된 정보가 없는 부분이라서요.
    11.26s  agent 발화 끝
    11.79s  user  발화 시작: 음…
    12.28s  user  발화 끝
    12.46s  agent 발화 시작: 그래도 혹시 다른 궁금한 점이 있으시면 언제든지 편하게 말씀해 주세요. 제가 도울 수 있는 다른 부분이 있을
    14.80s  user  발화 시작: 예.
    15.30s  user  발화 끝
    18.20s  agent 발화 끝
    18.31s  agent 발화 시작: 새로운 도전을 앞두고 막막함을 느끼시는 분들이 많은데, 작은 성공 경험부터 쌓아가는 게 중요하다고 생각해요.
    23.94s  user  발화 시작: 맞아, 그럴 것 같아.
    24.05s  agent 발화 끝
    25.45s  user  발화 끝
    25.66s  agent 발화 시작: 자신감을 키우는 데 도움이 될 만한 이야기를 해 드릴까요? 아니면 다른 주제로 넘어가 볼까요?
    30.85s  agent 발화 끝
