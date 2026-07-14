# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "세영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-28",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "anniversary",
#       "text": "User's anniversary is November 1."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "show",
#       "text": "User is currently watching a stand-up comedy special."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "pet",
#       "text": "User has a Maine Coon named Simba."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-05",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2025-12-28",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 "How Long Will I Love You" 노래를 처음으로 부른 가수가 누구였는지 알 수 있을까요
     6.74s  <ret> 발화 (turn1 첫 프레임)
     7.04s  ⚡SPAN 주입 [d'=0.30s / d_lead=3.35s]: The Waterboys were the first to sing "How Long Will I Love You".
     7.18s  agent 발화 시작: <ret> 그 노래를 처음으로 부른 가수는 더 워터보이스였습니다.
     7.18s  user  발화 끝
    10.54s  user  발화 시작: 네.
    10.54s  agent 발화 끝
    11.01s  user  발화 시작: 잠깐만, 아까 그 얘기는…
    11.01s  user  발화 끝
    12.93s  user  발화 시작: 아, 맞다. 혹시 그 가수가 다른 유명한 노래도 불렀나요?
    12.93s  user  발화 끝
    16.77s  <ret> 발화 (turn5 첫 프레임)
    17.24s  agent 발화 시작: <ret> 더 워터보이스는 "The Whole of the Moon"이라는 노래로도 잘 알려진 아일랜드 포크
    17.24s  user  발화 끝
    18.03s  ⚡SPAN 주입 [d'=1.26s / d_lead=9.10s]: The Waterboys are an Irish folk rock band, known for "The Whole of the
    26.34s  agent 발화 끝
